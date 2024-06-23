import type { LangType } from "@/i18n/type";

type Link = {
  lang?: LangType;
  url: string;
  text: string;
  alt?: string;
};

type Social = Link & {
  logo?: string;
};

type AppLink = Link & {
  logo?: string;
};

type Menu = {
  lang?: LangType;
  title?: string;
  url?: string;
  type?: "link" | "button" | "separator";
};

type FooterLink = {
  name: string;
  url: string;
};

type Footer = {
  logo: string;
  socials: Social[];
  download: AppLink[];
  copyright: {
    title: string;
    subtitle?: string;
    privacyLink: Link;
    termsLink: Link;
    marketingLink?: Link;
  };
  links: {
    lang?: LangType;
    title: string;
    items: FooterLink[];
  }[];
};

export type { Menu, Footer, AppLink };
