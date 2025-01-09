import { motion } from 'framer-motion';

interface ColorChangingAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const ColorChangingAlert: React.FC<ColorChangingAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
        animate={
            isOpen
              ? {
                  backgroundColor: ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#0ea5e9'],
                }
              : {}
          }
          transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
          className="fixed bottom-4 right-4 text-blue-900 px-4 py-2 rounded-lg shadow-lg z-50"
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-blue-900 hover:text-blue-700">
            ×
          </button>
          <p>{message}</p>
        </motion.div>
      )}
    </>
  );
};

export default ColorChangingAlert;
