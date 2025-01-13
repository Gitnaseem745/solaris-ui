interface UnderlineButtonProps {
    label?: string;
    onClick?: () => void;
  }

const UnderlineButton: React.FC<UnderlineButtonProps> = ({ label = "Underline", onClick }) => {
    return (
      <button
      onClick={onClick}
      className="relative group text-white bg-black font-medium px-6 py-2">
        {label}
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-focus:scale-x-100"></span>
      </button>
    );
  };

  export default UnderlineButton;
