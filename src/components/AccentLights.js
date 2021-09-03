import { colors } from '@global'

import { NeonLight } from '@components'

const AccentLights = () => (
  <>
    {/* merch building */}
    <NeonLight
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 11000, y: 1, z: 1 },
      ]}
      position={[2900, -10500, 5800]}
      rotation={[0, 0.5, 0]}
    />
    {/* sega building */}
    <NeonLight
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 14000, y: 1, z: 1 },
      ]}
      position={[13300, -12250, -1100]}
      rotation={[0, 0, 1.56]}
    />
    {/* red lights */}
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 17200, y: 1, z: 1 },
      ]}
      position={[5100, -12150, 12250]}
      rotation={[0, 0, 1.57]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 17200, y: 1, z: 1 },
      ]}
      position={[8325, -12150, 10380]}
      rotation={[0, 0, 1.57]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 3750, y: 1, z: 1 },
      ]}
      position={[5100, 4800, 12150]}
      rotation={[0, 0.5, 0]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 17200, y: 1, z: 1 },
      ]}
      position={[7800, -12150, 17200]}
      rotation={[0, 0, 1.57]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 5730, y: 1, z: 1 },
      ]}
      position={[5100, 4800, 12250]}
      rotation={[0, -1.07, 0]}
    />
    {/* Watch buildings */}
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 8700, y: 1, z: 1 },
      ]}
      position={[17650, -11700, 13900]}
      rotation={[0, 0, 1.57]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 2780, y: 1, z: 1 },
      ]}
      position={[16350, -3125, 11400]}
      rotation={[0, -1.07, 0]}
    />
    <NeonLight
      color={colors.berry}
      points={[
        { x: 0, y: 1, z: 1 },
        { x: 8700, y: 1, z: 1 },
      ]}
      position={[16300, -11700, 11450]}
      rotation={[0, 0, 1.57]}
    />
  </>
)

export default AccentLights
