import { PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="bg-peach pb-10 pt-2 text-ink">
      <div className="container-x flex flex-col gap-2 border-t border-ink/25 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <p>{PROFILE.city}, India</p>
      </div>
    </footer>
  );
}
