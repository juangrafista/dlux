// components
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import RecentProjects from '../components/RecentProjects'
import Clients from '../components/Clients'
import Testimonies from '../components/Testimonies'
// sanity
import { getRecentPosts } from '../lib/api'

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <HeroSection />
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
