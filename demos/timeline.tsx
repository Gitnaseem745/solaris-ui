'use client';

import { Timeline } from "@/components/ui/timeline";
import { Timer } from "lucide-react";

export default function TimelineDemo() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <Timeline align="alternate">
                <Timeline.Item date="2023-01-01" align="left" icon={<Timer />} color="bg-blue-500">
                    Item 1 Content
                </Timeline.Item>
                <Timeline.Item date="2023-02-01" align="right" icon={<Timer />} color="bg-red-500">
                    Item 2 Content
                </Timeline.Item>
                <Timeline.Item date="2023-03-01" align="left" icon={<Timer />} color="bg-green-500">
                    Item 3 Content
                </Timeline.Item>
                <Timeline.Item date="2023-04-01" align="right" icon={<Timer />} color="bg-yellow-500">
                    Item 4 Content
                </Timeline.Item>
                <Timeline.Item date="2023-05-01" align="left" icon={<Timer />} color="bg-purple-500">
                    Item 5 Content
                </Timeline.Item>
            </Timeline>
        </div>
    )
}
