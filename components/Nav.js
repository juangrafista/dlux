import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'

const Nav = () => {
  return (
    <>
      <ColorLine />
      <StyledNav>
        <div className='logo'>
          <Link href='/'>
            <a>
              <Image
                src='/dlux-logo.jpg'
                alt='dlux-logo'
                width={138}
                height={77}
                priority
              />
            </a>
          </Link>
        </div>
        <div className='links'>
          <Link href='/projects'>
            <a>Proyectos</a>
          </Link>
          <Link href='/'>
            <a>About Us</a>
          </Link>
          <Link href='/'>
            <a>Contacto</a>
          </Link>
        </div>
      </StyledNav>
      <WhiteLine />
    </>
  )
}

const ColorLine = styled.nav`
  height: 0.1rem;
  background: linear-gradient(90deg, #ff7a00 0%, #cc00ff 100%);
`

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  min-height: 10vh;
  align-items: center;
  justify-content: space-between;
  margin: 0 10%;
  .logo {
    flex: 1 1 20rem;
    img {
      height: 5vh;
    }
  }
  .links {
    flex: 1 1 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      opacity: 50%;
      &:hover {
        opacity: 100%;
        color: #ff7300;
      }
    }
  }
  a {
    font-weight: lighter;
  }
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    margin: 0.5rem 5%;
    .logo {
      display: flex;
      justify-content: center;
      img {
        justify-content: center;
        align-items: center;
      }
    }
  }
`
const WhiteLine = styled.div`
  height: 1px;
  width: 80%;
  background: linear-gradient(
    90deg,
    #000000 0%,
    rgba(255, 255, 255, 0.5) 10%,
    #000000 100%
  );
`

export default Nav
