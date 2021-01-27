import client, { previewClient } from './sanity'

const postFields = `
  _id,
  'slug': slug.current,
  title,
  mainImage{
    'height':asset->metadata.dimensions.height,
    'width':asset->metadata.dimensions.width,
    'url': asset->url,
    asset->{url},
    crop, 
    hotspot
  },
  releaseDate,
  categories[]->{title,description},
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
    'asset': asset->,},
`

export async function getAllPosts() {
  const results = await client.fetch(
    `*[_type == 'post'] | order(releaseDate desc) {${postFields}}`
  )
  return results
}

export async function getPostsByCategory(
  { category } = { category: 'Teatro' }
) {
  const results = await client.fetch(
    `*[_type == 'post' && categories[]->title match $category] | order(releaseDate desc) {${postFields}}`,
    {
      category,
    }
  )
  return results
}

export async function getCategories() {
  const results = await client.fetch(
    `*[_type == 'category'] {title, description} `
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

const getClient = (preview) => (preview ? previewClient : client)

export async function getPostBySlugPreview(slug, preview) {
  const curClient = getClient(preview)
  const [post] = await Promise.all([
    curClient
      .fetch(
        `*[_type == 'post' && slug.current == $slug]{
          ${postDetailFields}
          content,
        }`,
        {
          slug,
        }
      )
      .then((res) => res?.[0]),
  ])
  return { post }
}

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postDetailFields}
      content
    }`,
    { slug }
  )
  return data[0]
}
