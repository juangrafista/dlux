import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
}

const client = sanityClient(options)

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export default client
