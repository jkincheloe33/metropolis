import { createGlobalStyle } from 'styled-components'
import resetCSS from './reset'

export * from './theme'

export const GlobalStyles = createGlobalStyle`
  body {
    overflow-x: hidden;

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;900&display=swap');
    h1, h2, h3, h4, h5, h6, p, a {
      font-family: 'Poppins', sans-serif;
    }
  }
  body,
  html {
    background-color: black !important;
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
