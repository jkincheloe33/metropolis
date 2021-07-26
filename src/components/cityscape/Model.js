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
    // console.log(camera.rotation)
    orbitRef.current.update()
  })

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />
}

const Model = ({ ...props }) => {
  const [model, setModel] = useState()
  // const manager = new THREE.LoadingManager()

  useEffect(() => {
    new GLTFLoader().load('./obj/city/scene.gltf', setModel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //   useEffect(() => {
  //     if (model) {
  //       model.scene.traverse(child => {
  //         if (child.material) {
  //           setMaterial(child.material)
  //         }
  //       })
  //     }
  //   }, [model])

  return model ? <primitive {...props} object={model.scene} /> : null
}

export default Model
