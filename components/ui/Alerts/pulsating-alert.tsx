import { motion } from 'framer-motion';

interface PulsatingAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const PulsatingAlert: React.FC<PulsatingAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.1, 1], opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="fixed top-4 left-4 bg-pink-100 border-l-4 border-pink-500 text-pink-700 p-4 rounded-lg shadow-lg z-50"
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-pink-700 hover:text-pink-900">
            ×
          </button>
          <p>{message}</p>
        </motion.div>
      )}
    </>
  );
};

export default PulsatingAlert;
