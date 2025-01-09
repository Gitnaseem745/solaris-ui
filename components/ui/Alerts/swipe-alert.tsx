import { motion, PanInfo } from 'framer-motion';

interface SwipeAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const SwipeAlert: React.FC<SwipeAlertProps> = ({ message, isOpen, onClose }) => {
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 bg-cyan-100 border-l-4 border-cyan-500 text-cyan-700 p-4 rounded-lg shadow-lg cursor-grab active:cursor-grabbing z-50"
        >
          <p>{message}</p>
          <p className="text-sm mt-2">Swipe to dismiss</p>
        </motion.div>
      )}
    </>
  );
};

export default SwipeAlert;
