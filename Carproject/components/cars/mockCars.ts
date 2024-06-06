export interface Car {
  id: number;
  name: string;
  price: string;
  type: string;
  seats: number;
  imageUrl: string;
  engine: string;
}

export const mockCars: Car[] = [
  {
    id: 1,
    name: "Toyota Corolla",
    price: "$209.00",
    type: "Economy",
    seats: 5,
    imageUrl: "/placeholder.svg",
    engine: "gas",
  },
  {
    id: 2,
    name: "Mercedes C-Class",
    price: "$208.00",
    type: "Luxury",
    seats: 5,
    imageUrl: "/placeholder.svg",
    engine: "diesel",
  },
  {
    id: 3,
    name: "Lambo Aventador",
    price: "$209.00",
    type: "Sports",
    seats: 2,
    imageUrl: "/placeholder.svg",
    engine: "gas",
  },
  {
    id: 4,
    name: "BMW X7",
    price: "$208.00",
    type: "SUV",
    seats: 7,
    imageUrl: "/placeholder.svg",
    engine: "diesel",
  },
  {
    id: 5,
    name: "Chevy Camaro",
    price: "$209.00",
    type: "Sports",
    seats: 4,
    imageUrl: "/placeholder.svg",
    engine: "gas",
  },
  {
    id: 6,
    name: "Toyota Supra",
    price: "$210.00",
    type: "Sports",
    seats: 2,
    imageUrl: "/placeholder.svg",
    engine: "gas",
  },
  {
    id: 7,
    name: "Tesla Model S",
    price: "$799.00",
    type: "Luxury",
    seats: 5,
    imageUrl: "/placeholder.svg",
    engine: "electric",
  },
  {
    id: 8,
    name: "Nissan Leaf",
    price: "$299.00",
    type: "Economy",
    seats: 5,
    imageUrl: "/placeholder.svg",
    engine: "electric",
  },
  {
    id: 9,
    name: "Ford Fusion Hybrid",
    price: "$350.00",
    type: "Economy",
    seats: 5,
    imageUrl: "/placeholder.svg",
    engine: "hybrid",
  },
];