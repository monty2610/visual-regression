import React from 'react';
import { useQuery } from 'react-query';
import ProductCard from './ProductCard';

// Define a TypeScript interface for the product
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Update the fetchProducts function to use the Product interface
const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const ProductListing: React.FC = () => {
  const { data, error, isLoading } = useQuery<Product[]>({ queryKey: ['products'], queryFn: fetchProducts });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  // Ensure data is checked for existence and is an array before mapping
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {data && Array.isArray(data) && data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductListing;
