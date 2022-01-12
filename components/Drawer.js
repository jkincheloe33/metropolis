import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Scramble } from '@components'
import { api, colors, media, tempDates } from '@global'

const Column = styled.div`
  flex: 1;
  padding-right: 30px;

  h2 {
    color: ${colors.yellow};
    font-size: 60px;
    line-height: 47px;
    margin-bottom: 35px;
  }

  img {
    width: 100%;
  }

  ${media.down.lg`
    display: none;
  `}
`

const Content = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
`

const Date = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 27px;
  }
`

const TourDates = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 500px;
  overflow: auto;
  width: 100%;
  // scrollbars
  -ms-overflow-style: none; /* Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  ${media.up.lg`
    flex: 0 0 350px;
  `}
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
  z-index: 1;

  ${p => media.up.lg`
    opacity: ${p.open ? 1 : 0};
    pointer-events: ${p => (p.open ? 'auto' : 'none')};
    transform: translateX(0);
  `}
`

const Drawer = ({ open, showNavigation }) => {
  const [dates, setDates] = useState([])
  const [delay, setDelay] = useState(false)

  useEffect(() => {
    if (open) setDelay(true)
    else setDelay(false)
  }, [open])

  useEffect(() => {
    const getTourDates = async () => {
      const {
        data: { data, success },
      } = await api.get('/getTourDates')

      if (success) setDates(data)
    }

    getTourDates()
  }, [])

  return (
    <Wrapper delay={delay && !showNavigation} open={open && !showNavigation}>
      <Content>
        <Column>
          <h2>Tour Dates</h2>
          <img alt='' src='./static/img/small-cover.png' />
        </Column>
        <TourDates>
          {dates.length > 0 ? (
            dates.map(({ datetime, url, venue }, i) => (
              <Date key={i}>
                <Scramble link={url} open={open} text={`${venue.location}`} />
                <Scramble link={url} open={open} text={datetime.split('T')[0]} />
              </Date>
            ))
          ) : (
            <Scramble open={open} text='No current tour dates' />
          )}
        </TourDates>
      </Content>
    </Wrapper>
  )
}

export default Drawer
