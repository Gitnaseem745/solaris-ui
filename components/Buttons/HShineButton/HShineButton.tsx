interface HShineButtonProps {
    label: string;
    onClick?: () => void;
  }

const HShineButton: React.FC<HShineButtonProps> = ({ label, onClick }) => {
    return (
      <button onClick={onClick} className="relative bg-gradient-to-r text-black py-2 px-6 rounded-md from-yellow-300 to-orange-500 overflow-hidden group">
        <span className="absolute inset-0 h-10 w-4 bg-gray-200 shadow-sm filter blur-sm opacity-90 -top-10 -left-6 rotate-[-20deg] transition-transform duration-700 ease-out transform group-hover:translate-x-[-90deg] group-hover:translate-y-4"></span>
        <span className="relative z-10">{label}</span>
      </button>
    );
  };

  export default HShineButton;
