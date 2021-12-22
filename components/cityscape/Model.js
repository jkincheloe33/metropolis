import { useEffect, useRef, useState } from 'react'
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
  const manager = new THREE.LoadingManager()

  manager.onProgress = function (item, objectLoaded, total) {
    if (objectLoaded === total) setObjectLoaded(true)
  }

  useEffect(() => {
    new GLTFLoader(manager).load('./static/obj/city/scene.gltf', setModel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return model ? <primitive {...props} object={model.scene} /> : null
}

export default Model
