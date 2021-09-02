import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { colors } from '@global'

const Billboard = ({ ...props }) => {
  const [model, setModel] = useState()
  const manager = new THREE.LoadingManager()

  manager.onProgress = function (item, objectLoaded, total) {
    // if (objectLoaded === total) setObjectLoaded(true)
  }

  useEffect(() => {
    new GLTFLoader(manager).load('./obj/billboard/scene.gltf', setModel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return model ? (
    <>
      <primitive {...props} object={model.scene} />
      <mesh position={[7650, -2350, 1875]} rotation={[0, 0.48, 0]}>
        <planeGeometry args={[5000, 2200]} />
        <meshBasicMaterial color={colors.berry} />
      </mesh>
    </>
  ) : null
}

export default Billboard
