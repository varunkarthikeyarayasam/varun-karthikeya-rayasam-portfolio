import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV, PROFILE } from '../data/portfolioData';

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ids = ['home', ...NAV.map((n) => n.id)];
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => e !== null);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id === 'home' ? '' : e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); menuBtn.current?.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between">
          <a
            href="#home"
            className="display inline-flex min-h-[44px] items-center text-lg tracking-tight"
            onClick={() => setOpen(false)}
          >
            {PROFILE.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={n.href}
                className="u-slide py-1 text-[0.95rem] font-medium text-ink transition-colors hover:text-accent"
                aria-current={active === n.id ? 'true' : undefined}
              >
                {n.label}
              </a>
            ))}
            {PROFILE.resumeUrl && (
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="u-slide py-1 text-[0.95rem] font-medium text-accent"
              >
                Resume<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </nav>

          <button
            ref={menuBtn}
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="bg-bg md:hidden">
            <ul className="container-x flex flex-col pb-5 pt-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="display flex min-h-[56px] items-center border-b border-line text-3xl"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              {PROFILE.resumeUrl && (
                <li>
                  <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display flex min-h-[56px] items-center text-3xl text-accent"
                  >
                    Resume<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
