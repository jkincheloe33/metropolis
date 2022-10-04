import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styled from 'styled-components'

const VideoWrapper = styled.iframe`
  display: block;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  touch-action: auto;
`

const Wrapper = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  width: 100%;
`

const Youtube = ({ autoplay, className, url }) => {
  const ref = useRef(null)

  // gets the ID and concats to the embed URL format
  const getEmbedLink = (autoplay, url) => {
    const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/
    const embed = url.match(regExp)
    if (!embed) {
      console.warn('The YouTube component on this page cannot parse the provided url.')
      return
    }
    return `https://www.youtube.com/embed/${embed[1]}?controls=1${autoplay ? '&autoplay=1' : ''}&mute=1`
  }

  return (
    <Wrapper className={className}>
      <VideoWrapper
        src={getEmbedLink(autoplay, url)}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        ref={ref}
        title='Youtube'
      >
        <div />
      </VideoWrapper>
    </Wrapper>
  )
}

export const YoutubeType = {
  autoplay: PropTypes.bool,
  url: PropTypes.string,
}

Youtube.propTypes = {
  ...YoutubeType,
  className: PropTypes.string,
}

export default Youtube
