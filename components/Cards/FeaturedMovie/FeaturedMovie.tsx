interface FeaturedMovieCardProps {
    title: string
    followers: string
    label?: string
    image: string
    onClick?: () => void
  }

  export default function FeaturedMovieCard({
    title = "Underworld Kings",
    followers = "78K followers",
    label = "Movie Fresh of the Month",
    image = "https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=1469&fit=crop",
    onClick
  }: FeaturedMovieCardProps) {
    return (
      <div
        onClick={onClick}
        className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer group"
      >
        {/* Background Image with Gradient */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-purple-900/50 to-blue-900/80" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col">
          {/* Top Label */}
          <div className="text-white/90 text-sm mb-auto">
            {label}
          </div>

          {/* Bottom Content */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-white/80">
              {followers}
            </p>
          </div>
        </div>
      </div>
    )
  }

