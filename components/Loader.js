import styled, { keyframes } from 'styled-components'

import { colors } from '@global'

const grow = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); box-shadow: 0 0 10px ${colors.berry} }
  20% { transform: translate(-50%, -50%) rotate(0deg) scale(1); box-shadow: 0 0 10px ${colors.berry}; }
  50% { transform: translate(-50%, -50%) rotate(-360deg) scale(1.2); box-shadow: 0 0 25px ${colors.berry}; }
  100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); box-shadow: 0 0 10px ${colors.berry}; }
`

const spin = keyframes`
  0% { box-shadow: 0 0 25px ${colors.berry}; transform: rotate(0deg); }
  30% { transform: rotate(0deg); }
  50% { box-shadow: 0 0 20px ${colors.berry}; }
  100% { box-shadow: 0 0 25px ${colors.berry}; transform: rotate(360deg); }
`

const Spinner = styled.div`
  animation: ${spin} 2000ms cubic-bezier(0.79, 0.02, 0.18, 0.99) infinite forwards;
  background-color: ${colors.black};
  border: 2px solid ${colors.berry};
  border-radius: 50%;
  border-right-color: ${colors.black};
  border-left-color: ${colors.black};
  box-shadow: 0 0 25px ${colors.berry};
  height: 75px;
  position: relative;
  transition: transform 500ms cubic-bezier(0.79, 0.02, 0.18, 0.99);
  width: 75px;

  &::before,
  &::after {
    animation: ${grow} 2000ms cubic-bezier(0.79, 0.02, 0.18, 0.99) infinite forwards;
    border: 2px solid ${colors.berry};
    border-radius: 50%;
    content: '';
    left: 50%;
    position: absolute;
    top: 50%;
  }

  &::before {
    border-bottom-color: transparent;
    border-top-color: transparent;
    height: 90px;
    width: 90px;
  }

  &::after {
    animation-duration: 2500ms;
    border-left-color: transparent;
    border-right-color: transparent;
    height: 100px;
    width: 100px;
  }
`

const Text = styled.h1`
  color: ${colors.berry};
  font-size: 40px;
  padding: 50px 20px 0;
  text-align: center;
  transition: transform 500ms cubic-bezier(0.79, 0.02, 0.18, 0.99);
`

const Wrapper = styled.div`
  align-items: center;
  background-color: ${colors.black};
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  opacity: ${p => (p.visible ? 1 : 0)};
  pointer-events: ${p => (p.visible ? 'auto' : 'none')};
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 500ms ease;
  z-index: 20000001;
`

const Loader = ({ visible = false }) => {
  return (
    <Wrapper visible={visible}>
      <Spinner />
      <Text>Loading Glasslands</Text>
    </Wrapper>
  )
}

export default Loader
