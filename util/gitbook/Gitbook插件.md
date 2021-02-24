## Gitbook插件

> GitBook的配置文件主要是book.json，和SUMMARY.md在同级目录。plugins设置插件名称，pluginsConfig设置各个插件的属性，links可以设置外部超链接地址，styles可以设置页面属性。

```java
{
  "title": "技术总结",
  "author": "Albert Yang",
  "description": "技术总结",
  "language": "zh-hans",
  "structure": {
    "readme": "README.md"
  },
  "plugins": [
    "-lunr",
    "-search",
    "search-pro",
    "back-to-top-button",
    "chapter-fold",
    "page-treeview",
    "lightbox",
    "tbfed-pagefooter"
  ],
  "pluginsConfig": {
    "anchor-navigation-ex": {
      "isShowTocTitleIcon": true
    },
    "tbfed-pagefooter": {
      "copyright": "",
      "modify_label": "该文件最后更新时间：",
      "modify_format": "YYYY-MM-DD HH:mm:ss"
    },
    "page-treeview": {
      "copyright": "",
      "minHeaderCount": "2",
      "minHeaderDeep": "2"
    }
  },
  "links": {
    "sidebar": {
      "GitHub主页": "https://github.com/AlbertYang0801",
      "码云主页": "https://gitee.com/zztiyjw"
    }
  },
  "styles": {
    "website": "styles/website.css",
    "ebook": "styles/ebook.css",
    "pdf": "styles/pdf.css",
    "mobi": "styles/mobi.css",
    "epub": "styles/epub.css"
  }
}
```

>参考博客：[https://segmentfault.com/a/1190000019806829](https://segmentfault.com/a/1190000019806829)

