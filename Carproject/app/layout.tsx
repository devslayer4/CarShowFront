import Head from "next/head";
import { default as Footer, default as Header } from "../app/components/Footer"; // Correction du chemin d'importation

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Car Show</title>
      </Head>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
