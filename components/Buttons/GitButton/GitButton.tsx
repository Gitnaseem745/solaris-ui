import { FaGithub } from "react-icons/fa";

interface GitButtonProps {
    label: string;
    onClick?: () => void;
}
const GitButton: React.FC<GitButtonProps> = ({ label, onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
    <button onClick={onClick} className="min-w-fit flex justify-center items-center bg-[#333333] text-white hover:bg-[#333333]/90 py-2 px-6 rounded-md">
      <span className="pointer-events-none mr-2">
        <FaGithub className="opacity-60"/>
      </span>
      {label}
    </button>
    </div>
  );
}

export default GitButton;
