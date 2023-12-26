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
    outline: {
      level: [2, 6],
      label: '目录'
    },

    socialLinks: [{ icon: "github", link: "https://github.com/cuibobo777" }],

    // footerConfig: {
    //   showFooter: true, // 是否显示页脚
    //   icpRecordCode: '豫ICP备2022002496号-1', // ICP备案号
    //   publicSecurityRecordCode: '豫ICP备2022002496号', // 联网备案号
    //   copyright: `Copyright © 2019-${new Date().getFullYear()} cuibobo777` // 版权信息
    // }
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2021~2023 加一份脆啵啵",
    },
  },
});
