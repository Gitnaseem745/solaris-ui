import { VideoCard } from "@/components/ui/video-card";

export default function VideoCardDemo() {
    return (
        <div className="w-full">
            <VideoCard
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                poster="/placeholder.svg?height=400&width=600"
                className="max-w-md mx-auto"
            />
        </div>
    )
}
