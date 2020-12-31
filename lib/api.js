import client from './sanity'

const postFields = `
  _id,
  'slug': slug.current,
  title,
  'mainImage': mainImage.asset->url,
  'mainVideo': mainVideo.url,
  date,
  categories,
  excerpt,
`

export async function getAllPosts() {
  const results = await client.fetch(`*[_type == 'post']{${postFields}}`)
  return results
}

export async function getPostBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == 'post' && slug.current == $slug]{
        ${postFields}
        body[]{..., 'asset': asset->}
      }`,
      {
        slug,
      }
    )
    .then((res) => res?.[0])

  return result
}
