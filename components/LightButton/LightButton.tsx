interface LightButtonProps {
    label: string;
    onClick?: () => void;
  }

  const LightButton: React.FC<LightButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            bg-[#393E46] text-[#FFFFFF] hover:bg-[#000] transition-all ease-in w-fit px-4 py-2 rounded-md
          `}
      >
        {label}
      </button>
    );
  };
  export default LightButton;
