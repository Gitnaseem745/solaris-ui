import { GoGear } from "react-icons/go";

interface ActivateConfirmationCardProps {
  title?: string;
  description?: string;
  onActivate?: () => void;
  onCancel?: () => void;
}

const ActivateConfirmationCard: React.FC<ActivateConfirmationCardProps> = ({ title, description, onActivate, onCancel, }) => {
  return (
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg max-w-md w-full font-semibold">
        <div className="flex justify-start mb-4">
          <div className="bg-white/5 p-2 rounded-full">
            <GoGear className="text-neutral-600 size-5" />
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
            onClick={onActivate}
            className="py-2 px-4 max-sm:px-2 text-white bg-black rounded-lg hover:bg-black transition"
          >
            Activate
          </button>
        </div>
      </div>
  );
};

export default ActivateConfirmationCard;
