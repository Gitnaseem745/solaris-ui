// components/ui/avatar.tsx
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  size: number;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  ring?: boolean;
  tooltip?: string;
  tooltipPosition?: "top" | "bottom";
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  size,
  alt = "Avatar",
  style,
  className,
  ring = false,
  tooltip,
  tooltipPosition = "bottom",
}) => {
  return (
    <div
      className={cn(
        "relative rounded-full bg-black group",
        ring && "ring-2 ring-white dark:ring-gray-900",
        className
      )}
      style={{ width: size, height: size, ...style }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-cover rounded-full"
      />
      {tooltip && <AvatarTooltip text={tooltip} position={tooltipPosition} />}
    </div>
  );
};

interface AvatarTooltipProps {
  text: string;
  position?: "top" | "bottom";
  className?: string;
}

const AvatarTooltip: React.FC<AvatarTooltipProps> = ({
  text,
  position = "bottom",
  className,
}) => {
  const positionMap = {
    top: "bottom-full left-1/2 -translate-x-1/2 -translate-y-2",
    bottom: "top-full left-1/2 -translate-x-1/2 translate-y-2",
  };

  return (
    <div
      className={cn(
        "absolute text-xs bg-background text-foreground rounded px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none",
        positionMap[position],
        className
      )}
    >
      {text}
    </div>
  );
};

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  imgs: string[];
  size?: number;
  spacing?: number;
  max?: number;
  ring?: boolean;
  overlap?: boolean;
  tooltips?: boolean;
  tooltipPosition?: "top" | "bottom";
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      imgs,
      size = 32,
      spacing = 14,
      max,
      ring = false,
      overlap = false,
      tooltips = false,
      tooltipPosition = "bottom",
      className,
      style,
      ...props
    },
    ref
  ) => {
    const displayImgs = max ? imgs.slice(0, max) : imgs;
    const remaining = imgs.length - displayImgs.length;
    const spacingOffset = overlap ? size - spacing : spacing;

    return (
      <div
        ref={ref}
        className={cn("relative flex items-center", className)}
        style={{
          minWidth: `${displayImgs.length * spacingOffset + size}px`,
          ...style,
        }}
        {...props}
      >
        {displayImgs.map((img, i) => (
          <Avatar
            key={i}
            src={img}
            size={size}
            ring={ring}
            tooltip={tooltips ? `User ${i + 1}` : undefined}
            tooltipPosition={tooltipPosition}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${i * spacingOffset}px`, zIndex: imgs.length - i }}
          />
        ))}

        {remaining > 0 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-sm font-medium bg-muted text-muted-foreground rounded-full"
            style={{
              width: size,
              height: size,
              left: `${displayImgs.length * spacingOffset}px`,
              zIndex: 0,
            }}
            title={`+${remaining} more`}
          >
            +{remaining}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";

export { Avatar, AvatarGroup };
