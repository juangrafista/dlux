import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import { urlFor } from '../lib/sanity'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const ImageGallery = ({ gallery }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    400: 2,
  }
  const images = []
  gallery.map((el, i) =>
    images.push(urlFor(el).width(1200).format('webp').url())
  )
  const clickEvent = (i) => {
    setIsOpen(true)
    setPhotoIndex(i)
  }

  return (
    <>
      <StyledGallery>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {gallery.map((el, i) => (
            <div
              className='img-container'
              key={i}
              // onClick={() => setIsOpen(true)}
              onClick={() => clickEvent(i)}
            >
              <img src={urlFor(el).width(400).format('webp').url()} />
            </div>
          ))}
        </Masonry>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </StyledGallery>
    </>
  )
}

const StyledGallery = styled.div`
  background-color: #e0e0e0;
  padding: 1rem 5%;
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
