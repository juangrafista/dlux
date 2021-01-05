import client from './sanity'

const postFields = `
  _id,
  'slug': slug.current,
  title,
  'mainImage': mainImage{asset->{url}, crop, hotspot},
  releaseDate,
  categories,
  excerpt,
`
const postDetailFields = `
  'slug': slug.current,
  title,
  'mainVideo': mainVideo.url,
  'gallery':gallery[]{'url':asset->url},
  'creditos':creditos[]{value},
  'imageGallery':imageGallery[]{asset->{url}, crop, hotspot},
  body[]{..., 
    'asset': asset->,}
`

export async function getAllPosts() {
  const results = await client.fetch(
    `*[_type == 'post'] | order(releaseDate desc) {${postFields}}`
  )
  return results
}

export async function getRecentPosts() {
  const results = await client.fetch(
    `*[_type == 'post'] | order(releaseDate desc) [0...4] {${postFields}}`
  )
  return results
}

export async function getPostBySlug(slug) {
  const result = await client
    .fetch(`*[_type == 'post' && slug.current == $slug]{${postDetailFields}}`, {
      slug,
    })
    .then((res) => res?.[0])

  return result
}
