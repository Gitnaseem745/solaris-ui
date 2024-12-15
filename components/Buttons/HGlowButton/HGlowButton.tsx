interface GlowButtonProps {
    label: string;
    onClick?: () => void;
  }

  const HGlowButton: React.FC<GlowButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
          rounded-lg px-6 py-2 w-fit text-base font-medium realtive border-none transition-all delay-0 z-10 cursor-pointer bg-transparent before:content-[""] before:absolute before:-z-10 hover:bg-[#fff] hover:text-[#333] transform hover:scale-105 hover:shadow-lg hover:shadow-white/50
          `}
      >
        {label}
      </button>
    );
  };

  export default HGlowButton;
