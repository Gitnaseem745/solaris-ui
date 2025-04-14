import { Variants } from "framer-motion";

/**
 * Stack Notification Animation
 * 
 * This animation creates a stacked effect for notification cards,
 * where each card appears with a slight delay and offset from the previous one.
 * 
 * @param staggerDelay - Delay between each item's animation (default: 0.1)
 * @param yOffset - Vertical offset for each item (default: 10)
 * @param scale - Scale factor for the animation (default: 0.95)
 */
export const stackNotification = (staggerDelay = 0.1, yOffset = 10, scale = 0.95): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: yOffset,
      scale: scale,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * staggerDelay,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    exit: {
      opacity: 0,
      y: -yOffset,
      scale: scale,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };
}; 
