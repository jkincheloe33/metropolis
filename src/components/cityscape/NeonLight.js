import * as THREE from 'three'

import { colors } from '@global'

const NeonLight = ({ color = colors.aqua, points = [], ...props }) => {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p.x, p.y, p.z)))

  return (
    <mesh {...props}>
      <tubeGeometry args={[curve, 70, 10, 50, true]} />
      <meshStandardMaterial color={color} side={THREE.DoubleSide} metalness={0.4} />
    </mesh>
  )
}

export default NeonLight
