import { useShopStore } from '@/store/shop';
import Image from 'next/image';

export const ProductCard = ({
  id,
  name,
  price,
  imageSrc,
}: {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
}) => {

  const { addProduct } = useShopStore();

  return (
    <div>
      <a href={name} className="block">
        <div className="flex flex-col p-8 border border-gray-300 rounded-lg max-w-sm bg-white">
          <Image src={imageSrc} alt={name} width={250} height={200} className="object-contain" />
          <h3 className="text-lg font-semibold mt-4">{name}</h3>
          <p className="text-xl mt-2">€ {price}</p>
        </div>
      </a>
      <button onClick={() => addProduct({ id, imageSrc, name, price })} className='btn btn-primary mt-4'>
        Toevoegen aan winkelwagen
      </button>
    </div>
  );
};
