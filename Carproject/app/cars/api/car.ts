import { mockCars } from '@/components/cars/mockCars';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { engine, type, minPrice, maxPrice, search } = await req.json();

  console.log('Received filters:', { engine, type, minPrice, maxPrice, search });

  let filteredCars = mockCars;

  if (engine) {
    filteredCars = filteredCars.filter(car => car.engine === engine);
  }

  if (type) {
    filteredCars = filteredCars.filter(car => car.type.toLowerCase() === type);
  }

  if (minPrice !== null) {
    filteredCars = filteredCars.filter(car => parseFloat(car.price.replace('$', '')) >= minPrice);
  }

  if (maxPrice !== null) {
    filteredCars = filteredCars.filter(car => parseFloat(car.price.replace('$', '')) <= maxPrice);
  }

  if (search) {
    filteredCars = filteredCars.filter(car =>
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.type.toLowerCase().includes(search.toLowerCase())
    );
  }

  console.log('Filtered cars:', filteredCars);

  return NextResponse.json(filteredCars);
}