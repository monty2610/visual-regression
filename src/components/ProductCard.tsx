import React from 'react';

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center h-full">
      <img src={image} alt={title} className="w-full h-48 object-contain" />
      <h3 className="mt-2 font-bold">{title}</h3>
      <p className="text-sm my-1">Rating: {rating.rate} ({rating.count} reviews)</p>
      <p className="text-lg font-semibold">${price}</p>
    </div>
  );
};

export default ProductCard;