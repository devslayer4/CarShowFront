import { useEffect, useState } from "react";
import Homepage from "../components/Homepage";
import Layout from "../layout";

interface Brand {
  id: number;
  name: string;
}

export default function IndexPage() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    fetch("/api/brand")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <Layout>
      <Homepage brands={brands} />
    </Layout>
  );
}
