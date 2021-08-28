import styled from 'styled-components'

import { colors } from '@global'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  height: 100%;
  left: 0;
  opacity: ${p => (p.open ? 0.85 : 0)};
  overflow: auto;
  pointer-events: ${p => (p.open ? 'auto' : 'none')};
  position: fixed;
  top: 0;
  /* transform: ${p => (p.open ? 'translate(0, 0)' : 'translate(0, 0)')}; */
  width: 100%;
  z-index: 1;
`

const Drawer = ({ children, handleClose, open }) => {
  return (
    <Wrapper open={open}>
      <h1>Base</h1>
    </Wrapper>
  )
}

export default Drawer
