'use client'
interface MenuItem {
    icon: React.ReactNode
    label: string
    badge?: number
  }

  interface MenuProps {
    items: MenuItem[]
    onSelect: (label: string) => void
  }

  export default function Menu({
    items,
    onSelect
  }: MenuProps) {
    return (
      <div className="p-4 bg-[#0F1117] rounded-3xl w-64">
        <div className="space-y-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onSelect(item.label)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
              {item.badge && (
                <span className="px-2 py-0.5 text-xs bg-red-500 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    )
  }
