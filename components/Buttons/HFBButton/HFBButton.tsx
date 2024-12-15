interface HFBButtonProps {
    label: string;
    onClick?: () => void;
  }

  const HFBButton: React.FC<HFBButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
                   relative overflow-hidden px-6 py-2 font-medium text-white border border-solid border-white
                   bg-transparent hover:text-black transition-all duration-[0.5s]
                    before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0  before:bg-white before:transition-all before:duration-[0.5s] before:rounded-tl-[50%] before:rounded-tr-[50%] hover:before:h-[180%] before:-z-10
                    `}
      >
        {label}
      </button>
    );
  };

  export default HFBButton;
