export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  client?: string;
  year: number;
  coverImage?: string;
  featured: boolean;
  body?: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface NavLink {
  href: string;
  label: string;
}
