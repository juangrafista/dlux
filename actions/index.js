import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

// export const useGetPosts = (initialData:1) => {
//   return useSWR(`/api/posts`, fetcher, { initialData })
// }

export const useGetPostsByCategory = ({ category }) => {
  return useSWR(
    `/api/postsByCategory?category=${category || 'Teatro'}`,
    fetcher
  )
}
