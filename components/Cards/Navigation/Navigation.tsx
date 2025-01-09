interface NavigationProps {
    variant: 'header' | 'feature' | 'action'
    title: string
    subtitle?: string
    icon?: string
    glowColor?: string
    className?: string
    onClick?: () => void
  }

  export default function Navigation({
    variant,
    title,
    subtitle,
    icon,
    glowColor = '#00FF00',
    className = '',
    onClick
  }: NavigationProps) {
    return (
      <div
        onClick={onClick}
        className={`
          group relative overflow-hidden rounded-3xl
          ${variant === 'header' ? 'p-8' : 'p-6'}
          bg-gray-900/80 backdrop-blur-xl
          hover:bg-gray-900/90 transition-colors cursor-pointer
          ${className}
        `}
      >
        {/* Glow Effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`
          }}
        />

        {/* Content */}
        <div className="relative flex flex-col h-full">
          {variant === 'header' ? (
            <div className="space-y-2">
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {subtitle}
              </div>
              <h2 className="text-3xl font-semibold text-white">
                {title}
              </h2>
            </div>
          ) : (
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-white">{title}</h3>
                {subtitle && (
                  <p className="text-sm text-gray-400">{subtitle}</p>
                )}
              </div>
              {variant === 'action' && (
                <svg className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {icon && (
                <img src={icon} alt="" className="w-8 h-8" />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
