'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface ExpandingAlertProps {
  title: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const ExpandingAlert: React.FC<ExpandingAlertProps> = ({ title, message, isOpen, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-4 rounded-lg shadow-lg z-50"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold">{title}</h3>
            <button onClick={() => setIsExpanded(!isExpanded)} className="ml-2 mt-1">
              <FaChevronDown className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2"
              >
                <p>{message}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={onClose} className="absolute top-0 right-2 text-teal-700 hover:text-teal-900">
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExpandingAlert;
