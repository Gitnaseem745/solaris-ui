import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Image from "next/image";

interface NotificationProps {
  children: ReactNode;
  className?: string;
}

/**
 * Notification component for displaying user messages.
 * It includes an avatar, message text, and a reply button.
 * @param {ReactNode} children - The content of the notification.
 * @param {string} className - Additional classes for styling.
 * @returns {JSX.Element}  The Notification component.
 * @example
 * <Notification className="custom-class">
 *  <Notification.Avatar imgUrl="https://example.com/avatar.jpg" />
 * <Notification.Message>Hi there!</Notification.Message>
 * <Notification.ReplyButton onClick={handleReply} />
 * </Notification>
 */
export const Notification = ({ children, className }: NotificationProps) => {
  return (
    <div
      className={`w-full max-w-[500px] h-16 rounded-full bg-white sm:px-4 sm:py-6 px-2 py-3 max-sm:h-12 gap-4 flex justify-between items-center text-black shadow-sm outline-[0.5px] outline-neutral-600 ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * Avatar component for displaying user profile images.
 * It includes a green dot to indicate online status.
 * @param {string} imgUrl - The URL of the user's avatar image.
 * @param {string} className - Additional classes for styling.
 * @returns {JSX.Element}  The Avatar component.
 */
const Avatar = ({ imgUrl, className }: { imgUrl: string, className?: string }) => (
  <div className={cn("w-10 h-10 max-sm:w-8 max-sm:h-8 relative flex-shrink-0", className)}>
    <Image src={imgUrl} alt="User Avatar" width={40} height={40} className="w-full h-full object-cover rounded-full" />
    <div className="bg-green-600 w-3 h-3 absolute bottom-0 right-0 rounded-full border-2 border-white"></div>
  </div>
);

/**
 * Message component for displaying text messages.
 * It truncates long messages to fit within the container.
 * @param {ReactNode} children - The message content.
 * @param {string} className - Additional classes for styling.
 * @returns {JSX.Element}  The Message component.
 */
const Message = ({ children, className }: { children: ReactNode, className?: string }) => (
  <p className={cn("tracking-wide text-[18px] max-sm:text-sm truncate overflow-hidden whitespace-nowrap text-ellipsis", className)}>
    {children}
  </p>
);

/**
 * ReplyButton component for triggering a reply action.
 * It has a default style and can accept additional classes.
 * @param {function} onClick - Function to handle click events.
 * @param {string} className - Additional classes for styling.
 * @returns {JSX.Element}  The ReplyButton component.
 */
const ReplyButton = ({ onClick, className }: { onClick?: () => void, className?: string }) => (
  <button onClick={onClick} className={cn("min-w-fit px-4 py-2 max-sm:py-2 max-sm:text-sm bg-black text-white rounded-full", className)}>
    Reply
  </button>
);

// Attach Sub-components
Notification.Avatar = Avatar;
Notification.Message = Message;
Notification.ReplyButton = ReplyButton;
