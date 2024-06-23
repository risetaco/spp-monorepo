import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import webConfig from "./web.config.json" assert { type: "json" };

// https://astro.build/config
export default defineConfig({
  site: webConfig.site,
  output: "static",
  integrations: [tailwind(), react(), mdx(), sitemap()],
  prefetch: {
    prefetchAll: true,
  },
  build: {
    format: "file",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "id"],
  },
});
