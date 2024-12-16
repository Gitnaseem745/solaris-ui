import { FaGoogle } from "react-icons/fa";

interface GoogleButtonProps {
    label: string;
    onClick?: () => void;
}
const GoogleButton: React.FC<GoogleButtonProps> = ({ label, onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
    <button onClick={onClick} className="min-w-fit flex justify-center items-center bg-[#DB4437] text-white hover:bg-[#DB4437]/90 py-2 px-6 rounded-md">
      <span className="pointer-events-none mr-2">
        <FaGoogle className="opacity-60"/>
      </span>
      {label}
    </button>
    </div>
  );
}

export default GoogleButton;
