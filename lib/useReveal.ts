'use client';

import { useEffect } from 'react';

/**
 * Adds a `.in` class to every element matching `selector` when it enters the
 * viewport. Pairs with the `.reveal` CSS in globals.css.
 *
 * Call once from a top-level client component (Hero does this).
 */
export function useReveal(selector: string = '.reveal') {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
