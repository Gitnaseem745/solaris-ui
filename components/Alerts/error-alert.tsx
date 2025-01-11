import { FaExclamationTriangle } from 'react-icons/fa';
import Alert from './Alert';

interface ErrorAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <Alert isOpen={isOpen} onClose={onClose} className="bg-red-100 border-l-4 border-red-500 text-red-700 z-50">
      <div className="flex items-center">
        <FaExclamationTriangle className="text-red-500 mr-2" />
        <span>{message}</span>
      </div>
    </Alert>
  );
};

export default ErrorAlert;
