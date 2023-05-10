const humanReadableNumber = (value: number, lang?: string) => {
  if (!value) return;

  const locale = lang || document.documentElement.lang || "en";

  return value.toLocaleString(locale);
};

export { humanReadableNumber };
