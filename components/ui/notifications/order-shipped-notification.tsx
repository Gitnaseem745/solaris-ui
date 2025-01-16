import { FaX } from "react-icons/fa6";

interface OrderShippedNotificationProps {
    productImg: string;
    title: string;
    shippingDetails: string;
    onClose?: () => void;
}

export default function OrderShippedNotification({ productImg, title, shippingDetails, onClose }: OrderShippedNotificationProps) {
    return (
        <div className="w-full h-full bg-white max-w-md max-h-fit rounded-3xl flex justify-between items-center p-4 relative max-sm:p-2 max-sm:rounded-lg shadow-sm">
            <div className="w-18 h-20 rounded-xl flex-shrink-0 overflow-hidden mr-4 max-sm:w-12 max-sm:h-12 max-sm:mr-2 max-sm:rounded-lg shadow-md">
                <img src={productImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1 max-sm:gap-0 max-sm:overflow-hidden w-full">
                <h1 className="text-xl font-semibold text-black max-sm:text-[16px]">{title}</h1>
                <p className="text-neutral-500 max-sm:text-sm max-sm:whitespace-nowrap max-sm:text-ellipsis max-sm:overflow-hidden">{shippingDetails}</p>
            </div>
            <button onClick={onClose}>
            <FaX size={12} className="text-neutral-500 absolute top-5 right-5" />
            </button>
        </div>
    )
}
