import { Inter } from "@next/font/google";
import Search from "../components/search";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const products = [
    {
      name: "tesg",
      didnw: 3,
    },
    {
      name: "tesg",
      didnw: 3,
    },
  ];
  return (
    <>
      <Search products={products} />
    </>
  );
}
