"use client"

import { useState } from "react"
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarTrigger,
    SidebarClose
} from "@/components/ui/sidebar"

export default function SidebarDemo() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <SidebarTrigger onClick={() => setIsOpen(true)} />

            <Sidebar
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                position="left"
            >
                <SidebarHeader>
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <SidebarClose onClick={() => setIsOpen(false)} />
                </SidebarHeader>

                <SidebarContent>
                    <nav className="space-y-4">
                        <a href="#" className="block py-2 hover:text-primary">Home</a>
                        <a href="#" className="block py-2 hover:text-primary">About</a>
                        <a href="#" className="block py-2 hover:text-primary">Services</a>
                        <a href="#" className="block py-2 hover:text-primary">Contact</a>
                    </nav>
                </SidebarContent>

                <SidebarFooter>
                    <p className="text-sm text-muted-foreground">© 2023 Company Inc.</p>
                </SidebarFooter>
            </Sidebar>
        </div>
    )
}
