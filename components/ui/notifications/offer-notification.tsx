import { FaX } from "react-icons/fa6";

interface OfferNotificationProps {
    productImg: string;
    title: string;
    shippingDetails: string;
    onClose?: () => void;
}

export default function OfferNotification({ productImg, title, shippingDetails, onClose }: OfferNotificationProps) {
    return (
        <div className="w-full bg-white max-w-md rounded-3xl flex justify-between items-center p-6 relative shadow-lg transition-transform duration-300 hover:scale-[1.02] max-sm:p-3 max-sm:rounded-lg">
            <div className="w-20 h-20 rounded-xl flex-shrink-0 overflow-hidden mr-4 max-sm:mr-3 shadow-md">
                <img src={productImg} alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 w-full max-sm:gap-1 overflow-hidden">
                <h1 className="text-xl font-semibold text-black max-sm:text-base truncate">
                    {title}
                </h1>
                <p className="text-neutral-500 text-sm truncate max-sm:text-ellipsis">
                    {shippingDetails}
                </p>
                <div className="flex gap-2 items-center w-full">
                    <button
                        className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300 max-sm:px-3 max-sm:py-1"
                    >
                        Claim Now!
                    </button>
                    <button
                        className="px-4 py-2 rounded-full border border-neutral-400 text-black text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-300 max-sm:px-3 max-sm:py-1"
                        onClick={onClose}
                    >
                        Close Ad
                    </button>
                </div>
            </div>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-500 transition-transform duration-200 hover:rotate-90 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            >
                <FaX size={16} />
            </button>
        </div>
    );
}
