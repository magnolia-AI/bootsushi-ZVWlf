
import ProductCard from "@/components/product-card";

export default function ProductsPage() {
  // Placeholder data for hats
  const hats = [
    { id: '1', name: 'Classic Fedora', price: 59.99, imageUrl: 'https://images.unsplash.com/photo-1521369909029-238b54784918?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', name: 'Sporty Baseball Cap', price: 24.99, imageUrl: 'https://images.unsplash.com/photo-1577789492193-41a4a4f8b030?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', name: 'Cozy Beanie', price: 19.99, imageUrl: 'https://images.unsplash.com/photo-1596434308612-8c12999d481d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', name: 'Stylish Sun Hat', price: 35.50, imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55e699047?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Our Cool Hats</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {hats.map(hat => (
          <ProductCard key={hat.id} hat={hat} />
        ))}
      </div>
    </div>
  );
}

