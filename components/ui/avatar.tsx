"use client";

import React, { useState, forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Avatar component that displays a user's profile picture or a fallback icon.
 * @param {string} className - Additional CSS classes to apply to the avatar.
 * @param {React.ReactNode} children - The content to display inside the avatar.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes for the avatar.
 * @returns {JSX.Element} The rendered avatar component.
 * @example
 * <Avatar className="my-avatar" size={40}>
 *  <AvatarImage src="path/to/image.jpg" fallback="?" />
 * </Avatar>
 */
const Avatar = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative inline-block group", className)}
      {...props}
    >
      {children}
    </div>
  )
);

Avatar.displayName = "Avatar";

interface AvatarImageProps {
  size: number;
  src?: string;
  fallback?: string;
  className?: string;
}

/**
 * AvatarImage component that displays a user's profile picture or a fallback icon.
 * @param {number} size - The size of the avatar in pixels.
 * @param {string} src - The source URL of the image to display.
 * @param {string} fallback - The fallback text to display if the image fails to load.
 * @param {string} className - Additional CSS classes to apply to the avatar image.
 * @returns {JSX.Element} The rendered avatar image component.
 */
const AvatarImage: React.FC<AvatarImageProps> = ({
  size,
  src,
  fallback,
  className,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        "rounded-full bg-muted flex items-center justify-center overflow-hidden",
        className
      )}
      style={{ width: size, height: size }}
    >
      {src && !hasError ? (
        <Image
          src={src}
          width={size}
          height={size}
          alt="avatar"
          className="object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-sm text-muted-foreground">{fallback || "?"}</span>
      )}
    </div>
  );
};

interface AvatarTooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

/**
 * AvatarTooltip component that displays a tooltip with additional information.
 * @param {string} text - The text to display in the tooltip.
 * @param {"top" | "bottom" | "left" | "right"} position - The position of the tooltip relative to the avatar.
 * @param {string} className - Additional CSS classes to apply to the tooltip.
 * @returns {JSX.Element} The rendered avatar tooltip component.
 */
const AvatarTooltip: React.FC<AvatarTooltipProps> = ({
    text,
    position = "bottom",
    className,
}) => {
    const positionClasses = {
        top: "bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 translate-y-2",
        left: "right-full top-1/2 transform -translate-y-1/2 -translate-x-2",
        right: "left-full top-1/2 transform -translate-y-1/2 translate-x-2",
    };

    return (
        <div
            className={cn(
                "absolute bg-background text-foreground text-xs rounded px-2 py-1 shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap cursor-default",
                positionClasses[position],
                className
            )}
        >
            {text}
        </div>
    );
};

export { Avatar, AvatarImage, AvatarTooltip };
