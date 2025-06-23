'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { HatCard } from "@/components/HatCard"
import { hats } from "@/lib/hats"

export default function Home() {
  const { toast } = useToast()
  return (
    <div className="min-h-full">
      <section className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
            Welcome to Our Hat Store!
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Discover our amazing collection of hats for every style and occasion.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-10">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {hats.map((hat) => (
            <HatCard key={hat.id} hat={hat} />
          ))}
        </div>
      </section>
    </div>
  )
}
