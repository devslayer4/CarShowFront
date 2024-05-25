import { NextApiRequest, NextApiResponse } from "next";

interface Brand {
  id: number;
  name: string;
}

const brands: Brand[] = [
  { id: 1, name: "Toyota" },
  { id: 2, name: "Honda" },
  { id: 3, name: "Ford" },
  // Ajoutez plus de marques ici si nécessaire
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Brand[]>
) {
  // Ajoutez une gestion des méthodes HTTP ici si nécessaire
  res.status(200).json(brands);
}
