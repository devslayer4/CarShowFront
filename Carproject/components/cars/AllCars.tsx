"use client";

import { AppointmentForm } from "@/components/appoinment/AppointmentForm";
import { Filter } from "@/components/cars/Filter";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";

export interface Car {
  id: number;
  name: string;
  price: string;
  type: string;
  seats: number;
  imageUrl: string;
  engine: string;
}

export function AllCars() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState<any>({});

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('/http://localhost:3000/cars/api/car', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters),
      });

      if (!response.ok) {
        console.error('Failed to fetch cars');
        return;
      }

      const data = await response.json();
      console.log('Fetched cars:', data); // Log the fetched data
      setFilteredCars(data);
    };

    fetchCars();
  }, [filters]);

  const handleInterestedClick = (car: Car) => {
    setSelectedCar(car);
    setShowForm(true);
  };

  const handleFilter = (filters: any) => {
    setFilters(filters);
  };

  return (
    <div className="flex">
      <Filter onFilter={handleFilter} />
      <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCars.length === 0 ? (
          <p>No cars found</p>
        ) : (
          filteredCars.map((car) => (
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
                <Button className="flex-1" variant="outline" onClick={() => handleInterestedClick(car)}>
                  Interested
                </Button>
              </div>
            </Card>
          ))
        )}
        {showForm && <AppointmentForm car={selectedCar} onClose={() => setShowForm(false)} />}
      </main>
    </div>
  );
}