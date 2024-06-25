export { default as SEO } from "./components/seo/seo.astro";
export type { Props as SEOProps } from "./components/seo/seo.astro";
export { generateAlternateLang } from "./components/seo/utils/generateAlternateLang";
export type * from "./components/seo/utils/generateAlternateLang";

export { default as Feature } from "./components/feature.astro";
export type { FeatureItem, Props as FeatureProps } from "./components/feature.astro";

export { default as Benefit } from "./components/benefit.astro";
export type { BenefitItem, Props as BenefitProps } from "./components/benefit.astro";

export { default as ImageGallery } from "./components/image-gallery.astro";
export type { Props as ImageGalleryProps } from "./components/image-gallery.astro";

export { default as GetStarted } from "./components/get-started.astro";
export type { GetStartedItem, Props as GetStartedProps } from "./components/get-started.astro";

export { default as Container } from "./components/container.astro";

export { default as Hero } from "./components/hero.astro";
export type { Props as HeroProps } from "./components/hero.astro";
