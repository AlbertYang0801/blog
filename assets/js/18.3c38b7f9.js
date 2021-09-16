(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{375:function(t,a,e){"use strict";e.r(a);var r=e(26),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"redis的事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis的事务"}},[t._v("#")]),t._v(" redis的事务")]),t._v(" "),e("p",[t._v("redis 的事务，"),e("strong",[t._v("可以一次执行多个命令，本质上是一组命令的集合，按照顺序串行化执行而不会被其它命令插入")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("开启事务 -"),e("code",[t._v("multi")])])]),t._v(" "),e("li",[e("p",[t._v("执行所有事务 - "),e("code",[t._v("exec")])])]),t._v(" "),e("li",[e("p",[t._v("取消所有事务 - "),e("code",[t._v("discard")])])]),t._v(" "),e("li",[e("p",[t._v("监控一个或多个 key - "),e("code",[t._v("watch")])])]),t._v(" "),e("li",[e("p",[t._v("取消 watch 命令对所有 key 的监控 - "),e("code",[t._v("unwatch")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210816152329.png",alt:"image-20210816152255425"}})])])]),t._v(" "),e("h3",{attrs:{id:"watch监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watch监控"}},[t._v("#")]),t._v(" watch监控")]),t._v(" "),e("p",[e("strong",[t._v("watch")]),t._v(" 指令，类似乐观锁，在创建事务之前，使用 watch 指令监控某个值。在事务提交时，如果 key 的值已经被别的客户端改变，那么整个事务队列都不会执行。")]),t._v(" "),e("blockquote",[e("p",[t._v("通过WATCH命令在事务执行之前监控了多个Keys，倘若在WATCH之后有任何Key的值发生了变化，EXEC命令执行的事务都将被放弃，同时返回 Nullmulti-bulk 应答以通知调用者事务执行失败")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210816152329.png",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("unwatch")]),t._v(" 指令会取消所有 watch 指令的监控。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210816144856.png",alt:"image-20210816144856518"}})]),t._v(" "),e("h2",{attrs:{id:"三个特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三个特性"}},[t._v("#")]),t._v(" 三个特性")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210816152039.png",alt:"image-20210816152039134"}})]),t._v(" "),e("h3",{attrs:{id:"为什么redis不支持回滚"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么redis不支持回滚"}},[t._v("#")]),t._v(" 为什么redis不支持回滚？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210819101121.png",alt:"292"}})]),t._v(" "),e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/56017158",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎-你应该知道的Redis事务"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);