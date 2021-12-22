import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Canvas as CanvasBase } from '@react-three/fiber'
import styled from 'styled-components'

import { AccentLights, Billboard, Bloom, CustomText, Drawer, Loader, Megatron, Merch, Navigation, Tour, Watch } from '@components'

import Model, { Controls } from './Model'

const Canvas = styled(CanvasBase)`
  min-height: 100vh;
  opacity: ${p => (p.visible ? 1 : 0)};
  transition: opacity 5000ms ease;
`

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`

const angles = [
  { location: { position: [26, 75, -114], rotation: [0, -1.3, 0] }, text: 'Glasslands' },
  { location: { position: [117, 41, -109], rotation: [0, -4.2, 0] }, text: 'Watch' },
  { location: { position: [69, 11, -115.5], rotation: [0, 0.5, 0] }, text: 'Merch' },
  { location: { position: [35, 27, -103], rotation: [0, 3, 0] }, text: 'Tour' },
]

const CityScene = () => {
  const [active, setActive] = useState('Glasslands')
  const [cameraValues, setCameraValues] = useState({ position: [26, 75, -114], rotation: [0, 0, 0] })
  const [details, setDetails] = useState(null)
  const [objectLoaded, setObjectLoaded] = useState(false)
  const [newCameraValues, setNewCameraValues] = useState(cameraValues)
  const [showNavigation, setShowNavigation] = useState(false)

  // const mouse = useRef([0, 0])
  // const onMouseMove = useCallback(
  //   ({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
  //   []
  // )

  const handlePosition = (coordinates, text) => {
    setActive(text)
    setNewCameraValues(coordinates)
    setTimeout(() => setCameraValues(coordinates), 5000)
  }

  useEffect(() => {
    if (objectLoaded) {
      handlePosition({ position: [26, 75, -114], rotation: [0, -1.3, 0] })
      // if (window.innerWidth > 768) handlePosition({ position: [4000, 2500, 6000], rotation: [0.005, -1.5, 0] })
      // else handlePosition({ position: [0, 2500, 6000], rotation: [0.005, -1.3, 0] })
    }
  }, [objectLoaded])

  return (
    <Wrapper>
      <Loader visible={!objectLoaded} />
      <Navigation angles={angles} handlePosition={handlePosition} open={showNavigation} setOpen={setShowNavigation} />
      <Drawer open={active === 'Tour'} showNavigation={showNavigation} />
      <Canvas camera={{ far: 50000, position: cameraValues.position, rotation: cameraValues.rotation }} visible={objectLoaded}>
        {/* <Controls /> */}
        <Bloom
          // mouse={mouse}
          newCameraValues={newCameraValues}
        >
          <ambientLight intensity={1} />
          <AccentLights />

          {/* City */}
          <Suspense fallback={null}>
            <Model
              handlePosition={handlePosition}
              newCameraValues={newCameraValues}
              objectLoaded={objectLoaded}
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
              fontFamily='./static/text/neon.json'
              height={1000}
              position={[-700, -2500, 5800]}
              rotation={[0, -0.05, 0]}
              size={10}
            >
              The Deep
            </CustomText>
          </Suspense> */}
        </Bloom>
      </Canvas>
    </Wrapper>
  )
}

export default CityScene
