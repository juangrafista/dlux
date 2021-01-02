import Layout from '../../components/Layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostContent from '../../components/PostContent'
import MainVideo from '../../components/MainVideo'
import Creditos from '../../components/Creditos'

const PostDetail = ({ post }) => {
  return (
    <Layout>
      {post.mainVideo && <MainVideo video={post.mainVideo} />}
      <PostContent content={post.body} />
      {post.creditos && <Creditos creditos={post.creditos} />}
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
