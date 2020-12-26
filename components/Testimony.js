import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Testimony = () => {
  return (
    <StyledTestimony>
      <img src='/img/testimonios/miguel del arco.jpg' alt='testimonios' />
      <div className='text'>
        <div className='name'>Miguel del Arco</div>
        <div className='position'>Dramaturgo</div>
        <p>
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
          nesciunt, doloribus repellat ad expedita quaerat. Sunt magnam
          consequatur amet alias."
        </p>
      </div>
    </StyledTestimony>
  )
}

const StyledTestimony = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    object-position: center top;
    border-radius: 20% 0% 20% 0%;
  }
  .text {
    padding: 0rem 3rem 0rem 1rem;
    p {
      padding-top: 0.5rem;
      /* font-size: 0.8rem; */
    }
  }
  .name {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
  }
  .position {
    font-size: 0.8rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    img {
      padding-bottom: 1rem;
    }
  }
`

const Photo = styled.div`
  overflow: hidden;
  border-radius: 20% 0% 20% 0%;
`

export default Testimony
