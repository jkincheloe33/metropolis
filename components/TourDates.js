import { forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Scramble } from '@components'
import { api, colors, media } from '@global'

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

const Date = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 27px;
  }
`

const Dates = styled.div`
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

const TourDates = forwardRef((_, ref) => {
  const [dates, setDates] = useState([])

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
    <>
      <Column>
        <h2>Tour Dates</h2>
        <img alt='' src='./static/img/live.JPG' />
      </Column>
      <Dates ref={ref}>
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
      </Dates>
    </>
  )
})

TourDates.displayName = 'TourDates'

export default TourDates