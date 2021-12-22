// import Head from 'next/Head'
import styled from 'styled-components'

import { CityScene } from '@components'

const Wrapper = styled.div`
  height: 100vh;
`

export default function Home() {
  return (
    <Wrapper>
      {/* <Head>
        <title>Glasslands</title>
        <link rel='icon' href='/favicon.ico' />

        <meta charSet='utf-8' />
        <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='Glasslands' content='Web site created using create-react-app' />
      </Head> */}
      <CityScene />
    </Wrapper>
  )
}
