import Head from 'next/head'
// components
import Layout from '../components/Layout'
import HeroSection2 from '../components/HeroSection2'
import RecentProjects from '../components/RecentProjects'
import Clients from '../components/Clients'
import Testimonies from '../components/Testimonies'
// sanity
import { getAllPosts, getAllPostsForHome } from '../lib/api'

export default function Home({ posts, preview }) {
  const recentPosts = posts.slice(2)
  return (
    <>
      <Head>
        <title>dLux | Especialistas en Projection Mapping</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <HeroSection2 />
        <RecentProjects post={recentPosts} />
        <Clients />
        <Testimonies />
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
    revalidate: 1,
  }
}
