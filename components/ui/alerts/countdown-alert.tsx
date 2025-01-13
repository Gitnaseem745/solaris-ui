'use client'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

const CountdownAlert: React.FC<CountdownAlertProps> = ({ message, isOpen, onClose, duration = 5 }) => {
  const [countdown, setCountdown] = useState(duration);

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (countdown === 0) {
      onClose();
    }
  }, [isOpen, countdown, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-4 right-4 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-center">
            <span className="mr-2">{message}</span>
            <span className="font-bold">{countdown}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CountdownAlert;
