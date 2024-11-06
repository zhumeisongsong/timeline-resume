import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Song's CV",
  description: "Software engineer based in Tokyo. 🇯🇵",
  base: "/cv/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "CV", link: "/" },
      { text: "CV-ja", link: "/ja" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zhumeisongsong/cv" },
    ],
  },
  lastUpdated: true,
  head: [],
});
