import { motion } from 'framer-motion';

interface BouncingAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const BouncingAlert: React.FC<BouncingAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: [0, -20, 0], opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 rounded-lg shadow-lg z-50"
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-purple-700 hover:text-purple-900">
            ×
          </button>
          <p>{message}</p>
        </motion.div>
      )}
    </>
  );
};

export default BouncingAlert;
