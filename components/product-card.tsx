
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  hat: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

export default function ProductCard({ hat }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={hat.imageUrl}
          alt={hat.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{hat.name}</h3>
        <p className="text-gray-700 text-lg mb-4">${hat.price.toFixed(2)}</p>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
}

