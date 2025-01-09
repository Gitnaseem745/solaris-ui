interface User {
    name: string
    email: string
    avatar: string
  }

  interface FeatureDashProps {
    variant: 'users' | 'voice' | 'code' | 'integration' | 'billing'
    title: string
    description: string
    users?: User[]
    codeSnippet?: string
    enabled?: boolean
    className?: string
    onClick?: () => void
  }

  export default function FeatureDash({
    variant,
    title,
    description,
    users,
    codeSnippet,
    enabled,
    className = '',
    onClick
  }: FeatureDashProps) {
    return (
      <div
        onClick={onClick}
        className={`
          relative overflow-hidden rounded-3xl p-6
          bg-gradient-to-br from-purple-900/50 to-purple-900/30
          backdrop-blur-xl
          ${className}
        `}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),transparent)]" />

        {/* Content */}
        <div className="relative space-y-4">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-purple-200/80">{description}</p>

          {/* Variant-specific content */}
          {variant === 'users' && users && (
            <div className="space-y-2">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="text-sm font-medium text-white">{user.name}</div>
                      <div className="text-xs text-purple-200/60">{user.email}</div>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <svg className="w-4 h-4 text-purple-200/60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {variant === 'voice' && (
            <div className="flex items-center justify-center h-32">
              <div className="relative w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/20" />
              </div>
            </div>
          )}

          {variant === 'code' && codeSnippet && (
            <pre className="p-4 rounded-xl bg-black/30 text-sm font-mono text-purple-200/90 overflow-x-auto">
              <code>{codeSnippet}</code>
            </pre>
          )}

          {variant === 'integration' && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-200/60">Status</span>
              <button
                className={`
                  w-12 h-6 rounded-full p-1 transition-colors
                  ${enabled ? 'bg-purple-500' : 'bg-purple-200/20'}
                `}
              >
                <div
                  className={`
                    w-4 h-4 rounded-full bg-white transition-transform
                    ${enabled ? 'translate-x-6' : 'translate-x-0'}
                  `}
                />
              </button>
            </div>
          )}

          {variant === 'billing' && (
            <div className="relative h-32">
              <div className="absolute right-0 bottom-0 w-24 h-32">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-xl" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-purple-200/60">Balance</div>
                    <div className="text-lg font-semibold text-white">$3,945.69</div>
                    <div className="text-sm text-purple-200/80">18.73 ETH</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
