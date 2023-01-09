import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../schemas';
import Posts from '../../../schemas/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    dbConnect();
    const post = await Posts.findOne({ _id: req.query.slug });

    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
