'use client';

import { motion } from "framer-motion";

interface BannerAlertProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  message?: string;
  variant?: "success" | "warning" | "error" | "info";
}

const variants = {
  success: "bg-green-500 text-white",
  warning: "bg-yellow-500 text-black",
  error: "bg-red-600 text-white",
  info: "bg-indigo-500 text-white",
};

/**
 * BannerAlert component to display alerts at the top of the screen.
 * @param {boolean} isOpen - Controls the visibility of the alert.
 * @param {function} onClose - Function to call when the alert is closed.
 * @param {string} title - Title of the alert.
 * @param {string} message - Message content of the alert.
 * @param {string} variant - Type of alert (success, warning, error, info).
 * @returns {JSX.Element} - The BannerAlert component.
 * @example
 * <BannerAlert
 *   isOpen={true}
 *   variant="success"
 *   title="Success!"
 *   message="Your action was successful."
 *   onClose={() => console.log('Closed!')}
 * />
 */
export const BannerAlert = ({
  isOpen,
  onClose,
  title,
  message,
  variant = "info",
}: BannerAlertProps) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-0 left-0 right-0 p-4 z-[1000] ${variants[variant]}`}
        >
          <div className="container mx-auto flex justify-between items-center">
            <div>
              {title && <span className="font-bold mr-2">{title}</span>}
              {message && <span>{message}</span>}
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="text-white hover:text-opacity-70 font-bold text-lg"
              >
                ×
              </button>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};
