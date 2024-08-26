import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";
import { ProductCard } from "@/components/productcard";

const Productpage = () => {

  const router = useRouter();

  const { data } = trpc.productRouter.getOne.useQuery({name: router.query.id as string});

  return (
    <div>
      <Header />
      <div className="container">
        <ProductCard id={data?.id ?? 0} imageSrc={data?.imageSrc ?? ""} name={data?.name ?? ""} price={data?.price ?? 0} />
      </div>
      <Footer />
    </div>
  );
};

export default Productpage;
