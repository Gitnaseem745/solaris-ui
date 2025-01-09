interface Movie {
    id: string
    title: string
    image: string
    duration: string
    rating: number
}

interface RecommendedMoviesProps {
    movies?: Movie[]
    title?: string
}

export default function RecommendedMovies({
    movies = [
        {
        id: "movie1",
        title: "Venom The Last Dance",
        image: "/venomImg.jpg",
        duration: "1.55 Hour",
        rating: 4.1,
    },
        {
        id: "movie2",
        title: "Venom The Last Dance",
        image: "/venomImg.jpg",
        duration: "1.55 Hour",
        rating: 4.1,
    },
        {
        id: "movie3",
        title: "Venom The Last Dance",
        image: "/venomImg.jpg",
        duration: "1.55 Hour",
        rating: 4.4,
    },
        {
        id: "movie4",
        title: "Venom The Last Dance",
        image: "/venomImg.jpg",
        duration: "1.55 Hour",
        rating: 4.2,
    },
],
    title = "Recommended"
}: RecommendedMoviesProps) {
    return (
        <div className="w-[350px] p-6 bg-[#0F1117] rounded-3xl overflow-x-auto">
            <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="flex-shrink-0 w-32 space-y-2"
                    >
                        <div className="relative aspect-[2/3] rounded-xl overflow-hidden">
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-white/10 backdrop-blur-sm rounded-md px-1.5">
                                <span className="text-xs text-white">★ {movie.rating}</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-sm font-medium text-white line-clamp-1">
                                {movie.title}
                            </h3>
                            <p className="text-xs text-white/60">{movie.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
