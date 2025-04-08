'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import AdvanceToast from "@/components/ui/advance-toast";
import { UpgradeButton } from "@/components/ui/upgrade-modal";
import CodePreviewDemo from "./code-preview";

export default function AdvanceToastDemo() {
    const [isToastOpen, setToastOpen] = useState(false);

    const handleOpen = () => {
        setToastOpen(true);
    }
    const handleClose = () => {
        setToastOpen(false);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            {/* Button to trigger the toast notification */}
            <Button onClick={handleOpen} variant="default" size="default">
                Show Toast
            </Button>
            {/* Toast notification component */}
            <AdvanceToast
                isOpen={isToastOpen}
                onClose={handleClose}
                duration={3000}
                className="bg-background border border-border shadow-md rounded-lg flex items-center space-x-4"
            >
                {/* Toast content */}
                <div className="flex items-center space-x-4">

                    {/* Avatar or image section */}
                    <div className="flex-shrink-0">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="/user_img.jpg"
                            alt="Avatar"
                        />
                    </div>

                    {/* Text content section */}
                    <div className="flex-1">
                        <h1 className="text-balance font-medium text-foreground">
                            John Doe
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            You're invited by John Doe.
                        </p>
                    </div>
                </div>
            </AdvanceToast>
        </div>
    )
}
