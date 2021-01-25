import React from 'react'
import styled from 'styled-components'
import { urlFor } from '../lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import Date from './Date'

const RecentCard = ({ post }) => {
  return (
    <Link href={`/projects/${post.slug}`}>
      <a>
        <StyledCard>
          <div className='img-container'>
            <Image
              src={urlFor(post.mainImage).width(600).format('webp').url()}
              alt={post.title}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='text'>
            {post.releaseDate && <Date dateString={post.releaseDate} />}
            <h3>{post.title}</h3>
            <p className='excerpt'>{post.excerpt}</p>
          </div>
        </StyledCard>
      </a>
    </Link>
  )
}

const StyledCard = styled.div`
  overflow: hidden;
  color: black;
  transition: transform 0.2s ease;
  cursor: pointer;
  position: relative;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  .text {
    padding: 3rem;
    padding-top: 1.5rem;
    height: 6rem;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    opacity: 0.8;
    time {
      font-size: 0.8rem;
    }
    .excerpt {
      opacity: 0;
      padding-top: 0.5rem;
      font-size: 1rem;
      transition: opacity 1s ease;
    }
  }
  .img-container {
    overflow: hidden;
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
  }
  &:hover {
    opacity: 1;
    .text {
      opacity: 1;
    }
    .excerpt {
      opacity: 1;
    }
  }
`

export default RecentCard
