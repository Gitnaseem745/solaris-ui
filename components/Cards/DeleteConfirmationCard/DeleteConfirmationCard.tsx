import { FaRegTrashAlt } from "react-icons/fa";

interface DeleteConfirmationCardProps {
  title?: string;
  description?: string;
  onDelete?: () => void;
  onCancel?: () => void;
}

const DeleteConfirmationCard: React.FC<DeleteConfirmationCardProps> = ({ title, description, onDelete, onCancel, }) => {
  return (
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg max-w-md w-full font-semibold">
        <div className="flex justify-start mb-4">
          <div className="bg-white/5 p-3 rounded-full">
            <FaRegTrashAlt className="text-red-500" />
          </div>
        </div>

        <h2 className="text-left text-lg font-semibold text-white mb-2">
          {title}
        </h2>

        <p className="text-left text-sm text-white/60 font-medium mb-6">{description}</p>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="py-2 px-4 text-white/60 hover:text-white bg-transparent border rounded-lg hover:bg-neutral-800 transition"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="py-2 px-4 text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
  );
};

export default DeleteConfirmationCard;
