import { motion } from 'framer-motion';

interface StickyAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const StickyAlert: React.FC<StickyAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-yellow-400 text-yellow-900 p-4 z-50"
        >
          <div className="container mx-auto flex justify-between items-center">
            <span>{message}</span>
            <button onClick={onClose} className="text-yellow-900 hover:text-yellow-700">
              Dismiss
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default StickyAlert;
