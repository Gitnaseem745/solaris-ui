import { Variants } from 'framer-motion';

export const bounceInDownVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      duration: 0.8
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
