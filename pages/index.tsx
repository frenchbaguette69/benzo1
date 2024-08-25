import Image from "next/image";
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HomeProducts } from "@/components/homeproducts"
import { FaqItems } from "@/components/faqitems";

export default function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <HomeProducts />
      <FaqItems />
    </main>
  );
}
