import { getLangFromUrl, useTranslations, useTranslatedPath } from "@/i18n/utils";
import { type Menu } from "@/types";
import NavbarMenu from "../navbar-menu";
import { useMemo } from "react";
import { cn } from "@/utils";
import LanguagePickerAlternate from "../language-picker-alternate";

interface Props {
  menu: Menu[];
}

const Navbar = ({ menu }: Props) => {
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  const currentPath = window.location.pathname;

  const translatedMenu = useMemo(() => {
    return menu.map((item) => ({
      ...item,
      title: t(item.lang) ?? item.title,
      url: translatePath(item.url ?? ""),
    }));
  }, [menu, t, translatePath]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto flex items-center h-16 justify-between p-8 md:p-0">
        <a href={translatePath("/")} className="flex items-center">
          <img src="/spay.svg" alt="SPay" />
        </a>
        <ul className="gap-8 hidden md:flex items-center">
          {translatedMenu
            .filter((item) => item.type !== "separator")
            .map((item) => (
              <li
                key={item.url}
                className={cn([
                  "hover:text-primary cursor-pointer whitespace-nowrap",
                  { "text-primary": currentPath === item.url },
                  { "bg-orange-600 rounded-full px-4 py-2 text-white hover:text-white": item.type === "button" },
                ])}
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          <li>
            <LanguagePickerAlternate />
          </li>
        </ul>

        <NavbarMenu menus={translatedMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
