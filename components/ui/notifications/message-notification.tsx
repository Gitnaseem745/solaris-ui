interface MessageNotificationProps {
    message: string;
    imgUrl: string;
    onReply?: () => void;
}
export default function MessageNotification({ message, imgUrl, onReply }: MessageNotificationProps) {
    return (
        <div className="w-full max-w-fit h-16 rounded-full bg-white px-4 py-6 max-sm:px-2 max-sm:py-3 max-sm:h-12 gap-4 flex justify-between items-center text-black shadow-sm outline-[0.5px] outline-neutral-600">

            <div className="w-10 h-10 max-sm:w-8 max-sm:h-8 relative flex-shrink-0">
                <img src={imgUrl} alt="" className="w-full h-full object-cover rounded-full relative z-0" />
                <div className="bg-green-600 w-3 h-3 absolute bottom-0 right-0 z-10 rounded-full border-2 border-white"></div>
            </div>

            <p className="tracking-wide text-[18px] max-sm:text-sm truncate overflow-hidden whitespace-nowrap text-ellipsis">{message}</p>

            <button onClick={onReply} className="min-w-fit px-4 py-2 max-sm:py-2 max-sm:text-sm bg-black text-white rounded-full">
                Reply
            </button>

        </div>
    );
}
