interface BlueButtonProps {
    label: string;
    onClick?: () => void;
  }

  const BlueButton: React.FC<BlueButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            bg-[#1976D2] text-[#FFFFFF] hover:bg-[#0D47A1] transition-all w-fit px-4 py-2 rounded-md
        `}
      >
        {label}
      </button>
    );
  };
  export default BlueButton;
