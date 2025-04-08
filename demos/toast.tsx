'use client';

import { Button } from "@/components/ui/button";
import Toast from "@/components/ui/toast";
import { useState } from "react";

export default function ToastDemo() {
    const [isToastOpen, setToastOpen] = useState(false);

    const handleOpen = () => {
        setToastOpen(true);
    }
    const handleClose = () => {
        setToastOpen(false);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Button onClick={handleOpen} variant="default" size="default">
                Show Toast
            </Button>
            <Toast
                message="This is a toast message!"
                isOpen={isToastOpen}
                onClose={handleClose}
                duration={3000}
                type="default"
            />
        </div>
    )
}
