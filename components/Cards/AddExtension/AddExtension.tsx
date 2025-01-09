import { BsTranslate } from "react-icons/bs"
import { FaDownload } from "react-icons/fa"

interface AddExtensionProps {
    icon: string
    title: string
    description: string
    viewCount: number
    author: {
      name: string
      avatar: string
    }
    onAdd?: () => void
    className?: string
  }

  export default function AddExtension({
    icon,
    title,
    description,
    viewCount,
    author,
    onAdd,
    className = ''
  }: AddExtensionProps) {
    return (
      <div className={`bg-white/5 backdrop-blur-sm border-white/10 border rounded-lg p-6 text-white ${className}`}>
        <div className="flex items-start justify-between">
          {/* Icon and Content */}
          <div className="flex gap-3">
            <div className="space-y-4">
              <div className="flex justify-start items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              {/* <img src={icon} alt="" className="w-6 h-6" /> */}
              <BsTranslate className="w-6 h-6" />
            </div>
              <h3 className="font-medium">{title}</h3>

              </div>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
          </div>

          {/* Add Button */}
          <button
            onClick={onAdd}
            className="px-4 py-1 text-sm font-medium bg-white/5 backdrop-blur-sm border-white/10 border rounded-md hover:bg-white/20 transition-colors"
          >
            Add
          </button>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
           <div className="p-1 text-sm rounded-full border border-white/50 -mr-2">
           <FaDownload className="size-2" />
           </div>
          <span>{viewCount.toLocaleString()}</span>
          <div className="flex items-center gap-1">
            <img src={'/venomImg.jpg'} className="w-4 h-4 rounded-full" />
            <span>{author.name}</span>
          </div>
        </div>
      </div>
    )
  }
