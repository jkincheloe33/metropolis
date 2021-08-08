import { Suspense, useEffect, useState } from 'react'
import { Canvas as CanvasBase } from '@react-three/fiber'
import styled from 'styled-components'

import { colors } from '@global'
import Model, { Controls } from './Model'

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

const Wrapper = styled.div`
  opacity: ${p => (p.visible ? 1 : 0)};
  transition: opacity 5000ms ease;
`

const CityScene = () => {
  const [cameraValues, setCameraValues] = useState({
    position: [-50000, -15000, 40800],
    rotation: [0, -1.1, 0],
  })
  const [objectLoaded, setObjectLoaded] = useState(false)
  const [newCameraValues, setNewCameraValues] = useState(cameraValues)

  const handlePosition = coordinates => {
    setNewCameraValues(coordinates)
    setTimeout(() => setCameraValues(coordinates), 5000)
  }

  useEffect(() => {
    if (objectLoaded) handlePosition({ position: [12000, 5000, 3800], rotation: [0, -1.1, 0] })
  }, [objectLoaded])

  return (
    <Wrapper visible={objectLoaded}>
      <Nav>
        <NavItem onClick={() => handlePosition({ position: [12000, 5000, 3800], rotation: [0, -1.1, 0] })}>one</NavItem>
        <NavItem onClick={() => handlePosition({ position: [30000, -4000, 20800], rotation: [0, 0.85, 0] })}>two</NavItem>
        <NavItem onClick={() => handlePosition({ position: [20000, -8000, 3000], rotation: [0, 1.4, 0] })}>three</NavItem>
      </Nav>
      <Canvas camera={{ far: 50000, position: cameraValues.position }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        {/* <Controls /> */}
        <Suspense fallback={null}>
          <Model
            handlePosition={handlePosition}
            newCameraValues={newCameraValues}
            objectLoaded={objectLoaded}
            position={[-1000, 0, 0]}
            rotation={[0, 0.5, 0]}
            setObjectLoaded={setObjectLoaded}
          />
        </Suspense>
      </Canvas>
    </Wrapper>
  )
}

export default CityScene
