import { Variants } from 'framer-motion';

export const flipVariants: Variants = {
  hidden: {
    rotateX: 90,
    opacity: 0,
  },
  visible: {
    rotateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: {
    rotateX: -90,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}; 
