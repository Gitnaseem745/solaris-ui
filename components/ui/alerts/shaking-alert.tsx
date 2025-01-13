import { motion } from 'framer-motion';

interface ShakingAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const ShakingAlert: React.FC<ShakingAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [-10, 10, -10, 10, 0] }}
          transition={{ duration: 0.5, repeat: 2 }}
          className="fixed top-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-lg z-50"
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-red-700 hover:text-red-900">
            ×
          </button>
          <p>{message}</p>
        </motion.div>
      )}
    </>
  );
};

export default ShakingAlert;
