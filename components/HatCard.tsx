"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Hat } from "@/lib/hats"; // Import the Hat type

interface HatCardProps {
  hat: Hat; // Use the imported Hat type
}

export function HatCard({ hat }: HatCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={hat.imageUrl} // Use hat.imageUrl
            alt={hat.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-xl font-semibold mb-2">{hat.name}</CardTitle>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 line-clamp-2">
          {hat.description} {/* Display the description */}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg font-bold">
          ${hat.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

