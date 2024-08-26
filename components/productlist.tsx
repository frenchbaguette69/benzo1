import { ProductCard } from "@/components/productcard";

interface Product {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
}

export const ProductList = ({ products }: { products: Product[] }) => {

  return (
    <div className="mt-8">
      <ul className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center gap-4">
          {products.map(({ imageSrc, price, name, id }) => (
            <li key={id}>
              <ProductCard
                name={name}
                price={price}
                imageSrc={imageSrc}
                id={id}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
