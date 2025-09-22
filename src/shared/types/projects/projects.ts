export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl: string;
  period?: string;
  image: string;
}

export type Projects = Project[];