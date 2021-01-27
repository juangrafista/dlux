import Layout from '../../components/Layout'
import { getPostBySlug, getAllPosts, getPostBySlugPreview } from '../../lib/api'
import PostContent from '../../components/PostContent'
import MainVideo from '../../components/MainVideo'
import Creditos from '../../components/Creditos'
import ImageGallery from '../../components/ImageGallery'
import styled from 'styled-components'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'

const PostDetail = ({ post, preview }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
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

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostBySlugPreview(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  const paths = posts?.map((post) => ({ params: { slug: post.slug } })) || []

  return {
    paths,
    fallback: true,
  }
}

export default PostDetail
