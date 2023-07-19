import { defineConfig } from "vitepress";
import { nav, sidebar } from "../cuiConf";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CuiBoBo's Blog-🖊",
  //开启上次更新时间
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/imgs/favicon.png" }]],
  // 语言
  lang: "en-US",
  description: "这是一个个人博客网站",
  themeConfig: {
    logo: "/imgs/favicon.png",
    lastUpdatedText: "上次更新",
    outlineTitle: "当前页面",
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    // 文章页脚下一页
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    sidebar: sidebar,

    socialLinks: [{ icon: "github", link: "https://github.com/cuibobo777" }],

    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2021~2023 加一份脆啵啵",
    },
  },
});
