import { allWorks } from "contentlayer/generated";
import type { Work } from "contentlayer/generated";

const sortWorksByPublishedAt = (works: Work[]) =>
  works.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

export const getPublishedWorks = () =>
  sortWorksByPublishedAt([...allWorks].filter((work) => !work.draft));

export const getLatestWorks = (limit: number) =>
  getPublishedWorks().slice(0, limit);
