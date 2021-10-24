(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{367:function(s,a,t){"use strict";t.r(a);var e=t(26),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql高级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql高级"}},[s._v("#")]),s._v(" MySQL高级")]),s._v(" "),t("h2",{attrs:{id:"视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视图"}},[s._v("#")]),s._v(" 视图")]),s._v(" "),t("p",[s._v("视图是 MySQL从 5.0.1 版本提供的新功能，是一种虚拟存在的表，视图本身并不保存任何数据，"),t("strong",[s._v("本质上对应一条 SELECT 语句")]),s._v("。只保存了 SQL 逻辑，不保存查询结果，在使用视图时会动态生成数据。")]),s._v(" "),t("h3",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("查询结果使用 SQL 较为复杂。")])]),s._v(" "),t("li",[t("p",[s._v("复用 SQL。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("封装复杂 SQL 的实现细节，简化查询操作")]),s._v("。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("保护数据查询安全性")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("某银行为了提高数据安全性，不让私有化产品直接访问它们的生产数据库，而是将需要的查询结果创建对应的视图，再创建一个只拥有视图权限的账号，很好的保证了生产环境数据的安全性。")])])])]),s._v(" "),t("h3",{attrs:{id:"视图操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视图操作"}},[s._v("#")]),s._v(" 视图操作")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("授权")]),s._v(" "),t("p",[s._v("为某个用户授予创建视图的权限。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建视图")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" class_user\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classname "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" class a\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" b\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("class\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改视图")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" class_user\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("删除视图")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" class_user\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("查看视图结构")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" class_user\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查询结果如下：")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20211024210949.png",alt:"image-20211024210949828"}})]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[t("p",[s._v("查询视图")]),s._v(" "),t("p",[s._v("查询视图和查询表是一样的操作。")]),s._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20211024211653.png",alt:"image-20211024211653529"}})])])])}),[],!1,null,null,null);a.default=r.exports}}]);