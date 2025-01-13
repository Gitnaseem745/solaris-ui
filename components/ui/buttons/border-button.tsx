interface BorderButtonProps {
    label?: string;
    onClick?: () => void;
  }

  const BorderButton: React.FC<BorderButtonProps> = ({ label = "Border", onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
          rounded border border-transparent px-6 py-2 w-fit text-base font-medium bg-black/70 text-white cursor-pointer transition-colors duration-250 hover:border-white focus:outline-none
          `}
      >
        {label}
      </button>
    );
  };

  export default BorderButton;
