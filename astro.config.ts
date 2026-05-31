import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"

export default defineConfig({
  site: "https://PUJ-Ubicu.github.io",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false, // es at "/", en at "/en/"
    },
  },
  integrations: [mdx(), sitemap(), icon()],
  image: {},
  vite: {
    plugins: [tailwindcss()],
  },
})
