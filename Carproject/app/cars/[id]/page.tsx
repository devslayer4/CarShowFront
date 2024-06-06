"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FuelIcon from "@/components/icons/FuelIcon";
import TicketIcon from "@/components/icons/TicketIcon";
import PowerIcon from "@/components/icons/PowerIcon";
import FastForwardIcon from "@/components/icons/FastForwardIcon";
import Image from 'next/image';

interface Car {
  name: string;
  description: string;
  imageUrl: string;
  fuelType: string;
  price: string;
  power: string;
  speed: string;
}

const CarDetails = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    if (id) {
      const fetchCarDetails = async () => {
        const response = await fetch(`/api/cars/${id}`);
        const data: Car = await response.json();
        setCar(data);
      };

      fetchCarDetails();
    }
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex-1 p-4">
      <Card className="w-full">
        <img
          alt={car.name}
          className="w-full h-[200px] object-cover"
          height="200"
          src={car.imageUrl}
          style={{
            aspectRatio: "350/200",
            objectFit: "cover",
          }}
          width="350"
        />
        <CardHeader>
          <CardTitle>{car.name}</CardTitle>
          <CardDescription>{car.description}</CardDescription>
        </CardHeader>
        <div className="flex gap-2 mt-4 justify-between">
          <div className="flex items-center space-x-2">
            <FuelIcon className="w-6 h-6" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <TicketIcon className="w-6 h-6" />
            <span>{car.price}</span>
          </div>
          <div className="flex items-center space-x-2">
            <PowerIcon className="w-6 h-6" />
            <span>{car.power}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FastForwardIcon className="w-6 h-6" />
            <span>{car.speed}</span>
          </div>
        </div>
        <div className="flex gap-2 mt-4 justify-between">
          <Button
            className="flex-1 bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            variant="outline"
          >
            Book Appointment
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default CarDetails;