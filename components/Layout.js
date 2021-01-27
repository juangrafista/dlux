import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ preview, children }) => {
  return (
    <>
      {preview ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          This is a preview.{' '}
          <a href='/api/exit-preview' style={{ color: 'red' }}>
            Click here
          </a>{' '}
          to exit preview mode.
        </div>
      ) : (
        <></>
      )}
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
