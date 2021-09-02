import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@global'

const VideoWrapper = styled.iframe`
  display: block;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`

const Wrapper = styled.div`
  box-shadow: 0 0 15px ${colors.berry};
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  width: 100%;
`

const Youtube = ({ autoplay, className, url }) => {
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
        title='Youtube'
      />
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
