import { colors } from '@global'

import { NeonLight } from '@components'

const AccentLights = () => (
  <>
    {/* merch building */}
    <NeonLight
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 56, y: 1, z: 1 },
      ]}
      position={[38, 7, -115]}
      rotation={[0, 0.5, 0]}
    />
    {/* sega building */}
    {/* <NeonLight
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 14000, y: 1, z: 1 },
      ]}
      position={[13300, -12250, -1100]}
      rotation={[0, 0, 1.56]}
    /> */}
    {/* red lights */}
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 86, y: 1, z: 1 },
      ]}
      position={[67, 0, -92]}
      rotation={[0, 0, 1.57]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 86, y: 1, z: 1 },
      ]}
      position={[51.5, 0, -83.5]}
      rotation={[0, 0, 1.57]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 18, y: 1, z: 1 },
      ]}
      position={[50.1, 83.75, -83.3]}
      rotation={[0, 0.5, 0]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 86, y: 1, z: 1 },
      ]}
      position={[64.7, 0, -58]}
      rotation={[0, 0, 1.57]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 29.1, y: 1, z: 1 },
      ]}
      position={[51, 83.75, -82.7]}
      rotation={[0, -1.07, 0]}
    />
    {/* Watch buildings */}
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 46.2, y: 1, z: 1 },
      ]}
      position={[106.9, 0, -87.5]}
      rotation={[0, 0, 1.57]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 15, y: 1, z: 1 },
      ]}
      position={[106.8, 44.5, -87]}
      rotation={[0, -1.07, 0]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 46.2, y: 1, z: 1 },
      ]}
      position={[114, 0, -74.5]}
      rotation={[0, 0, 1.57]}
    />
  </>
)

export default AccentLights
