import { useState, useEffect } from 'react'
import Head from 'next/head'
// components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
// sanity
import { getAllPosts } from '../lib/api'

import styled from 'styled-components'

export default function Projects({ posts }) {
  return (
    <>
      <Head>
        <title>dLux | Especialistas en Projection Mapping</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Grid>
          {posts.map((post) => (
            <ProjectCard key={post.slug} post={post} />
          ))}
        </Grid>
      </Layout>
    </>
  )
}

const Grid = styled.div`
  padding: 2rem 10%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
`

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
    revalidate: 360,
  }
}
