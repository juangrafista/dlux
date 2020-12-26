import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className='first'>
          <section>
            <h2>
              Especialistas en Projection Mapping.
              <br />
              Más de 15 años innovando en el mercado español.
            </h2>
            <div className='social'></div>
          </section>
          <section className='sitemap'>
            <Link href='/'>
              <a>Projectos</a>
            </Link>
            <Link href='/'>
              <a>About Us</a>
            </Link>
            <Link href='/'>
              <a>Contacto</a>
            </Link>
          </section>
        </div>
        <hr />
        <div className='copy'>
          &copy; 2020 dLux | Todos los derechos reservados
        </div>
      </StyledFooter>
    </>
  )
}

const StyledFooter = styled.div`
  padding: 2rem 10%;
  hr {
    opacity: 50%;
  }
  .first {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
    .sitemap {
      margin-top: 1rem;
      a {
        padding-left: 2rem;
        opacity: 50%;
        &:hover {
          opacity: 100%;
        }
      }
    }
  }
  .copy {
    margin-top: 2rem;
    text-align: center;
    opacity: 50%;
  }
`

export default Footer
