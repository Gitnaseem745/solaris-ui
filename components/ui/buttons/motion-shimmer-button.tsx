'use client'
import { motion } from "framer-motion";
import { useState } from "react";

interface MotionShimmerProps {
  label?: string;
  onClick?: () => void;
}

const MotionShimmer: React.FC<MotionShimmerProps> = ({ label = "SHIMMER", onClick }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const animationConfig = {
    animate: {
      backgroundColor: isHover ? "var(--foreground)" : "var(--background)",
      color: isHover ? "var(--background)" : "var(--foreground)",
      y: isHover ? 5 : 0,
      x: isHover ? -5 : 0,
    },
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  };

  const borderAnimationConfig = (zIndex: number, top: number, left: number) => ({
    animate: { top, left },
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
    className: `w-full h-full border border-foreground bg-background rounded-md py-2 px-6 absolute -z-${zIndex}`,
  });

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="max-w-fit relative cursor-pointer"
    >
      <motion.div
        {...animationConfig}
        onClick={onClick}
        className="z-10 flex justify-center items-center bg-background border border-foreground rounded-md py-2 px-6"
      >
        <div className="text-[14px] tracking-wide font-semibold z-10">
          <p>{label}</p>
        </div>
      </motion.div>

      <motion.div {...borderAnimationConfig(20, isHover ? 5 : 8, isHover ? -5 : -8) } />

      <motion.div {...borderAnimationConfig(30, isHover ? 5 : 16, isHover ? -5 : -16)} />
    </div>
  );
};

export default MotionShimmer;
