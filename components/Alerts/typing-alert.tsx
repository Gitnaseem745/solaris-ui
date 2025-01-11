'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypingAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  typingSpeed?: number;
}

const TypingAlert: React.FC<TypingAlertProps> = ({ message, isOpen, onClose, typingSpeed = 50 }) => {
  const [displayedMessage, setDisplayedMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < message.length) {
          setDisplayedMessage((prev) => prev + message[i]);
          i++;
        } else {
          clearInterval(timer);
        }
      }, typingSpeed);

      return () => clearInterval(timer);
    }
  }, [isOpen, message, typingSpeed]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-lg z-50"
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-green-700 hover:text-green-900">
            ×
          </button>
          <p>{displayedMessage}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TypingAlert;
