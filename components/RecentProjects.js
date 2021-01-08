import React from 'react'
import styled from 'styled-components'
import RecentCard from './RecentCard'
import Link from 'next/link'

const RecentProjects = ({ recentPosts }) => {
  return (
    <StyledRecent>
      <h2>
        Proyectos <span>Recientes</span>
      </h2>
      <div className='cards'>
        {recentPosts.map((post) => (
          <RecentCard post={post} />
        ))}
      </div>
      <Link href='/projects'>
        <a className='more-projects'>
          <span>Más Proyectos</span>
        </a>
      </Link>
    </StyledRecent>
  )
}

const StyledRecent = styled.div`
  /* min-height: 90vh; */
  background: url('/img/lines.svg'),
    linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.9)
    ),
    linear-gradient(283.61deg, #ff7b00 -1.26%, #cc00ff 100%);
  /* color: #cc00ff; */
  background: #050505;
  color: white;
  background-size: cover;
  background-position: center center;
  h2 {
    /* text-align: end; */
    padding: 3rem 10%;
    text-transform: uppercase;
    span {
      border-bottom: 2px solid #ffffff;
    }
  }
  .more-projects {
    display: inline-block;
    text-align: left;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.3s ease;
    padding: 3rem;
    padding-left: 10%;

    span {
      border-bottom: 1px solid rgba(255, 255, 255, 0);
      transition: all 1s ease;
    }
    &:hover {
      opacity: 1;
      span {
        border-bottom: 1px solid rgba(255, 255, 255, 1);
      }
    }
  }
  .cards {
    display: grid;
    align-items: center;
    justify-content: space-between;
    min-height: 50%;
    grid-template-columns: repeat(2, minmax(15rem, 1fr));
    cursor: pointer;
    a {
      padding: 0;
    }
  }

  @media (max-width: 480px) {
    .cards {
      grid-template-columns: repeat(1, minmax(15rem, 1fr));
    }
  }
`

export default RecentProjects
