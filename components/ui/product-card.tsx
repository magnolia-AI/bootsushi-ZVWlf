'use client';

import * as React from "react";
import Image from "next/image";
import { Hat } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  hat: Hat;
}

export function ProductCard({ hat }: ProductCardProps) {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <Image
          src={hat.imageUrl}
          alt={hat.name}
          width={300}
          height={200}
          className="rounded-md object-cover w-full h-48"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-semibold">{hat.name}</CardTitle>
        <CardDescription className="mt-2 text-sm text-gray-600 line-clamp-2">
          {hat.description}
        </CardDescription>
        <p className="text-xl font-bold mt-4">${hat.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

