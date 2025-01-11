'use client'
import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ToastAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

const ToastAlert: React.FC<ToastAlertProps> = ({ message, isOpen, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, duration]);

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50"
        >
          {message}
        </motion.div>
      )}
    </>
  );
};

export default ToastAlert;
