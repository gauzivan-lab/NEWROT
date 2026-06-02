import { useEffect, useRef, useState } from 'react';

export type AnimationType = 'up' | 'left' | 'right' | 'scale' | 'fade';

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [threshold]);

  return { ref, isVisible };
}

/** Returns className for premium scroll-reveal */
export function scrollClass(isVisible: boolean, type: AnimationType = 'up'): string {
  const hiddenMap: Record<AnimationType, string> = {
    up:    'scroll-hidden',
    left:  'scroll-hidden-left',
    right: 'scroll-hidden-right',
    scale: 'scroll-hidden-scale',
    fade:  'opacity-0 transition-opacity duration-700',
  };
  const visibleMap: Record<AnimationType, string> = {
    up:    'scroll-visible',
    left:  'scroll-visible-x',
    right: 'scroll-visible-x',
    scale: 'scroll-visible-scale',
    fade:  'opacity-100',
  };
  return isVisible ? visibleMap[type] : hiddenMap[type];
}
