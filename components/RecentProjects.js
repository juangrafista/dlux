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
        {recentPosts.map((post, index) => (
          <RecentCard post={post} key={index} />
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
    opacity: 0.7;
    transition: all 0.3s ease;
    margin: 3rem;
    margin-left: 10%;

    span {
      border-bottom: 1px solid rgba(255, 255, 255, 0);
      transition: all 1s ease;
      cursor: pointer;

      &:hover {
        opacity: 1;
        border-bottom: 1px solid rgba(255, 255, 255, 1);
      }
    }
  }
  .cards {
    width: 90%;
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: space-between;
    min-height: 50%;
    grid-template-columns: repeat(2, minmax(15rem, 1fr));
    /* gap: 1rem; */
    cursor: pointer;
    a {
      padding: 0;
    }
  }

  @media (max-width: 480px) {
    .cards {
      grid-template-columns: repeat(1, minmax(15rem, 1fr));
      gap: 0rem;
      width: 100%;
    }
  }
`

export default RecentProjects
