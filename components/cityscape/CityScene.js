import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Canvas as CanvasBase } from '@react-three/fiber'
import styled from 'styled-components'

import { AccentLights, Bloom, CustomText, Drawer, Loader, Megatron, Merch, Navigation, Tour, Watch } from '@components'

import Model, { Controls } from './Model'

const Canvas = styled(CanvasBase)`
  min-height: 100%;
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
  const [cameraValues, setCameraValues] = useState({ position: [26, 40, -90], rotation: [-0.5, -1.8, 0] })
  const [objectLoaded, setObjectLoaded] = useState(false)
  const [newCameraValues, setNewCameraValues] = useState(cameraValues)
  const [ready, setReady] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)

  const { query } = useRouter()

  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  )

  const handlePosition = (coordinates, text) => {
    setActive(text)
    setNewCameraValues(coordinates)
    setReady(true)
    setTimeout(() => setCameraValues(coordinates), 5000)
  }

  useEffect(() => {
    if (objectLoaded) {
      if (query?.watch === 'true') handlePosition(angles[1].location, angles[1].text)
      else if (query?.merch === 'true') handlePosition(angles[2].location, angles[2].text)
      else if (query?.tour === 'true') handlePosition(angles[3].location, angles[3].text)
      else handlePosition(angles[0].location, angles[0].text)
    }
  }, [objectLoaded, query])

  return (
    <Wrapper onMouseMove={onMouseMove}>
      <Loader visible={!objectLoaded} />
      <Navigation angles={angles} handlePosition={handlePosition} open={showNavigation} setOpen={setShowNavigation} />
      <Drawer open={active === 'Tour'} showNavigation={showNavigation} />
      <Canvas camera={{ far: 50000, position: cameraValues.position, rotation: cameraValues.rotation }} visible={objectLoaded}>
        {/* <Controls /> */}
        <Bloom mouse={mouse} newCameraValues={newCameraValues} ready={ready}>
          <ambientLight intensity={1.5} />
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
