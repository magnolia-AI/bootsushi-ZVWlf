
import Image from 'next/image';

interface Hat {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const hats: Hat[] = [
  {
    id: '1',
    name: 'Classic Fedora',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1576871337032-ef287455b8e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '2',
    name: 'Stylish Beanie',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1576871337032-ef287455b8e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    name: 'Sporty Baseball Cap',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1576871337032-ef287455b8e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '4',
    name: 'Elegant Sun Hat',
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1576871337032-ef287455b8e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

export default function HatsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Hat Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {hats.map((hat) => (
          <div key={hat.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-60">
              <Image
                src={hat.imageUrl}
                alt={hat.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hat.name}</h2>
              <p className="text-gray-700 text-lg">${hat.price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

