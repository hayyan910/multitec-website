export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  client?: string;
  location?: string;
  year: number;
  completionDate?: string;
  coverImage?: string;
  featured: boolean;
  body?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
}

export interface NavLink {
  href: string;
  label: string;
}
