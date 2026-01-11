import { allPosts } from "contentlayer/generated";
import { filterPublished, sortByDate } from "./utils";

export const getPublishedPosts = () =>
  sortByDate(filterPublished(allPosts, "draft"), "date");

export const getLatestPosts = (limit: number) =>
  getPublishedPosts().slice(0, limit);
