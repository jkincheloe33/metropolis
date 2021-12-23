import styled from 'styled-components'

import { CityScene } from '@components'

const Wrapper = styled.div`
  height: 100%;
`

export default function Home() {
  return (
    <Wrapper>
      <CityScene />
    </Wrapper>
  )
}
