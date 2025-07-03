import * as React from "react"
import { cn } from "@/lib/utils"

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "slim" | "centered"
}

/**
 * Footer component that serves as a wrapper for the footer elements.
 * @param {React.HTMLAttributes<HTMLElement>} props - The props for the footer element.
 * @param {string} className - Additional class names for styling.
 * @param {string} variant - The variant of the footer (default, slim, centered).
 * @returns {JSX.Element} The rendered Footer component.
 * @example
 * <Footer variant="default" className="custom-class">
 *  <FooterContainer>
 *   <FooterSection>
 *    <FooterTitle>Section Title</FooterTitle>
 *    <FooterNav>
 *     <FooterNavItem href="#">Link 1</FooterNavItem>
 *     <FooterNavItem href="#">Link 2</FooterNavItem>
 *    </FooterNav>
 *   </FooterSection>
 *  </FooterContainer>
 * </Footer>
 */
const Footer = React.forwardRef<HTMLElement, FooterProps>(({ className, variant = "default", ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className={cn(
        "w-full bg-background",
        variant === "default" && "py-12 md:py-16",
        variant === "slim" && "py-6",
        variant === "centered" && "py-12 md:py-16 text-center",
        className,
      )}
      {...props}
    />
  )
})
Footer.displayName = "Footer"

/**
 * FooterContainer component that serves as a wrapper for the footer content.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the footer container element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered FooterContainer component.
 */
const FooterContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("container mx-auto px-4", className)} {...props} />,
)
FooterContainer.displayName = "FooterContainer"

/**
 * FooterSection component that serves as a wrapper for the footer sections.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the footer section element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered FooterSection component.
 */
const FooterSection = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />,
)
FooterSection.displayName = "FooterSection"

/**
 * FooterGrid component that serves as a wrapper for the footer grid layout.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the footer grid element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered FooterGrid component.
 */
const FooterGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-4", className)} {...props} />
  ),
)
FooterGrid.displayName = "FooterGrid"

/**
 * FooterTitle component that serves as a title for the footer sections.
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - The props for the footer title element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered FooterTitle component.
 */
const FooterTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn("text-lg text-foreground font-semibold mb-4", className)} {...props} />,
)
FooterTitle.displayName = "FooterTitle"

/**
 * FooterNav component that serves as a wrapper for the footer navigation links.
 * @param {React.HTMLAttributes<HTMLElement>} props - The props for the footer navigation element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered FooterNav component.
 */
const FooterNav = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(({ className, ...props }, ref) => (
  <nav ref={ref} className={cn("space-y-2", className)} {...props} />
))
FooterNav.displayName = "FooterNav"

/**
 * FooterNavItem component that serves as a link in the footer navigation.
 * @param {React.AnchorHTMLAttributes<HTMLAnchorElement>} props - The props for the footer navigation item element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered FooterNavItem component.
 */
const FooterNavItem = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn("block text-muted-foreground hover:text-foreground transition-colors", className)}
      {...props}
    />
  ),
)
FooterNavItem.displayName = "FooterNavItem"

/**
 * FooterSocial component that serves as a wrapper for the footer social links.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the footer social element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered FooterSocial component.
 */
const FooterSocial = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex space-x-4", className)} {...props} />,
)
FooterSocial.displayName = "FooterSocial"

/**
 * FooterSocialItem component that serves as a link in the footer social links.
 * @param {React.AnchorHTMLAttributes<HTMLAnchorElement>} props - The props for the footer social item element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered FooterSocialItem component.
 */
const FooterSocialItem = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn("text-muted-foreground hover:text-foreground transition-colors", className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
)
FooterSocialItem.displayName = "FooterSocialItem"

/**
 * FooterDivider component that serves as a divider in the footer.
 * @param {React.HTMLAttributes<HTMLHRElement>} props - The props for the footer divider element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered FooterDivider component.
 */
const FooterDivider = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => <hr ref={ref} className={cn("my-8 border-muted", className)} {...props} />,
)
FooterDivider.displayName = "FooterDivider"

/**
 * FooterCopyright component that serves as a copyright notice in the footer.
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - The props for the footer copyright element.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The rendered FooterCopyright component.
 */
const FooterCopyright = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className }, ref) => {
    const currentYear = new Date().getFullYear()
    const companyName = "Your Company, Inc."
    const rights = "All rights reserved."

    return (
      <p ref={ref} className={cn("text-sm text-muted-foreground", className)}>
        © {currentYear} {companyName}. {rights}
      </p>
    )
  },
)
FooterCopyright.displayName = "FooterCopyright"

export {
  Footer,
  FooterContainer,
  FooterSection,
  FooterGrid,
  FooterTitle,
  FooterNav,
  FooterNavItem,
  FooterSocial,
  FooterSocialItem,
  FooterDivider,
  FooterCopyright,
}
