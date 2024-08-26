import { ProductList } from "@/components/productlist";
import { trpc } from "@/utils/trpc";

export const HomeProducts = () => {
  const { data } = trpc.productRouter.getSome.useQuery({take: 4});

  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_top_left,#8C52FF,#fff_50%)] overflow-x-clip">
      <div className="container  flex flex-col items-center mb-8 ">
        <h2 className="text-5xl font-bold mb-8 text-center py-10">Onze best verkopende medicijnen</h2>
        <ProductList products={data ?? []} />
      </div>
    </section>
  );
};
