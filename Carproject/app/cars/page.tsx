"use client";

import { AllCars } from "@/components/cars/AllCars";
import { Filter } from "@/components/cars/Filter";
import { useState } from "react";

export default function CarsPage() {
  const [filters, setFilters] = useState<any>({});

  const handleFilter = (filters: any) => {
    setFilters(filters);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Filter onFilter={handleFilter} />
      <AllCars filters={filters} />
    </div>
  );
}