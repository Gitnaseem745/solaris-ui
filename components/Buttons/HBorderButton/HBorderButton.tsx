interface HBorderButtonProps {
  label: string;
  onClick?: () => void;
}

const HBorderButton: React.FC<HBorderButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded border border-transparent px-6 py-2 w-fit text-base font-medium bg-black/70 text-white cursor-pointer transition-colors duration-250 hover:border-yellow-300 focus:outline-none
        `}
    >
      {label}
    </button>
  );
};

export default HBorderButton;
