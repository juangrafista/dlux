import { useState } from 'react'
import Head from 'next/head'
// components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
// sanity
import { getCategories, getPostsByCategory, getAllPosts } from '../lib/api'
// SWR
import { useGetPostsByCategory } from '../actions'

import styled from 'styled-components'

export default function Projects({ categories }) {
  const [category, setCategory] = useState('Teatro')
  const { data: posts, error } = useGetPostsByCategory({ category: category })
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
        <Categories>
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2
                onClick={() => setCategory(cat.title)}
                style={
                  cat.title === category
                    ? {
                        opacity: 1,
                      }
                    : { opacity: 0.5 }
                }
              >
                {cat.title}
              </h2>
            </div>
          ))}
        </Categories>
        <CatDescription>
          {categories.map((cat) => (
            <div key={cat.title}>
              {category === cat.title && <p>{cat.description}</p>}
            </div>
          ))}
        </CatDescription>

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
const Categories = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    padding: 1rem 0.5rem;
    cursor: pointer;
  }
`
const CatDescription = styled.div`
  text-align: center;
  padding: 1rem 0;
`

export async function getStaticProps() {
  const posts = await getAllPosts()
  const categories = await getCategories()
  return {
    props: {
      posts,
      categories,
    },
    revalidate: 1,
  }
}
