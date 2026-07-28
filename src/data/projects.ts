import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'lhdh-hospital-electrical-upgrade',
    title: 'LHDH Hospital Electrical Systems Upgrade',
    description:
      'Complete overhaul of main distribution boards, emergency power, and lighting for Laamu Atoll Regional Hospital.',
    category: 'Healthcare',
    client: 'Ministry of Health',
    year: 2023,
    featured: true,
  },
  {
    slug: 'male-commercial-complex-fitout',
    title: 'Malé Commercial Complex Fitout',
    description:
      'Full MEP electrical fitout for a 12-storey mixed-use commercial building in central Malé.',
    category: 'Commercial',
    year: 2022,
    featured: true,
  },
  {
    slug: 'resort-solar-pv-integration',
    title: 'Resort Solar PV Integration',
    description:
      'Design and installation of a 500 kWp grid-tied solar photovoltaic system at a luxury island resort.',
    category: 'Renewable Energy',
    year: 2023,
    featured: false,
  },
];
