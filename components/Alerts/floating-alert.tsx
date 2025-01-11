import { motion } from 'framer-motion';

interface FloatingAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const FloatingAlert: React.FC<FloatingAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-4 text-foreground left-4 bg-background border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50"
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            ×
          </button>
          <p>{message}</p>
        </motion.div>
      )}
    </>
  );
};

export default FloatingAlert;
