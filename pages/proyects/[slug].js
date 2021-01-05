import Layout from '../../components/Layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostContent from '../../components/PostContent'
import MainVideo from '../../components/MainVideo'
import Creditos from '../../components/Creditos'
import ImageGallery from '../../components/ImageGallery'
import styled from 'styled-components'

const PostDetail = ({ post }) => {
  return (
    <Layout>
      {post.mainVideo && <MainVideo video={post.mainVideo} />}
      <Title>{post.title}</Title>
      {post.body && <PostContent content={post.body} />}
      {post.imageGallery && <ImageGallery gallery={post.imageGallery} />}
      {post.creditos && <Creditos creditos={post.creditos} />}
    </Layout>
  )
}

const Title = styled.h1`
  padding: 2rem 10%;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
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
