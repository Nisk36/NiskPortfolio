function run() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;

  if (!raw) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required (e.g. https://<user>.github.io/<repo>)."
    );
  }

  let url;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must be a valid absolute URL. Received: ${raw}`
    );
  }

  if (process.env.NODE_ENV !== "development" && url.protocol !== "https:") {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must use https in production. Received: ${raw}`
    );
  }
}

try {
  run();
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
}

