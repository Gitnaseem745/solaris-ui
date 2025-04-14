import { useEffect, useRef, useState, RefObject } from 'react';

interface HoverIntentOptions {
  ref: RefObject<HTMLElement>;
  delay?: number;
}

export function useHoverIntent({ ref, delay = 100 }: HoverIntentOptions) {
  const [hovered, setHovered] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleEnter = () => {
      timeout.current = setTimeout(() => setHovered(true), delay);
    };
    const handleLeave = () => {
      if (timeout.current) clearTimeout(timeout.current);
      setHovered(false);
    };

    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [ref, delay]);

  return hovered;
}
