const DEV_FALLBACK = "http://localhost:3000";

export function getRequiredSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (raw) return new URL(raw);

  if (process.env.NODE_ENV === "development") {
    return new URL(DEV_FALLBACK);
  }

  throw new Error(
    "NEXT_PUBLIC_SITE_URL is required for production builds (e.g. https://<user>.github.io/<repo>)."
  );
}

export function getSiteUrlString(): string {
  return getRequiredSiteUrl().toString().replace(/\/$/, "");
}

