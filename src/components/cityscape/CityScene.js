import { Suspense } from 'react'
import { Canvas as CanvasBase } from '@react-three/fiber'
import styled from 'styled-components'

import Model, { Controls } from './Model'

const Canvas = styled(CanvasBase)`
  min-height: 100vh;
`

const Wrapper = styled.div``

const CityScene = () => {
  return (
    <Wrapper>
      <Canvas camera={{ far: 50000, position: [0, 0, 40800] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Controls />
        <Suspense fallback={null}>
          <Model position={[-1000, 0, 0]} rotation={[0, 0.5, 0]} />
        </Suspense>
      </Canvas>
    </Wrapper>
  )
}

export default CityScene
