interface HGSButtonProps {
    label: string;
    onClick?: () => void;
  }

  const HGSButton: React.FC<HGSButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            text-white bg-[#ffffff0d] hover-shine-layer backdrop-blur rounded-md w-fit px-6 py-2 border-none  font-medium text-[16px] after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full
            group relative overflow-hidden bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] bg-[position:165%_0] transition-all duration-700 hover:bg-[position:-20%_0] shadow-md hover:shadow-lg hover:translate-y-[-5px]`}
      >
        {label}
      </button>
    );
  };
  export default HGSButton;

// paste below code inside globals.css or index.css

//   .hover-shine-layer {
//     background-image: linear-gradient(
//       45deg,
//       transparent 50%,
//       rgba(255, 255, 255, 0.03) 58%,
//       rgba(255, 255, 255, 0.16) 67%,
//       transparent 68%
//     );
//   }
