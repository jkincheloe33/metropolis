import { Suspense, useEffect, useState } from 'react'
import { SpotLight } from '@react-three/drei'
import { Canvas as CanvasBase } from '@react-three/fiber'
import styled from 'styled-components'

import { colors } from '@global'
import Bloom from './Bloom'
import Image from './Image'
// eslint-disable-next-line no-unused-vars
import Model, { Controls } from './Model'
import NeonLight from './NeonLight'
import CustomText from './CustomText'
import Video from './Video'

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
  height: 100%;
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
    if (objectLoaded) handlePosition({ position: [5000, 2500, 8000], rotation: [0.005, -1.1, 0] })
    // if (objectLoaded) handlePosition({ position: [0, -2000, 8500], rotation: [0.005, 0.2, 0] })

    // if (objectLoaded) handlePosition({ position: [8900, -10000, 5500], rotation: [0, 0.5, 0] })
  }, [objectLoaded])

  return (
    <Wrapper visible={objectLoaded}>
      <Nav>
        <NavItem onClick={() => handlePosition({ position: [5000, 2500, 8000], rotation: [0.005, -1.1, 0] })}>one</NavItem>
        <NavItem onClick={() => handlePosition({ position: [30000, -4000, 20800], rotation: [0, 0.85, 0] })}>two</NavItem>
        <NavItem onClick={() => handlePosition({ position: [8900, -10000, 5500], rotation: [0, 0.5, 0] })}>three</NavItem>
      </Nav>
      <Canvas camera={{ far: 50000, position: cameraValues.position }}>
        {/* <Controls /> */}
        <Bloom newCameraValues={newCameraValues}>
          {/* <pointLight position={[10, 10, 10]} /> */}
          <ambientLight intensity={1} />
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
          <Video position={[19600, 5880, 200]} rotation={[0, -1.08, 0]} />
          <Suspense fallback={null}>
            <CustomText fontFamily='./text/neon.json' height={1000} position={[-700, -2475, 5800]} rotation={[0, -0.05, 0]} size={10}>
              The Deep
            </CustomText>
            <CustomText height={1000} position={[7500, -9000, 3000]} rotation={[0, 0.5, 0]} size={10}>
              Merch
            </CustomText>
            <CustomText height={1000} position={[7450, -9750, 2800]} rotation={[0, 0.5, 0]} size={5}>
              Shop now &gt;&gt;
            </CustomText>
            <Image position={[7150, -11325, 3325]} rotation={[0, 0.5, 0]} size={[750, 750, 50]} src='./img/biometric.png' />
            <Image position={[8050, -11325, 2850]} rotation={[0, 0.5, 0]} size={[750, 750, 50]} src='./img/faceless.png' />
          </Suspense>
          <NeonLight
            points={[
              { x: 0, y: 1, z: 1 },
              { x: 11000, y: 1, z: 1 },
            ]}
            position={[2900, -10500, 5800]}
            rotation={[0, 0.5, 0]}
          />
        </Bloom>
      </Canvas>
    </Wrapper>
  )
}

export default CityScene
