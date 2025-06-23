
import { HatCard } from "@/components/HatCard";
import { hats } from "@/lib/hats";

export default function HatsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Our Hat Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hats.map((hat) => (
          <HatCard key={hat.id} hat={hat} />
        ))}
      </div>
    </div>
  );
}

