import { Suspense } from 'react'

import { CustomText } from '@components'
import { colors } from '@global'

const Tour = () => {
  return (
    <Suspense fallback={null}>
      <CustomText color={colors.aqua} height={3} position={[23, 52, -67.5]} rotation={[0, 2.1, 0]} size={1}>
        T
      </CustomText>
      <CustomText color={colors.aqua} height={3} position={[23, 44, -67.5]} rotation={[0, 2.1, 0]} size={1}>
        O
      </CustomText>
      <CustomText color={colors.aqua} height={3} position={[23, 36, -67.5]} rotation={[0, 2.1, 0]} size={1}>
        U
      </CustomText>
      <CustomText color={colors.aqua} height={3} position={[23, 28, -67.5]} rotation={[0, 2.1, 0]} size={1}>
        R
      </CustomText>
    </Suspense>
  )
}

export default Tour
