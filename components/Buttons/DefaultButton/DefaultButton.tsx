interface DefaultButtonProps {
    label: string;
    onClick?: () => void;
  }

  const DefaultButton: React.FC<DefaultButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            bg-yellow-300 text-black hover:bg-yellow-400 transition-all ease-in w-fit px-6 py-2 rounded-md
        `}
      >
        {label}
      </button>
    );
  };
  export default DefaultButton;
