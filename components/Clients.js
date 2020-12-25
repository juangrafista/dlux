import React from 'react'
import styled from 'styled-components'

const Clients = () => {
  return (
    <StyledClients>
      <h2>Clientes</h2>
      <p>Algunos de nuestros clientes en más de cinco países</p>
      <Logos>
        <img src='/logos/tve_blue.png' alt='logo' />
        <img src='/logos/teatro-real.svg' alt='logo' />
        <div className='opera'>
          <img src='/logos/opera-paris.png' alt='logo' id='opera' />
        </div>
        <img src='/logos/tve_blue.png' alt='logo' />
        <img src='/logos/tve_blue.png' alt='logo' />
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
