import React from 'react'
import styled from 'styled-components'
import { urlFor } from '../lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import Date from './Date'

const ProjectCard = ({ post }) => {
  return (
    <Link href={`/projects/${post.slug}`}>
      <a>
        <StyledCard>
          <div className='img-container'>
            <Image
              src={urlFor(post.mainImage).width(1100).format('webp').url()}
              alt={post.title}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='text'>
            <div className='title'>
              {post.releaseDate && <Date dateString={post.releaseDate} />}
              <h3 id='title'>{post.title}</h3>
            </div>
            <p>{post.excerpt}</p>
          </div>
        </StyledCard>
        {/* <WhiteLine /> */}
      </a>
    </Link>
  )
}

const StyledCard = styled.div`
  /* background: white; */
  overflow: hidden;
  color: black;
  cursor: pointer;
  img {
    opacity: 0.8;
    transition: all 2s ease;
    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
  }
  .text {
    padding: 2rem 0rem;
    padding-top: 1rem;
    color: white;
    .title {
      padding-bottom: 1rem;
      time {
        font-size: 0.8rem;
        padding-bottom: 0.5rem;
        opacity: 0.5;
        display: block;
      }
    }
    h3 {
      font-size: 1.5rem;
      opacity: 0.8;
      display: inline;
      &:hover {
        opacity: 1;
      }
    }
    p {
      opacity: 0.8;
    }
  }
  .img-container {
    height: 50vh;
    object-fit: cover;
    position: relative;
  }
  @media (max-width: 800px) {
    .img-container {
      height: 40vh;
    }
    .text {
      padding: 0.5rem 2rem;
      h3 {
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
      }
      p {
        padding-bottom: 0.5rem;
      }
    }
    img {
      height: 8rem;
    }
  }
`
const WhiteLine = styled.div`
  height: 1px;
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  background: linear-gradient(
    90deg,
    #000000 0%,
    rgba(255, 255, 255, 0.5) 50%,
    #000000 100%
  );
`

export default ProjectCard
