'use client'

interface AvatarProps {
  image: string
  message: string
  offset?: string
  zIndex?: string
}

function Avatar({ image, message, offset = "0", zIndex = "z-10" }: AvatarProps) {
  return (
    <div className={`relative ${offset} ${zIndex}`}>
      <img
        src={image}
        alt="User avatar"
        className="w-10 h-10 rounded-full border-2 border-white"
      />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm text-sm whitespace-nowrap">
        {message}
      </div>
    </div>
  )
}

interface FeatureCardProps {
  label: string
  icon: string
  title: string
  description: string
  type: 'tips' | 'giveaways'
  onClick?: () => void
}

export default function FeatureCard({
  label,
  icon,
  title,
  description,
  type,
  onClick
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg relative overflow-hidden">
      {/* Label */}
      <span className="text-indigo-600 text-sm font-medium mb-6 block">
        {label}
      </span>

      <div className="flex justify-between items-start">
        <div className="max-w-[60%]">
          {/* Icon and Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-12 h-12 rounded-xl ${
              type === 'tips' ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
              'bg-gradient-to-br from-blue-400 to-blue-500'
            } flex items-center justify-center`}>
              <img src={icon} alt={title} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>

          {/* Add App Button (only for giveaways) */}
          {type === 'giveaways' && (
            <button
              onClick={onClick}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Add app
            </button>
          )}
        </div>

        {/* Right Side Content */}
        <div className="relative">
          {type === 'tips' ? (
            <div className="flex items-center -space-x-4">
              <Avatar
                image="/placeholder.svg?height=40&width=40"
                message="Thanks!"
                offset="-translate-x-4"
              />
              <Avatar
                image="/placeholder.svg?height=40&width=40"
                message="Love it!"
                zIndex="z-20"
              />
            </div>
          ) : (
            <div className="relative">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="Product"
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm text-sm whitespace-nowrap">
                You&apos;ve won!
              </div>

              {/* Confetti */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full
                    ${[
                      'bg-blue-400',
                      'bg-purple-400',
                      'bg-pink-400',
                      'bg-yellow-400',
                      'bg-green-400'
                    ][i % 5]}
                  `}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    opacity: 0.6
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
