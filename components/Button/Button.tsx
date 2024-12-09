interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-lg border border-transparent px-3 py-2 text-base font-medium bg-neutral-900 text-white cursor-pointer transition-colors duration-250 hover:border-yellow-300 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50
        `}
    >
      {label}
    </button>
  );
};

export default Button;
