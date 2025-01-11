import { motion } from 'framer-motion';

interface BannerAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const BannerAlert: React.FC<BannerAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 left-0 right-0 bg-indigo-600 text-white p-4 z-50"
        >
          <div className="container mx-auto flex justify-between items-center">
            <span>{message}</span>
            <button onClick={onClose} className="text-white hover:text-indigo-200">
              ×
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default BannerAlert;
