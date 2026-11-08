export type DiagramKind = 'lightning' | 'cctv' | 'access' | 'maintenance';

export interface Callout {
  /** Position of the callout dot, as a percentage of the photo. */
  x: number;
  y: number;
  label: string;
}

export type ServiceMedia =
  | { kind: 'switchgear-photo'; callouts: Callout[] }
  | { kind: 'project-photo'; projectSlug: string; callouts: Callout[] }
  | { kind: 'diagram'; diagram: DiagramKind };

/** Home page service explorer: what each service's preview shows, keyed by service slug. */
export const SERVICE_EXPLORER: Record<string, { reference: string; media: ServiceMedia }> = {
  'panel-board-supply-installation': {
    reference: 'Built to IEC 61439',
    media: {
      kind: 'switchgear-photo',
      callouts: [
        { x: 23.8, y: 14.6, label: 'Protection relay & metering' },
        { x: 23, y: 45, label: 'Mimic diagram · 13.8 kV feeder' },
        { x: 57, y: 66, label: 'Switchgear line-up' },
      ],
    },
  },
  'electrical-wiring-and-installation': {
    reference: 'Inspected before handover',
    media: {
      kind: 'project-photo',
      projectSlug: 'fw-residence-hulhumale',
      callouts: [{ x: 46, y: 40, label: 'FW Residence, Hulhumalé · full wiring' }],
    },
  },
  'lightning-surge-protection': {
    reference: 'Designed to IEC 62305',
    media: { kind: 'diagram', diagram: 'lightning' },
  },
  'cctv-and-surveillance-systems': {
    reference: 'Placement planning to NVR setup',
    media: { kind: 'diagram', diagram: 'cctv' },
  },
  'access-control-systems': {
    reference: 'Readers · locks · intercom',
    media: { kind: 'diagram', diagram: 'access' },
  },
  'electrical-maintenance-and-support': {
    reference: 'Scheduled and emergency call-outs',
    media: { kind: 'diagram', diagram: 'maintenance' },
  },
};
