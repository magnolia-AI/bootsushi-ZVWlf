import { hats } from '@/lib/hats';
import { HatCard } from '@/components/HatCard';

export default function HatStorePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Hat Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {hats.map((hat) => (
          <HatCard key={hat.id} hat={hat} />
        ))}
      </div>
    </div>
  );
}

