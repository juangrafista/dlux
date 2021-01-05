import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Clients = () => {
  return (
    <StyledClients>
      <h2>Clientes</h2>
      <p>Algunos de nuestros clientes en más de cinco países</p>
      <Logos>
        <Image
          src='/logos/tve_blue.png'
          alt='logo'
          width={100}
          height={77}
          quality={50}
        />
        <Image
          src='/logos/teatro-real.svg'
          alt='logo'
          width={100}
          height={77}
        />
        <div className='opera'>
          <Image
            src='/logos/opera-paris.png'
            alt='logo'
            id='opera'
            width={140}
            height={77}
            quality={50}
          />
        </div>
        <Image
          src='/logos/tve_blue.png'
          alt='logo'
          width={100}
          height={77}
          quality={50}
        />
        <Image
          src='/logos/tve_blue.png'
          alt='logo'
          width={100}
          height={77}
          quality={50}
        />
      </Logos>
    </StyledClients>
  )
}
const StyledClients = styled.div`
  text-align: center;
  padding: 2rem 10%;
  h2 {
    text-transform: uppercase;
  }
  p {
    padding: 2rem 0;
  }
`
const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  img {
    max-height: 6rem;
    max-width: 8rem;
  }
  .opera {
    filter: invert(100%);
    -webkit-filter: invert(100%);
  }
`

export default Clients
