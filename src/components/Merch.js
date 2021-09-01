import { Suspense } from 'react'
import { Html } from '@react-three/drei'
import styled from 'styled-components'

import { CustomText, NeonLight } from '@components'
import { colors, merchData } from '@global'

const Shirt = styled.div`
  background: url(${p => p.src});
  background-size: cover;
  box-shadow: 0 0 8px ${colors.aqua};
  border-radius: 5px;
  height: 140px;
  margin-bottom: 15px;
  width: 140px;
`

const Wrapper = styled.div`
  background-color: ${colors.black};
  border: 4px solid ${colors.aqua};
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 60vh;
  justify-content: space-between;
  opacity: ${p => (p.active ? 1 : 0)};
  overflow: auto;
  padding: 15.6px 15.6px 0;
  transform: ${p => (p.active ? 'translate(-167.5px, -100px)' : 'translate(-167.5px, 300px)')};
  transition: all 2000ms ease;
  width: 335px;
`

const Merch = ({ active }) => {
  return (
    <>
      <mesh position={[7700, -9900, 3300]}>
        <Html>
          <Wrapper active={active}>
            {merchData.map((md, i) => (
              <Shirt key={i} src={md} />
            ))}
          </Wrapper>
        </Html>
      </mesh>
      <Suspense fallback={null}>
        <CustomText height={1000} position={[7500, -8700, 3000]} rotation={[0, 0.5, 0]} size={5}>
          Threads
        </CustomText>
        <CustomText height={1000} position={[7420, -9000, 2800]} rotation={[0, 0.5, 0]} size={3}>
          {'< Shop now >'}
        </CustomText>
        <CustomText
          color={colors.aqua}
          fontFamily='./text/neon.json'
          height={100}
          position={[5500, -11000, 4000]}
          rotation={[0, 0.5, 0]}
          size={4}
        >
          Glasslands
        </CustomText>
        <CustomText
          color={colors.aqua}
          fontFamily='./text/neon.json'
          height={100}
          position={[9600, -11000, 1900]}
          rotation={[0, 0.5, 0]}
          size={4}
        >
          Merchandise
        </CustomText>
      </Suspense>

      {/* <NeonLight
        points={[
          { x: 0, y: 1, z: 1 },
          { x: 10000, y: 1, z: 1 },
          { x: 11000, y: 1, z: 1 },
          { x: 11000, y: 5000, z: 1 },
          { x: 0, y: 5000, z: 1 },
          { x: 0, y: 1, z: 1 },
        ]}
        position={[0, 0, 0]}
        rotation={[0, 0.5, 0]}
      /> */}
    </>
  )
}

export default Merch
