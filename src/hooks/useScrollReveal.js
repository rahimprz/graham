import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap.js';

export default function useScrollReveal({ y = 40, blur = 8, scale = 0.97, duration = 1, start = 'top 82%' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    gsap.set(node, { opacity: 0, y, scale, filter: `blur(${blur}px)` });

    const trigger = ScrollTrigger.create({
      trigger: node,
      start,
      once: true,
      onEnter: () => {
        gsap.to(node, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration,
          ease: 'power3.out',
        });
      },
    });

    return () => trigger.kill();
  }, [y, blur, scale, duration, start]);

  return ref;
}
