import { useState } from 'react'
import { css } from '@emotion/react'
// components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import RecentCard from '../components/RecentCard'
import { BarLoader } from 'react-spinners'
// sanity
import { getCategories, getPostsByCategory, getAllPosts } from '../lib/api'
// SWR
import { useGetPostsByCategory } from '../actions'

import styled from 'styled-components'

const override = css`
  display: block;
  margin: 20vh auto;
`

export default function Projects({ postsByCat: initialData, categories }) {
  const [category, setCategory] = useState(categories[0].title)
  let { data: posts, error } = useGetPostsByCategory({
    category: category,
  })
  if (!posts) {
    posts = initialData
  }

  return (
    <>
      <Layout>
        <ProjectsContainer>
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
                      : {}
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
            {posts ? (
              posts.map((post) => <RecentCard key={post.slug} post={post} />)
            ) : (
              <BarLoader color='white' height={4} css={override} />
            )}
          </Grid>
        </ProjectsContainer>
      </Layout>
    </>
  )
}

const ProjectsContainer = styled.div`
  background-color: #000000;
`

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(20rem, 1fr));
  /* grid-gap: 2rem; */
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(10rem, 1fr));
  }
`
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 0.5rem;
  h2 {
    padding: 0 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1rem;
    opacity: 0.5;
    font-weight: bold;
    &:hover {
      opacity: 1;
    }
  }
`
const CatDescription = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 1rem 0;
  padding-bottom: 3rem;
  max-width: 60%;
  p {
    font-size: 1.2rem;
    font-weight: lighter;
    line-height: 1.8rem;
  }
  @media (max-width: 800px) {
    max-width: 95%;
    p {
      font-size: 1rem;
    }
  }
`

export async function getStaticProps() {
  const categories = await getCategories()
  const postsByCat = await getPostsByCategory({ category: categories[0].title })
  return {
    props: {
      postsByCat,
      categories,
    },
    revalidate: 1,
  }
}
