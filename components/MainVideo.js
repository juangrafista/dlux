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
          loop={true}
          controls={true}
        />
      </div>
    </StyledVideo>
  )
}

const StyledVideo = styled.div`
  .player-wrapper {
    position: relative;
    padding-top: 45%;

    @media (max-width: 800px) {
      padding-top: 60%;
    }
  }
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export default MainVideo
