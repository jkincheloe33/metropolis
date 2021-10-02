import { Suspense } from 'react'

import { CustomText, Video } from '@components'

const Megatron = () => {
  return (
    <>
      <Video position={[123, 90, -141]} rotation={[0, -1.08, 0]} size={[42, 24.36, 7]} src='./video/liar.mp4' />
      <Video position={[118, 50, -151]} rotation={[0, -1.08, 0]} size={[20, 39, 7]} src='./video/vertical.mp4' />
      <Suspense fallback={null}>
        <CustomText height={15} position={[115, 60, -127]} rotation={[0, -1.08, 0]} size={1.25}>
          Gla
        </CustomText>
        <CustomText height={15} position={[115, 50, -127]} rotation={[0, -1.08, 0]} size={1.25}>
          ssl
        </CustomText>
        <CustomText height={15} position={[117, 40, -126]} rotation={[0, -1.08, 0]} size={1.25}>
          ands
        </CustomText>
      </Suspense>
    </>
  )
}

export default Megatron
