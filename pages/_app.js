import { GlobalStyles } from '@global'

function GlasslandsApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default GlasslandsApp
