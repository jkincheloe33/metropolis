import { useEffect, useRef, useState } from 'react'
import lerp from 'lerp'
import { extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

extend({ EffectComposer, RenderPass, UnrealBloomPass })

function Bloom({ children, newCameraValues, ready }) {
  const [follow, setFollow] = useState(false)
  const [prevCameraValues, setPrevCameraValues] = useState(null)
  const [scene, setScene] = useState()
  const composer = useRef()
  const groupRef = useRef(null)
  const { gl, camera, size } = useThree()
  let frames = 0

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => void scene && composer.current.setSize(size.width, size.height), [size])

  useEffect(() => {
    setPrevCameraValues(camera)
    setFollow(false)
    frames = 0
  }, [newCameraValues])

  useFrame((state) => {
    scene && composer.current.render()
    const { position, rotation } = newCameraValues

    if (ready && !follow && (camera.position.z === newCameraValues.position[2])) setFollow(true)

    if (ready && groupRef?.current) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (state.mouse.x * Math.PI) / 1000, 0.05)
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (state.mouse.y * Math.PI) / 1500, 0.05)
    }
    
    if (prevCameraValues && frames <= 720) {
      const t = frames / 720;
      camera.rotation.x = lerp(prevCameraValues.rotation.x, rotation[0], t)
      camera.rotation.y = lerp(prevCameraValues.rotation.y, rotation[1], t)
      camera.rotation.z = lerp(prevCameraValues.rotation.z, rotation[2], t)

      camera.position.x = lerp(prevCameraValues.position.x, position[0], t)
      camera.position.y = lerp(prevCameraValues.position.y, position[1], t)
      camera.position.z = lerp(prevCameraValues.position.z, position[2], t)
      frames++;
    }
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
