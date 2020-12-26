import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = () => {
  return (
    <>
      <ColorLine />
      <StyledNav>
        <div className='logo'>
          <Link href='/'>
            <a>
              <img src='/dlux-logo.jpg' alt='dlux-logo' />
            </a>
          </Link>
        </div>
        <div className='links'>
          <Link href='/'>
            <a>Projectos</a>
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
    opacity: 50%;
  }
  a {
    font-weight: lighter;
  }
  @media (max-width: 710px) {
    justify-content: center;
    align-items: center;
    margin: 0 5%;
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
