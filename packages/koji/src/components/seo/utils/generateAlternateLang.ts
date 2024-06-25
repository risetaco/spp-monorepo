type Locale = "id_ID" | "en_SG" | "th_TH" | "vi_VN" | "ms_MY" | "en_MY" | "en_PH" | "pt_BR";
type LocaleLinkMap = Record<Locale, string>;

type LanguageAlternateMap = Record<string, LocaleLinkMap>;

type LanguageAlternate = {
  hrefLang: string;
  href: string;
};

function generateAlternateLang(currentPath: string, languageAlternateMap: LanguageAlternateMap): LanguageAlternate[] {
  const currentPathMap = languageAlternateMap[currentPath];

  if (!currentPathMap) {
    return [];
  }

  return Object.entries(currentPathMap).map(([lang, path]) => ({
    hrefLang: lang,
    href: path,
  }));
}

export type { LanguageAlternate, LanguageAlternateMap, LocaleLinkMap };
export { generateAlternateLang };
