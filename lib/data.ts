export interface Hat {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  slug: string;
}

export const hats: Hat[] = [
  {
    id: "1",
    name: "Classic Fedora",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1576871337036-efd375037d62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A timeless classic, perfect for any occasion.",
    slug: "classic-fedora",
  },
  {
    id: "2",
    name: "Sporty Baseball Cap",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1620792194162-d275727727c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable and stylish, ideal for everyday wear.",
    slug: "sporty-baseball-cap",
  },
  {
    id: "3",
    name: "Elegant Sun Hat",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1534215754734-18e5f227c79f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Wide brim for maximum sun protection with a touch of elegance.",
    slug: "elegant-sun-hat",
  },
  {
    id: "4",
    name: "Cozy Beanie",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1576871337036-efd375037d62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Warm and snug, perfect for chilly days.",
    slug: "cozy-beanie",
  },
  {
    id: "5",
    name: "Cowboy Hat",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1596707175510-2713f01c238b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Authentic Western style, durable and iconic.",
    slug: "cowboy-hat",
  },
  {
    id: "6",
    name: "Bucket Hat",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1520102111162-9599d1469e71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Trendy and versatile, great for casual outings.",
    slug: "bucket-hat",
  },
];

