import { allPosts } from "contentlayer/generated";
import type { Post } from "contentlayer/generated";

const sortPostsByDate = (posts: Post[]) =>
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

export const getPublishedPosts = () =>
  sortPostsByDate([...allPosts].filter((post) => !post.draft));

export const getLatestPosts = (limit: number) =>
  getPublishedPosts().slice(0, limit);
