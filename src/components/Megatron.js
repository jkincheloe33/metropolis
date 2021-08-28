import { Suspense } from 'react'

import { CustomText, Video } from '@components'

const Megatron = () => {
  return (
    <>
      <Video position={[19600, 5880, 200]} rotation={[0, -1.08, 0]} size={[7500, 4350, 1500]} src='./video/liar.mp4' />
      <Video position={[18800, -1000, -1500]} rotation={[0, -1.08, 0]} size={[4104, 8000, 1500]} src='./video/vertical.mp4' />
      <Suspense fallback={null}>
        <CustomText height={1500} position={[20700, 2300, 2000]} rotation={[0, -1.08, 0]} size={25}>
          Gla
        </CustomText>
        <CustomText height={1500} position={[20700, 500, 2000]} rotation={[0, -1.08, 0]} size={25}>
          ssl
        </CustomText>
        <CustomText height={1500} position={[20900, -1300, 2350]} rotation={[0, -1.08, 0]} size={25}>
          ands
        </CustomText>
      </Suspense>
    </>
  )
}

export default Megatron
