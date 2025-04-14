import { Variants } from 'framer-motion';

export const rotateVariants: Variants = {
  hidden: {
    rotate: -180,
    opacity: 0,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  exit: {
    rotate: 180,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}; 
