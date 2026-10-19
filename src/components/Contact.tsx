import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COPY, PROFILE } from '../data/portfolioData';
import { useInView } from '../lib/motion';
import { Lines, Reveal } from './ui';
import { BrushCross } from './BrushCross';

const rowClass =
  'row-fill group flex min-h-[64px] flex-wrap items-center justify-between gap-x-5 gap-y-1 border-b border-ink/25 px-1 py-4 first:border-t sm:px-3';

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  useInView(ref, { rootMargin: '0px 0px -20% 0px' });

  const links: { label: string; value: string; href: string; external: boolean }[] = [
    { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, external: false },
    { label: 'LinkedIn', value: 'Varun Karthikeya Rayasam', href: PROFILE.linkedin, external: true },
    { label: 'GitHub', value: 'varunkarthikeyarayasam', href: PROFILE.github, external: true },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-title"
      className="contact relative overflow-hidden bg-bg py-16 sm:py-20 lg:py-24"
    >
      {/* The closing sweep: peach rises from the bottom edge as this section arrives. */}
      <div aria-hidden="true" className="contact-bg absolute inset-0 bg-peach" />
      <BrushCross className="absolute -right-28 top-0 h-48 w-72 opacity-70 mix-blend-multiply sm:right-[-3rem] sm:h-60 sm:w-96" />

      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="section-mark mb-4">06 / Contact · Chennai</p>
            <h2 id="contact-title" className="display text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.9]">
              <Lines lines={['Get in', 'touch.']} lineClassName={['', 'text-accent']} base={250} sync />
            </h2>
            <Reveal sync delay={450}>
              <p className="display mt-5 max-w-md text-xl leading-snug sm:text-2xl">{COPY.closingLine}</p>
            </Reveal>
          </div>

          <ul className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            {links.map((l, i) => (
              <li key={l.label}>
                <Reveal sync delay={600 + i * 90}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={rowClass}
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink/70">{l.label}</span>
                    <span className="display flex min-w-0 items-center gap-2 text-[clamp(1.1rem,2.3vw,1.75rem)] leading-tight">
                      <span className="break-all sm:break-normal">{l.value}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-[0.9em] w-[0.9em] shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </span>
                    {l.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal sync delay={900}>
          <div className="mt-8 grid gap-4 border-t border-ink/25 pt-5 sm:grid-cols-3 sm:gap-6">
            <div><p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink/70">Availability</p><p className="mt-1.5 text-sm">Actively looking for internships</p></div>
            <div><p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink/70">Open to</p><p className="mt-1.5 text-sm">Suitable freelance projects and work arrangements</p></div>
            <div><p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink/70">Interests</p><p className="mt-1.5 text-sm">Software Development · AI/ML · Web Development</p></div>
          </div>
        </Reveal>

        {PROFILE.resumeUrl && (
          <Reveal sync delay={1150}>
            <p className="mt-8">
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-2 text-lg font-medium text-accent"
              >
                <span className="u-slide pb-0.5">Download my resume</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
