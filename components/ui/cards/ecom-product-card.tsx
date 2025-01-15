import { BiHeart } from "react-icons/bi";

interface ProductCardProps {
  images: string[];
  title: string;
  rating: number;
  reviews: number;
  price: number;
}

export default function ProductCard({
  images,
  title,
  rating,
  reviews,
  price,
}: ProductCardProps) {
  return (
    <div className="bg-foreground text-background rounded-2xl p-4 shadow-lg max-w-sm">
      <div className="grid grid-cols-2 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg"
            />
            <button className="absolute top-2 right-2 p-1.5 rounded-full bg-background opacity-0 group-hover:opacity-100 transition-opacity">
              <BiHeart className="w-4 h-4 text-foreground" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="flex items-center gap-1 mt-1">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </div>
          <span className="text-sm text-neutral-400">{rating}</span>
          <span className="text-sm text-neutral-400">({reviews} Reviews)</span>
        </div>
        <p className="font-semibold mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
