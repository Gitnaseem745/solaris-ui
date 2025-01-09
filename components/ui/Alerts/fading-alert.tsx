'use client'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface FadingAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

const FadingAlert: React.FC<FadingAlertProps> = ({ message, isOpen, onClose, duration = 3000 }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start({ opacity: 1 });
      const timer = setTimeout(() => {
        controls.start({ opacity: 0 }).then(onClose);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose, controls]);

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          className="fixed bottom-4 left-4 bg-foreground text-background px-4 py-2 rounded-lg shadow-lg z-[1000]"
        >
          {message}
        </motion.div>
      )}
    </>
  );
};

export default FadingAlert;
