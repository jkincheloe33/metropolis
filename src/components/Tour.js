import { Suspense } from 'react'
import { colors } from '@global'

import { CustomText, Video } from '@components'

const Tour = () => {
  return (
    <>
      <Video position={[38.5, 18, -69]} rotation={[0, 0.5, 0]} size={[10, 5, 1]} src='./video/liar.mp4' />
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
