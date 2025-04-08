'use client';

import { Notification } from "@/components/ui/notification";

export default function NotificationDemo() {
    const handleReply = () => {
        alert("Reply button clicked!");
    };

    return (
        <div className="w-full flex flex-col p-4">
            <Notification className="max-w-sm mx-auto">
                <Notification.Avatar imgUrl="/user_img.jpg" />
                <Notification.Message>Hi there! I'm John Doe from Solaris team</Notification.Message>
                <Notification.ReplyButton onClick={handleReply} />
            </Notification>
        </div>
    )
}
