"use client";

import { useState } from "react";
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AppointmentForm } from "@/components/appoinment/AppointmentForm";

export function AllCars() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  

  const cars = [
    { id: 1, name: "Toyota Corolla", price: "$209.00", type: "Economy", seats: 5, imageUrl: "/placeholder.svg" },
    { id: 2, name: "Mercedes C-Class", price: "$208.00", type: "Luxury", seats: 5, imageUrl: "/placeholder.svg" },
    { id: 3, name: "Lambo Aventador", price: "$209.00", type: "Sports", seats: 2, imageUrl: "/placeholder.svg" },
    { id: 4, name: "BMW X7", price: "$208.00", type: "SUV", seats: 7, imageUrl: "/placeholder.svg" },
    { id: 5, name: "Chevy Camaro", price: "$209.00", type: "Sports", seats: 4, imageUrl: "/placeholder.svg" },
    { id: 6, name: "Toyota Supra", price: "$210.00", type: "Sports", seats: 2, imageUrl: "/placeholder.svg" },
  ];
  type Car = {
    id: number;
    name: string;
    price: string;
    type: string;
    seats: number;
    imageUrl: string;
  };
  const handleInterestedClick = (car: Car) => {
    setSelectedCar(car);
    setShowForm(true);
  };

  return (
    <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {cars.map((car) => (
        <Card key={car.id} className="w-full">
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
      ))}
      {showForm && <AppointmentForm onClose={() => setShowForm(false)} />}
    </main>
  );
}