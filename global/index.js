import { createGlobalStyle } from 'styled-components'
import resetCSS from './reset'

export * from './data'
export * from './theme'
export * from './utils'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Digital-7';
    src: local('Digital-7'), url(./static/text/digital-7.ttf) format('truetype');
  }

  body {
    overflow-x: hidden;

    /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;900&display=swap'); */

    h1, h2, h3, h4, h5, h6, p, a, button {
      font-family: 'Digital-7', sans-serif;
    }
  }
  body,
  html {
    background-color: black !important;
    height: 100%;
    min-height: 100vh;
		// for IOS Mobile to account for navigation bars...JK
		min-height: -webkit-fill-available;
		overflow-x: hidden;
		overflow-y: hidden;
    position: fixed;
    width: 100%;

    #__next {
      height: 100%;
    }
  }

  #root,
  body,
  html,
  canvas {
    height: 100%;
    width: 100%;
  }
  ${resetCSS}
`
