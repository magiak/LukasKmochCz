import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lukaskmoch.cz",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cs"],
    prefixDefaultLocale: false,
  },
});
