import Image from "next/image";
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HomeProducts } from "@/components/homeproducts"
import { FaqItems } from "@/components/faqitems";
import  PaymentHome  from "@/components/paymenthome"
import { ContactHome } from "@/components/contacthome";
import  Footer  from "@/components/footer"

export default function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <HomeProducts />
      <PaymentHome />
      <FaqItems />
      <ContactHome />
      <Footer />
    </main>
  );
}
