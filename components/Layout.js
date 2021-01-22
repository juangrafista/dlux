import React, { useEffect } from 'react'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>dLux | Especialistas en Projection Mapping</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
