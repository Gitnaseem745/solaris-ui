import { useState, useEffect, RefObject } from 'react';

export function useInView(ref: RefObject<Element>, rootMargin: string = '0px'): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => el && observer.unobserve(el);
  }, [ref, rootMargin]);

  return isInView;
}
