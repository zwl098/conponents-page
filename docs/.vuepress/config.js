module.exports = {
  title: "zhangwinwin12312's blog",
  base: '/conponents-page/',
  description: "some technical articles on programming, especially webgl",
  themeConfig: {
    nav: [
      // 单个地址
      { text: "首页", link: "/" },
      // 多个地址
      {
        text: "博客地址",
        items: [
          { text: "Github", link: "https://github.com/zhangwinwin/FEBlog" },
          { text: "掘金", link: "https://juejin.cn/user/1486195453331757" },
        ],
      },
    ],
  }
}
