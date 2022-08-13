import { Suspense, useEffect, useRef, useState } from 'react'
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
  { location: { position: [26, 75, -114], rotation: [0, -1.3, 0] }, text: 'Home' },
  { location: { position: [117, 41, -109], rotation: [0, -4.2, 0] }, text: 'Music Videos' },
  { location: { position: [69, 11, -115.5], rotation: [0, 0.5, 0] }, text: 'Merch' },
  { location: { position: [35, 27, -103], rotation: [0, 3, 0] }, text: 'Tour' },
]

const CityScene = () => {
  const [active, setActive] = useState(0)
  const [cameraValues, setCameraValues] = useState({ position: [26, 40, -90], rotation: [-0.5, -1.8, 0] })
  const [objectLoaded, setObjectLoaded] = useState(false)
  const [newCameraValues, setNewCameraValues] = useState(cameraValues)
  const [prevCameraValues, setPrevCameraValues] = useState(null)
  const [ready, setReady] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)

  const { query } = useRouter()

  // stores the horizontal location that a user presses down
  const { current } = useRef({ xDown: null })

  const handlePosition = (coordinates, index) => {
    setActive(index)
    setNewCameraValues(coordinates)
    setReady(true)
    setTimeout(() => setCameraValues(coordinates), 5000)
  }

  // sets xDown and yDown to the point where the user initially touches or clicks
  const handleDown = e => {
    current.xDown = e.touches?.[0].clientX ?? e.screenX
  }

  // if the user moves their finger/mouse 50px left or right from the initial xDown point, we handlePosition with active + or minus 1 depending on which way they swiped
  const handleUp = e => {
    const xEnd = e.changedTouches?.[0].clientX ?? e.screenX
    const xDifference = xEnd - current.xDown

    if (xDifference >= 50 && active !== 0) return handlePosition(angles[active - 1].location, active - 1)
    if (xDifference <= -50 && active !== angles.length - 1) return handlePosition(angles[active + 1].location, active + 1)
  }

  useEffect(() => {
    if (objectLoaded) {
      if (query?.watch === 'true') handlePosition(angles[1].location, 1)
      else if (query?.merch === 'true') handlePosition(angles[2].location, 2)
      else if (query?.tour === 'true') handlePosition(angles[3].location, 3)
      else handlePosition(angles[0].location, 0)
    }
  }, [objectLoaded, query])

  return (
    <Wrapper
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onTouchEnd={handleUp}
      onTouchStart={handleDown}
    >
      <Loader visible={!objectLoaded} />
      <Navigation active={active} angles={angles} handlePosition={handlePosition} open={showNavigation} setOpen={setShowNavigation} />
      <Drawer open={active === 3} showNavigation={showNavigation} />
      <Canvas camera={{ far: 50000, position: cameraValues.position, rotation: cameraValues.rotation }} visible={objectLoaded}>
        {/* <Controls /> */}
        <Bloom newCameraValues={newCameraValues} prevCameraValues={prevCameraValues} ready={ready} setPrevCameraValues={setPrevCameraValues}>
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
          <Watch active={active === 1} />
          <Merch active={active === 2} />
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
