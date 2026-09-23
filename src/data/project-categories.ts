// Display labels and URL slugs for project categories.
//
// `value` must match the raw string stored in Sanity's `category` array exactly.
// Renaming a `label` here is purely cosmetic and needs no Sanity change.
// Renaming/merging the underlying `value` itself means updating that string on
// every affected project document in Sanity Studio (or a one-off migration script).
//
// Any category value that shows up in Sanity but isn't listed here still gets
// its own filter chip (using the raw string as both label and slug) — nothing
// is ever silently hidden, it just won't have a nicer label until added here.
export interface CategoryMeta {
  value: string;
  label: string;
  slug: string;
}

export const CATEGORY_ORDER: CategoryMeta[] = [
  { value: 'Panel Board Supply & Installation', label: 'Panel Boards', slug: 'panel-boards' },
  { value: 'Electrical Wiring & Installation', label: 'Electrical Wiring', slug: 'electrical-wiring' },
  { value: 'Lightning & Surge Protection', label: 'Lightning Protection', slug: 'lightning-protection' },
];

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
