import { useState, useEffect } from 'react'
import Head from 'next/head'
// components
import Layout from '../components/Layout'
// sanity
import { getAllPosts, getAllPostsForHome } from '../lib/api'
import { urlFor } from '../lib/sanity'

export default function Projects({ posts }) {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    setPostList(posts)
  }, [posts])

  return (
    <>
      <Head>
        <title>dLux | Especialistas en Projection Mapping</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        {posts.map((post) => (
          <div key={post.slug.current}>
            <h2>{post.title}</h2>
            <img
              className='cover'
              alt={`${post.title}`}
              src={urlFor(post.mainImage).width(300).format('webp').url()}
            />
          </div>
        ))}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
    revalidate: 360,
  }
}
