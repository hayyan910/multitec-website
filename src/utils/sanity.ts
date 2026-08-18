import { sanityClient } from 'sanity:client';
import { defineQuery } from 'groq';
import type { Project, Service } from '../types';

const PROJECT_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  description,
  category,
  client,
  location,
  year,
  completionDate,
  "coverImage": coverImage.asset->url,
  featured,
  body
`;

const SERVICE_FIELDS = `
  _id,
  "id": slug.current,
  title,
  shortDescription,
  fullDescription,
  icon,
  order
`;

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project"] | order(_createdAt desc) { ${PROJECT_FIELDS} }`
);

export const FEATURED_PROJECTS_QUERY = defineQuery(
  `*[_type == "project" && featured == true] | order(_createdAt desc) { ${PROJECT_FIELDS} }`
);

export const PROJECT_BY_SLUG_QUERY = defineQuery(
  `*[_type == "project" && slug.current == $slug][0] { ${PROJECT_FIELDS} }`
);

export const PROJECT_SLUGS_QUERY = defineQuery(
  `*[_type == "project" && defined(slug.current)] { "params": { "slug": slug.current } }`
);

export const SERVICES_QUERY = defineQuery(
  `*[_type == "service"] | order(order asc) { ${SERVICE_FIELDS} }`
);

export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(PROJECTS_QUERY);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return await sanityClient.fetch(FEATURED_PROJECTS_QUERY);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return await sanityClient.fetch(PROJECT_BY_SLUG_QUERY, { slug });
}

export async function getServices(): Promise<Service[]> {
  return await sanityClient.fetch(SERVICES_QUERY);
}
