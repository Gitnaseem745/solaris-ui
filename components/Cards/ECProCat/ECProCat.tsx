"use client";

interface CategoryCardProps {
  title: string;
  description: string;
  productCount: number;
  image: string;
}

export default function CategoryCard({
  title,
  description,
  productCount,
  image,
}: CategoryCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-w-sm">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-sm text-gray-500 mt-2">{productCount} Products</p>
      </div>
    </div>
  );
}
