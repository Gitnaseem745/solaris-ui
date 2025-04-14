import { Variants } from 'framer-motion';

export const morphVariants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export const morphShapeVariants: Variants = {
  circle: {
    borderRadius: "50%",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  square: {
    borderRadius: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  triangle: {
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    borderRadius: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  star: {
    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    borderRadius: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}; 
