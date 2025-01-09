import { FaRegBookmark, FaStar } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

// Define types for props
interface Review {
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  content: string;
}

interface MovieReviewsProps {
  rating?: number;
  totalRatings?: number;
  rottenTomatoesScore?: number;
  imdbScore?: number;
  metacriticScore?: number;
  reviews?: Review[];
}

// Define action buttons for header
const ACTIONS = [
  { icon: IoShareSocialOutline, label: "Share" },
  { icon: FaRegBookmark, label: "Bookmark" },
  { icon: IoIosMore, label: "More Options" },
];

// Default Props for the Component
const DEFAULT_REVIEWS: Review[] = [
  {
    author: {
      name: "Hina Q",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    rating: 3,
    date: "19-Dec-2024",
    content: `"Venom The Last Dance is a great movie. I had fun watching it and its newly introduced symbiotes."`,
  },
  {
    author: {
      name: "Naseem Ansari",
      avatar: "https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg",
    },
    rating: 4,
    date: "18-Dec-2024",
    content: `"The dynamic chemistry between Tom Hardy as Eddie Brock and Venom's voice is brilliant. The movie explores themes of identity, friendship, and the struggle for control with wit and ferocity."`,
  },
];

// Main Component
export default function MovieReviews({
  rating = 7.5,
  rottenTomatoesScore = 41,
  imdbScore = 6.1,
  metacriticScore = 41,
  reviews = DEFAULT_REVIEWS,
}: MovieReviewsProps) {
  return (
    <div className="p-6 bg-[#0F1117] rounded-3xl space-y-6">
      {/* Header with Actions */}
      <HeaderWithActions />

      {/* Rating Meter */}
      <RatingMeter rating={rating} />

      {/* Score Cards */}
      <ScoreCards
        rottenTomatoes={rottenTomatoesScore}
        imdb={imdbScore}
        metacritic={metacriticScore}
      />

      {/* Reviews List */}
      <ReviewsList reviews={reviews} />
    </div>
  );
}

function HeaderWithActions() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold text-white">Reviews</h2>
      <div className="flex gap-2">
        {ACTIONS.map((action, index) => (
          <button
            key={index}
            className="p-2 text-white/60 hover:text-white transition-colors"
            aria-label={action.label}
          >
            <action.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}

function RatingMeter({ rating }: { rating: number }) {
  return (
    <div className="relative h-4 rounded-full bg-[#1F2937] overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-400 to-blue-500"
        style={{ width: `${(rating / 10) * 100}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-medium text-white">{rating}</span>
      </div>
    </div>
  );
}

function ScoreCards({
  rottenTomatoes,
  imdb,
  metacritic,
}: {
  rottenTomatoes: number;
  imdb: number;
  metacritic: number;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
      <ScoreCard score={rottenTomatoes} label="Rotten Tomatoes" color="bg-red-600" />
      <ScoreCard score={imdb} label="IMDb" color="bg-yellow-400" textColor="text-black" />
      <ScoreCard score={metacritic} label="Metacritic" color="bg-green-500" />
    </div>
  );
}

function ScoreCard({
  score,
  label,
  color,
  textColor = "text-white",
}: {
  score: number;
  label: string;
  color: string;
  textColor?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-8 h-8 rounded-full ${color} flex items-center justify-center`}
      >
        <span className={`text-xs font-bold ${textColor}`}>{score}%</span>
      </div>
      <span className="text-sm text-white/60">{label}</span>
    </div>
  );
}

function ReviewsList({ reviews }: { reviews: Review[] }) {
  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div key={index} className="space-y-2">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <img
              src={review.author.avatar}
              alt={`${review.author.name}'s avatar`}
              className="w-10 h-10 rounded-full object-cover object-top"
            />
            <div>
              <h3 className="text-sm font-medium text-white">{review.author.name}</h3>
              <p className="text-xs text-white/60">{review.date}</p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? "text-yellow-400" : "text-white/20"
                }`}
              />
            ))}
          </div>

          {/* Review Content */}
          <p className="text-sm text-white/80">{review.content}</p>
        </div>
      ))}
    </div>
  );
}
