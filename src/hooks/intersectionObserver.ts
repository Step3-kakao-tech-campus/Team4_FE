import { useEffect, useRef, useCallback } from 'react';

export function useIntersectionObserver(
  handleIntersect: (...args: any[]) => void,
  { threshold }: { threshold: number },
) {
  const observerRef = useRef(null);

  const onIntersect: IntersectionObserverCallback = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        handleIntersect();
      }
    });
  }, [handleIntersect]);

  useEffect(() => {
    let io: IntersectionObserver;
    if (observerRef.current !== null) {
      io = new IntersectionObserver(onIntersect, { threshold });
      io.observe(observerRef.current);
    }
    return () => {
      if (io) {
        io.disconnect();
      }
    };
  }, [observerRef, onIntersect]);

  return observerRef;
}
