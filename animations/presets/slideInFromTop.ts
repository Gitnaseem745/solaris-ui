import { Variants } from 'framer-motion';

export const slideInFromTopVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5
    }
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}; 
