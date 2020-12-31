import Layout from '../../components/Layout'
import { urlFor } from '../../lib/sanity'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import styled from 'styled-components'
import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import getVideoId from 'get-video-id'
import Vimeo from '@u-wave/react-vimeo'

const PostDetail = ({ post }) => {
  const serializers = {
    types: {
      youtube: ({ node }) => {
        const { url } = node
        const id = getYouTubeId(url)
        return <YouTube videoId={id} />
      },
      vimeo: ({ node }) => {
        const { url } = node
        const { id } = getVideoId(url)
        return (
          <Vimeo
            video={id}
            autoplay
            controls={false}
            color='ef2f9f'
            showTitle={false}
          />
        )
      },
    },
  }

  return (
    <Layout>
      <StyledPost>
        <StyledImage>
          <Image
            src={urlFor(post.mainImage).width(800).format('webp').url()}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            objectPosition='0% 80%'
          />
          <h1>{post.title}</h1>
        </StyledImage>
        <BlockContent
          imageOptions={{ w: 300, h: 240, fit: 'max' }}
          serializers={serializers}
          blocks={post.body}
        />
      </StyledPost>
    </Layout>
  )
}

const StyledPost = styled.div``
const StyledImage = styled.div`
  position: relative;
  height: 40vh;
  h1 {
    /* font-size: 3rem; */
    text-transform: uppercase;
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  const paths = posts?.map((post) => {
    return {
      params: { slug: post.slug },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export default PostDetail
