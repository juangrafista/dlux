import React from 'react'
import Testimony from './Testimony'
import styled from 'styled-components'

const Testimonies = () => {
  return (
    <StyledTestimonies>
      <h2>Lo que dicen de nosotros</h2>
      <div className='cards'>
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
      </div>
    </StyledTestimonies>
  )
}

const StyledTestimonies = styled.div`
  background-color: #e9e9e9;
  color: black;
  width: 100%;
  padding: 3rem 10%;
  h2 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    grid-gap: 1rem;
  }
`

export default Testimonies
