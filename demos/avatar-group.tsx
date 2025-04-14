import React from "react";
import { Avatar, AvatarGroup } from "@/components/ui/avatar-group";

const sampleAvatars = [
  "/user_img.jpg",
  "/user_img.jpg",
  "/user_img.jpg",
  "/user_img.jpg",
  "/user_img.jpg",
  "/user_img.jpg",
];

const AvatarGroupDemo = () => {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-xl w-fit">
      <div className="space-y-12">
          <AvatarGroup imgs={sampleAvatars.slice(0, 5)} size={32} spacing={38} ring tooltips tooltipPosition="bottom" />
      </div>
    </div>
  );
};

export default AvatarGroupDemo;
