// Cloudflare R2 image helpers — single source of truth for necklace photos
// Public R2 bucket: https://pub-1281a4ff9a60475bbbbd09d1ad5aa2fc.r2.dev
// Structure mirrors local folders:
//   model_images/NKL-001-model.jpg
//   background_images/NKL-001-bg.jpeg
//   model_images/thumb/NKL-001-model-thumb.jpg
//   background_images/thumb/NKL-001-bg-thumb.jpeg

export const R2_BASE = "https://pub-1281a4ff9a60475bbbbd09d1ad5aa2fc.r2.dev";

export function r2ModelUrl(id: string): string {
  return `${R2_BASE}/model_images/${id}-model.jpg`;
}

export function r2ModelThumbUrl(id: string): string {
  return `${R2_BASE}/model_images/thumb/${id}-model-thumb.jpg`;
}

export function r2BgUrl(id: string): string {
  return `${R2_BASE}/background_images/${id}-bg.jpeg`;
}

export function r2BgThumbUrl(id: string): string {
  return `${R2_BASE}/background_images/thumb/${id}-bg-thumb.jpeg`;
}

/** Full-size photos for a necklace: [model, background] — model first */
export function getR2Photos(id: string): [string, string] {
  return [r2ModelUrl(id), r2BgUrl(id)];
}

/** Thumbnail photos for grid: [model thumb, background thumb] */
export function getR2ThumbPhotos(id: string): [string, string] {
  return [r2ModelThumbUrl(id), r2BgThumbUrl(id)];
}

/**
 * Convert a full-size R2 URL to its thumbnail variant.
 * Handles both model_images and background_images, with .jpg/.jpeg.
 * If already a thumb URL, returns as-is.
 */
export function toThumbUrl(fullUrl: string): string {
  if (fullUrl.includes("/model_images/thumb/") || fullUrl.includes("/background_images/thumb/")) {
    return fullUrl;
  }
  if (fullUrl.includes("/model_images/")) {
    return fullUrl.replace("/model_images/", "/model_images/thumb/").replace(/\.jpg$/i, "-thumb.jpg");
  }
  if (fullUrl.includes("/background_images/")) {
    // bg uses .jpeg — handle both
    return fullUrl
      .replace("/background_images/", "/background_images/thumb/")
      .replace(/\.jpeg$/i, "-thumb.jpeg")
      .replace(/\.jpg$/i, "-thumb.jpg");
  }
  return fullUrl;
}

/** Convert thumb URL back to full (unused, but handy for debugging) */
export function toFullUrl(thumbUrl: string): string {
  return thumbUrl
    .replace("/model_images/thumb/", "/model_images/")
    .replace("/background_images/thumb/", "/background_images/")
    .replace("-thumb.jpg", ".jpg")
    .replace("-thumb.jpeg", ".jpeg");
}
