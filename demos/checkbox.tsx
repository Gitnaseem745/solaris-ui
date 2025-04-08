'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

export default function CheckboxDemo() {
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <div className="w-full flex justify-center items-center gap-4">
            <h2>Checkbox</h2>
            <Checkbox
                id="basic-checkbox"
                name="basicCheckbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                variant="square"
                activeColor='bg-white'
                inactiveColor='bg-transparent'
                size="md"
            />
        </div>
    );
}
