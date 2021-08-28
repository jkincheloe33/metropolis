import { Suspense } from 'react'

import { CustomText, Image, Video } from '@components'

const Merch = () => {
  return (
    <>
      <Video position={[7700, -9900, 3300]} rotation={[0, 0.5, 0]} size={[1800, 900, 50]} src='./video/merch.mp4' />
      <Suspense fallback={null}>
        <Image position={[7150, -11325, 3325]} rotation={[0, 0.5, 0]} size={[750, 750, 50]} src='./img/biometric.png' />
        <Image position={[8050, -11325, 2850]} rotation={[0, 0.5, 0]} size={[750, 750, 50]} src='./img/faceless.png' />
        <CustomText height={1000} position={[7500, -8600, 3000]} rotation={[0, 0.5, 0]} size={10}>
          Merch
        </CustomText>
        <CustomText height={1000} position={[7450, -9100, 2800]} rotation={[0, 0.5, 0]} size={5}>
          Shop now &gt;&gt;
        </CustomText>
      </Suspense>
    </>
  )
}

export default Merch
