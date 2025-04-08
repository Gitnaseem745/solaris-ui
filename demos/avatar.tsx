'use client'

import { Avatar, AvatarImage, AvatarTooltip } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex space-x-4">
      {/* Tooltip on top */}
      <Avatar>
        <AvatarImage size={50} src="/user_img.jpg" fallback="J" />
        <AvatarTooltip text="John Doe" position="top" />
      </Avatar>
    </div>
  );
}
