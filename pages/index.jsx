import Head from 'next/Head'
import styled from 'styled-components'

const Wrapper = styled.div``

export default function Index() {
  return (
    <Wrapper>
      <Head>
        <title>Glasslands Next App</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}

        <meta charSet='utf-8' />
        {/* <link rel='icon' href='%PUBLIC_URL%/favicon.ico' /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='Glasslands' content='Web site created using create-react-app' />
      </Head>

      <h1>Base</h1>
    </Wrapper>
  )
}
