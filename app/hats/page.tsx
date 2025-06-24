import { hats } from "@/lib/hats";
import { ProductCard } from "@/components/ui/product-card";

export default function HatsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Our Cool Hats</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {hats.map((hat) => (
          <ProductCard key={hat.id} hat={hat} />
        ))}
      </div>
    </div>
  );
}

