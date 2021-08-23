import { useEffect, useRef, useState } from 'react'
import lerp from 'lerp'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

extend({ EffectComposer, RenderPass, UnrealBloomPass })

function Bloom({ children, newCameraValues }) {
  const { gl, camera, size } = useThree()
  const [scene, setScene] = useState()
  const composer = useRef()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => void scene && composer.current.setSize(size.width, size.height), [size])
  useFrame(() => {
    scene && composer.current.render()

    const { position, rotation } = newCameraValues

    camera.rotation.x = lerp(camera.rotation.x, rotation[0], 0.015)
    camera.rotation.y = lerp(camera.rotation.y, rotation[1], 0.015)
    camera.rotation.z = lerp(camera.rotation.z, rotation[2], 0.015)

    camera.position.x = lerp(camera.position.x, position[0], 0.015)
    camera.position.y = lerp(camera.position.y, position[1], 0.015)
    camera.position.z = lerp(camera.position.z, position[2], 0.015)
  }, 2)

  return (
    <>
      <scene ref={setScene}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray='passes' scene={scene} camera={camera} />
        <unrealBloomPass attachArray='passes' args={[undefined, 1.5, 1, 0.4]} />
      </effectComposer>
    </>
  )
}

export default Bloom
