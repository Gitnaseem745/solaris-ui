"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface VideoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  poster?: string
  aspectRatio?: "square" | "video" | "vertical" | "wide"
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  playOnHover?: boolean
  scaleOnHover?: boolean
}

/**
 * VideoCard component that displays a video with optional poster image and hover effects.
 * @param {string} src - The source URL of the video.
 * @param {string} poster - The poster image URL for the video.
 * @param {string} aspectRatio - The aspect ratio of the video (square, video, vertical, wide).
 * @param {boolean} autoPlay - Flag to autoplay the video.
 * @param {boolean} muted - Flag to mute the video.
 * @param {boolean} loop - Flag to loop the video.
 * @param {boolean} controls - Flag to show video controls.
 * @param {boolean} playOnHover - Flag to play the video on hover.
 * @param {boolean} scaleOnHover - Flag to scale the video on hover.
 * @param {string} className - Additional class names for styling.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional props for the video card.
 * @returns {JSX.Element} The VideoCard component.
 * @example
 *<VideoCard
 *  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
 *  poster="/placeholder.svg?height=400&width=600"
 *  className="max-w-md mx-auto"
 * />
 */

const VideoCard = React.forwardRef<HTMLDivElement, VideoCardProps>(
  (
    {
      className,
      src,
      poster,
      aspectRatio = "video",
      autoPlay = false,
      muted = true,
      loop = true,
      controls = false,
      playOnHover = true,
      scaleOnHover = true,
      ...props
    },
    ref,
  ) => {
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const [isHovering, setIsHovering] = React.useState(false)

    // Handle aspect ratio
    const aspectRatioClass = {
      square: "aspect-square",
      video: "aspect-video",
      vertical: "aspect-[9/16]",
      wide: "aspect-[21/9]",
    }[aspectRatio]

    // Handle hover events
    const handleMouseEnter = React.useCallback(() => {
      setIsHovering(true)
      if (playOnHover && videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error("Error playing video:", err)
        })
      }
    }, [playOnHover])

    const handleMouseLeave = React.useCallback(() => {
      setIsHovering(false)
      if (playOnHover && !autoPlay && videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }, [playOnHover, autoPlay])

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg bg-muted",
          scaleOnHover && "transition-transform duration-300 hover:scale-[1.02]",
          aspectRatioClass,
          className,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls || (isHovering && controls)}
          playsInline
          className="h-full w-full object-cover"
        />

        {/* Optional play button overlay */}
        {playOnHover && !autoPlay && !isHovering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="rounded-full bg-black/50 p-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        )}
      </div>
    )
  },
)
VideoCard.displayName = "VideoCard"

export { VideoCard }
