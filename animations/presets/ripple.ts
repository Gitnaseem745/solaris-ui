import { Variants } from 'framer-motion';

export const rippleVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: [0, 1, 2],
    opacity: [0.5, 0.3, 0],
    transition: {
      duration: 1.5,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  }
}; 
