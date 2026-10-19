import { PLANNED_PROJECTS } from '../data/portfolioData';
import { Lines, Reveal } from './ui';
import { BrushCross } from './BrushCross';

/** Visually secondary on purpose: smaller type, a quiet band, dashed outlines for ideas not yet built. */
export function Upcoming() {
  return (
    <section id="exploring" aria-labelledby="exploring-title" className="relative bg-subtle/70 py-16 sm:py-24">
      <BrushCross className="absolute right-[-6rem] top-1/3 h-44 w-64 rotate-3 opacity-45 sm:right-[-3rem] sm:h-56 sm:w-80" />
      <div className="container-x relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="section-mark mb-3">05 / In progress</p>
          <h2 id="exploring-title" className="display text-3xl leading-tight sm:text-4xl">
            <Lines lines={['Currently', 'exploring']} />
          </h2>
          <Reveal delay={200}>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-muted">
              Five ideas I want to build next. None of them exists yet.
            </p>
          </Reveal>
        </div>

        <ul className="lg:col-span-7 lg:col-start-6">
          {PLANNED_PROJECTS.map((p, i) => (
            <li key={p.id} className="relative border-b border-dashed border-line-strong first:border-t">
              <BrushCross className={`absolute right-2 top-1/2 h-20 w-28 -translate-y-1/2 ${i % 2 === 0 ? 'opacity-30' : '-rotate-6 opacity-40'}`} />
              <Reveal delay={i * 90}>
                <div className="relative z-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                  <div>
                    <h3 className="display text-2xl sm:text-3xl">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                  </div>
                  <span className="rounded-full border border-dashed border-ink/50 px-3 py-1 text-sm font-medium text-ink">
                    Planned
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
