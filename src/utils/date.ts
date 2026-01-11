export const formatDate = (
  date: string,
  locale = "ja-JP",
  options?: Intl.DateTimeFormatOptions
) => new Date(date).toLocaleDateString(locale, options);
