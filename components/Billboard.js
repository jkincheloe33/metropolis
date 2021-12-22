import { useEffect, useState } from 'react'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { colors } from '@global'

const Billboard = ({ ...props }) => {
  const [model, setModel] = useState()
  const [sign, setSign] = useState()
  const manager = new THREE.LoadingManager()

  manager.onProgress = function (item, objectLoaded, total) {
    // if (objectLoaded === total) setObjectLoaded(true)
  }

  useEffect(() => {
    new GLTFLoader(manager).load('./static/obj/billboard/scene.gltf', setModel)
    new GLTFLoader().load('./static/obj/pain/scene.gltf', setSign)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return model && sign ? (
    <>
      <primitive {...props} object={model.scene} />
      <primitive object={sign.scene} position={[11600, -5000, 1000]} rotation={[0, 0.47, 0]} scale={3} />
      <mesh position={[7650, -2350, 1875]} rotation={[0, 0.48, 0]}>
        <planeGeometry args={[5000, 2200]} />
        <meshBasicMaterial color={colors.black} />
        <Text color='white' fontSize={500} maxWidth={4000} textAlign='center'>
          you'll never have to leave
        </Text>
      </mesh>
    </>
  ) : null
}

export default Billboard
