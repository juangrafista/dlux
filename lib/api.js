import client from './sanity'

const postFields = `
  _id,
  'slug': slug.current,
  title,
  mainImage,
  date,
  categories,
  body,
  excerpt
`

export async function getAllPosts() {
  const results = await client.fetch(`*[_type == 'post']{${postFields}}`)
  return results
}

export async function getPostBySlug(slug) {
  const result = await client
    .fetch(`*[_type == 'post' && slug.current == $slug]{${postFields}}`, {
      slug,
    })
    .then((res) => res?.[0])

  return result
}
