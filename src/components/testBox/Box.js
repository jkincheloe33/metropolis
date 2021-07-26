import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import { colors } from '@global'

const Box = ({ ...props }) => {
  const ref = useRef(null)

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={colors.yellow} />
    </mesh>
  )
}

export default Box
