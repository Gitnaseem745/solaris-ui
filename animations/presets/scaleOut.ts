import { Variants } from 'framer-motion';

export const scaleOutVariants: Variants = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5
    }
  },
  exit: {
    scale: 1.5,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}; 
