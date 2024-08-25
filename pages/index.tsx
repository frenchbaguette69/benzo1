import Image from "next/image";
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HomeProducts } from "@/components/homeproducts"
import { FaqItems } from "@/components/faqitems";
import { PaymentMethods } from "@/components/paymentmethod"
import { ContactHome } from "@/components/contacthome";

export default function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <HomeProducts />
      <PaymentMethods />
      <FaqItems />
      <ContactHome />
    </main>
  );
}
