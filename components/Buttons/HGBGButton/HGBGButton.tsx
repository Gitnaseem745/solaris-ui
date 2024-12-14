interface HGBGButtonProps {
    label: string;
    onClick?: () => void;
  }

const HGBGButton: React.FC<HGBGButtonProps> = ({ label, onClick }) => {
    return (
        <button
        onClick={onClick}
          className="relative px-6 py-2 overflow-hidden rounded-md after:-z-10 after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:rounded-xl before:absolute before:-top-[2px] before:-left-[2px] before:-z-10 before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:blur-md before:transition-opacity before:ease-in-out before:duration-300 before:rounded-xl before:opacity-0 hover:before:opacity-100 glowing-bg-button"
         >
            {label}
        </button>
    );
};

export default HGBGButton;

// paste below code inside globals.css or index.css

// .glowing-bg-button::before{
//     background: linear-gradient(
//         45deg,
//         #ff0000, #ff7300, #fffb00, #48ff00,
//         #00ffd5, #002bff, #ff00c8, #ff0000
//     );
//     background-size: 600%;
//     animation: glowing 20s linear infinite;
// }
// @keyframes glowing {
//     0% {background-position: 0 0;}
//     50% {background-position: 400% 0;}
//     100% {background-position: 0 0;}
// }
