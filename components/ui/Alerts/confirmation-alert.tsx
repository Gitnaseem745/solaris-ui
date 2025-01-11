import { FaQuestionCircle } from 'react-icons/fa';

interface ConfirmationAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({ message, isOpen, onClose, onConfirm }) => {
  return (
    <Alert isOpen={isOpen} onClose={onClose} className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 z-50">
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <FaQuestionCircle className="text-purple-500 mr-2" />
          <span>{message}</span>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Confirm
          </button>
        </div>
      </div>
    </Alert>
  );
};

export default ConfirmationAlert;

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
