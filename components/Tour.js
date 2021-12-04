/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Suspense, useEffect } from 'react'
import { Html } from '@react-three/drei'
import styled from 'styled-components'

import { CustomText, Video } from '@components'
import { api, colors } from '@global'

const Wrapper = styled.div`
  /* transform: translate(0, 0); */
`

const Tour = () => {
  useEffect(() => {
    const getTourDates = async () => {
      const {
        data: { data, success },
      } = await api.get('/getTourDates')

      if (success) console.log(data)
    }

    getTourDates()
  }, [])

  return (
    <>
      <Video position={[38.5, 18, -69]} rotation={[0, 0.5, 0]} size={[10, 5, 1]} src='./video/liar.mp4' />
      {/* <Html>
        <Wrapper>
          <a
            className='bit-widget-initializer'
            data-artist-name='Glasslands'
            data-display-past-dates='true'
            data-text-color='#000000'
            data-link-color='#A2A2A2'
            data-background-color='#ffffff'
            data-display-details='false'
            data-popup-background-color='#ffffff'
            data-link-text-color='#FFFFFF'
            data-separator-color='#CBCBCB'
            data-language='en'
            data-font='Helvetica'
            data-display-local-dates='false'
            data-auto-style='false'
            data-display-lineup='false'
            data-display-play-my-city='true'
            data-display-limit='15'
            data-display-start-time='false'
          />
        </Wrapper>
      </Html> */}
      <Suspense fallback={null}>
        {/* <CustomText
          color={colors.berry}
          fontFamily='./text/neon.json'
          height={1000}
          position={[1650, -6300, 16900]}
          rotation={[0, 3, 0]}
          size={5}
        >
          View
        </CustomText>
        <CustomText
          color={colors.berry}
          fontFamily='./text/neon.json'
          height={1000}
          position={[1500, -6800, 17000]}
          rotation={[0, 3, 0]}
          size={5}
        >
          Dates
        </CustomText> */}
        <CustomText color={colors.berry} height={3} position={[23, 52, -67.5]} rotation={[0, 2.1, 0]} size={1}>
          T
        </CustomText>
        <CustomText color={colors.berry} height={3} position={[23, 44, -67.5]} rotation={[0, 2.1, 0]} size={1}>
          O
        </CustomText>
        <CustomText color={colors.berry} height={3} position={[23, 36, -67.5]} rotation={[0, 2.1, 0]} size={1}>
          U
        </CustomText>
        <CustomText color={colors.berry} height={3} position={[23, 28, -67.5]} rotation={[0, 2.1, 0]} size={1}>
          R
        </CustomText>
      </Suspense>
    </>
  )
}

export default Tour
