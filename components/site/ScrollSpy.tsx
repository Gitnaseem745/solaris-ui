'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollSpyProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function ScrollSpy({ id, children, className }: ScrollSpyProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100;
        setIsActive(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  return (
    <button
      onClick={() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }}
      className={cn(
        className,
        isActive && "bg-foreground text-background hover:bg-foreground hover:text-background"
      )}
    >
      {children}
    </button>
  );
} 
