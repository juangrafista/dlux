import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import { urlFor } from '../lib/sanity'

const ImageGallery = ({ gallery }) => {
  return (
    <StyledGallery>
      <h1>Image Gallery</h1>
      <Masonry
        breakpointCols={3}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {gallery.map((el, i) => (
          <div className='img-container'>
            <img
              src={urlFor(el.url).width(400).format('webp').url()}
              key={i}
              layout='fill'
              objectFit='cover'
            />
          </div>
        ))}
      </Masonry>
    </StyledGallery>
  )
}

const StyledGallery = styled.div`
  background: lightpink;
  padding: 1rem 10%;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -10px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 10px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 5px;
  }
  .img-container {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

export default ImageGallery
