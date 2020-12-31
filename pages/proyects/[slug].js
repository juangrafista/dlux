import Layout from '../../components/Layout'
import { urlFor } from '../../lib/sanity'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import styled from 'styled-components'
import Image from 'next/image'
import PostContent from '../../components/PostContent'
import ReactPlayer from 'react-player'

const PostDetail = ({ post }) => {
  return (
    <Layout>
      <StyledPost>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={post.mainVideo}
            width='100%'
            height='100%'
            muted={true}
            playing={true}
            controls={false}
          />
        </div>
        <PostContent content={post.body} />
      </StyledPost>
    </Layout>
  )
}

const StyledPost = styled.div`
  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    margin-bottom: 4rem;
  }
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`
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
