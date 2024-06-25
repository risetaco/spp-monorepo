import { navigate } from "astro:transitions/client";
import type { ChangeEvent, HTMLProps } from "react";
import { getLangFromUrl, useTranslatedPath } from "@/i18n/utils";
import { languages } from "@/i18n/ui";
import { cn } from "@/utils";

interface LanguagePickerAlternateProps extends HTMLProps<HTMLSelectElement> {}

const LanguagePickerAlternate = ({ className, ...rest }: LanguagePickerAlternateProps) => {
  const url = new URL(window.location.href);
  const lang = getLangFromUrl(url);
  const translatePath = useTranslatedPath(lang);

  const pathname = window.location.pathname;
  const path = pathname.replace(`/${lang}`, "");

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;

    navigate(translatePath(path, lang));
  };

  return (
    <>
      <label htmlFor="language" className="sr-only">
        Language picker
      </label>
      <select
        id="language"
        aria-label="Language picker"
        defaultValue={lang}
        name="language"
        className={cn(["rounded-full px-4 py-2 bg-white border border-gray-300", className])}
        onChange={handleChangeLanguage}
        {...rest}
      >
        {Object.entries(languages).map(([lang, label]) => (
          <option key={lang} value={lang}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

export default LanguagePickerAlternate;
