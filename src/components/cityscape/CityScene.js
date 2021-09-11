import { Suspense, useEffect, useState } from 'react'
import { Canvas as CanvasBase } from '@react-three/fiber'
import styled from 'styled-components'

import { AccentLights, Billboard, Bloom, CustomText, Drawer, Megatron, Merch, Tour, Watch } from '@components'
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
  height: 100%;
  opacity: ${p => (p.visible ? 1 : 0)};
  position: relative;
  transition: opacity 5000ms ease;
`

const angles = [
  // { location: { position: [5000, 2500, 8000], rotation: [0.005, -1.1, 0] }, text: 'Home' },
  // { location: { position: [18500, -4000, 6800], rotation: [0, -4.2, 0] }, text: 'Watch' },
  // { location: { position: [8900, -10000, 5500], rotation: [0, 0.5, 0] }, text: 'Merch' },
  // { location: { position: [2000, -7000, 8000], rotation: [0, 3, 0] }, text: 'Tour' },

  { location: { position: [26, 75, -114], rotation: [0, -1.3, 0] }, text: 'Home' },
  { location: { position: [117, 41, -109], rotation: [0, -4.2, 0] }, text: 'Watch' },
  { location: { position: [69, 11, -115.5], rotation: [0, 0.5, 0] }, text: 'Merch' },
  { location: { position: [35, 27, -103], rotation: [0, 3, 0] }, text: 'Tour' },
]

const CityScene = () => {
  const [active, setActive] = useState('Home')
  const [cameraValues, setCameraValues] = useState({
    // position: [-50000, -15000, 40800],
    position: [0, 0, -200],
    rotation: [0, -1.1, 0],
  })
  const [details, setDetails] = useState(null)
  const [objectLoaded, setObjectLoaded] = useState(false)
  const [newCameraValues, setNewCameraValues] = useState(cameraValues)
  const [showDetails, setShowDetails] = useState(false)

  const handlePosition = (coordinates, text) => {
    setActive(text)
    setNewCameraValues(coordinates)
    setTimeout(() => setCameraValues(coordinates), 5000)
  }

  const handleCloseDetails = () => {
    setShowDetails(false)
    setTimeout(setDetails(null), 750)
  }

  const renderDetails = () => {
    const Component = details?.component
    const data = details?.data

    return Component && <Component {...data} />
  }

  useEffect(() => {
    if (objectLoaded) {
      handlePosition({ position: [26, 75, -114], rotation: [0, -1.3, 0] })
      // if (window.innerWidth > 768) handlePosition({ position: [4000, 2500, 6000], rotation: [0.005, -1.5, 0] })
      // else handlePosition({ position: [0, 2500, 6000], rotation: [0.005, -1.3, 0] })
    }
  }, [objectLoaded])

  return (
    <Wrapper visible={objectLoaded}>
      <Nav>
        {angles.map(({ location, text }, i) => (
          <NavItem key={i} onClick={() => handlePosition(location, text)}>
            {text}
          </NavItem>
        ))}
      </Nav>
      <Drawer handleClose={handleCloseDetails} open={showDetails}>
        {details && renderDetails()}
      </Drawer>
      <Canvas camera={{ far: 50000, position: cameraValues.position }}>
        {/* <Controls /> */}
        <Bloom newCameraValues={newCameraValues}>
          <ambientLight intensity={1} />
          <AccentLights />

          {/* City */}
          <Suspense fallback={null}>
            <Model
              handlePosition={handlePosition}
              newCameraValues={newCameraValues}
              objectLoaded={objectLoaded}
              // position={[-1000, 0, 0]}
              position={[0, 0, 0]}
              rotation={[0, 0.5, 0]}
              setObjectLoaded={setObjectLoaded}
            />
          </Suspense>

          {/* <Suspense fallback={null}>
            <Billboard position={[7500, -1200, 1500]} rotation={[0, 2.05, 3.15]} scale={20} />
          </Suspense> */}

          <Megatron />
          <Watch active={active === 'Watch'} />
          <Merch active={active === 'Merch'} />
          <Tour />

          {/* Standalone */}
          {/* <Suspense fallback={null}>
            <CustomText color={colors.berry} height={1500} position={[12000, -1000, 10000]} rotation={[0, -2.65, 0]} size={15}>
              The Deep
            </CustomText>
            <CustomText
              color={colors.blue}
              fontFamily='./text/neon.json'
              height={1000}
              position={[-700, -2500, 5800]}
              rotation={[0, -0.05, 0]}
              size={10}
            >
              The Deep
            </CustomText>
          </Suspense> */}

          {/* <Image position={[24000, 0, 7400]} rotation={[0, -1.08, 0]} size={[6000, 6000, 400]} src='./img/snake-logo-2.jpg' /> */}
        </Bloom>
      </Canvas>
    </Wrapper>
  )
}

export default CityScene
