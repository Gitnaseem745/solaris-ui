"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "bordered" | "floating"
  sticky?: boolean
}

/**
 * Nav component that serves as a wrapper for the navigation elements.
 * @param {React.HTMLAttributes<HTMLElement>} props - The props for the nav element.
 * @param {string} className - Additional class names for styling.
 * @param {string} variant - The variant of the nav (default, bordered, floating).
 * @param {boolean} sticky - Flag to make the nav sticky on scroll.
 * @returns {JSX.Element} The rendered Nav component.
 * @example
 * <Nav variant="default" sticky className="custom-class">
 *  <NavContainer>
 *   <NavContent>
 *    <NavBrand>
 *     <a href="/" className="flex items-center space-x-2">
 *      <span className="text-xl font-bold">Brand</span>
 *     </a>
 *    </NavBrand>
 *    <NavItems>
 *     <NavItem href="/" active>Home</NavItem>
 *     <NavItem href="/features">Features</NavItem>
 *     <NavItem href="/pricing">Pricing</NavItem>
 *     <NavItem href="/about">About</NavItem>
 *     <NavItem href="/contact">Contact</NavItem>
 *    </NavItems>
 *    <NavActions>
 *     <Button variant="ghost" size="sm">Log in</Button>
 *     <Button size="sm">Sign up</Button>
 *     <NavToggle onClick={() => console.log("Toggle mobile menu")} />
 *     </NavActions>
 *   </NavContent>
 *  </NavContainer>
 * </Nav>
 */
const Nav = React.forwardRef<HTMLElement, NavProps>(
  ({ className, variant = "default", sticky = false, ...props }, ref) => {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
      if (!sticky) return

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [sticky])

    return (
      <nav
        ref={ref}
        className={cn(
          "w-full bg-background z-40",
          sticky && "sticky top-0 transition-all duration-300",
          isScrolled && "shadow-md",
          variant === "bordered" && "border-b",
          variant === "floating" && "mx-auto max-w-7xl rounded-lg px-4 py-2 my-4",
          className,
        )}
        {...props}
      />
    )
  },
)
Nav.displayName = "Nav"


/**
 * NavContainer component that serves as a wrapper for the navigation container.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the div element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered NavContainer component.
 * @example
 * <NavContainer className="custom-class">
 *   <NavContent>...</NavContent>
 * </NavContainer>
 */
const NavContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("container mx-auto px-4", className)} {...props} />,
)
NavContainer.displayName = "NavContainer"

/**
 * NavContent component that serves as a wrapper for the main content of the navigation.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the div element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered NavContent component.
 * @example
 * <NavContent className="custom-class">
 *   <NavBrand>...</NavBrand>
 *   <NavItems>...</NavItems>
 *   <NavActions>...</NavActions>
 * </NavContent>
 */
const NavContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center justify-between py-4", className)} {...props} />
  ),
)
NavContent.displayName = "NavContent"

/**
 * NavBrand component that serves as a wrapper for the brand/logo section of the navigation.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the div element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered NavBrand component.
 * @example
 * <NavBrand className="custom-class">
 *   <a href="/" className="flex items-center space-x-2">
 *     <span className="text-xl font-bold">Brand</span>
 *   </a>
 * </NavBrand>
 */

const NavBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />,
)
NavBrand.displayName = "NavBrand"

/**
 * NavItems component that serves as a wrapper for the navigation items/links.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the div element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered NavItems component.
 * @example
 * <NavItems className="custom-class">
 *   <NavItem href="/" active>Home</NavItem>
 *   <NavItem href="/features">Features</NavItem>
 * </NavItems>
 */
const NavItems = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("hidden md:flex items-center space-x-6", className)} {...props} />
  ),
)
NavItems.displayName = "NavItems"

/**
 * NavItem component that represents an individual navigation link.
 * @param {React.AnchorHTMLAttributes<HTMLAnchorElement>} props - The props for the anchor element.
 * @param {string} className - Additional class names for styling.
 * @param {boolean} active - Flag to indicate if the item is active.
 * @returns {JSX.Element} The rendered NavItem component.
 * @example
 * <NavItem href="/" active className="custom-class">Home</NavItem>
 */
const NavItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean }
>(({ className, active, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "text-sm font-medium transition-colors hover:text-primary",
      active ? "text-primary" : "text-muted-foreground",
      className,
    )}
    {...props}
  />
))
NavItem.displayName = "NavItem"

/**
 * NavActions component that serves as a wrapper for the action buttons or elements in the navigation.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the div element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered NavActions component.
 * @example
 * <NavActions className="custom-class">
 *   <Button variant="ghost" size="sm">Log in</Button>
 *   <Button size="sm">Sign up</Button>
 * </NavActions>
 */
const NavActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center space-x-2", className)} {...props} />
  ),
)
NavActions.displayName = "NavActions"

/**
 * NavToggle component that represents a button to toggle the mobile menu.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - The props for the button element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered NavToggle component.
 * @example
 * <NavToggle onClick={() => console.log("Toggle mobile menu")} />
 */
const NavToggle = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn("md:hidden p-2 -mr-2", className)} aria-label="Toggle Menu" {...props}>
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
NavToggle.displayName = "NavToggle"

export { Nav, NavContainer, NavContent, NavBrand, NavItems, NavItem, NavActions, NavToggle }
