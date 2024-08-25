import { ProductList } from "@/components/productlist";

export const HomeProducts = () => {
  // Example products array
  const products = [
    {
      productTitle: 'Diazepam 10mg',
      productPrice: '€ 55.00',
      productImage: '/path/to/image2.png',
      productLink: '/product/diazepam-10mg'
    },
    {
      productTitle: 'Paracetamol 500mg',
      productPrice: '€ 25.00',
      productImage: '/path/to/image2.png',
      productLink: '/product/paracetamol-500mg'
    },
    {
      productTitle: 'Ibuprofen 400mg',
      productPrice: '€ 35.00',
      productImage: '/path/to/image3.png',
      productLink: '/product/ibuprofen-400mg'
    },
    {
        productTitle: 'Ibuprofen 400mg',
        productPrice: '€ 35.00',
        productImage: '/path/to/image3.png',
        productLink: '/product/ibuprofen-400mg'
      },
      {
        productTitle: 'Ibuprofen 400mg',
        productPrice: '€ 35.00',
        productImage: '/path/to/image3.png',
        productLink: '/product/ibuprofen-400mg'
      },
      {
        productTitle: 'Ibuprofen 400mg',
        productPrice: '€ 35.00',
        productImage: '/path/to/image3.png',
        productLink: '/product/ibuprofen-400mg'
      },
      {
        productTitle: 'Ibuprofen 400mg',
        productPrice: '€ 35.00',
        productImage: '/path/to/image3.png',
        productLink: '/product/ibuprofen-400mg'
      },
      
    // Add more products as needed
  ];

  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_top_left,#8C52FF,#fff_50%)] overflow-x-clip">
      <div className="container  flex flex-col items-center mb-8 ">
        <h2 className="text-5xl font-bold mb-8 text-center py-10">Onze best verkopende medicijnen</h2>
        <ProductList products={products} />
      </div>
    </section>
  );
  
};
