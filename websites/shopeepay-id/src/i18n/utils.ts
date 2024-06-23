import { ui, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key?: keyof (typeof ui)[typeof defaultLang]) {
    if (!key) return undefined;

    /** @ts-ignore */
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    if (path === "/") return `/${l}`;

    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
