import Head from 'next/head'
// components
import Layout from '../components/Layout'
import HeroSection2 from '../components/HeroSection2'
import RecentProjects from '../components/RecentProjects'
import Clients from '../components/Clients'
import Testimonies from '../components/Testimonies'
// sanity
import { getRecentPosts } from '../lib/api'
// SWR
import { useGetPosts } from '../actions'

export default function Home({ posts: initialData }) {
  const { data: posts, error } = useGetPosts(initialData)
  if (!posts) {
    return 'Loading!'
  }
  return (
    <>
      <Head>
        <title>dLux | Especialistas en Projection Mapping</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <HeroSection2 />
        <RecentProjects recentPosts={posts} />
        <Clients />
        <Testimonies />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getRecentPosts()
  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}
