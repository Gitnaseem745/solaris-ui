import { FaInfoCircle } from 'react-icons/fa';

interface InfoAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const InfoAlert: React.FC<InfoAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <Alert isOpen={isOpen} onClose={onClose} className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 z-50">
      <div className="flex items-center">
        <FaInfoCircle className="text-blue-500 mr-2" />
        <span>{message}</span>
      </div>
    </Alert>
  );
};

export default InfoAlert;


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
