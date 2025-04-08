'use client';

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';

export default function SwitchDemo() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="flex items-center justify-center gap-4 w-full max-w-md">
      <span className="text-sm font-medium">
        Notifications
      </span>
      <Switch
        id="notifications"
        name="notifications"
        checked={notificationsEnabled}
        onChange={(e) => setNotificationsEnabled(e.target.checked)}
        variant="circle"
      />
    </div>
  );
}
