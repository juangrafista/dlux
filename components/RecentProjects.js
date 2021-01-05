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
          Más Proyectos{' '}
          <span>
            <svg
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.84327 5.14711L15.5933 9.04423C16.5933 9.62158 16.5933 11.065 15.5933 11.6423L8.84327 15.5394C7.84327 16.1168 6.59327 15.3951 6.59327 14.2404L6.59327 6.44616C6.59327 5.29145 7.84327 4.56976 8.84327 5.14711Z'
                stroke='white'
                strokeWidth='2'
              />
            </svg>
          </span>
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
  /* background: white; */
  padding: 2rem 10%;
  background-size: cover;
  background-position: center center;

  h2 {
    /* text-align: end; */
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    span {
      border-bottom: 4px solid white;
    }
  }
  .more-projects {
    display: inline-block;
    text-transform: uppercase;
    padding: 2rem 0;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.3s ease;
    svg {
      transform: translateY(2px) translateX(-5px);
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }
    &:hover {
      opacity: 1;
      svg {
        transform: translateY(2px) translateX(0px);
        opacity: 1;
      }
    }
  }
  .cards {
    display: grid;
    align-items: center;
    justify-content: space-between;
    min-height: 50%;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 1rem;
    cursor: pointer;
    a {
      padding: 0;
    }
  }

  @media (max-width: 800px) {
    padding: 1rem 5%;
  }
  @media (max-width: 400px) {
    .cards {
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
  }
`

export default RecentProjects
