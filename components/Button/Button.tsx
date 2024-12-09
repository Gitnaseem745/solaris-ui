interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-lg border border-transparent px-4 py-2 w-fit text-base font-medium bg-neutral-900 text-white cursor-pointer transition-colors duration-250 hover:border-yellow-300 focus:outline-none
        `}
    >
      {label}
    </button>
  );
};

export default Button;
