import { BrushCross } from './BrushCross';

const paragraphs = [
  'I’m a Computer Science undergraduate at Sathyabama Institute of Science & Technology, Chennai, with foundations in C, Python, and Java. I’m interested in AI/ML, Generative AI, and software development.',
  'Hackathon-based team projects have given me hands-on exposure to RAG, data analytics, and software development. I’m an AI/ML domain member of Microsoft Club, help organize a national-level hackathon, and learn with the Google Developers Group community.',
  'I’m seeking technical internship opportunities where I can keep learning, collaborate with a team, and contribute to useful software.',
];

const details = [
  'Computer Science & Engineering Undergraduate',
  'Chennai, India',
  'Software Development · AI/ML · Learning by Building',
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 sm:py-32 lg:py-40">
      <BrushCross className="absolute -left-36 top-5 h-48 w-72 opacity-65 sm:-left-40 sm:top-8 sm:h-64 sm:w-96" />
      <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <p className="section-mark mb-4">GET TO KNOW ME</p>
          <p className="display mb-3 text-xl leading-tight text-accent sm:text-2xl">Varun Karthikeya Rayasam</p>
          <h2 id="about-title" className="display max-w-md text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.98]">
            Curious by nature. A builder by choice.
          </h2>
          <figure className="relative mt-8 max-w-[28rem]">
            <div aria-hidden="true" className="absolute -inset-2 -rotate-2 rounded-sm bg-peach/35" />
            <img
              src="/images/varun-profile.jpeg"
              alt="Varun Karthikeya Rayasam at Sathyabama Institute of Science and Technology"
              className="relative aspect-[3/4] w-full rounded-sm border border-ink/10 object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 lg:pt-12">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="mt-8 border-t border-line pt-5">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Currently focused on</p>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink sm:text-lg">
              Strengthening my software development fundamentals, exploring AI/ML, building meaningful projects, and seeking internship opportunities where I can learn and contribute.
            </p>
          </div>

          <p className="display display-i mt-8 text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight text-accent">
            Building useful software. Exploring AI. Learning by making.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5">
            {details.map((detail) => (
              <li key={detail} className="font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.08em] text-muted">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
