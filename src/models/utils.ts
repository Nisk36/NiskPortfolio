export const sortByDate = <T>(items: T[], key: keyof T): T[] =>
  [...items].sort(
    (a, b) => +new Date(String(b[key])) - +new Date(String(a[key])),
  );

export const filterPublished = <T>(items: T[], draftKey: keyof T): T[] =>
  items.filter((item) => !Boolean(item[draftKey]));
