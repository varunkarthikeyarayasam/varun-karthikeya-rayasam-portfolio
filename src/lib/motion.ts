import { useEffect, type RefObject } from 'react';

/**
 * Small, dependency-free motion helpers. Everything here is progressive:
 * content is visible by default (see index.css) and each helper does nothing
 * when the visitor prefers reduced motion or the device has no fine pointer.
 */

const MOTION_OK = '(prefers-reduced-motion: no-preference)';
const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const WIDE = '(min-width: 768px)';

interface InViewOptions {
  /** Reveal right after mount instead of waiting for scroll (used above the fold). */
  immediate?: boolean;
  rootMargin?: string;
  /** Skip observing: an ancestor's `in` class drives this element instead. */
  disabled?: boolean;
}

/** Adds the `in` class to the element once it scrolls into view. CSS owns the animation. */
export function useInView(ref: RefObject<Element>, { immediate = false, rootMargin = '0px 0px -10% 0px', disabled = false }: InViewOptions = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;
    if (immediate || !('IntersectionObserver' in window)) {
      const t = window.setTimeout(() => el.classList.add('in'), 40);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, immediate, rootMargin, disabled]);
}

/** Writes -1..1 pointer offsets to --px / --py on the element. Desktop, fine pointers only. */
export function usePointerDrift(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia(`${MOTION_OK} and ${FINE_POINTER}`).matches) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      raf = 0;
      el.style.setProperty('--px', x.toFixed(3));
      el.style.setProperty('--py', y.toFixed(3));
    };
    const schedule = () => { if (!raf) raf = window.requestAnimationFrame(apply); };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2));
      y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2));
      schedule();
    };
    const onLeave = () => { x = 0; y = 0; schedule(); };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [ref]);
}

/**
 * Writes --p (-1..1, how far the element sits from the viewport centre) and --ps (a small
 * overscan scale) to the element. Wide screens with motion allowed only; elsewhere the CSS
 * fallbacks keep everything still.
 */
export function useScrollProgress(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia(`${MOTION_OK} and ${WIDE}`).matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
      el.style.setProperty('--p', Math.max(-1, Math.min(1, p)).toFixed(3));
    };
    const schedule = () => { if (!raf) raf = window.requestAnimationFrame(update); };
    el.style.setProperty('--ps', '1.1');
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [ref]);
}
