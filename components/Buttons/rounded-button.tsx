interface RoundedButtonProps {
    label?: string;
    onClick?: () => void;
  }

  const RoundedButton: React.FC<RoundedButtonProps> = ({ label = "Rounded", onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            bg-foreground text-background hover:opacity-85 transition-all ease-in w-fit px-6 py-2 rounded-full
        `}
      >
        {label}
      </button>
    );
  };
  export default RoundedButton;
