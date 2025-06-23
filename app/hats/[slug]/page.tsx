import { hats } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

interface HatDetailPageProps {
  params: { slug: string };
}

export default function HatDetailPage({ params }: HatDetailPageProps) {
  const hat = hats.find((h) => h.slug === params.slug);

  if (!hat) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src={hat.imageUrl}
            alt={hat.name}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{hat.name}</h1>
          <p className="text-2xl text-gray-700 mb-6">${hat.price.toFixed(2)}</p>
          <p className="text-lg text-gray-600 mb-8">{hat.description}</p>
          <Button size="lg">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return hats.map((hat) => ({
    slug: hat.slug,
  }));
}

