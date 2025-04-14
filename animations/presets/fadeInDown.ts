import { Variants } from 'framer-motion';

export const fadeInDownVariants: Variants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.6
    }
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}; 
