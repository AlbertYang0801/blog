(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{380:function(s,a,e){"use strict";e.r(a);var t=e(26),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis简介"}},[s._v("#")]),s._v(" redis简介")]),s._v(" "),e("h2",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[s._v("#")]),s._v(" 功能")]),s._v(" "),e("ul",[e("li",[s._v("Redis 是非关系型数据库、是一个高性能的 K-V 数据库。")]),s._v(" "),e("li",[s._v("支持多种数据格式，数据存储在内存上，读写性能惊人。")]),s._v(" "),e("li",[s._v("Redis 还可以将内存的数据利用快照和日志的形式保存到硬盘上，在重启的时候可以重新加载数据到内存中。")]),s._v(" "),e("li",[s._v("Redis 还提供了过期、事务、发布订阅、Lua 脚本等功能。")])]),s._v(" "),e("h2",{attrs:{id:"redis-特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-特点"}},[s._v("#")]),s._v(" Redis 特点")]),s._v(" "),e("ul",[e("li",[s._v("不仅支持简单的 K-V 数据结构，还提供了像 list、set、zset、hash 等数据结构。")]),s._v(" "),e("li",[s._v("Redis 支持数据持久化，将内存中的数据持久化到磁盘。保证重启时数据的重新加载。")]),s._v(" "),e("li",[s._v("性能极高，基于内存。")]),s._v(" "),e("li",[s._v("Redis 的命令都是原子性的。")]),s._v(" "),e("li",[s._v("采用单线程来避免不必要的上下文切换。")]),s._v(" "),e("li",[s._v("使用 I/O 多路复用模型。")])]),s._v(" "),e("h3",{attrs:{id:"单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[s._v("#")]),s._v(" 单线程")]),s._v(" "),e("p",[s._v("首先，Redis 是完全基于内存的，基于内存操作非常快速。其次采用了单线程来避免不必要的上下文切换和竞争。")]),s._v(" "),e("h3",{attrs:{id:"i-o-多路复用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-o-多路复用"}},[s._v("#")]),s._v(" I/O 多路复用")]),s._v(" "),e("p",[s._v("多路复用，这里的多路指的是多个网络连接，复用指的是复用同一个线程。意思就是可以让单个线程去处理多个连接请求，来减少在网络 IO 上的时间消耗。")]),s._v(" "),e("h3",{attrs:{id:"端口号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#端口号"}},[s._v("#")]),s._v(" 端口号")]),s._v(" "),e("p",[s._v("redis 默认端口号是 "),e("strong",[s._v("6379")])]),s._v(" "),e("h3",{attrs:{id:"数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[s._v("#")]),s._v(" 数据库")]),s._v(" "),e("p",[s._v("redis 默认拥有 16 个数据库，排列顺序类似数组下标，从 0 开始排序，默认使用的是 0 号库。")]),s._v(" "),e("p",[s._v("redis 数据库统一密码管理的，16 个库都是同样密码，默认不设置密码。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("切换数据库")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("#切换到 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 号数据库\nselect "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看当前数据库 key 的数量")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("dbsize\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("清空当前库")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("flushdb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("清空所有库")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("flushall\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);