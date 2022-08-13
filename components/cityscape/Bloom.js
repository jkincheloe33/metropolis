import { useEffect, useRef, useState } from 'react'
import lerp from 'lerp'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

extend({ EffectComposer, RenderPass, UnrealBloomPass })

function Bloom({ children, newCameraValues, prevCameraValues, ready, setPrevCameraValues }) {
  const [follow, setFollow] = useState(false)
  const [scene, setScene] = useState()
  const composer = useRef()
  const groupRef = useRef(null)
  const { gl, camera, size } = useThree()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => void scene && composer.current.setSize(size.width, size.height), [size])

  useEffect(() => {
    setPrevCameraValues(camera)
    setFollow(false)
  }, [newCameraValues])

  useFrame((state) => {
    scene && composer.current.render()
    const { position, rotation } = newCameraValues

    if (ready && !follow && (camera.position.z === newCameraValues.position[2])) setFollow(true)

    if (ready && groupRef?.current) {

      camera.rotation.y = lerp(camera.rotation.y, camera.rotation.y + (state.mouse.x * Math.PI) / 130, 0.06)
    }

    camera.rotation.x = lerp(prevCameraValues.rotation.x, rotation[0], 0.03)
    camera.rotation.y = lerp(prevCameraValues.rotation.y, rotation[1], 0.03)
    camera.rotation.z = lerp(prevCameraValues.rotation.z, rotation[2], 0.03)

    camera.position.x = lerp(prevCameraValues.position.x, position[0], 0.03)
    camera.position.y = lerp(prevCameraValues.position.y, position[1], 0.03)
    camera.position.z = lerp(prevCameraValues.position.z, position[2], 0.03)
  }, 2)

  return (
    <>
      <scene ref={setScene}>
        <group ref={groupRef}>
          {children}
        </group>
      </scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray='passes' scene={scene} camera={camera} />
        <unrealBloomPass attachArray='passes' args={[undefined, 1.5, 1, 0.4]} />
      </effectComposer>
    </>
  )
}

export default Bloom
