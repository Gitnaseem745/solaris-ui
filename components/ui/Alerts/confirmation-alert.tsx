import { FaQuestionCircle } from 'react-icons/fa';
import Alert from '../../Alert';

interface ConfirmationAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({ message, isOpen, onClose, onConfirm }) => {
  return (
    <Alert isOpen={isOpen} onClose={onClose} className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 z-50">
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <FaQuestionCircle className="text-purple-500 mr-2" />
          <span>{message}</span>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Confirm
          </button>
        </div>
      </div>
    </Alert>
  );
};

export default ConfirmationAlert;
