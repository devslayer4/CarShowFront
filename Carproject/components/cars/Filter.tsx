import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Filter() {
  return (
    <aside className="w-full md:w-64 p-4 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Brand</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="brand-toyota" />
            <label className="text-sm" htmlFor="brand-toyota">
              Toyota
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="brand-mercedes" />
            <label className="text-sm" htmlFor="brand-mercedes">
              Mercedes
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="brand-lambo" />
            <label className="text-sm" htmlFor="brand-lambo">
              Lamborghini
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="brand-bmw" />
            <label className="text-sm" htmlFor="brand-bmw">
              BMW
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="brand-chevy" />
            <label className="text-sm" htmlFor="brand-chevy">
              Chevrolet
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Model</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="model-corolla" />
            <label className="text-sm" htmlFor="model-corolla">
              Corolla
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="model-c" />
            <label className="text-sm" htmlFor="model-c">
              C-Class
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="model-aventador" />
            <label className="text-sm" htmlFor="model-aventador">
              Aventador
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="model-x7" />
            <label className="text-sm" htmlFor="model-x7">
              X7
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="model-camaro" />
            <label className="text-sm" htmlFor="model-camaro">
              Camaro
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="model-supra" />
            <label className="text-sm" htmlFor="model-supra">
              Supra
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="model-g-class" />
            <label className="text-sm" htmlFor="model-g-class">
              G-Class
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Price</h3>
        <div className="flex space-x-2 items-center">
          <span className="text-sm">$12</span>
          <input className="w-full" max="164" min="12" type="range" />
          <span className="text-sm">$164</span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Color</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="color-black" />
            <label className="text-sm" htmlFor="color-black">
              Black
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="color-white" />
            <label className="text-sm" htmlFor="color-white">
              White
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="color-red" />
            <label className="text-sm" htmlFor="color-red">
              Red
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="color-blue" />
            <label className="text-sm" htmlFor="color-blue">
              Blue
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="color-gray" />
            <label className="text-sm" htmlFor="color-gray">
              Gray
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="color-silver" />
            <label className="text-sm" htmlFor="color-silver">
              Silver
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Engine</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="engine-gas" />
            <label className="text-sm" htmlFor="engine-gas">
              Gasoline
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="engine-diesel" />
            <label className="text-sm" htmlFor="engine-diesel">
              Diesel
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="engine-electric" />
            <label className="text-sm" htmlFor="engine-electric">
              Electric
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="engine-hybrid" />
            <label className="text-sm" htmlFor="engine-hybrid">
              Hybrid
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">HP</h3>
        <div className="flex space-x-2 items-center">
          <span className="text-sm">2 HP</span>
          <input className="w-full" max="170" min="2" type="range" />
          <span className="text-sm">170 HP</span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Seats</h3>
        <div className="grid grid-cols-4 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="seats-2" />
            <label className="text-sm" htmlFor="seats-2">
              2
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="seats-5" />
            <label className="text-sm" htmlFor="seats-5">
              5
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="seats-7" />
            <label className="text-sm" htmlFor="seats-7">
              7
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="seats-8" />
            <label className="text-sm" htmlFor="seats-8">
              8
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Status</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="status-pinned" />
          <label className="text-sm" htmlFor="status-pinned">
            Pinned
          </label>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Type</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="type-economy" />
            <label className="text-sm" htmlFor="type-economy">
              Economy
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type-luxury" />
            <label className="text-sm" htmlFor="type-luxury">
              Luxury
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type-sports" />
            <label className="text-sm" htmlFor="type-sports">
              Sports
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type-suv" />
            <label className="text-sm" htmlFor="type-suv">
              SUV
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type-minivan" />
            <label className="text-sm" htmlFor="type-minivan">
              Minivan
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type-pickup" />
            <label className="text-sm" htmlFor="type-pickup">
              Pickup
            </label>
          </div>
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