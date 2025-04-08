'use client';

import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem
} from "@/components/ui/drop-down";
import { Button } from "@/components/ui/button";

export default function DropDownDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <div className="flex justify-center items-center w-full">
            <DropdownMenu>
                <DropdownMenuTrigger onClick={() => setIsOpen((prev) => !prev)}>
                    <Button variant="default" size="default">
                        {isOpen ? "Close Menu" : "Open Menu"}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64" isOpen={isOpen} onClose={() => setIsOpen(false)} align="left">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => alert("Profile clicked")}>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => alert("Billing clicked")}>
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => alert("Team clicked")}>
                        Team
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => alert("Subscription clicked")}>
                        Subscription
                    </DropdownMenuItem>
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem onClick={() => setIsChecked((prev) => !prev)} className="flex items-center">
                        <span className="line-clamp-1">Enable notifications</span>
                        <div className="ml-auto">{isChecked ? "On" : "Off"}</div>
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
