interface DisabledButtonProps {
    label: string;
    onClick?: () => void;
  }

const DisabledButton: React.FC<DisabledButtonProps> = ({ label, onClick }) => {
    return (
      <button onClick={onClick} className="relative bg-yellow-700 bg-opacity-50 text-white py-2 px-6 rounded-md overflow-hidden group pointer-events-none">
        {label}
      </button>
    );
  };

  export default DisabledButton;
