// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as data from '../../files/data'

data.categories
export default function handler(req, res) {
  console.log(data)
  res.status(200).json(data)
}
