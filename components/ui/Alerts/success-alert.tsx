import { FaCheckCircle } from 'react-icons/fa';
import Alert from '../../Alert';

interface SuccessAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <Alert isOpen={isOpen} onClose={onClose} className="bg-green-100 border-l-4 border-green-500 text-green-700 z-50">
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <span>{message}</span>
      </div>
    </Alert>
  );
};

export default SuccessAlert;
