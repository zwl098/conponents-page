const path = require("./utils/path.js")
module.exports = {
  title: "zhangwenling's blog",
  base: "/conponents-page/",
  description: "some technical articles on programming, especially webgl",
  themeConfig: {
    nav: [
      // 单个地址
      { text: "首页", link: "/" },
      // 多个地址
      {
        text: "地址",
        items: [{ text: "Github", link: "https://github.com/zhangwinwin/FEBlog" }],
      },
      {
        text: "日志",
        items: [{ text: "日志", link: "/guide/Tag" }],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "系统组件库",
          collapsable: true,
          children: path.findMdFiles("/guide/"),
        },
      ],
    },
  },
}
