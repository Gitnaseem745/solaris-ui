interface CastMember {
    name: string
    role: string
    image: string
  }

  interface MovieDetailsProps {
    title: string
    genres: string[]
    description: string
    backgroundImage: string
    cast: CastMember[]
  }

  export default function MovieDetailsCard({
    title,
    genres,
    description,
    backgroundImage,
    cast
  }: MovieDetailsProps) {
    return (
      <div className="relative rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4">
          <h1 className="text-3xl font-bold text-white">{title}</h1>

          <div className="flex flex-wrap gap-2">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="text-sm text-white/80"
              >
                {genre}
                {index < genres.length - 1 && " • "}
              </span>
            ))}
          </div>

          <p className="text-sm text-white/80">{description}</p>

          {/* Cast Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Cast</h2>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {cast.map((member, index) => (
                <div key={index} className="flex-shrink-0 text-center w-20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-lg object-cover mb-2"
                  />
                  <h3 className="text-sm font-medium text-white line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-1">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

