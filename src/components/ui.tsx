import { Fragment, useRef, type CSSProperties, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView, useScrollProgress } from '../lib/motion';
import type { ProjectStatus } from '../types';

/** Fades and lifts content in once. Visible without JS or with reduced motion (see index.css). */
export function Reveal({
  children, className = '', delay = 0, immediate = false, sync = false,
}: { children: ReactNode; className?: string; delay?: number; immediate?: boolean; sync?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref, { immediate, disabled: sync });
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

/**
 * A headline set in masked lines that rise one after another. Pass each line as a node;
 * the lines stay real text, separated by spaces, so assistive tech reads one phrase.
 */
export function Lines({
  lines, className = '', lineClassName = [], immediate = false, base = 0, sync = false,
}: { lines: readonly ReactNode[]; className?: string; lineClassName?: readonly string[]; immediate?: boolean; base?: number; sync?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useInView(ref, { immediate, rootMargin: '0px 0px -5% 0px', disabled: sync });
  return (
    <span ref={ref} className={`lines block ${className}`} style={{ '--base': `${base}ms` } as CSSProperties}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {/* A real space between block lines keeps the heading text readable as one phrase. */}
          {i > 0 ? ' ' : null}
          <span className={`line-mask ${lineClassName[i] ?? ''}`}>
            <span className="line-inner" style={{ '--i': i } as CSSProperties}>{line}</span>
          </span>
        </Fragment>
      ))}
    </span>
  );
}

/** Clip-reveal frame for project visuals, with a gentle scroll parallax inside. */
export function MaskFrame({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref, { rootMargin: '0px 0px -12% 0px' });
  useScrollProgress(ref);
  return (
    <div ref={ref} className={`mask-frame overflow-hidden ${className}`} style={style}>
      <div className="mask-inner h-full w-full">
        <div className="par h-full w-full">{children}</div>
      </div>
    </div>
  );
}

export function StatusLabel({ status }: { status: ProjectStatus }) {
  const filled = status === 'Deployed';
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 rounded-full ${filled ? 'bg-accent' : 'border-2 border-accent'}`}
      />
      {status}
    </span>
  );
}

interface ExtLinkProps { href: string; children: ReactNode; className?: string; icon?: boolean }

/** External link with safe attributes. */
export function ExtLink({ href, children, className = '', icon = true }: ExtLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      {icon && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-[1em] w-[1em] shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
