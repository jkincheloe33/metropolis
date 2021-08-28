import { Suspense } from 'react'
import { Html } from '@react-three/drei'
import styled from 'styled-components'

import { CustomText, Image, Video } from '@components'
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
      {/* <Video position={[7700, -9900, 3300]} rotation={[0, 0.5, 0]} size={[1800, 900, 50]} src='./video/merch.mp4' /> */}
      <Suspense fallback={null}>
        {/* <Image position={[7150, -9000, 3325]} rotation={[0, 0.5, 0]} size={[3000, 2001, 50]} src='./img/creeps_ruth.jpg' />
        <Image position={[8050, -9000, 2850]} rotation={[0, 0.5, 0]} size={[750, 750, 50]} src='./img/faceless.png' /> */}
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
    </>
  )
}

export default Merch
