import Image from "next/image";

interface MovieCardProps {
  title?: string;
  genres?: string[];
  image?: string;
  onWatch?: () => void;
  onAddToWatchlist?: () => void;
}

export default function MovieCard({
  title = "Venom: The Last Dance",
  genres = ["Action", "Adventure", "Fantasy"],
  image = "/venomImg.jpg",
  onWatch,
  onAddToWatchlist
}: MovieCardProps) {
  return (
    <div className="w-full aspect-[4/5] h-[350px] rounded-3xl overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        {genres && genres.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="cursor-pointer text-sm text-white/80 bg-white/10 hover:bg-white/20 transition-colors rounded-full py-1 px-3"
              >
                {genre}
                {index < genres.length - 1 && " • "}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={onWatch}
            className="px-6 py-2 text-black bg-white rounded-full flex items-center gap-2 hover:bg-white/90 transition-colors"
          >
            <span className="w-3 h-3 bg-red-600 rounded-full" />
            Watch Now
          </button>
          <button
            onClick={onAddToWatchlist}
            className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
          >
            Add to watch later
          </button>
        </div>
      </div>
    </div>
  )
}
