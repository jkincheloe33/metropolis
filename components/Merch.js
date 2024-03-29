import { forwardRef, Suspense } from 'react'
import { Html } from '@react-three/drei'
import styled from 'styled-components'

import { CustomText } from '@components'
import { colors, media, merchData } from '@global'

const Shirt = styled.a`
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
  height: 54vh;
  justify-content: space-between;
  opacity: ${p => (p.active ? 1 : 0)};
  overflow: auto;
  padding: 15.6px 15.6px 0;
  transform: ${p => (p.active ? 'translate(-167.5px, -100px)' : 'translate(-167.5px, 300px)')};
  transition: all 2000ms ease;
  width: 335px;

  ${media.up.lg`
    height: 60vh;
  `}
`

const Merch = forwardRef(({ active }, ref) => {
  return (
    <>
      <mesh position={[63.8, 11, -125]}>
        <Html>
          <Wrapper active={active} ref={ref}>
            {merchData.map(({ link, src }, i) => (
              <Shirt href={link} key={i} src={src} target='_blank' />
            ))}
          </Wrapper>
        </Html>
      </mesh>
      <Suspense fallback={null}>
        <CustomText height={5} position={[68, 18, -117]} rotation={[0, 0.5, 0]} size={0.35}>
          Threads
        </CustomText>
        <CustomText height={3} position={[68, 15.5, -117]} rotation={[0, 0.5, 0]} size={0.2}>
          {'< Shop now >'}
        </CustomText>
        <CustomText
          color={colors.aqua}
          fontFamily='./static/text/neon.json'
          height={1}
          position={[57.5, 5, -111.5]}
          rotation={[0, 0.5, 0]}
          size={0.25}
        >
          Glasslands
        </CustomText>
        <CustomText
          color={colors.aqua}
          fontFamily='./static/text/neon.json'
          height={1}
          position={[79.5, 5, -122]}
          rotation={[0, 0.5, 0]}
          size={0.25}
        >
          Merchandise
        </CustomText>
      </Suspense>
    </>
  )
})

Merch.displayName = 'Merch'

export default Merch
