export function isVintedReady(url: string | null | undefined): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (trimmed === "" || trimmed === "#" || trimmed.includes("REPLACE-ME") || trimmed.includes("xxx-")) {
    return false;
  }
  return trimmed.startsWith("http");
}
