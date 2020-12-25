import React from 'react'
import styled from 'styled-components'

const RecentCard = () => {
  return (
    <StyledCard>
      <img src='/img/maricel_01.jpg' alt='maricel' />
      <div className='text'>
        <h3>Proyect Name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, itaque
          cumque. Explicabo error nostrum provident debitis possimus similique
          quas sequi reprehenderit!
        </p>
      </div>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  color: black;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  .text {
    padding: 1.2rem;
    padding-top: 0;
    margin-top: 0;
    h3 {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }
    p {
      padding-bottom: 1rem;
    }
  }
  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
`

export default RecentCard
