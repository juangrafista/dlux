import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className='first'>
          <section className='title'>
            <h2>
              Especialistas en Projection Mapping.
              <br />
              Más de 15 años innovando en el mercado español.
            </h2>
            <div className='social'></div>
          </section>
          <section className='sitemap'>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/projects'>
              <a>Proyectos</a>
            </Link>
            <Link href='/about'>
              <a>About Us</a>
            </Link>
            <Link href='/contact'>
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
    .title {
      flex: 4 1 30rem;
    }
    .sitemap {
      flex: 1 1 20rem;
      margin-top: 1rem;
      display: flex;
      justify-content: space-around;
      /* background-color: lightblue; */
      a {
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
