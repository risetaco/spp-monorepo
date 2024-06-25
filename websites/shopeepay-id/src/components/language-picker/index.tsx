import { getLangFromUrl, useTranslatedPath } from "@/i18n/utils";
import { languages } from "@/i18n/ui";

const LanguagePicker = () => {
  const lang = getLangFromUrl(new URL(window.location.href));
  const translatePath = useTranslatedPath(lang);

  const pathname = window.location.pathname;
  const path = pathname.replace(`/${lang}`, "");

  return (
    <ul className="space-y-4">
      {Object.entries(languages).map(([lang, label]) => (
        <li key={lang}>
          <a href={translatePath(path, lang)}>{label}</a>
        </li>
      ))}
    </ul>
  );
};

export default LanguagePicker;
