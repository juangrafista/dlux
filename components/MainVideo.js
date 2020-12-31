import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const MainVideo = ({ video }) => {
  return (
    <StyledVideo>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={video}
          width='100%'
          height='100%'
          muted={true}
          playing={true}
          controls={false}
        />
      </div>
    </StyledVideo>
  )
}

const StyledVideo = styled.div`
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

export default MainVideo
