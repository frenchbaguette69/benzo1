import { ProductCard } from "@/components/productcard";

interface Product {
  productTitle: string;
  productPrice: string;
  productImage: string;
  productLink: string;
}

export const ProductList = ({ products }: { products: Product[] }) => {
  // Slice the array to display only 3 products
  const displayedProducts = products.slice(0, 4);

  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center gap-4">
        {displayedProducts.map((product,) => (
            <div className="">
              <ProductCard
                productTitle={product.productTitle}
                productPrice={product.productPrice}
                productImage={product.productImage}
                productLink={product.productLink}
              />
            </div>
        ))}
        </div>
      </div>
  );
};
