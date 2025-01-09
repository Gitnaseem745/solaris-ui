interface Actor {
    id: number
    name: string
    username: string
    image: string
    isFollowing: boolean
  }

  interface BestActorsListProps {
    actors: Actor[]
    onFollow: (actorId: number) => void
  }

  export default function BestActorsList({
    actors,
    onFollow
  }: BestActorsListProps) {
    return (
      <div className="p-6 bg-[#0F1117] rounded-3xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Best Actors</h2>
          <button className="text-sm text-white/60 hover:text-white">
            See all
          </button>
        </div>

        <div className="space-y-4">
          {actors.map((actor) => (
            <div
              key={actor.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/60">{actor.id}.</span>
                <img
                  src={actor.image}
                  alt={actor.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-medium text-white">
                    {actor.name}
                  </h3>
                  <p className="text-xs text-white/60">@{actor.username}</p>
                </div>
              </div>
              <button
                onClick={() => onFollow(actor.id)}
                className={`px-4 py-1 rounded-full text-sm ${
                  actor.isFollowing
                    ? 'bg-white/10 text-white/60'
                    : 'bg-white text-black'
                }`}
              >
                {actor.isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

