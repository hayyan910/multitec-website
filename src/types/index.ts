// The raw Sanity image field value (not dereferenced to a URL in GROQ) —
// this is what @sanity/image-url's builder expects as input, so it can
// request an appropriately-sized, format-optimized version from Sanity's
// CDN rather than the full-resolution original.
export interface SanityImageRef {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string[];
  client?: string;
  location?: string;
  year: number;
  completionDate?: string;
  coverImage?: SanityImageRef;
  images?: SanityImageRef[];
  featured: boolean;
  body?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  icon: string;
}

export interface NavLink {
  href: string;
  label: string;
}
