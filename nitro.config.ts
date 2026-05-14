import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  preset: "vercel",
  prerender: {
    crawlLinks: true,
    routes: ["/sitemap.xml", "/robots.txt"],
    ignore: ["/admin"],
  },
});
