import { createGlobalStyle } from 'styled-components'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: black;
    color: white;
    width: 100wh;
    font-family: 'Montserrat', sans-serif; 
  }
  
  a{
    text-decoration: none;
    color: white;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>dLux | Especialistas en Projection Mapping</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
