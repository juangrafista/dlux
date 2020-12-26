import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const HeroSection = () => {
  return (
    <Hero>
      <h1>
        CREAMOS <br />
        REALIDADES
        <br /> CON <span>LUZ</span>
      </h1>
      <h2>
        Especialistas en Projection Mapping.
        <br />
        Creamos Soluciones para <br />
        Teatro, Eventos y Espectáculos.
      </h2>
      <button>Contáctanos</button>
    </Hero>
  )
}

const Hero = styled.div`
  min-height: 90vh;
  background: linear-gradient(117.07deg, #000000 2.69%, rgba(0, 0, 0, 0) 59.15%),
    linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 43.51%),
    url('/img/maricel_01.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10%;
  padding-bottom: 4rem;
  h1 {
    font-size: 4rem;
    line-height: 100%;
    font-weight: 600;
    span {
      font-style: italic;
      background: linear-gradient(90deg, #ff7a00 0%, #cc00ff 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  h2 {
    font-weight: 400;
    line-height: 150%;
    font-size: 1.5rem;
    opacity: 0.8;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
  }
  button {
    display: block;
    padding: 1rem 2rem;
    border-radius: 4rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(90deg, #ff7a00 0%, #cc00ff 100%);
    border: none;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background: linear-gradient(90deg, #ff7a00 0%, #cc00ff 100%);
    }
  }
  @media (max-width: 800px) {
    padding: 0 5%;
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1rem;
    }
    button {
      font-size: 1.2rem;
    }
  }
`

export default HeroSection
