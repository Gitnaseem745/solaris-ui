'use client';

import React, { ReactNode, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  children: ReactNode;
  className?: string;
}

/**
 * DropdownMenu Component
 * @param {ReactNode} children - The dropdown menu content.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenu component.
 */
const DropdownMenu = ({ children, className }: DropdownMenuProps) => {
  return <div className={cn("relative inline-block", className)}>{children}</div>;
};

interface DropdownMenuTriggerProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * DropdownMenuTrigger Component
 * @param {ReactNode} children - The trigger element for the dropdown.
 * @param {string} className - Additional class names for styling.
 * @param {function} onClick - Callback when the trigger is clicked.
 * @returns {JSX.Element} - The DropdownMenuTrigger component.
 */
const DropdownMenuTrigger = ({
  children,
  className,
  onClick,
}: DropdownMenuTriggerProps) => {
  return (
    <div
      onClick={onClick}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </div>
  );
};

interface DropdownMenuContentProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "right" | "center" | "top";
  isOpen: boolean;
  onClose: () => void;
}

/**
 * DropdownMenuContent Component
 * @param {ReactNode} children - The dropdown menu items.
 * @param {string} className - Additional class names for styling.
 * @param {'left' | 'right' | 'center' | "top"} align - Alignment of the dropdown.
 * @param {boolean} isOpen - Whether the dropdown is open.
 * @param {function} onClose - Callback to close the dropdown.
 * @returns {JSX.Element} - The DropdownMenuContent component.
 */
const DropdownMenuContent = ({
  children,
  className,
  align = "left",
  isOpen,
  onClose,
}: DropdownMenuContentProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const alignmentStyles = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
    top: "bottom-[100%] -translate-x-1/2",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: align === 'top' ? 50 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: align === 'top' ? 50 : -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute mt-2 z-50 bg-neutral-800 text-white rounded-md shadow-lg overflow-hidden",
            alignmentStyles[align],
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * DropdownMenuItem Component
 * @param {ReactNode} children - The content of the dropdown item.
 * @param {function} onClick - Callback when the item is clicked.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenuItem component.
 */
const DropdownMenuItem = ({
  children,
  onClick,
  className,
}: DropdownMenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left px-4 py-2 hover:bg-neutral-700",
        className
      )}
    >
      {children}
    </button>
  );
};

/**
 * DropdownMenuCheckboxItem Component
 * @param {ReactNode} children - The content of the checkbox item.
 * @param {function} onClick - Callback when the item is clicked.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenuCheckboxItem component.
 */
const DropdownMenuCheckboxItem = ({
  children,
  onClick,
  className,
}: DropdownMenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left px-4 py-2 hover:bg-neutral-700",
        className
      )}
    >
      {children}
    </button>
  );
};

/**
 * DropdownMenuRadioItem Component
 * @param {ReactNode} children - The content of the radio item.
 * @param {function} onClick - Callback when the item is clicked.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenuRadioItem component.
 */
const DropdownMenuRadioItem = ({
  children,
  onClick,
  className,
}: DropdownMenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left px-4 py-2 hover:bg-neutral-700",
        className
      )}
    >
      {children}
    </button>
  );
};

interface DropdownMenuLabelProps {
  children: ReactNode;
  className?: string;
}

/**
 * DropdownMenuLabel Component
 * @param {ReactNode} children - The label content.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenuLabel component.
 */
const DropdownMenuLabel = ({
  children,
  className,
}: DropdownMenuLabelProps) => {
  return (
    <div className={cn("px-4 py-2 text-sm font-semibold text-neutral-400", className)}>
      {children}
    </div>
  );
};

interface DropdownMenuSeparatorProps {
  className?: string;
}

/**
 * DropdownMenuSeparator Component
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenuSeparator component.
 */
const DropdownMenuSeparator = ({ className }: DropdownMenuSeparatorProps) => {
  return <div className={cn("h-px bg-neutral-700 my-1", className)} />;
};

/**
 * DropdownMenuShortcut Component
 * @param {ReactNode} children - The shortcut content.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenuShortcut component.
 */
const DropdownMenuShortcut = ({
  children,
  className,
}: DropdownMenuItemProps) => {
  return (
    <span className={cn("ml-auto text-xs text-neutral-500", className)}>
      {children}
    </span>
  );
};

/**
 * DropdownMenuGroup Component
 * @param {ReactNode} children - The group content.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenuGroup component.
 */
const DropdownMenuGroup = ({ children, className }: DropdownMenuProps) => {
  return <div className={cn("py-1", className)}>{children}</div>;
};

/**
 * DropdownMenuPortal Component
 * @param {ReactNode} children - The portal content.
 * @returns {JSX.Element} - The DropdownMenuPortal component.
 * @description This component is a placeholder for future portal functionality.
 */
const DropdownMenuPortal = ({ children }: DropdownMenuProps) => {
  return <>{children}</>;
};

/**
 * DropdownMenuSub Component
 * @param {ReactNode} children - The sub-menu content.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenuSub component.
 */
const DropdownMenuSub = ({ children, className }: DropdownMenuProps) => {
  return <div className={cn("relative", className)}>{children}</div>;
};

/**
 * DropdownMenuSubContent Component
 * @param {ReactNode} children - The sub-menu content.
 * @param {string} className - Additional class names for styling.
 * @param {boolean} isOpen - Whether the sub-menu is open.
 * @param {function} onClose - Callback to close the sub-menu.
 * @returns {JSX.Element} - The DropdownMenuSubContent component.
 * @description This component is a placeholder for future sub-menu functionality.
 */
const DropdownMenuSubContent = ({
  children,
  className,
  isOpen,
  onClose,
}: DropdownMenuContentProps) => {
  return (
    <DropdownMenuContent
      isOpen={isOpen}
      onClose={onClose}
      className={cn("absolute left-full top-0", className)}
    >
      {children}
    </DropdownMenuContent>
  );
};

/**
 * DropdownMenuSubTrigger Component
 * @param {ReactNode} children - The sub-menu trigger content.
 * @param {function} onClick - Callback when the trigger is clicked.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenuSubTrigger component.
 */
const DropdownMenuSubTrigger = ({
  children,
  onClick,
  className,
}: DropdownMenuTriggerProps) => {
  return (
    <DropdownMenuTrigger onClick={onClick} className={cn("flex items-center", className)}>
      {children}
    </DropdownMenuTrigger>
  );
};

/**
 * DropdownMenuRadioGroup Component
 * @param {ReactNode} children - The radio group content.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The DropdownMenuRadioGroup component.
 */
const DropdownMenuRadioGroup = ({ children, className }: DropdownMenuProps) => {
  return <div className={cn("py-1", className)}>{children}</div>;
};

// Export all components
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
