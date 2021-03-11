// sanity
import { getPostsByCategory } from '../../lib/api'

export default async function getPosts(req, res) {
  const category = req.query.category || 'Videoescena'

  const data = await getPostsByCategory({ category })
  res.status(200).json(data)
}
