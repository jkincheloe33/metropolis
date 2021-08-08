import { useEffect, useRef, useState } from 'react'
import lerp from 'lerp'
import { extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

extend({ OrbitControls })

export const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useFrame(() => {
    orbitRef.current.update()
  })

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />
}

const Model = ({ newCameraValues, objectLoaded, setObjectLoaded, ...props }) => {
  const [model, setModel] = useState()
  const { camera } = useThree()
  const manager = new THREE.LoadingManager()

  manager.onProgress = function (item, objectLoaded, total) {
    if (objectLoaded === total) setObjectLoaded(true)
  }

  useFrame(() => {
    const { position, rotation } = newCameraValues

    // if (objectLoaded) camera.

    camera.rotation.x = lerp(camera.rotation.x, rotation[0], 0.015)
    camera.rotation.y = lerp(camera.rotation.y, rotation[1], 0.015)
    camera.rotation.z = lerp(camera.rotation.z, rotation[2], 0.015)

    camera.position.x = lerp(camera.position.x, position[0], 0.015)
    camera.position.y = lerp(camera.position.y, position[1], 0.015)
    camera.position.z = lerp(camera.position.z, position[2], 0.015)
  })

  useEffect(() => {
    new GLTFLoader(manager).load('./obj/city/scene.gltf', setModel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return model ? <primitive {...props} object={model.scene} /> : null
}

export default Model
