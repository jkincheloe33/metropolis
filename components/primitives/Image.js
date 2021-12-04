import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

const Image = ({ size = [1000, 1000, 50], src, ...props }) => {
  const texture = useLoader(THREE.TextureLoader, src)

  return texture ? (
    <mesh {...props}>
      <boxGeometry attach='geometry' args={size} />
      <meshBasicMaterial attach='material' map={texture} />
    </mesh>
  ) : null
}

export default Image
