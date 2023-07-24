const moment = require("moment");
const { APP_CLIENT_ID, APP_CLIENT_SECRET } = process.env;

module.exports = {
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
    nav: [
      { text: "首页", link: "/" },
      { text: "关于", link: "/about" },
      { text: "其他", link: "https://google.com" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "Chinese", link: "/language/chinese/" },
          { text: "Japanese", link: "/language/japanese/" },
        ],
      },
    ],
    displayAllHeaders: true,
    sidebar: "auto",
    smoothScroll: true,
    lastUpdated: "最后更新于：",
  },
  plugins: {
    "vueprss-plugin-auto-sidebar": {},
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        moment.locale(lang);
        return moment(timestamp).format("YYYY-MM-DD hh:mm:ss");
      },
    },
    "@vssue/api-github-v4": {
      platform: "github-v4",
      owner: "Yu-edge",
      repo: "docs",
      clientId: APP_CLIENT_ID,
      clientSecret: APP_CLIENT_SECRET, // 只有在使用某些平台时需要
      autoCreateIssue: true,
    },
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
