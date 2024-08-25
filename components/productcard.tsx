import Image from 'next/image';

export const ProductCard = ({
  productTitle,
  productPrice,
  productImage,
  productLink
}: {
  productImage: string;
  productPrice: string;
  productTitle: string;
  productLink: string;
}) => {
  return (
    <a href={productLink} className="block">
      <div className="flex flex-col p-4 border border-gray-300 rounded-lg max-w-sm">
        <Image src={productImage} alt={productTitle} width={250} height={200} className="object-contain" />
        <h3 className="text-lg font-semibold mt-4">{productTitle}</h3>
        <p className="text-xl mt-2">{productPrice}</p>
        <a href={productLink}>
            <button className='btn btn-primary mt-4'>
                Toevoegen aan winkelwagen
            </button>
        </a>
      </div>
    </a>
  );
};
