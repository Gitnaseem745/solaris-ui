import { motion } from 'framer-motion';

interface SlideInAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const SlideInAlert: React.FC<SlideInAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full text-foreground w-64 bg-background shadow-lg p-4 z-50"
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            ×
          </button>
          <h2 className="text-lg font-semibold mb-4">Alert</h2>
          <p>{message}</p>
        </motion.div>
      )}
    </>
  );
};

export default SlideInAlert;
