interface DarkButtonProps {
    label: string;
    onClick?: () => void;
  }

  const DarkButton: React.FC<DarkButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            bg-[#F7F7F7] text-[#393E46] hover:bg-[#fff] transition-all hover:text-[#000] w-fit px-9 py-2 rounded-md
          `}
      >
        {label}
      </button>
    );
  };
  export default DarkButton;
