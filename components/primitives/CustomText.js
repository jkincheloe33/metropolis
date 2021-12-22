import { forwardRef, useLayoutEffect, useRef, useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const CustomText = forwardRef(
  (
    {
      children,
      color,
      fontFamily = './static/text/digital.json',
      hAlign = 'center',
      height = 1000,
      rotation = [0, 0, 0],
      size = 1,
      vAlign = 'center',
      ...props
    },
    ref
  ) => {
    const font = useLoader(THREE.FontLoader, fontFamily)
    const config = useMemo(() => ({ font, size: 50, height }), [font, height])
    const mesh = useRef()

    useLayoutEffect(() => {
      const size = new THREE.Vector3()
      mesh.current.geometry.computeBoundingBox()
      mesh.current.geometry.boundingBox.getSize(size)
      mesh.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children])

    return (
      <group {...props} ref={ref} scale={[0.1 * size, 0.1 * size, 0.1]} rotation={rotation}>
        <mesh {...props} ref={mesh}>
          <textGeometry args={[children, config]} />
          {color ? <meshBasicMaterial color={color} /> : <meshNormalMaterial />}
        </mesh>
      </group>
    )
  }
)

export default CustomText
