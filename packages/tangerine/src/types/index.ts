type MenuType = {
  title?: string;
  url?: string;
  type?: "link" | "button" | "separator";
};

type BenefitType = {
  title: string;
  description: string;
  icon: string;
};

type GetStartedType = {
  title: string;
  description: string;
  url: string;
  icon: string;
  cta?: string;
};

type FooterType = {
  logo: string;
  socials: {
    name?: string;
    url: string;
    logo?: string;
    alt?: string;
  }[];
  download: {
    name?: string;
    url: string;
    logo?: string;
    alt?: string;
  }[];
  links: {
    title: string;
    items: {
      name: string;
      url: string;
    }[];
  }[];
};

type FeatureType = {
  title: string;
  description: string;
  icon: string;
};

type FAQType = {
  question: string;
  answer: string;
};

export type { MenuType, BenefitType, GetStartedType, FooterType, FeatureType, FAQType };
