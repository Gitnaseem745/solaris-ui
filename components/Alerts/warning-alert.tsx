import { FaExclamationCircle } from 'react-icons/fa';
import Alert from './Alert';

interface WarningAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const WarningAlert: React.FC<WarningAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <Alert isOpen={isOpen} onClose={onClose} className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 z-50">
      <div className="flex items-center">
        <FaExclamationCircle className="text-yellow-500 mr-2" />
        <span>{message}</span>
      </div>
    </Alert>
  );
};

export default WarningAlert;
