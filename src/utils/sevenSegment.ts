// Seven-segment display geometry and digit encoding, shared by the
// server-rendered markup and the client-side count-up animation.
//
//    aaa
//   f   b
//    ggg
//   e   c
//    ddd

export const SEG = { w: 26, h: 46, t: 5, gap: 1, pitch: 33, slant: 7 } as const;

export type SegmentId = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';

export const DIGIT_SEGMENTS: Record<string, string> = {
  '0': 'abcdef',
  '1': 'bc',
  '2': 'abdeg',
  '3': 'abcdg',
  '4': 'bcfg',
  '5': 'acdfg',
  '6': 'acdefg',
  '7': 'abc',
  '8': 'abcdefg',
  '9': 'abcdfg',
  ' ': '',
};

const { t, gap } = SEG;
const half = t / 2;
const r = (n: number) => Math.round(n * 100) / 100;
const pts = (list: number[][]) => list.map(([x, y]) => `${r(x)},${r(y)}`).join(' ');

// Hexagonal bar along a horizontal or vertical centre line, with mitred ends.
const horizontal = (x0: number, x1: number, y: number) =>
  pts([
    [x0 + gap, y], [x0 + gap + half, y - half], [x1 - gap - half, y - half],
    [x1 - gap, y], [x1 - gap - half, y + half], [x0 + gap + half, y + half],
  ]);
const vertical = (x: number, y0: number, y1: number) =>
  pts([
    [x, y0 + gap], [x + half, y0 + gap + half], [x + half, y1 - gap - half],
    [x, y1 - gap], [x - half, y1 - gap - half], [x - half, y0 + gap + half],
  ]);

const L = half;
const R = SEG.w - half;
const T = half;
const M = SEG.h / 2;
const B = SEG.h - half;

export const SEGMENT_POINTS: Record<SegmentId, string> = {
  a: horizontal(L, R, T),
  b: vertical(R, T, M),
  c: vertical(R, M, B),
  d: horizontal(L, R, B),
  e: vertical(L, M, B),
  f: vertical(L, T, M),
  g: horizontal(L, R, M),
};

export const SEGMENT_IDS = Object.keys(SEGMENT_POINTS) as SegmentId[];

/** Right-aligns a number into a fixed number of digit cells, blanking leading cells. */
export function toDisplayChars(value: number, cells: number): string[] {
  return String(value).padStart(cells, ' ').slice(-cells).split('');
}
