"use client";

interface ReviewCardProps {
  title: string;
  placeholder?: string;
  initialRating?: number;
}

export default function ReviewCard({
  title,
  placeholder = "Please take a moment to rate and review...",
  initialRating = 0,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`text-2xl ${
              star <= initialRating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>
      <textarea
        placeholder={placeholder}
        className="w-full h-24 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
