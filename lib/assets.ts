/**
 * Returns the base path for assets.
 * In production (GitHub Pages), this is "/website".
 * In development, this is "".
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prepends the base path to an asset path.
 * Use for all image src, video src, and static file hrefs.
 *
 * @example assetPath("/leo.png") → "/website/leo.png" (prod) or "/leo.png" (dev)
 */
export function assetPath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
