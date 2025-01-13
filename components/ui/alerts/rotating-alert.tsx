import { motion } from 'framer-motion';

interface RotatingAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const RotatingAlert: React.FC<RotatingAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-lg shadow-lg z-50"
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-orange-700 hover:text-orange-900">
            ×
          </button>
          <p>{message}</p>
        </motion.div>
      )}
    </>
  );
};

export default RotatingAlert;
