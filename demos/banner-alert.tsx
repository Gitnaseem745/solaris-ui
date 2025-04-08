'use client';

import { BannerAlert } from "@/components/ui/banner-alert";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BannerAlertDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div className="content-center">
            <BannerAlert
                isOpen={isOpen}
                variant="success"
                title="Success!"
                message="Your action was successful."
                onClose={handleClose}
            />
            <Button onClick={handleOpen} variant="default" size="default">
                Show Banner Alert
            </Button>
        </div>
    )
}
