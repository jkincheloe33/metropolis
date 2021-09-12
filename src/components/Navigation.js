import { useState } from 'react'
import styled from 'styled-components'

import { colors } from '@global'

// prettier-ignore
const Bar = styled.div`
  background-color: ${colors.white};
  border-radius: 12px;
  height: 2px;
  left: 0;
  position: absolute;
  top: 0;
  transform-origin: top left;
  transition: transform 250ms ease;
  width: 100%;

  &:nth-of-type(2) {
    top: 50%;
    transform: scale(1) translateY(-50%);
  }

  &:last-of-type {
    bottom: 0;
    top: auto;
  }

  ${p => p.open && `
    transform: rotate(45deg);

    &:nth-of-type(2) {
      transform: scaleX(0) translateY(-50%);
      transform-origin: center left;
    }

    &:last-of-type {
      transform: rotate(-45deg) translateY(-1px);
      transform-origin: bottom left;
    }
  `}
`

const Hamburger = styled.div`
  height: 19px;
  position: relative;
  width: 24px;
`

const HamburgerWrapper = styled.div`
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 2;
`

const NavItem = styled.p`
  color: ${colors.yellow};
  cursor: pointer;
  font-size: 20px;
  margin-right: 10px;
  text-shadow: 0 0 20px ${colors.yellow};
`

const Wrapper = styled.div`
  background-color: green;
  height: 100%;
  left: 0;
  opacity: ${p => (p.open ? 1 : 0)};
  position: fixed;
  top: 0;
  transform: ${p => (p.open ? 'rotate3d(0, 0, 0, 0deg) translateX(0)' : 'rotate3d(0, 1, 0, 90deg) translateX(100%)')};
  transition: all 500ms ease;
  width: 100%;
  z-index: 2;
`

const Navigation = ({ angles, handlePosition }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Wrapper open={open}>
        {angles.map(({ location, text }, i) => (
          <NavItem key={i} onClick={() => handlePosition(location, text)}>
            {text}
          </NavItem>
        ))}
      </Wrapper>
      <HamburgerWrapper>
        <Hamburger onClick={() => setOpen(open => !open)}>
          <Bar open={open} />
          <Bar open={open} />
          <Bar open={open} />
        </Hamburger>
      </HamburgerWrapper>
    </>
  )
}

export default Navigation
