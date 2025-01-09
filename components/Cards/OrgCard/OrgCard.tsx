interface OrganizationalCardProps {
  category: string
  title: string
  description: string
  rating: number
  progress: number
  size?: 'small' | 'medium' | 'large' | 'wide'
  color?: 'pink' | 'green' | 'orange' | 'blue' | 'purple'
  className?: string
  onClick?: () => void
}

export default function OrganizationalCard({
  category,
  title,
  description,
  rating,
  progress,
  size = 'small',
  color = 'pink',
  className = '',
  onClick
}: OrganizationalCardProps) {
  // Color variants
  const colorVariants = {
    pink: 'bg-pink-400 from-pink-400/50 to-pink-400/0',
    green: 'bg-emerald-600 from-emerald-600/50 to-emerald-600/0',
    orange: 'bg-orange-500 from-orange-500/50 to-orange-500/0',
    blue: 'bg-blue-500 from-blue-500/50 to-blue-500/0',
    purple: 'bg-purple-500 from-purple-500/50 to-purple-500/0'
  }

  // Title size variants
  const titleSizes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl',
    wide: 'text-2xl'
  }

  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-3xl p-6
        ${colorVariants[color]}
        ${className}
        cursor-pointer
        transition-transform hover:scale-[1.02]
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-current opacity-20"
            style={{
              width: `${(i + 1) * 40}%`,
              height: `${(i + 1) * 40}%`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-auto">
          <span className="text-white/90 text-sm font-medium">
            {category}
          </span>
          <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-2">
          <h3 className={`font-semibold text-white ${titleSizes[size]}`}>
            {title}
          </h3>
          <p className="text-white/90 text-sm line-clamp-2">
            {description}
          </p>

          {/* Metrics */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm text-white/90">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
              </svg>
              <span className="text-sm text-white/90">{progress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
