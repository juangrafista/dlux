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
          controls={false}
          config={{
            youtube: {
              playerVars: { modestbranding: 1 },
            },
          }}
        />
        <div className='gradient'></div>
      </div>
    </StyledVideo>
  )
}

const StyledVideo = styled.div`
  .player-wrapper {
    position: relative;
    padding-top: 45%;
    pointer-events: none;

    .gradient {
      position: absolute;
      width: 100%;
      height: 101%;
      top: 0;
      left: 0;
      background: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0) 20%),
        linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 20%);
    }

    @media (max-width: 800px) {
      padding-top: 60%;
    }
  }
  .react-player {
    position: absolute;
    top: 1px;
    left: 0;
  }
`

export default MainVideo
