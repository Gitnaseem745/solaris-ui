'use client';

import { Button } from "../ui/button";

export default function GoBack({ className }: { className?: string }) {
    const handleBack = () => {
        window.history.back();
    }

    return (
        <Button variant="default" size="default" className={`shadow ${className}`} onClick={handleBack}>
            Go Back
        </Button>
    )
}
