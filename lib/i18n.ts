export const locales = ["en", "bn"] as const;

export type Locale = (typeof locales)[number];

export const isLocale = (value: Locale): value is Locale => {
  return locales.includes(value);
};
