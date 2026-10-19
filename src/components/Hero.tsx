import { ArrowDown } from 'lucide-react';
import { ParticleName } from './ParticleName';
import { BrushCross } from './BrushCross';

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative overflow-hidden bg-bg pb-20 pt-8 text-ink sm:pb-28 sm:pt-12"
    >
      <BrushCross className="absolute -right-[15rem] top-20 h-64 w-[26rem] opacity-75 sm:right-[-11rem] sm:top-24 sm:h-[25rem] sm:w-[36rem] lg:right-[2%] lg:top-28 lg:h-[31rem] lg:w-[44rem]" />
      <span aria-hidden="true" className="absolute right-[9%] top-16 h-2.5 w-2.5 rounded-full bg-violet sm:right-[14%] sm:top-20" />
      <div className="container-x relative z-10">
        <p className="mb-6 flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.17em] text-muted sm:mb-8 sm:text-xs">
          <span aria-hidden="true" className="h-px w-7 bg-[#315CE8]" />
          Computer Science &amp; Engineering
        </p>

        <ParticleName />

        <div className="mt-8 grid gap-7 sm:mt-10 lg:mt-12 lg:grid-cols-12 lg:gap-8">
            <p className="max-w-2xl font-sans text-xl leading-[1.35] tracking-[-0.025em] text-ink/80 sm:text-2xl lg:col-span-6 lg:self-center lg:text-[1.7rem]">
            Building useful software. Exploring AI. Learning by making.
          </p>

          <div className="lg:col-span-4 lg:col-start-9 lg:self-center">
            <p className="mb-4 flex items-center gap-2 font-mono text-[0.68rem] leading-relaxed tracking-[0.04em] text-muted sm:text-xs">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-peach" />
              Chennai, India · CSE Undergraduate
            </p>
            <nav aria-label="Explore the portfolio" className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#work"
                className="group inline-flex min-h-12 items-center gap-3 rounded-sm bg-accent px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-ink focus-visible:outline-[#315CE8] sm:text-base"
              >
                Explore my work
                <ArrowDown aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center rounded-sm border border-ink/30 px-5 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-[#315CE8] sm:text-base"
              >
                Get in touch
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
