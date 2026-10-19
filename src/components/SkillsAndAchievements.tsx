import { Reveal, Lines } from './ui';
import { BrushCross } from './BrushCross';
import { Award, BadgeCheck, BookOpen, Code2, Sparkles } from 'lucide-react';

const groups = [
  { title: 'Languages', items: 'C · Python · Java (fundamentals)' },
  { title: 'AI / ML', items: 'Artificial Intelligence · Machine Learning · Generative AI · RAG · NLP' },
  { title: 'AI techniques', items: 'Embeddings · Prompt Engineering · Explainable AI · XGBoost' },
  { title: 'Data', items: 'Data Analytics · Data Visualization · Pandas · NumPy · GeoPandas · Tableau' },
  { title: 'Databases', items: 'SQL · PostgreSQL · PostGIS · pgvector · MongoDB' },
  { title: 'Development / tools', items: 'React · Tailwind CSS · FastAPI · MapLibre · Supabase · Scikit-Learn · Git · GitHub · JWT · Role-Based Access' },
  { title: 'Other', items: 'Software Testing · Teamwork · Leadership · Communication' },
];
const awards = [
  ['Sep 2026', 'AI IGNITE Hackathon — Winner', 'Team achievement · Sathyabama Institute of Science & Technology · Certificate of Appreciation'],
  ['Apr 2026', 'Luminary Award', 'Sathyabama Institute of Science & Technology · Institute-level honor'],
];
const hackathons = [
  ['Sep 2026', 'Resonance 1.0 Hackathon', 'VIT Chennai · Participation'],
  ['Sep 2026', 'LUMINIX’26 Hackathon', 'LumoraSpace · Participation'],
  ['Aug 2026', 'Hack Fusion 2026 Hackathon', 'Unstop · Participation'],
  ['Jun 2026', 'Bharatiya Antariksh Hackathon (BAH) 2026', 'ISRO | Hack2skill · Participation'],
];
const community = [
  ['2026–Present', 'Microsoft Club', 'Sathyabama Institute of Science & Technology · AI/ML Domain Member & Hackathon Organizer; contributes to planning, coordination, and execution of a national-level hackathon.'],
  ['Jun 2026–Present', 'Google Developers Group', 'Member · Peer learning and applied AI and Python projects with fellow members.'],
  ['2026–Present', 'GSX Community · Chennai Chapter', 'Member'],
];
const learningRecords = [
  ['Sep 2026', 'Google Cloud Gen AI Academy APAC Edition — Cohort 3', 'Hack2skill · Certificate of Completion'],
  ['Aug 2026', 'Building an App with Code Agents and MongoDB', 'MongoDB · Certificate & Badge'],
  ['Aug 2026', 'Java Foundations', 'Oracle · Java Foundations Explorer Badge'],
  ['Jun 2026', 'Google AI Essentials', 'Google'],
  ['Jun 2026', 'Deloitte Australia — Data Analytics Job Simulation', 'Deloitte · Virtual Job Simulation'],
  ['Jun 2026', 'Getting Started with Generative AI', 'IBM'],
];
const additionalCredentials = [
  ['Oct 2025', 'Workshop on Retrieval-Augmented Generation (RAG)', 'VIT Chennai'],
  ['Jun 2026', 'Introduction to Data Science', 'Cisco Networking Academy'],
  ['Aug 2026', 'Build Your 1st AI Automation with n8n', 'Sathyabama Institute of Science & Technology · Certificate of Participation'],
  ['May 2026', 'Software Testing', 'NPTEL'],
  ['Jul 2025', 'Course on C Language', 'Naresh i Technologies'],
  ['Jun 2026', 'Claude 101', 'Anthropic · Certificate of Completion'],
  ['Jun 2026', 'Digital 101 — Foundation Course in Emerging Technologies', 'Nasscom'],
  ['Sep 2025', 'AI for the Future — Workshop', 'Sathyabama Institute of Science & Technology'],
  ['Jun 2026', 'Microsoft Learn Achievements — AI & Communication', 'Microsoft'],
  ['Jan 2026', 'Webxplore Workshop', 'Sathyabama Institute of Science & Technology'],
  ['Jun 2026', 'Digital Marketing Certification', 'HubSpot Academy · Valid through Jul 2027'],
];
const credentials = [...learningRecords, ...additionalCredentials];
const credentialAccents = [
  { card: 'border-violet/30 bg-gradient-to-br from-violet/15 via-bg to-peach/15', icon: 'bg-violet/15 text-violet' },
  { card: 'border-peach/40 bg-gradient-to-br from-peach/25 via-bg to-rose-50/80', icon: 'bg-peach/20 text-peach-deep' },
  { card: 'border-sky-200 bg-gradient-to-br from-sky-100/80 via-bg to-violet/10', icon: 'bg-sky-100 text-sky-800' },
  { card: 'border-amber-200/80 bg-gradient-to-br from-amber-50 via-bg to-peach/20', icon: 'bg-amber-100 text-amber-800' },
  { card: 'border-rose-200/80 bg-gradient-to-br from-rose-50 via-bg to-sky-50', icon: 'bg-rose-100 text-rose-800' },
];
const credentialIcons = [Award, BadgeCheck, BookOpen, Code2, Sparkles];
const languages = [
  ['English', 'Full Professional'],
  ['Telugu', 'Native / Bilingual'],
  ['Hindi', 'Professional Working'],
  ['Tamil', 'Professional Working'],
];

function RecordList({ title, rows }: { title: string; rows: string[][] }) {
  return <div>
    <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">{title}</h3>
    <ul className="divide-y divide-line border-y border-line">
      {rows.map(([date, name, detail]) => <li key={name} className="grid gap-1 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
        <span className="font-mono text-xs text-muted">{date}</span>
        <div><p className="font-medium">{name}</p><p className="mt-1 text-sm leading-relaxed text-muted">{detail}</p></div>
      </li>)}
    </ul>
  </div>;
}

export function SkillsAndAchievements() {
  return <>
    <section id="skills" aria-labelledby="skills-title" className="relative border-t border-line py-20 sm:py-28">
      <BrushCross className="absolute right-[-7rem] top-2 h-44 w-64 opacity-55 sm:right-[-4rem] sm:h-56 sm:w-80" />
      <div className="container-x relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4"><p className="section-mark mb-3">03 / Toolkit</p><h2 id="skills-title" className="display text-4xl sm:text-5xl"><Lines lines={['Technical', 'skills']} /></h2><p className="mt-4 max-w-sm text-muted">A working toolkit built through coursework, team projects, and hackathons.</p></div>
        <dl className="lg:col-span-7 lg:col-start-6">
          {groups.map((g) => <Reveal key={g.title}><div className="grid gap-2 border-t border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-5"><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{g.title}</dt><dd className="text-base leading-relaxed">{g.items}</dd></div></Reveal>)}
        </dl>
      </div>
    </section>
    <section id="achievements" aria-labelledby="achievements-title" className="relative bg-surface/15 py-20 sm:py-28">
      <BrushCross className="absolute bottom-2 left-[-8rem] h-44 w-64 opacity-50 sm:left-[-5rem] sm:h-56 sm:w-80" />
      <div className="container-x relative z-10">
        <p className="section-mark mb-3">04 / Recognition & community</p><div className="mb-10 grid gap-4 sm:grid-cols-[1fr_1fr] sm:items-end"><h2 id="achievements-title" className="display text-4xl sm:text-5xl"><Lines lines={['Achievements', '& involvement']} /></h2><p className="max-w-md text-base leading-relaxed text-muted">Team wins, campus communities, and learning milestones from 2026.</p></div>
        <div className="grid gap-10 lg:grid-cols-3"><Reveal><RecordList title="Awards" rows={awards} /></Reveal><Reveal delay={100}><RecordList title="Community" rows={community} /></Reveal><Reveal delay={200}><RecordList title="Selected credentials" rows={learningRecords.slice(0, 3)} /></Reveal></div>

        <details className="mt-10 border-t border-line pt-5">
          <summary className="min-h-11 cursor-pointer py-2 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 focus-visible:outline-accent">Hackathon participation records ({hackathons.length})</summary>
          <div className="py-3"><RecordList title="Participation" rows={hackathons} /></div>
        </details>

        <div className="mt-12 grid gap-5 border-t border-line pt-8 lg:grid-cols-12 lg:gap-8" aria-labelledby="education-title">
          <div className="lg:col-span-4">
            <p className="section-mark mb-3">Education</p>
            <h3 id="education-title" className="display text-3xl leading-tight">Sathyabama Institute of Science and Technology</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">B.E., Computer Science & Engineering · 2025–2029 · Chennai</p>
          </div>
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            <div className="border-t border-line pt-3"><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">First-year CGPA</dt><dd className="mt-1 text-lg text-ink">8.97</dd></div>
            <div className="border-t border-line pt-3"><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Class XII · CBSE · 2024–2025</dt><dd className="mt-1 text-lg text-ink">87%</dd><p className="mt-1 text-sm text-muted">Sri Chaitanya College of Education, Chennai</p></div>
            <div className="border-t border-line pt-3"><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Class X · CBSE · 2022–2023</dt><dd className="mt-1 text-lg text-ink">91.2%</dd><p className="mt-1 text-sm text-muted">GT Aloha Vidhya Mandir</p></div>
          </dl>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <div className="mb-7">
            <p className="section-mark mb-3">CERTIFICATIONS &amp; CREDENTIALS</p>
            <h3 className="display text-3xl sm:text-4xl">Learning, recognised.</h3>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map(([date, title, provider], index) => {
              const accent = credentialAccents[index % credentialAccents.length];
              const CredentialIcon = credentialIcons[index % credentialIcons.length];
              const [issuer, ...recordTypeParts] = provider.split(' · ');
              const recordType = recordTypeParts.join(' · ');
              return <li key={title} className="h-full">
              <article className={`group relative flex h-full min-h-52 flex-col overflow-hidden rounded-sm border p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none sm:p-6 ${accent.card}`}>
                <span aria-hidden="true" className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full ${accent.icon}`}><CredentialIcon size={19} strokeWidth={1.7} /></span>
                <h4 className="break-words text-base font-semibold leading-snug text-ink sm:text-lg">{title}</h4>
                <p className="mt-3 text-sm font-medium leading-relaxed text-ink/80">{issuer}</p>
                <span className="mt-3 w-fit rounded-full border border-ink/10 bg-bg/75 px-3 py-1 font-mono text-[0.68rem] tracking-[0.06em] text-muted">{date}</span>
                {recordType && <p className="mt-auto pt-4 text-xs leading-relaxed text-muted">{recordType}</p>}
              </article>
            </li>;
            })}
          </ul>
        </div>

        <div className="mt-10 grid gap-6 border-t border-line pt-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
          <h3 className="font-mono text-sm uppercase tracking-[0.12em] text-muted sm:text-base">Spoken languages</h3>
          <ul className="flex flex-wrap gap-x-8 gap-y-4">{languages.map(([language, level]) => <li key={language} className="text-base leading-relaxed sm:text-lg"><span className="font-medium">{language}</span><span className="text-muted"> — {level}</span></li>)}</ul>
        </div>
      </div>
    </section>
  </>;
}
