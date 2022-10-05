import { forwardRef, Suspense, useEffect } from 'react'
import { Html } from '@react-three/drei'
import styled from 'styled-components'

import { CustomText } from '@components'
import { colors, media, watchData } from '@global'

const Image = styled.div`
  background: url(${p => p.image}) no-repeat;
  background-size: cover;
  box-shadow: 0 0 15px ${colors.berry};
  height: 41vw;
  max-height: 165px;
  width: 100%;
`

const Row = styled.div`
  cursor: pointer;
  padding-bottom: 30.6px;
  width: 100%;
`

const Wrapper = styled.div`
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 66vh;
  justify-content: space-between;
  opacity: ${p => (p.active ? 1 : 0)};
  overflow: auto;
  padding: 15.6px 15.6px 0;
  transform: ${p => (p.active ? 'translate(-167.5px, -100px)' : 'translate(-167.5px, 300px)')};
  transition: all 2000ms ease;
  width: 335px;

  ${media.up.lg`
    height: 73vh;
  `}
`

const Watch = forwardRef(({ active, setYoutubeData }, ref) => {
  return (
    <>
      <mesh position={[-100, 80, 12]}>
        <Html>
          <Wrapper active={active} ref={ref}>
            {watchData.map(({ image, url }, i) => (
              <Row key={i}>
                <Image image={image} onClick={() => setYoutubeData(url)} />
              </Row>
            ))}
          </Wrapper>
        </Html>
      </mesh>
      <Suspense fallback={null}>
        <CustomText
          color={colors.aqua}
          height={5}
          position={[108, 50, -104]}
          rotation={[0, 2.1, 0]}
          size={0.4}
        >
          Music Videos
        </CustomText>
      </Suspense>
    </>
  )
})

Watch.displayName = 'Watch'

export default Watch
