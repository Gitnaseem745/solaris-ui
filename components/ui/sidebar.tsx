"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  position?: "left" | "right"
  className?: string
  overlayClassName?: string
  width?: string
}

/**
 * Sidebar component that slides in from the left or right side of the screen.
 * It includes an overlay that dims the background when open.
 * @param {React.ReactNode} children - The content to be displayed inside the sidebar.
 * @param {boolean} isOpen - Flag to control the visibility of the sidebar.
 * @param {function} onClose - Function to close the sidebar.
 * @param {string} position - Position of the sidebar (left or right). Default is "left".
 * @param {string} className - Additional classes for styling the sidebar.
 * @param {string} overlayClassName - Additional classes for styling the overlay.
 * @param {string} width - Width of the sidebar. Default is "w-64".
 * @returns {JSX.Element} The Sidebar component.
 * @example
 * <SidebarTrigger onClick={() => setIsOpen(true)} />
 *
 *       <Sidebar
 *         isOpen={isOpen}
 *         onClose={() => setIsOpen(false)}
 *         position="left"
 *       >
 *         <SidebarHeader>
 *           <h2 className="text-lg font-semibold">Menu</h2>
 *           <SidebarClose onClick={() => setIsOpen(false)} />
 *         </SidebarHeader>
 *
 *         <SidebarContent>
 *           <nav className="space-y-4">
 *             <a href="#" className="block py-2 hover:text-primary">Home</a>
 *             <a href="#" className="block py-2 hover:text-primary">About</a>
 *             <a href="#" className="block py-2 hover:text-primary">Services</a>
 *             <a href="#" className="block py-2 hover:text-primary">Contact</a>
 *           </nav>
 *         </SidebarContent>
 *
 *         <SidebarFooter>
 *           <p className="text-sm text-muted-foreground">© 2023 Company Inc.</p>
 *         </SidebarFooter>
 *       </Sidebar>
 */
const Sidebar = ({
  children,
  isOpen,
  onClose,
  position = "left",
  className,
  overlayClassName,
  width = "w-64",
}: SidebarProps) => {
  // Close sidebar when Escape key is pressed
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)

    // Prevent scrolling when sidebar is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  // Handle clicking outside to close
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          overlayClassName,
        )}
        onClick={handleOutsideClick}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 bottom-0 z-50 flex flex-col bg-background shadow-lg transition-transform duration-300 ease-in-out",
          width,
          position === "left" ? "left-0" : "right-0",
          position === "left"
            ? isOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : isOpen
              ? "translate-x-0"
              : "translate-x-full",
          className,
        )}
      >
        {children}
      </div>
    </>
  )
}

/** 
 * SidebarHeader component that serves as the header for the sidebar.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the div element.
 * @param {string} className - Additional classes for styling.
 * @returns {JSX.Element} The rendered SidebarHeader component.
 */
const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center text-foreground justify-between p-4 border-b border-border", className)} {...props} />
  ),
)
SidebarHeader.displayName = "SidebarHeader"

/**
 * SidebarContent component that serves as the main content area of the sidebar.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the div element.
 * @param {string} className - Additional classes for styling.
 * @returns {JSX.Element} The rendered SidebarContent component.
 */
const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex-1 text-foreground overflow-auto p-4", className)} {...props} />,
)
SidebarContent.displayName = "SidebarContent"

/**
 * SidebarFooter component that serves as the footer for the sidebar.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the div element.
 * @param {string} className - Additional classes for styling.
 * @returns {JSX.Element} The rendered SidebarFooter component.
 */
const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-4 border-t border-border text-muted-foreground", className)} {...props} />,
)
SidebarFooter.displayName = "SidebarFooter"

/**
 * SidebarTrigger component that serves as the button to open the sidebar.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - The props for the button element.
 * @param {string} className - Additional classes for styling.
 * @returns {JSX.Element} The rendered SidebarTrigger component.
 */
const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn("p-2", className)} aria-label="Toggle Menu" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </button>
  ),
)
SidebarTrigger.displayName = "SidebarTrigger"

/**
 * SidebarClose component that serves as the button to close the sidebar.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - The props for the button element.
 * @param {string} className - Additional classes for styling.
 * @returns {JSX.Element} The rendered SidebarClose component.
 */
const SidebarClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn("p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 ease-linear", className)} aria-label="Close Menu" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  ),
)
SidebarClose.displayName = "SidebarClose"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarClose,
}
