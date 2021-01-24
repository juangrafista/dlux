import React from 'react'
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import styled from 'styled-components'
import Image from 'next/image'

const Nav = () => {
  return (
    <>
      <style jsx>{`
        .nav-link {
          text-decoration: none;
        }
        .active {
          content: ' (current page)';
          color: #ff7300;
          opacity: 1;
        }
      `}</style>
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
                quality={50}
                priority
              />
            </a>
          </Link>
        </div>
        <ul className='links'>
          <li>
            <ActiveLink href='/projects' activeClassName='active'>
              <a className='nav-link'>Proyectos</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href='/about' activeClassName='active'>
              <a className='nav-link'>About Us</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href='/contact' activeClassName='active'>
              <a className='nav-link'>contacto</a>
            </ActiveLink>
          </li>
        </ul>
      </StyledNav>
      {/* <WhiteLine /> */}
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
  padding: 0rem 10%;
  .logo {
    flex: 1 1 20rem;
    img {
      height: 35px;
    }
  }
  .links {
    flex: 1 1 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    a {
      opacity: 50%;
      text-transform: uppercase;

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
      padding-bottom: 0.5rem;
      img {
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (max-width: 500px) {
    margin: 0.5rem 2%;
    padding: 0rem 2%;
    font-size: 0.8rem;
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
