export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
}
