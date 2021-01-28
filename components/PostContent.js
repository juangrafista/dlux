import React from 'react'
import styled from 'styled-components'
import { PortableText } from '../lib/sanity'

const PostContent = ({ content }) => {
  return (
    <StyledContent>
      <PortableText
        imageOptions={{ w: 300, h: 240, fit: 'max' }}
        blocks={content}
      />
    </StyledContent>
  )
}

const StyledContent = styled.div`
  padding: 2rem 5%;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    padding-bottom: 1.4rem;
    width: 80%;
    margin: 0 auto;
    line-height: 2;
  }
  h1,
  h2,
  h3,
  h4 {
    padding-bottom: 2rem;
  }
  blockquote {
    background-color: #131313;
    border-left: 4px solid white;
    padding: 2rem 2rem 3rem 2rem;
    margin: 0rem 0;
    display: inline-block;
    font-style: italic;
  }
  h6 {
    padding-bottom: 2rem;
    opacity: 80%;
    font-size: 0.8rem;
    transform: translateY(-1.6rem);
  }
  img {
    max-width: 100%;
  }
  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    margin-bottom: 4rem;
  }
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export default PostContent
