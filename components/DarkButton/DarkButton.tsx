interface DarkButtonProps {
    label: string;
    onClick?: () => void;
  }

  const DarkButton: React.FC<DarkButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            bg-[#F7F7F7] text-[#393E46] hover:bg-[#fff] transition-all hover:text-[#000] w-fit px-4 py-2 rounded-md
          `}
      >
        {label}
      </button>
    );
  };
//   className={`
//     bg-[#1976D2] text-[#FFFFFF] hover:bg-[#0D47A1] transition-all hover:text-[#000] w-fit px-4 py-2 rounded-md
//   `}
  export default DarkButton;
