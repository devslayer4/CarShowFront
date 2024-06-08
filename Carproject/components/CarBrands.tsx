"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Brand {
  id: number;
  name: string;
}

export function CarBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const response = await fetch('/api/brands');
      if (!response.ok) {
        console.error('Failed to fetch brands');
        return;
      }
      const data = await response.json();
      setBrands(data);
    };

    fetchBrands();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Car Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <Link key={brand.id} href={`/brands/${brand.id}`} passHref>
            <a className="block p-4 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              {brand.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}