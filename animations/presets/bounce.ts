import { Variants } from 'framer-motion';

export const bounceVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
      mass: 1
    }
  }
}; 
