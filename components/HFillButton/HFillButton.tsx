interface HFillButtonProps {
    label: string;
    onClick?: () => void;
  }

  const HFillButton: React.FC<HFillButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
                   relative overflow-hidden px-4 py-2 font-medium text-[#3498db] border border-solid border-[#3498db]
                   bg-transparent hover:text-white transition-all duration-[0.5s]
                    before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0  before:bg-[#3498db] before:transition-all before:duration-[0.5s] before:rounded-tl-[50%] before:rounded-tr-[50%] hover:before:h-[180%]
                    `}
      >
        {label}
      </button>
    );
  };

  export default HFillButton;
