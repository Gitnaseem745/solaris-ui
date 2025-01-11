interface DefaultButtonProps {
    label?: string;
    onClick?: () => void;
  }

  const DefaultButton: React.FC<DefaultButtonProps> = ({ label = "Default", onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            bg-foreground text-background hover:opacity-85 transition-all ease-in w-fit px-6 py-2 rounded-md
        `}
      >
        {label}
      </button>
    );
  };
  export default DefaultButton;
