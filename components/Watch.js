import { Suspense } from 'react'
import { Html } from '@react-three/drei'
import styled from 'styled-components'

import { CustomText, Youtube } from '@components'
import { colors, media, watchData } from '@global'

const Row = styled.div`
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

const Watch = ({ active }) => {
  return (
    <>
      <mesh position={[-100, 80, 12]}>
        <Html>
          <Wrapper active={active}>
            {watchData.map((data, i) => (
              <Row key={i}>
                <Youtube url={data} />
              </Row>
            ))}
          </Wrapper>
        </Html>
      </mesh>
      <Suspense fallback={null}>
        <CustomText
          color={colors.aqua}
          // fontFamily='./static/text/neon.json'
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
}

export default Watch
