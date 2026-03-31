/**
 * Returns the base path for assets.
 * In production (GitHub Pages), this is typically "/website".
 * In development, this is "".
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prepends the base path to an asset path.
 *
 * IMPORTANT: Use this helper ONLY for raw HTML elements like <video>, <source>,
 * or for CSS backgrounds/inline styles where Next.js doesn't auto-prefix.
 *
 * DO NOT use this for <Image /> (next/image) or <Link /> (next/link) components,
 * as they automatically handle prefixing when basePath is configured in next.config.ts.
 */
export function assetPath(path: string): string {
  if (!path) return "";
  
  // If the path already includes the base path, return as is to avoid double-prefixing
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    return path;
  }

  // Prepend the base path
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
