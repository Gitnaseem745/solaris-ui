import { Variants } from 'framer-motion';

export const bounceInRotateVariants: Variants = {
  hidden: {
    scale: 0.3,
    rotate: -180,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      duration: 0.8
    }
  },
  exit: {
    scale: 0.3,
    rotate: 180,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}; 
