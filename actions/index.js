import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const useGetPosts = (initialData) => {
  return useSWR(`/api/posts`, fetcher, { initialData })
}

export const useGetPostsByCategory = ({ category }, initialData) => {
  return useSWR(
    `/api/postsByCategory?category=${category || 'Teatro'}`,
    fetcher,
    { initialData }
  )
}
