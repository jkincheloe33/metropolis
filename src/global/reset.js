// eslint-disable-next-line import/no-anonymous-default-export
export default `
  *,
  *::after,
  *::before {
    -webkit-tap-highlight-color: transparent;
    box-sizing: inherit;
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    font-size: 100%;
    text-size-adjust: 100%;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  time,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  main {
    display: block;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    font-feature-settings: 'liga', 'kern';
    background: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  html {
    box-sizing: border-box;
  }
  body {
    font: inherit;
    line-height: 1;
    letter-spacing: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    font: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    color: inherit;
  }
  sup,
  sub {
    position: static !important;
    margin: 0;
    padding: 0;
    font: inherit !important;
    color: inherit;
    line-height: inherit !important;
    letter-spacing: inherit;
    text-transform: none;
    top: auto !important;
    left: auto;
    right: auto;
    bottom: auto;
    vertical-align: unset !important;
  }
  a {
    text-decoration: none;
  }
  ul,
  ol,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  label {
    cursor: default;
  }
  input,
  select,
  button,
  textarea {
    appearance: none;
    background: none;
    box-shadow: none;
    border-radius: 0;
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
  }
`
