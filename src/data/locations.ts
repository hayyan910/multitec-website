// Approximate coordinates for project locations as they're written in Sanity.
// Add an entry here when a project uses a new island/atoll name.
const COORDINATES: Record<string, { lat: number; lon: number }> = {
  'male': { lat: 4.1755, lon: 73.5115 },
  'hulhumale': { lat: 4.2165, lon: 73.5405 },
  'gdh. kodegalaa': { lat: 0.33, lon: 73.04 },
};

const normalize = (name: string) =>
  name.normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLowerCase();

export function locate(name?: string) {
  return name ? COORDINATES[normalize(name)] : undefined;
}

/** Multitec's office, H. Coral Hill, Malé — where every route on the map starts. */
export const OFFICE = { lat: 4.1752, lon: 73.5098 };

// Stylized atoll outlines [lat, lon, radiusLon, radiusLat], north to south.
export const ATOLLS: [number, number, number, number][] = [
  [7.0, 72.95, 0.07, 0.06], [6.85, 73.05, 0.14, 0.17], [6.58, 73.12, 0.14, 0.14], [6.25, 73.2, 0.11, 0.2],
  [5.85, 73.35, 0.11, 0.2], [5.6, 72.95, 0.14, 0.24], [5.15, 73.02, 0.16, 0.18], [5.35, 73.55, 0.11, 0.11],
  [4.35, 73.5, 0.16, 0.28], [3.95, 73.4, 0.09, 0.17], [4.0, 72.9, 0.11, 0.2], [3.55, 72.85, 0.14, 0.2],
  [3.45, 73.55, 0.12, 0.15], [3.2, 72.95, 0.09, 0.14], [2.95, 73.5, 0.11, 0.17], [2.8, 72.95, 0.09, 0.12],
  [2.35, 73.1, 0.18, 0.19], [1.95, 73.45, 0.11, 0.19], [0.5, 73.25, 0.3, 0.34], [-0.3, 73.43, 0.025, 0.035],
  [-0.62, 73.15, 0.08, 0.07],
];
