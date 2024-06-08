"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';

interface Car {
  id: number;
  name: string;
  brandId: number;
  price: string;
  type: string;
  seats: number;
  imageUrl: string;
}

const BrandCars = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cars, setCars] = useState<Car[]>([]);
  const [brandName, setBrandName] = useState<string>("");

  useEffect(() => {
    if (id) {
      const fetchCars = async () => {
        const response = await fetch(`/api/brands/${id}/cars`);
        if (!response.ok) {
          console.error('Failed to fetch cars');
          return;
        }
        const data = await response.json();
        setCars(data.cars);
        setBrandName(data.brandName);
      };

      fetchCars();
    }
  }, [id]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cars of {brandName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <Card key={car.id} className="w-full">
            <Image
              alt={car.name}
              className="w-full h-[200px] object-cover"
              height={200}
              src={car.imageUrl}
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width={350}
            />
            <CardHeader>
              <CardTitle>{car.name}</CardTitle>
              <CardDescription>{`${car.price} - ${car.type} (${car.seats} seats)`}</CardDescription>
            </CardHeader>
            <div className="flex gap-2 mt-4 justify-between">
              <Link href={`/cars/${car.id}`} passHref>
                <Button
                  className="flex-1 bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  variant="outline"
                >
                  Info
                </Button>
              </Link>
              <Button className="flex-1" variant="outline">
                Interested
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrandCars;