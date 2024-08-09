const path = require('path');
const fs = require('fs');
// 递归获取文件列表
function getFiles(dir, files_) {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (let i in files) {
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

// 生成侧边栏
function generateSidebar(directoryPath) {
  const files = getFiles(directoryPath);
  return files
    .filter(file => file.endsWith('.md')) // 只获取 Markdown 文件
    .map(file => {
      const relativePath = path.relative(directoryPath, file);
      return relativePath.replace('.md', '');
    });
}
const logFolder = path.join(__dirname, '../guide');

const log = fs.readdirSync(logFolder);
module.exports = {
  title: "zhangwenling's blog",
  base: '/conponents-page/',
  description: "some technical articles on programming, especially webgl",
  themeConfig: {
    nav: [
      // 单个地址
      { text: "首页", link: "/" },
      // 多个地址
      {
        text: "地址",
        items: [
          { text: "Github", link: "https://github.com/zhangwinwin/FEBlog" },
        ],
      },
      {
        text: "日志",
        items: [
          { text: "日志", link: "/guide/Tag" }
        ],
      }
    ],
    sidebar:{
      '/guide/': generateSidebar(path.resolve(__dirname, '../guide')),
    }
    
  }
}
