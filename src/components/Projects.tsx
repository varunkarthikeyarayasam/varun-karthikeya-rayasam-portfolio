import type { CSSProperties } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import type { FeaturedProject } from '../types';
import { ExtLink, Lines, MaskFrame, Reveal, StatusLabel } from './ui';
import { BrushCross } from './BrushCross';

type Variant = 'a' | 'b' | 'c';

/** Each project gets its own composition on large screens; everything stacks on small ones. */
const LAYOUT: Record<Variant, { name: string; visual: string; text: string; frame: string }> = {
  a: {
    name: 'lg:col-span-12 lg:row-start-1',
    visual: 'lg:col-start-6 lg:col-end-13 lg:row-start-2 lg:-mt-4',
    text: 'lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:mt-10',
    frame: 'aspect-[4/3] bg-peach/25',
  },
  b: {
    name: 'lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:self-end lg:text-right lg:pb-6',
    visual: 'lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-3',
    text: 'lg:col-start-8 lg:col-end-13 lg:row-start-2 lg:mt-2',
    frame: 'aspect-[5/4] bg-surface/20',
  },
  c: {
    name: 'lg:col-span-12 lg:row-start-1',
    visual: 'lg:col-start-4 lg:col-end-13 lg:row-start-2 lg:mt-2',
    text: 'lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:self-end lg:pb-8',
    frame: 'aspect-[16/10] bg-peach/25',
  },
};

const VARIANTS: Variant[] = ['a', 'b', 'c'];

function ProjectName({ p, variant }: { p: FeaturedProject; variant: Variant }) {
  const words = p.name.split(' ');
  const size = variant === 'c' ? 'text-[clamp(2.8rem,6.2vw,5.8rem)]' : 'text-[clamp(3rem,7vw,6.4rem)]';
  return (
    <h3 id={`${p.id}-name`} className={`display ${size} leading-[0.85]`}>
      <Lines
        lines={words}
        lineClassName={variant === 'b' ? ['display-i text-accent'] : variant === 'c' ? ['', 'display-i text-accent lg:ml-[18%]'] : ['']}
      />
    </h3>
  );
}

function ProjectVisual({ p, variant }: { p: FeaturedProject; variant: Variant }) {
  const { visual } = p;
  const frame = LAYOUT[variant].frame;
  return (
    <figure>
      <MaskFrame className={`relative w-full ${frame}`}>
        <div className="flex h-full w-full items-center justify-center p-3 sm:p-5">
          <img src={visual.src} alt={visual.alt} loading="lazy" decoding="async" className="h-full w-full object-contain" />
        </div>
      </MaskFrame>
      <figcaption className="note mt-3 text-sm text-muted">{visual.caption}</figcaption>
    </figure>
  );
}

function ProjectText({ p }: { p: FeaturedProject }) {
  return (
    <>
      <StatusLabel status={p.status} />
      <p className="mt-4 text-lg leading-relaxed text-ink">{p.summary}</p>
      <p className="mt-4 text-base leading-relaxed text-muted">
        <span className="font-semibold text-ink">My part:</span> {p.contribution}
      </p>
      {p.note && <p className="note mt-3 text-[0.95rem] leading-snug text-muted">{p.note}</p>}
      {p.caseStudy && (
        <details className="mt-5 border-t border-line pt-4">
          <summary className="min-h-11 cursor-pointer py-2 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 focus-visible:outline-accent">
            {p.caseStudy.label}
          </summary>
          <div className="space-y-4 pb-2 pt-2">
            {p.caseStudy.sections.map((section) => (
              <div key={section.title}>
                <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{section.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink">{section.body}</p>
              </div>
            ))}
          </div>
        </details>
      )}
      <p className="mt-4 text-sm leading-relaxed text-muted"><span className="font-semibold text-ink">Technologies:</span> {p.technologies}</p>

      <div className="mt-6">
        {p.links.length > 0 ? (
          p.links.map((l) => (
            <ExtLink
              key={l.href}
              href={l.href}
              className="group inline-flex min-h-[44px] items-center gap-1.5 text-lg font-medium text-accent"
            >
              <span className="u-slide pb-0.5">{l.label}</span>
            </ExtLink>
          ))
        ) : (
          <p className="text-sm text-muted">Runs locally. No public link yet.</p>
        )}
      </div>
    </>
  );
}

function ProjectFeature({ p, variant }: { p: FeaturedProject; variant: Variant }) {
  const l = LAYOUT[variant];
  return (
    <article aria-labelledby={`${p.id}-name`} className="relative py-14 sm:py-20 lg:py-28">
      <BrushCross className={`absolute top-1/3 h-40 w-64 opacity-55 sm:h-52 sm:w-80 ${variant === 'b' ? 'right-0 -rotate-6' : variant === 'c' ? 'left-[38%] rotate-6' : 'right-[4%]'}`} />
      <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
        <div className={l.name}>
          <ProjectName p={p} variant={variant} />
        </div>
        <div className={l.visual}>
          <ProjectVisual p={p} variant={variant} />
        </div>
        <Reveal delay={150} className={l.text}>
          <ProjectText p={p} />
        </Reveal>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="pt-10 sm:pt-16">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div><p className="section-mark mb-3">01 / My Work</p><h2 id="work-title" className="display text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.95]">
            <Lines lines={['My', 'Work']} />
          </h2></div>
          <Reveal delay={300}>
            <p className="note pb-2 text-lg text-muted" style={{ transform: 'rotate(-3deg)' } as CSSProperties}>
              three team projects
            </p>
          </Reveal>
        </div>

        <div className="mt-6">
          {FEATURED_PROJECTS.map((p, i) => (
            <ProjectFeature key={p.id} p={p} variant={VARIANTS[i % VARIANTS.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
