import Head from 'next/head'
// components
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import RecentProjects from '../components/RecentProjects'
import Clients from '../components/Clients'
import Testimonies from '../components/Testimonies'

export default function Home() {
  return (
    <>
      <Head>
        <title>dLux | Especialistas en Projection Mapping</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <HeroSection />
        <RecentProjects />
        <Clients />
        <Testimonies />
      </Layout>
    </>
  )
}
