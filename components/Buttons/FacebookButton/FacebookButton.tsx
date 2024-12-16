import { FaFacebook } from "react-icons/fa";

interface FacebookButtonProps {
    label: string;
    onClick?: () => void;
}
const FacebookButton: React.FC<FacebookButtonProps> = ({ label, onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <button className="min-w-fit flex justify-center items-center bg-[#1877f2] text-white hover:bg-[#1877f2]/90 py-2 px-6 rounded-md">
      <span className="pointer-events-none mr-2">
        <FaFacebook className="opacity-60"/>
      </span>
      Login
    </button>
    </div>
  );
}

export default FacebookButton;
