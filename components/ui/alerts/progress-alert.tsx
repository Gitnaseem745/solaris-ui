'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProgressAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

const ProgressAlert: React.FC<ProgressAlertProps> = ({ message, isOpen, onClose, duration = 5000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(timer);
            onClose();
            return 0;
          }
          return oldProgress + 1;
        });
      }, duration / 100);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isOpen, duration, onClose]);

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-foreground text-background border border-gray-200 rounded-lg shadow-lg p-4 w-64 z-50"
        >
          <p className="mb-2">{message}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div
              className="bg-blue-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProgressAlert;
