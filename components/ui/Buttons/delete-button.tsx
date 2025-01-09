import { FaTrash } from "react-icons/fa"

interface DeleteButtonProps {
    label?: string;
    onClick?: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ label = "Delete", onClick }) => {
  return (
    <div className="max-w-fit">
        <div
        onClick={onClick}
        className="cursor-pointer flex justify-center items-center gap-[6px] hover:bg-red-600 bg-red-500 transition-colors ease-in duration-300 rounded-md py-2 px-4 text-[15px] tracking-wide">
            <FaTrash className="size-3" />
            <p>{label}</p>
        </div>
    </div>
  )
}

export default DeleteButton
