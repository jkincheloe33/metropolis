import { Html } from '@react-three/drei'
import styled from 'styled-components'

import { Youtube } from '@components'
import { colors, watchData } from '@global'

const Row = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    padding-bottom: 15.6px;
  }
`

const Wrapper = styled.div`
  background-color: ${colors.black};
  border: 2px solid ${colors.berry};
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 66vh;
  justify-content: space-between;
  opacity: ${p => (p.active ? 1 : 0)};
  overflow: auto;
  padding: 15.6px 15.6px 0;
  transform: ${p => (p.active ? 'translate(-167.5px, -100px)' : 'translate(-167.5px, 300px)')};
  transition: all 2000ms ease;
  width: 335px;
`

const Watch = ({ active }) => {
  return (
    <>
      <mesh position={[-22000, 0, 29250]}>
        <Html>
          <Wrapper active={active}>
            {watchData.map((data, i) => (
              <Row key={i}>
                <Youtube url={data} />
              </Row>
            ))}
          </Wrapper>
        </Html>
      </mesh>
    </>
  )
}

export default Watch
