import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const HeroSection = () => {
  return (
    <Hero>
      <div className='image-container'>
        {/* <Image
          src='/img/maricel_01.jpg'
          alt='bg-image'
          layout='fill'
          objectFit='cover'
          loading='eager'
          priority
          quality={50}
        /> */}
        <video autoPlay='autoplay' muted loop playsInline id='myVideo'>
          <source src='videos/trimmed-up.mp4' type='video/mp4' />
        </video>
        <div className='text'>
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
        </div>
      </div>
    </Hero>
  )
}

const Hero = styled.div`
  .image-container {
    width: 100%;
    height: 100%;
    min-height: 90vh;
    overflow: hidden;
    position: relative;
    /* z-index: -1; */
  }
  #myVideo {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
  .text {
    position: absolute;
    width: 100%;
    height: 100%;

    padding: 4rem 10%;
    background: linear-gradient(
        117.07deg,
        #000000 2.69%,
        rgba(0, 0, 0, 0) 59.15%
      ),
      linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 43.51%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 10rem;
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
      /* text-transform: uppercase; */
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
  }
  @media (max-width: 800px) {
    .text {
      /* padding: 0 5%; */
      padding-bottom: 10rem;
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
  }
  @media (max-height: 600px) {
    .image-container {
      min-height: 400px;
    }
    .text {
      padding-bottom: 4rem;
    }
  }
`

export default HeroSection
