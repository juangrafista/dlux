import Layout from '../../components/Layout'
import { urlFor } from '../../lib/sanity'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import styled from 'styled-components'
import Image from 'next/image'
import PostContent from '../../components/PostContent'
import ReactPlayer from 'react-player'
import MainVideo from '../../components/MainVideo'

const PostDetail = ({ post }) => {
  return (
    <Layout>
      {post.mainVideo && <MainVideo video={post.mainVideo} />}

      <PostContent content={post.body} />
    </Layout>
  )
}

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
