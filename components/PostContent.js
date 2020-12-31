import React from 'react'
import { urlFor } from '../lib/sanity'
import BlockContent from '@sanity/block-content-to-react'

import ReactPlayer from 'react-player'

import styled from 'styled-components'

const PostContent = ({ content }) => {
  const serializers = {
    types: {
      image: ({ node }) => {
        return (
          <div className='post-image'>
            <img src={urlFor(node.asset.url).auto('format').url()} />
          </div>
        )
      },
      youtube: ({ node }) => {
        const { url } = node

        return (
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url={url}
              width='100%'
              height='100%'
              muted={true}
              playing={true}
              controls={true}
            />
          </div>
        )
      },
      vimeo: ({ node }) => {
        const { url } = node

        return (
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url={url}
              width='100%'
              height='100%'
              muted={true}
              playing={true}
              controls={true}
            />
          </div>
        )
      },
    },
  }

  return (
    <StyledContent>
      <BlockContent
        imageOptions={{ w: 300, h: 240, fit: 'max' }}
        serializers={serializers}
        blocks={content}
      />
    </StyledContent>
  )
}

const StyledContent = styled.div`
  padding: 2rem 10%;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    padding: 3rem 0;
  }
  blockquote {
    background-color: #131313;
    border-left: 4px solid white;
    padding: 2rem 2rem;
    margin: 2rem 0;
    display: inline-block;
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
