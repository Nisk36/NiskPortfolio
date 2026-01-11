import { allWorks } from "contentlayer/generated";
import { filterPublished, sortByDate } from "./utils";

export const getPublishedWorks = () =>
  sortByDate(filterPublished(allWorks, "draft"), "publishedAt");

export const getLatestWorks = (limit: number) =>
  getPublishedWorks().slice(0, limit);
