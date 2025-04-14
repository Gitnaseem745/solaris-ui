import { useState, useEffect, useRef } from 'react';

interface CarouselOptions {
    total: number;
    loop?: boolean;
    autoPlay?: boolean;
    interval?: number;
}

export function useCarousel({ total, loop = true, autoPlay = false, interval = 3000 }: CarouselOptions) {
    const [current, setCurrent] = useState<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const next = () => setCurrent(prev => loop ? (prev + 1) % total : Math.min(prev + 1, total - 1));
    const prev = () => setCurrent(prev => loop ? (prev - 1 + total) % total : Math.max(prev - 1, 0));
    const goTo = (index: number) => setCurrent(index);

    useEffect(() => {
        if (autoPlay) {
            timerRef.current = setInterval(next, interval);
            return () => {
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                    timerRef.current = null;
                }
            };
        }
        return undefined
    }, [autoPlay, interval, total]);

    return { current, next, prev, goTo };
}
