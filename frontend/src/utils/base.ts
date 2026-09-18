// Helper to prepend BASE_URL for GH Pages subpath support
// Updated to handle absolute Cloudflare R2 URLs — returns them unchanged
export const base = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  // If absolute URL (http/https, protocol-relative //, data:, blob:), return as-is
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }
  // Ensure leading slash handling for local assets
  if (!path.startsWith("/")) return base + path;
  // base already ends with '/', e.g. '/necklace/'
  // Remove leading '/' from path and join
  const clean = path.replace(/^\//, "");
  // import.meta.env.BASE_URL includes trailing slash
  return base + clean;
}

export function getImageUrl(path: string): string {
  return withBase(path);
}
