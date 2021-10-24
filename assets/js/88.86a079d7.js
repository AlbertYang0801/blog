(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{446:function(v,_,t){"use strict";t.r(_);var a=t(26),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"倒排索引原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引原理"}},[v._v("#")]),v._v(" 倒排索引原理")]),v._v(" "),t("p",[v._v("Elasticsearch 主要功能就是搜索，为了提高搜索效率，其内部使用了倒排索引。")]),v._v(" "),t("h2",{attrs:{id:"正排索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正排索引"}},[v._v("#")]),v._v(" 正排索引")]),v._v(" "),t("p",[v._v("在搜索引擎中，每个文件对应一个文件 ID （doc_id），文件内容是关键词的集合。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210709222359.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("根据 "),t("code",[v._v("doc_id")]),v._v(" 可以查找到文档详情。")]),v._v(" "),t("p",[t("em",[v._v("这种方式本质上就是通过文档的 key 查找 value 值。")])]),v._v(" "),t("p",[v._v("比如查找  "),t("code",[v._v("name=jetty wan")]),v._v(" 的文档，只能按照顺序从前向后匹配每个文档的 name 字段。")]),v._v(" "),t("p",[v._v("这种查找方式的效率非常低下。")]),v._v(" "),t("h2",{attrs:{id:"倒排索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引"}},[v._v("#")]),v._v(" 倒排索引")]),v._v(" "),t("p",[v._v("倒排索引和正向索引相比，通过数据结构保存包含每个单词的文档列表，来实现单词的快速查询。")]),v._v(" "),t("p",[v._v("如下图，比如说我想搜索 name 中包含 wang 的文档，先从单词词典中查找到 wang ，再去倒排列表中查找 wang 对应的文档列表。能够大大提升查询速率。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210709231001.jpg",alt:"img"}})]),v._v(" "),t("h3",{attrs:{id:"倒排索引组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引组成"}},[v._v("#")]),v._v(" 倒排索引组成")]),v._v(" "),t("p",[v._v("倒排索引的结构由三部分组成："),t("strong",[v._v("单词词典、倒排列表和倒排文件")]),v._v("。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210710000003.jpg",alt:"-w462"}})]),v._v(" "),t("ol",[t("li",[t("p",[v._v("单词词典")]),v._v(" "),t("p",[v._v("搜索引擎搜索时单位通常是单词，而单词词典就是文档集合中出现的所有单词列表，每个单词都包含一个指向倒排列表的指针。")])]),v._v(" "),t("li",[t("p",[v._v("倒排列表")]),v._v(" "),t("p",[v._v("根据倒排列表可以知道包含某个单词的所有文档信息。倒排列表中的每条记录又叫做倒排项。")]),v._v(" "),t("p",[v._v("主要包含：")]),v._v(" "),t("ul",[t("li",[v._v("单词和出现该单词的文档列表。")]),v._v(" "),t("li",[v._v("记录每个单词在所有文档中的出现次数和所在位置。")])])]),v._v(" "),t("li",[t("p",[v._v("倒排文件介绍")]),v._v(" "),t("p",[v._v("倒排列表是倒排索引的主要组成部分，而倒排文件就是磁盘中保存倒排列表的文件，是存储倒排列表的物理文件。")])])]),v._v(" "),t("h3",{attrs:{id:"倒排索引位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引位置"}},[v._v("#")]),v._v(" 倒排索引位置")]),v._v(" "),t("p",[v._v("倒排索引的结构由三部分组成："),t("strong",[v._v("单词词典、倒排列表和倒排文件")]),v._v("。")]),v._v(" "),t("p",[v._v("单词词典通过特定结构存在于内存中，而倒排文件存在磁盘中。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210709232254",alt:"img"}})]),v._v(" "),t("h3",{attrs:{id:"单词词典"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单词词典"}},[v._v("#")]),v._v(" 单词词典")]),v._v(" "),t("p",[v._v("单词列表中包含的数据是文档中出现过的所有单词，每个单词都包含一个指向倒排列表的指针。")]),v._v(" "),t("p",[v._v("当想要查询包含某个单词的所有文档时，第一步就要从单词列表中查询该单词。若单词列表数据结构是线性表的话，查询效率是非常低下的。")]),v._v(" "),t("p",[v._v("常见的单词列表数据结构有 "),t("strong",[v._v("哈希加链表")]),v._v(" 和 "),t("strong",[v._v("B+树")]),v._v("）。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("哈希加链表")]),v._v(" "),t("p",[v._v("和 HashMap 1.7 时的底层数据结构一样。")]),v._v(" "),t("p",[v._v("通过计算单词的 hash 值计算出其所在哈希表的位置，若哈希表同一位置上出现多个单词，则会在该位置形成链表结构。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210709233959.jpg",alt:"-w477"}})]),v._v(" "),t("p",[v._v("哈希加链表最大的缺点就是不能支持单词的顺序或者范围查找。")])]),v._v(" "),t("li",[t("p",[v._v("B+树")]),v._v(" "),t("p",[v._v("B+ 树要求存入的单词字典项能够按照大小排序（数字或字符串），而哈希表是无需满足该要求的。")]),v._v(" "),t("p",[v._v("同样的 B+ 树结构可以满足顺序查找和范围查找。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210709235334.png",alt:"image-20210709235334553"}})]),v._v(" "),t("p",[v._v("B+ 树的叶子结点保存了单词的地址信息，通过地址信息就能找到单词信息。")]),v._v(" "),t("p",[v._v("使用 B+ 树能够大大减少查找次数，提高查询效率。")])])]),v._v(" "),t("h3",{attrs:{id:"倒排列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#倒排列表"}},[v._v("#")]),v._v(" 倒排列表")]),v._v(" "),t("p",[v._v("倒排列表主要包含：")]),v._v(" "),t("ul",[t("li",[v._v("单词和出现该单词的文档列表。")]),v._v(" "),t("li",[v._v("记录每个单词在所有文档中的出现次数和所在位置。每条记录又称一个倒排项。")])]),v._v(" "),t("p",[v._v("倒排列表元素数据结构："),t("code",[v._v("((DocID;TF;<POS>))")])]),v._v(" "),t("ul",[t("li",[v._v("DocID：出现某单词的文档ID")]),v._v(" "),t("li",[v._v("TF(Term Frequency)：单词在该文档中出现的次数")]),v._v(" "),t("li",[v._v("POS：单词在文档中的位置")])]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("假设有下面单个文档")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("内容")]),v._v(" "),t("th")])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("文档1")]),v._v(" "),t("td",[v._v("百度的年度目标")])]),v._v(" "),t("tr",[t("td",[v._v("文档2")]),v._v(" "),t("td",[v._v("AI技术生态部的年度目标")])]),v._v(" "),t("tr",[t("td",[v._v("文档3")]),v._v(" "),t("td",[v._v("AI市场的年度目标")])])])]),v._v(" "),t("p",[v._v("则他们生成的倒排索引")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("单词ID")]),v._v(" "),t("th",[v._v("单词")]),v._v(" "),t("th",[v._v("逆向文档频率")]),v._v(" "),t("th",[v._v("倒排列表(DocID;TF;"),t("POS",[v._v(")")])],1)])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("目标")]),v._v(" "),t("td",[v._v("3")]),v._v(" "),t("td",[v._v("(1;1;<3>),(2;1;<5>),(3;1;<4>)")])]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td",[v._v("年度")]),v._v(" "),t("td",[v._v("3")]),v._v(" "),t("td",[v._v("(1;1;<2>),(2;1;<4>),(3;1;<3>)")])]),v._v(" "),t("tr",[t("td",[v._v("3")]),v._v(" "),t("td",[v._v("AI")]),v._v(" "),t("td",[v._v("2")]),v._v(" "),t("td",[v._v("(2;1;<1>),(3;1;<1>)")])]),v._v(" "),t("tr",[t("td",[v._v("4")]),v._v(" "),t("td",[v._v("技术")]),v._v(" "),t("td",[v._v("1")]),v._v(" "),t("td",[v._v("(2;1;<2>)")])]),v._v(" "),t("tr",[t("td",[v._v("5")]),v._v(" "),t("td",[v._v("生态")]),v._v(" "),t("td",[v._v("1")]),v._v(" "),t("td",[v._v("(2;1;<3>)")])]),v._v(" "),t("tr",[t("td",[v._v("6")]),v._v(" "),t("td",[v._v("市场")]),v._v(" "),t("td",[v._v("1")]),v._v(" "),t("td",[v._v("(3;1;<2>)")])])])]),v._v(" "),t("p",[v._v("比如单词“年度”，单词ID为2，在三个文档中出现过，所以逆向文档频率为3，同时倒排索引中的元素也有三个："),t("code",[v._v("(1;1;<2>),(2;1;<4>),(3;1;<3>)")]),v._v("。")]),v._v(" "),t("p",[v._v("拿第一个元素"),t("code",[v._v("(1;1;<2>)")]),v._v("进行说明，它表示“年度”再文档ID为1的文档中出现过1次，出现的位置是第二个单词。")]),v._v(" "),t("h3",{attrs:{id:"倒排索引的搜索过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引的搜索过程"}},[v._v("#")]),v._v(" 倒排索引的搜索过程")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://lanffy.github.io/images/posts/2019/15574751723905.jpg",alt:"img"}})]),v._v(" "),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[v._v("#")]),v._v(" 参考链接")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://lanffy.github.io/2019/05/10/Inverted-Index-In-Elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[v._v("Elasticsearch源码解读六：ES中的倒排索引"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/195812446",target:"_blank",rel:"noopener noreferrer"}},[v._v("ElasticSearch 索引 VS MySQL 索引"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/andy_wcl/article/details/81631609",target:"_blank",rel:"noopener noreferrer"}},[v._v("Elasticsearch系列——（1.1）倒排索引原理"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports}}]);