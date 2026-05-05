import type { MetadataRoute } from "next";
import { getSiteUrlString } from "../lib/site-url";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrlString();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

