import { NextApiRequest, NextApiResponse } from 'next';

const brands = [
  { id: 1, name: 'Toyota' },
  { id: 2, name: 'Honda' },
  // Ajoutez d'autres marques ici
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(brands);
}