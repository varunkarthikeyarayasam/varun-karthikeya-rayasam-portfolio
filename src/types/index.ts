export type ProjectStatus = 'Deployed' | 'Local demo' | 'Planned';

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface FeaturedProject {
  id: string;
  name: string;
  /** One short line: what it is. */
  summary: string;
  /** What the owner personally did. Only what the source material supports. */
  contribution: string;
  technologies: string;
  status: Exclude<ProjectStatus, 'Planned'>;
  /** Optional small honesty note shown as an annotation. */
  note?: string;
  /** Additional verified context shown on request in a native disclosure. */
  caseStudy?: {
    label: string;
    sections: { title: string; body: string }[];
  };
  visual: ProjectScreenshot;
  links: ProjectLink[];
}

export interface PlannedProject {
  id: string;
  name: string;
  tagline: string;
}

export interface NavItem { label: string; href: string; id: string }
