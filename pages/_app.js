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
        <html lang='es' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='preload'
          as='style'
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;1,700&display=swap'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;1,700&display=swap'
          rel='stylesheet'
        />
        {/* Cresta adobe font */}
        {/* <link
          rel='stylesheet'
          href='https://use.typekit.net/mhz3oqv.css'
        ></link> */}
      </Head>
      <GlobalStyle />

      <Component {...pageProps} />
    </>
  )
}
