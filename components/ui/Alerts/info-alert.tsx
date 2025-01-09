import { FaInfoCircle } from 'react-icons/fa';
import Alert from '../../Alert';

interface InfoAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const InfoAlert: React.FC<InfoAlertProps> = ({ message, isOpen, onClose }) => {
  return (
    <Alert isOpen={isOpen} onClose={onClose} className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 z-50">
      <div className="flex items-center">
        <FaInfoCircle className="text-blue-500 mr-2" />
        <span>{message}</span>
      </div>
    </Alert>
  );
};

export default InfoAlert;
