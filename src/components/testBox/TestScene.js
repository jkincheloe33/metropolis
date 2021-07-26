import { Canvas as CanvasBase } from '@react-three/fiber'
import styled from 'styled-components'

import Box from './Box'

const Canvas = styled(CanvasBase)`
  min-height: 100vh;
`

const Wrapper = styled.div``

const TestScene = () => {
  return (
    <Wrapper>
      <Canvas>
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </Wrapper>
  )
}

export default TestScene
