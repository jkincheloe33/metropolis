import { Suspense } from 'react'
import { Html } from '@react-three/drei'
import styled from 'styled-components'

import { CustomText, Youtube } from '@components'
import { colors, watchData } from '@global'

const Row = styled.div`
  /* box-shadow: 0 0 15px ${colors.berry}; */
  width: 100%;

  padding-bottom: 30.6px;
`

const Wrapper = styled.div`
  /* background-color: ${colors.black};
  border: 2px solid ${colors.berry}; */
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 73vh;
  justify-content: space-between;
  opacity: ${p => (p.active ? 1 : 0)};
  overflow: auto;
  padding: 15.6px 15.6px 0;
  transform: ${p => (p.active ? 'translate(-167.5px, -100px)' : 'translate(-167.5px, 300px)')};
  transition: all 2000ms ease;
  width: 335px;
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
