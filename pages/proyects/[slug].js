import Layout from '../../components/Layout'
import { urlFor } from '../../lib/sanity'
import { getPostBySlug, getAllPosts } from '../../lib/api'

const PostDetail = ({ post }) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <img
        src={urlFor(post.mainImage).width(800).format('webp').url()}
        alt={post.title}
      />
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
