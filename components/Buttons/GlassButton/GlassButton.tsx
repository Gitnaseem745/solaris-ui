interface GlassButtonProps {
    label: string;
    onClick?: () => void;
  }

const GlassButton: React.FC<GlassButtonProps> = ({ label, onClick }) => {
    return (
        <button
        onClick={onClick}
        className="px-6 py-2 font-medium text-white bg-opacity-10 border-none rounded-md backdrop-blur-lg shadow-md">
            {label}
        </button>
    );
};

export default GlassButton;
