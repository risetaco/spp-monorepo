import { getLangFromUrl, useTranslatedPath, useTranslations } from "@/i18n/utils";

const NotFound = () => {
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  return (
    <div className="container mx-auto p-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-4xl font-bold text-center">{t("404.title")}</p>
          <p className="text-center">{t("404.description")}</p>
        </div>
        <div className="flex justify-center">
          <a
            href={translatePath("/")}
            className="text-white inline-block duration-250 hover:opacity-80 bg-primary px-8 py-4 rounded-full mx-auto min-w-64 w-auto transition-colors text-center"
          >
            {t("404.back")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
