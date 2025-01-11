import { motion } from 'framer-motion';

interface FlipAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const FlipAlert: React.FC<FlipAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-4 rounded-lg shadow-lg z-50"
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-indigo-700 hover:text-indigo-900">
            ×
          </button>
          <p>{message}</p>
        </motion.div>
      )}
    </>
  );
};

export default FlipAlert;
