import Link from "next/link";

interface Brand {
  id: number;
  name: string;
}

interface HomepageProps {
  brands: Brand[];
}

const Homepage: React.FC<HomepageProps> = ({ brands }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Car Show</h1>
      <ul className="list-none m-0 p-0">
        {brands.map((brand) => (
          <li key={brand.id} className="text-2xl mb-4">
            <Link href={`/brand/${brand.id}`}>
              <a className="hover:underline">{brand.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
