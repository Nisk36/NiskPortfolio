import { allWorks } from "contentlayer/generated";
import { filterPublished, sortByDate } from "./utils";

export const getPublishedWorks = () =>
  sortByDate(filterPublished(allWorks, "draft"), "publishedAt");

export const getLatestWorks = (limit: number) =>
  getPublishedWorks().slice(0, limit);

export const getWorkBySlug = (slug: string) =>
  allWorks.find((work) => work.slug === slug);

export const getWorkSlugs = () => allWorks.map((work) => work.slug);
