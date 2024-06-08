import { NextApiRequest, NextApiResponse } from 'next';

const cars = [
  { id: 1, name: 'Car 1', brandId: 1, price: '20000', type: 'SUV', seats: 5, imageUrl: '/path/to/image1.jpg' },
  { id: 2, name: 'Car 2', brandId: 1, price: '25000', type: 'Sedan', seats: 4, imageUrl: '/path/to/image2.jpg' },
  // Ajoutez d'autres voitures ici
];

const brands = [
  { id: 1, name: 'Toyota' },
  { id: 2, name: 'Honda' },
  // Ajoutez d'autres marques ici
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const brandCars = cars.filter(car => car.brandId === parseInt(id as string));
  const brandName = brands.find(brand => brand.id === parseInt(id as string))?.name || 'Unknown Brand';
  res.status(200).json({ cars: brandCars, brandName });
}