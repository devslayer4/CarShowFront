import { Filter } from "@/components/cars/Filter";
import { AllCars } from "@/components/cars/AllCars";

export default function CarsPage() {
  return (
    <div className="flex flex-col md:flex-row">
      <Filter />
      <AllCars />
    </div>
  );
}