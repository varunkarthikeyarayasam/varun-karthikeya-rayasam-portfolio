import type { FeaturedProject, NavItem, PlannedProject } from '../types';

/**
 * All portfolio content lives here. Sources: the owner's resumes dated 21 Sep 2026,
 * the supplied screenshots and the owner's confirmed profile notes.
 * Anything not evidenced there is deliberately left out.
 */

export const PROFILE = {
  name: 'Varun Karthikeya Rayasam',
  role: 'Computer Science & Engineering undergraduate exploring software development, AI/ML, Generative AI, and data-driven problem-solving',
  city: 'Chennai',
  availability: 'Actively looking for internships',
  email: 'varunkarthikeyarayasam@gmail.com',
  github: 'https://github.com/varunkarthikeyarayasam',
  linkedin: 'https://www.linkedin.com/in/varun-karthikeya-rayasam-3280ba384/',
  /**
   * Resume PDF. Leave undefined until the chosen file is placed in /public
   * (e.g. '/Varun-Karthikeya-Rayasam-Resume.pdf'); the links then appear automatically.
   */
  resumeUrl: undefined as string | undefined,
} as const;

export const COPY = {
  heroIntro: 'I’m a Computer Science and Engineering undergraduate interested in building useful software, exploring AI and Generative AI, and solving problems with data.',
  about: [
    'I’m drawn to problems where better software makes complex information easier to use.',
    'I study Computer Science & Engineering at Sathyabama Institute of Science & Technology in Chennai (2025–2029); my first-year CGPA is 8.97.',
    'Team projects and hackathons have been my hands-on learning ground. Through Microsoft Club’s AI/ML domain and Google Developers Group, I’m learning alongside peers and building toward a career in software development.',
  ],
  closingLine: 'Let’s build something people actually use.',
} as const;

export const NAV: NavItem[] = [
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Highlights', href: '#achievements', id: 'achievements' },
  { label: 'Exploring', href: '#exploring', id: 'exploring' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'vyse',
    name: 'VYSE',
    summary: 'A multilingual AI chatbot concept using retrieval-augmented generation over verified campus information.',
    contribution: 'Built with Team Shadow Coders.',
    technologies: 'LLM · Embeddings · NLP · RAG · React · Tailwind CSS · Supabase · PostgreSQL/pgvector · JWT role-based access · Vercel',
    status: 'Deployed',
    caseStudy: {
      label: 'Explore project context',
      sections: [
        {
          title: 'Designed scope',
          body: 'The team project follows an ask, understand, verify, respond, act workflow to answer student queries and connect them with campus services. Its described scope includes schedules, examinations, departments, facilities, events, rules, bus routes, and OD/leave. Admin-controlled updates are intended to reduce repetitive queries. This does not claim ERP integration, live bus tracking, or synchronized attendance.',
        },
      ],
    },
    visual: {
      src: '/images/vyse.webp',
      alt: 'Screenshot of the VYSE campus assistant interface with a student profile and chat controls.',
      caption: 'VYSE campus assistant interface.',
    },
    links: [{ label: 'Open the live demo', href: 'https://vyse-campus.vercel.app/' }],
  },
  {
    id: 'kairos',
    name: 'KAIROS',
    summary: 'A team-built urban climate decision platform for heat hotspot detection, explainable causes, impact prediction, and intervention planning.',
    contribution: 'Data-focused contribution in a hackathon team.',
    technologies: 'React · Tailwind CSS · MapLibre · FastAPI · PostgreSQL/PostGIS · GeoPandas',
    status: 'Local demo',
    note: 'Demo-stage prototype; local run, public deployment unconfirmed. Potential impacts are exploratory, not validated findings.',
    caseStudy: {
      label: 'Explore project context',
      sections: [
        {
          title: 'Data and intent',
          body: 'Its scope includes interactive heat maps with severity and population exposure; analysis of asphalt and concrete, vegetation, building density, human-activity heat, and water-body scarcity; energy, water, and health-risk indicators; recommendations for cool roofs, tree canopy, reflective pavements, and green roofs; priority ranking; an AI climate assistant; a digital urban twin; and a cooling-budget optimizer demonstrated on simulated scenarios. Simulations do not establish real-world outcomes.',
        },
      ],
    },
    visual: {
      src: '/images/kairos.webp',
      alt: 'Screenshot of the urban heat intelligence interface showing a Chennai map and heat-risk panels.',
      caption: 'Urban heat mapping interface.',
    },
    links: [],
  },
  {
    id: 'agnivaan-ai',
    name: 'AGNIVAAN AI — Solar Flare Forecasting',
    summary: 'A team-built ML solution developed for ISRO’s Bharatiya Antariksh Hackathon (BAH) 2026.',
    contribution: 'Worked as part of Team Zavenox; the resume does not specify an individual responsibility.',
    technologies: 'Python · FastAPI · XGBoost · Explainable AI · Scikit-Learn · Pandas · NumPy · Flutter/Dart · Matplotlib · Git · GitHub',
    status: 'Local demo',
    caseStudy: {
      label: 'Explore project context',
      sections: [
        {
          title: 'Forecast target and data',
          body: 'The second resume describes an event-aware XGBoost model using 57+ temporal features, targeting M/X-class solar flares approximately 15 minutes ahead and validated on NOAA GOES-18 XRS data. The resumes also describe XGBoost and explainable AI techniques. Aditya-L1 soft/hard X-ray streams are a future direction. The records do not provide an accuracy score or claim operational deployment.',
        },
      ],
    },
    visual: {
      src: '/images/agnivaan.webp',
      alt: 'Screenshot of the AGNIVAAN AI solar flare dashboard with overview metrics and an X-ray flux chart.',
      caption: 'AGNIVAAN AI solar flare dashboard.',
    },
    links: [],
  },
];

export const PLANNED_PROJECTS: PlannedProject[] = [
  { id: 'campuscost', name: 'CampusCost', tagline: 'Student budgeting assistant' },
  { id: 'civicsnap', name: 'CivicSnap', tagline: 'AI-assisted civic issue reporting' },
  { id: 'opendoor-ai', name: 'OpenDoor AI', tagline: 'Opportunity discovery for students' },
  { id: 'foodloop', name: 'FoodLoop', tagline: 'Surplus food redistribution' },
  { id: 'accessmap-ai', name: 'AccessMap AI', tagline: 'Accessibility-aware navigation' },
];
