import { Suspense, useState } from 'react'
import { Canvas as CanvasBase } from '@react-three/fiber'
import styled from 'styled-components'

import { colors } from '@global'
import Model from './Model'

const NavItem = styled.p`
  color: ${colors.yellow};
  cursor: pointer;
  font-size: 20px;
  margin-right: 10px;
  text-shadow: 0 0 20px ${colors.yellow};
`

const Nav = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`

const Canvas = styled(CanvasBase)`
  min-height: 100vh;
`

const Wrapper = styled.div``

const CityScene = () => {
  const [cameraValues, setCameraValues] = useState({
    position: [0, 0, 40800],
    rotation: [0, 0, 0],
  })
  const [newCameraValues, setNewCameraValues] = useState(cameraValues)

  const handlePosition = coordinates => {
    setNewCameraValues(coordinates)
    setTimeout(() => setCameraValues(coordinates), 3000)
  }

  return (
    <Wrapper>
      <Nav>
        <NavItem onClick={() => handlePosition({ position: [0, 0, 40800], rotation: [0, 0, 0] })}>one</NavItem>
        <NavItem onClick={() => handlePosition({ position: [30000, -4000, 20800], rotation: [0, 0.85, 0] })}>two</NavItem>
        <NavItem onClick={() => handlePosition({ position: [20000, -8000, 3000], rotation: [0, 1.4, 0] })}>three</NavItem>
      </Nav>
      <Canvas camera={{ far: 50000, position: cameraValues.position }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model newCameraValues={newCameraValues} position={[-1000, 0, 0]} rotation={[0, 0.5, 0]} />
        </Suspense>
      </Canvas>
    </Wrapper>
  )
}

export default CityScene
