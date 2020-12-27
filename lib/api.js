import client from './sanity'

const postFields = `
  title,
  mainImage,
  slug,
  date,
  categories,
  body
`

export async function getAllPosts() {
  const results = await client.fetch(`*[_type == 'post']{${postFields}}`)
  return results
}
