import React from 'react'
import styled from 'styled-components'
import { urlFor } from '../lib/sanity'
import Link from 'next/link'

const ProjectCard = ({ post }) => {
  return (
    <Link href={`/proyects/${post.slug}`}>
      <a>
        <StyledCard>
          <img
            src={urlFor(post.mainImage).width(400).format('webp').url()}
            alt={post.title}
          />
          <div className='text'>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        </StyledCard>
      </a>
    </Link>
  )
}

const StyledCard = styled.div`
  /* background: white; */
  border-radius: 10px;
  overflow: hidden;
  color: black;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  .text {
    padding: 1.2rem;
    padding-top: 0;
    margin-top: 0;
    background-color: white;
    h3 {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }
    p {
      padding-bottom: 1rem;
    }
  }
  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  @media (max-width: 800px) {
    .text {
      padding: 0.5rem;
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

export default ProjectCard
