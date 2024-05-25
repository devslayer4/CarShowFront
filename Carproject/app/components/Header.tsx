import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-200 py-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="text-2xl font-bold">Car Show</a>
        </Link>
        <ul className="flex items-center">
          <li>
            <Link href="/brands">
              <a className="text-lg mx-4">Brands</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
