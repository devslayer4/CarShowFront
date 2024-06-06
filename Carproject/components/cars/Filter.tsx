"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface LocalCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LocalCheckbox: React.FC<LocalCheckboxProps> = ({ id, checked, onChange }) => (
  <input type="checkbox" id={id} checked={checked} onChange={onChange} />
);

interface FilterProps {
  onFilter: (filters: any) => void;
}

export function Filter({ onFilter }: Readonly<FilterProps>) {
  const [selectedEngine, setSelectedEngine] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");

  const handleEngineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setSelectedEngine(checked ? id : null);
  };

  const handleFilterClick = () => {
    onFilter({
      engine: selectedEngine,
      type: selectedType,
      minPrice: minPrice ? parseFloat(minPrice) : null,
      maxPrice: maxPrice ? parseFloat(maxPrice) : null,
      search,
    });
  };

  return (
    <aside className="w-full md:w-64 p-4 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Engine</h3>
        <div className="grid grid-cols-2 gap-2">
          {["gas", "diesel", "electric", "hybrid"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <LocalCheckbox
                id={type}
                checked={selectedEngine === type}
                onChange={handleEngineChange}
              />
              <label className="text-sm" htmlFor={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Type</h3>
        <select
          className="w-full p-2 border rounded"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All</option>
          {["Economy", "Luxury", "Sports", "SUV", "Minivan", "Pickup"].map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Price Range</h3>
        <div className="flex space-x-2 items-center">
          <select
            className="w-full p-2 border rounded"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          >
            <option value="">Min Price</option>
            {["100", "200", "300", "400", "500"].map((price) => (
              <option key={price} value={price}>
                ${price}
              </option>
            ))}
          </select>
          <select
            className="w-full p-2 border rounded"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="">Max Price</option>
            {["1000", "2000", "3000", "4000", "5000"].map((price) => (
              <option key={price} value={price}>
                ${price}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Input
          className="flex-1"
          placeholder="Search model or brand"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="shrink-0" onClick={handleFilterClick}>
          Filter
        </Button>
        <Button
          className="shrink-0"
          variant="secondary"
          onClick={() => {
            setSelectedEngine(null);
            setSelectedType("");
            setMinPrice("");
            setMaxPrice("");
            setSearch("");
            onFilter({});
          }}
        >
          Reset
        </Button>
      </div>
    </aside>
  );
}