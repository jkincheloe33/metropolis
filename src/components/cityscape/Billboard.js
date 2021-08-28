import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

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

  return model ? <primitive {...props} object={model.scene} /> : null
}

export default Billboard
