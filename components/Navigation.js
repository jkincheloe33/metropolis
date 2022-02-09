import styled from 'styled-components'

import { FacebookIcon, InstagramIcon, SpotifyIcon, TikTokIcon, TwitterIcon, YoutubeIcon } from '@components'
import { colors, media } from '@global'

// prettier-ignore
const Bar = styled.div`
  background-color: ${colors.white};
  box-shadow: 0 0 5px ${colors.yellow};
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`

const Hamburger = styled.div`
  height: 25px;
  position: relative;
  width: 32px;
`

const HamburgerWrapper = styled.div`
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 20px;
  transition: transform 1000ms ease;
  // needed to be over react/three-drei Html
  z-index: 20000000;

  &:hover {
    transform: scale(1.2);
  }
`

const Icons = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  opacity: ${p => (p.open ? 1 : 0)};
  transform: ${p => (p.open ? 'translateX(0)' : 'translateX(100%)')};
  transition: opacity 500ms ease-in-out, transform 1500ms cubic-bezier(0.77, 0, 0.175, 1);

  a {
    &:not(:first-of-type) {
      margin-left: 8px;
    }
  }

  svg {
    width: 35px;
  }
`

const Logo = styled.img`
  left: 18px;
  opacity: ${p => (p.open ? 1 : 0)};
  position: absolute;
  top: 12px;
  transform: ${p => (p.open ? 'translateX(0)' : 'translateX(300px)')};
  transition: all 1500ms ease;
  width: 40px;
  z-index: 20000001;
`

const Main = styled.div`
  align-items: flex-end;
  background-color: ${colors.black}D9;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: ${p => (p.open ? 1 : 0)};
  padding-right: 29px;
  transform: ${p => (p.open ? 'translateX(0)' : 'translateX(100%)')};
  transition: opacity 500ms ease-in-out, transform 1000ms cubic-bezier(0.77, 0, 0.175, 1);
  width: 100%;
`

const NavItem = styled.p`
  color: ${colors.yellow};
  cursor: pointer;
  font-size: 65px;
  margin-bottom: 35px;
  opacity: ${p => (p.open ? 1 : 0)};
  transform: ${p => (p.open ? 'translateX(0)' : 'translateX(200%)')};
  transform-origin: center right;
  transition: all 1500ms ease;

  &:hover {
    text-shadow: 0 0 10px ${colors.yellow};
    transform: scale(1.1);
    transition: all 500ms ease;
    transition-delay: 0;
  }

  ${media.down.md`
    font-size: 50px;
  `}
`

const Wrapper = styled.div`
  height: 100%;
  max-width: 500px;
  opacity: ${p => (p.open ? 1 : 0)};
  pointer-events: ${p => (p.open ? 'auto' : 'none')};
  position: fixed;
  right: 0;
  top: 0;
  transition: all 500ms cubic-bezier(0.7, 0, 0.5, 0.5);
  width: 100%;
  // needed to be over react/three-drei Html
  z-index: 20000000;
`

const Navigation = ({ angles, handlePosition, open, setOpen }) => {
  const handleClick = (location, text) => {
    handlePosition(location, text)
    setOpen(false)
  }

  return (
    <>
      <Wrapper open={open}>
        <Container open={open}>
          <Logo alt='logo' open={open} src='./static/img/Logo-White.png' />
          <Main open={open}>
            {angles.map(({ location, text }, i) => (
              <NavItem index={i} key={i} onClick={() => handleClick(location, text)} open={open}>
                {text}
              </NavItem>
            ))}
            <a href='https://velocityrecords.com/collections/glasslands' target='_blank'>
              <NavItem index={angles.length} open={open}>
                Pre-order
              </NavItem>
            </a>
            <Icons open={open}>
              <a href='https://instagram.com/glasslandsband' target='_blank'>
                <InstagramIcon color={colors.white} />
              </a>
              <a href='https://www.tiktok.com/@glasslands' target='_blank'>
                <TikTokIcon color={colors.white} />
              </a>
              <a href='https://twitter.com/glasslandsband' target='_blank'>
                <TwitterIcon color={colors.white} />
              </a>
              <a href='https://facebook.com/glasslandsofficial' target='_blank'>
                <FacebookIcon color={colors.white} />
              </a>
              <a href='https://youtube.com/glasslands' target='_blank'>
                <YoutubeIcon color={colors.white} />
              </a>
              <a href='https://open.spotify.com/artist/1uaz4cRw5clcnWJIswU6Jy?si=oAJCPq_eSCesLF3iKBLrHA' target='_blank'>
                <SpotifyIcon color={colors.white} />
              </a>
            </Icons>
          </Main>
        </Container>
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
