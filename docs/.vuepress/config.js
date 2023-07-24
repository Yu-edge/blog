const moment = require("moment");
const nav = require("./nav.js");
const { APP_CLIENT_ID, APP_CLIENT_SECRET } = process.env;

module.exports = {
  base: "/blog/",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "VuePress",
    //   description: "Vue 驱动的静态网站生成器",
    // },
  },
  themeConfig: {
    logo: "/assets/img/favicon.ico",
    displayAllHeaders: true,
    smoothScroll: true,
    lastUpdated: "最后更新于",
    nav,
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      sort: {
        mode: "asc",
        readmeFirst: true,
        readmeFirstForce: false,
      },
      title: {
        mode: "titlecase",
      },
      sidebarDepth: 1,
      collapse: {
        open: false,
        collapseList: [],
        uncollapseList: [],
      },
      ignore: [
        // 忽略 `/menu3/menu3-3/` 目录下以 `ignore-` 开头的文件
        {
          menu: "/",
          regex: "ignore-*",
        },
      ],
      removeEmptyGroup: true,
      git: {
        trackStatus: "all",
      },
    },
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        moment.locale(lang);
        return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    "@vssue/vuepress-plugin-vssue": {
      platform: "github-v4",
      owner: "Yu-edge",
      repo: "blog",
      clientId: APP_CLIENT_ID,
      clientSecret: APP_CLIENT_SECRET, // 只有在使用某些平台时需要
      autoCreateIssue: true,
    },
    "@vuepress/back-to-top": true,
    "@vuepress/medium-zoom": true,
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "author", content: "Yu_edge" }],
    ["meta", { name: "keywords", content: "Yu_edge,Yu_edge's blog" }],
    [
      "meta",
      {
        name: "description",
        content: "鱼的博客，共同学习计算机技术，分享生活片段",
      },
    ],
  ],
};
