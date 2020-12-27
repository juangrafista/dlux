import client from './sanity'

const postFields = `
  _id,
  'slug': slug.current,
  title,
  mainImage,
  date,
  categories,
  body,
  author,
  excerpt
`

export async function getAllPosts() {
  const results = await client.fetch(`*[_type == 'post']{${postFields}}`)
  return results
}
