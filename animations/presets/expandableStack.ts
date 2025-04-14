import { Variants } from "framer-motion";

/**
 * Expandable Stack Animation
 * 
 * Creates a stack of cards that can expand/collapse smoothly with a staggered animation.
 * Initially shows a collapsed stack, and expands into full list on interaction.
 * 
 * @param staggerDelay - Delay between each item's animation (default: 0.05)
 * @param expandDuration - Duration of the expand/collapse animation (default: 0.4)
 */
export const expandableStack = (staggerDelay = 0.05, expandDuration = 0.4): Variants => ({
  collapsed: {
    height: 0,
    opacity: 0,
    y: -8,
    transition: {
      duration: expandDuration,
      ease: [0.32, 0.72, 0, 1] // Custom easing for smooth animation
    }
  },
  expanded: (i: number) => ({
    height: "auto",
    opacity: 1,
    y: 0,
    transition: {
      height: {
        duration: expandDuration,
        ease: [0.32, 0.72, 0, 1]
      },
      opacity: {
        duration: expandDuration * 0.7,
        delay: i * staggerDelay
      },
      y: {
        duration: expandDuration,
        delay: i * staggerDelay,
        ease: [0.32, 0.72, 0, 1]
      }
    }
  }),
  exit: {
    height: 0,
    opacity: 0,
    y: -8,
    transition: {
      duration: expandDuration * 0.7,
      ease: [0.32, 0.72, 0, 1]
    }
  }
}); 
