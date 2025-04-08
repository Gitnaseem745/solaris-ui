import { Button } from "@/components/ui/button";
import { Nav, NavActions, NavBrand, NavContainer, NavContent, NavItem, NavItems } from "@/components/ui/navbar";

export default function NavbarDemo() {
    return (
        <div className="w-full rounded-lg overflow-hidden">
            <Nav variant="default">
                <NavContainer>
                    <NavContent>
                        <NavBrand>
                            <a href="#" className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 text-foreground"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="4" />
                                    <line x1="21.17" x2="12" y1="8" y2="8" />
                                    <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                                    <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
                                </svg>
                                <span className="text-xl font-bold text-foreground">Brand</span>
                            </a>
                        </NavBrand>

                        <NavItems>
                            <NavItem href="#" active>
                                Home
                            </NavItem>
                            <NavItem href="#">Features</NavItem>
                            <NavItem href="#">Pricing</NavItem>
                            <NavItem href="#">About</NavItem>
                            <NavItem href="#">Contact</NavItem>
                        </NavItems>

                        <NavActions>
                            <Button variant="ghost" size="sm">
                                Log in
                            </Button>
                            <Button size="sm">Sign up</Button>
                        </NavActions>
                    </NavContent>
                </NavContainer>
            </Nav>
        </div>
    )
}
