interface DefaultButtonProps {
    label: string;
    onClick?: () => void;
  }

  const DefaultButton: React.FC<DefaultButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            bg-white text-black hover:bg-neutral-200 transition-all ease-in w-fit px-6 py-2 rounded-md
        `}
      >
        {label}
      </button>
    );
  };
  export default DefaultButton;
