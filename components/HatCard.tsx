import Image from 'next/image';
import { Hat } from '@/lib/types';

interface HatCardProps {
  hat: Hat;
}

export function HatCard({ hat }: HatCardProps) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-48 flex-shrink-0">
        <Image
          src={hat.imageUrl}
          alt={hat.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2">{hat.name}</h2>
        <p className="text-gray-600 mb-2">${hat.price.toFixed(2)}</p>
        <p className="text-gray-700 text-sm mb-4 flex-grow">{hat.description}</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-auto">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

