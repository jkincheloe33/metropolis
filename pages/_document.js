import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.ico?v=1' />
          <title>Glasslands</title>
          {/* <link rel='icon' href='/favicon.ico' /> */}

          <meta charSet='utf-8' />
          {/* <link rel='icon' href='%PUBLIC_URL%/favicon.ico' /> */}
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
