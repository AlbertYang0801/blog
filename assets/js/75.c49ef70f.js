(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{430:function(t,a,s){"use strict";s.r(a);var e=s(26),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"环境安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境安装"}},[t._v("#")]),t._v(" 环境安装")]),t._v(" "),s("h2",{attrs:{id:"一、elasticsearch-本地安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、elasticsearch-本地安装"}},[t._v("#")]),t._v(" 一、Elasticsearch 本地安装")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-10-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch 7.10.2下载地址"),s("OutboundLink")],1),t._v(" 本地安装 7.10.2 版本，解压即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628110258.png",alt:""}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("启动命令")]),t._v(" "),s("p",[s("code",[t._v("./bin/elasticsearch")])])]),t._v(" "),s("li",[s("p",[t._v("校验安装是否成功")]),t._v(" "),s("p",[t._v("直接在浏览器输入："),s("a",{attrs:{href:"http://localhost:9200",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9200"),s("OutboundLink")],1),t._v("，出现如下结果表示安装成功。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628110332.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("You Know, for Search")])])])]),t._v(" "),s("h2",{attrs:{id:"二、elasticsearch-head-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、elasticsearch-head-插件"}},[t._v("#")]),t._v(" 二、Elasticsearch-head 插件")]),t._v(" "),s("p",[t._v("谷歌浏览器可以配置 es-head 插件，配置成功之后可直接连接 Es。（连接采用 Restful 方式通信，使用的是 9200 端口）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628110429.png",alt:""}})]),t._v(" "),s("ol",[s("li",[s("p",[t._v("复合查询")]),t._v(" "),s("p",[t._v("可以调用 Restful 接口，执行各种操作。")]),t._v(" "),s("p",[t._v("例如：向指定索引新增文档。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628110503.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628110515.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("基本查询")]),t._v(" "),s("p",[t._v("基本查询可以按照插件提供的搜索条件进行查询。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628110526.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628110536.png",alt:""}})])])]),t._v(" "),s("h2",{attrs:{id:"三、kibana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、kibana"}},[t._v("#")]),t._v(" 三、Kibana")]),t._v(" "),s("p",[t._v("使用 brew 安装。（注意：kibana 版本需和 ES 保持一致）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("搜索可用版本")]),t._v(" "),s("p",[s("code",[t._v("brew search kibana")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628110808.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("安装默认版本")]),t._v(" "),s("p",[s("code",[t._v("brew install kibana")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628110819.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("kibana存放目录")]),t._v(" "),s("p",[s("code",[t._v("/usr/local/Cellar/kibana/7.10.2")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628110846.png",alt:""}})])])]),t._v(" "),s("h2",{attrs:{id:"四、ik-分词器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、ik-分词器"}},[t._v("#")]),t._v(" 四、IK 分词器")]),t._v(" "),s("p",[t._v("Elasticsearch 默认对中文不分词，所以需要安装 IK 分词器插件。")]),t._v(" "),s("p",[s("strong",[t._v("1. 分词器安装")])]),t._v(" "),s("ul",[s("li",[t._v("安装包下载")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),s("OutboundLink")],1),t._v("（注意：分词器版本和 ES 版本保持一致。）")]),t._v(" "),s("ul",[s("li",[t._v("在 ES 根目录下的 "),s("code",[t._v("plugins")]),t._v(" 文件夹创建 "),s("code",[t._v("analysis-ik")]),t._v(" 目录，并将下载的安装包 "),s("code",[t._v("elasticsearch-analysis-ik-7.10.2.zip")]),t._v(" 解压到该目录并删除压缩包。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628111108.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("2. 分词测试")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("接口测试")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("curl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:9200/course/_analyze'")]),t._v(" \\\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" \\\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("raw '"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"测试分词器，中文默认单词分开输出"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"analyzer"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ik_max_word"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("未分词之前")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628111135.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("分词之后")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210628111144.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ul",[s("li",[t._v("["),s("a",{attrs:{href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch: 权威指南"),s("OutboundLink")],1),t._v("](https://www.elastic.co/guide/cn/elasticsearch/guide/current/mapping-intro.html)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch Guide"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);