import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AlertProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ children, isOpen, onClose, className = '' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${className}`}
        >
          {children}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;

