import { Suspense } from 'react'
import { colors } from '@global'

import { CustomText, Video } from '@components'

const Tour = () => {
  return (
    <>
      <Video position={[2700, -8750, 14500]} rotation={[0, 0.5, 0]} size={[2000, 1000, 50]} src='./video/liar.mp4' />
      <Suspense fallback={null}>
        <CustomText
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
        </CustomText>
        <CustomText color={colors.berry} height={1000} position={[-2800, -3000, 16900]} rotation={[0, 2.1, 0]} size={20}>
          T
        </CustomText>
        <CustomText color={colors.berry} height={1000} position={[-2800, -4500, 16900]} rotation={[0, 2.1, 0]} size={20}>
          O
        </CustomText>
        <CustomText color={colors.berry} height={1000} position={[-2800, -6000, 16900]} rotation={[0, 2.1, 0]} size={20}>
          U
        </CustomText>
        <CustomText color={colors.berry} height={1000} position={[-2800, -7500, 16900]} rotation={[0, 2.1, 0]} size={20}>
          R
        </CustomText>
      </Suspense>
    </>
  )
}

export default Tour
