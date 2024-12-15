interface HFTButtonProps {
    label: string;
    onClick?: () => void;
  }

  const HFTButton: React.FC<HFTButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
                   relative overflow-hidden px-6 py-2 font-medium text-white border border-solid border-white
                   bg-transparent hover:text-black transition-all duration-[0.5s] hover:border-black
                    before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-0  before:bg-white before:transition-all before:duration-[0.5s] hover:before:h-[180%] before:-z-10
                    `}
      >
        {label}
      </button>
    );
  };

  export default HFTButton;
