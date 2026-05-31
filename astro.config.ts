import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"

export default defineConfig({
  site: "https://PUJ-Ubicu.github.io",
  integrations: [mdx(), sitemap(), icon()],
  image: {},
  vite: {
    plugins: [tailwindcss()],
  },
})
