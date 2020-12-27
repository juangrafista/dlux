import React, { useEffect } from 'react'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
