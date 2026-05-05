import type { MetadataRoute } from "next";
import { getPublishedPosts } from "../models/posts";
import { getPublishedWorks } from "../models/works";
import { getSiteUrlString } from "../lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrlString();
  const lastModified = new Date();

  const urls: string[] = [
    `${baseUrl}/`,
    `${baseUrl}/works/`,
    `${baseUrl}/blog/`,
    ...getPublishedPosts().map((p) => `${baseUrl}/blog/${p.slug}/`),
    ...getPublishedWorks().map((w) => `${baseUrl}/works/${w.slug}/`),
  ];

  return urls.map((url) => ({ url, lastModified }));
}

