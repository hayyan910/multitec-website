import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageRef } from '../types';

const builder = createImageUrlBuilder({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
});

/**
 * Requests an appropriately-sized, format-optimized version from Sanity's
 * image CDN instead of the raw uploaded original — width/quality are chosen
 * per call site to match how large the image actually renders.
 */
export function sanityImageUrl(source: SanityImageRef, width: number, quality = 78): string {
  return builder.image(source).width(width).auto('format').quality(quality).url();
}
