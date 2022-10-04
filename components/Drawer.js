import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { colors, media } from '@global'

const Close = styled.div`
  height: 20px;
  left: 20px;
  position: absolute;
  top: 20px;
  width: 20px;
`

const Content = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
`

const Wrapper = styled.div`
  background-color: #000000d9;
  height: 100%;
  left: 0;
  padding: 63px 20px 40px;
  position: fixed;
  top: 0;
  transform: translateX(${p => (p.open ? 0 : '100%')});
  transition: all 500ms cubic-bezier(0.7, 0, 0.5, 0.5);
  transition-delay: ${p => (p.delay ? '1000ms' : 0)};
  width: 100%;
  z-index: 20000000;

  ${p => media.up.lg`
    opacity: ${p.open ? 1 : 0};
    pointer-events: ${p => (p.open ? 'auto' : 'none')};
    transform: translateX(0);
  `}
`

const X = styled.div`
  position: relative;

  &::before, &::after {
    background-color: ${colors.white};
    border-radius: 5px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(45deg) translate(6px, 8px);
    width: 20px;
  }

  &::after {
    transform: rotate(-45deg) translate(-8px, 6px);
  }
`

const Drawer = ({ active, component, handleClose, open, showNavigation }) => {
  const [delay, setDelay] = useState(false)

  useEffect(() => {
    if (open) setDelay(true)
    else setDelay(false)
  }, [open])

  return (
    <Wrapper delay={delay && !showNavigation} open={open && !showNavigation}>
      {active !== 3 && (
        <Close onClick={handleClose}>
          <X />
        </Close>
      )}
      <Content>
        {component && component}
      </Content>
    </Wrapper>
  )
}

export default Drawer
