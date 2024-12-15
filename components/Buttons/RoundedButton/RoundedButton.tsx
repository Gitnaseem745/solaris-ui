interface RoundedButtonProps {
    label: string;
    onClick?: () => void;
  }

  const RoundedButton: React.FC<RoundedButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            bg-white text-black hover:bg-neutral-200 transition-all ease-in w-fit px-6 py-2 rounded-full
        `}
      >
        {label}
      </button>
    );
  };
  export default RoundedButton;
