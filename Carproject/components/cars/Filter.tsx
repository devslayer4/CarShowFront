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

export function Filter() {
  const [selectedEngine, setSelectedEngine] = useState("");
  const [price, setPrice] = useState(12);

  const handleEngineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEngine(event.target.id);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  return (
    <aside className="w-full md:w-64 p-4 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Engine</h3>
        <div className="grid grid-cols-2 gap-2">
          {["gas", "diesel", "electric", "hybrid"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <LocalCheckbox
                id={`engine-${type}`}
                checked={selectedEngine === `engine-${type}`}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleEngineChange(event)}
              />
              <label className="text-sm" htmlFor={`engine-${type}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Type</h3>
        <select className="w-full p-2 border rounded">
          {["Economy", "Luxury", "Sports", "SUV", "Minivan", "Pickup"].map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Price</h3>
        <div className="flex space-x-2 items-center">
          <span className="text-sm">${price}</span>
          <input
            className="w-full"
            max="164"
            min="12"
            type="range"
            value={price}
            onChange={handlePriceChange}
          />
          <span className="text-sm">$164</span>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Input className="flex-1" placeholder="Search model or brand" />
        <Button className="shrink-0">Filter</Button>
        <Button className="shrink-0" variant="secondary">
          Reset
        </Button>
      </div>
    </aside>
  );
}