import { ui, defaultLang } from "../i18n/ui";

type Link<T = keyof (typeof ui)[typeof defaultLang]> = {
  lang?: T;
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
  lang?: keyof (typeof ui)[typeof defaultLang];
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
    lang?: keyof (typeof ui)[typeof defaultLang];
    title: string;
    items: FooterLink[];
  }[];
};

export type { Menu, Footer, AppLink };
