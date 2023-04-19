(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{419:function(t,s,a){"use strict";a.r(s);var r=a(2),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("flex布局目前已经非常流行了，它基本上可以完成大部分的布局需求。早一些的float布局、表格布局等等便没有那么受欢迎了。但是任何事物都不是完美的，flex布局也一样，它也有瑕疵，就比如我们今天所要讲的flex布局中最后一行对齐问题。")]),t._v(" "),s("h1",{attrs:{id:"_1-为什么要最后一行左对齐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要最后一行左对齐"}},[t._v("#")]),t._v(" 1.为什么要最后一行左对齐")]),t._v(" "),s("p",[t._v("我们都知道flex布局就是一个二维坐标系，有横轴和纵轴，里面的子元素则根据我们最初定义的横轴和纵轴初始方向进行排列，如下图：")]),t._v(" "),s("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ce2ce2398eb44eca3eb8df9a1910c82~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp"}}),t._v(" "),s("p",[t._v("在flex布局中，justify-content属性非常常用，它用来规定横轴元素的排列规则，通常使用的有以下几种：")]),t._v(" "),s("ul",[s("li",[t._v("两端对齐：justify-content: space-between;")]),t._v(" "),s("li",[t._v("左对齐：justify-content: flex-start;")]),t._v(" "),s("li",[t._v("右对齐：justify-content: flex-end;")]),t._v(" "),s("li",[t._v("居中对齐：justify-content: center;")])]),t._v(" "),s("p",[t._v("当我们使用两端对齐时，最后一行元素就会出现问题，导致整体样式不够美观，如下图一样：\n"),s("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa0ad05b7c7f47a7b64c292b1b03f394~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp"}})]),t._v(" "),s("h2",{attrs:{id:"代码如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码如下"}},[t._v("#")]),t._v(" 代码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("container "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 1px solid #"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      flex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wrap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      justify"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" space"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("between"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 66px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 66px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      margin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      background"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("148")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("148")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("131")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"container"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  这个时候我们可能就需要让最后一行元素左对齐。\n")])])]),s("h2",{attrs:{id:"_2-每行列数固定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-每行列数固定"}},[t._v("#")]),t._v(" 2.每行列数固定")]),t._v(" "),s("p",[t._v("如果每一行的元素固定，比如我们这里每一行的元素都是四个，这个时候我们有两种方式解决最后一行元素左对齐问题。")]),t._v(" "),s("h2",{attrs:{id:"_2-1-模拟两端对齐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-模拟两端对齐"}},[t._v("#")]),t._v(" 2.1 模拟两端对齐")]),t._v(" "),s("p",[t._v("这里模拟的意思代表我们不使用justify-content: space-between进行两端对齐，但是我们又要有两端对齐的效果，而且每一个子元素之间的间隙也要有。\n为了实现这种效果，我们需要动态计算每个 子元素之间的间隙，间隙我们利用margin来控制，代码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("container "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 1px solid #"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  flex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wrap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 66px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 66px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  margin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  background"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("148")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("148")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("131")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每一行的最后一个元素不设置右边距")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("not")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  margin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 22px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93d8e7067432430b9bdf7db69493b91a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp"}}),t._v(" "),s("p",[t._v("这种方式虽然也可以实现两端对齐的效果，但是需要计算每一个子元素的右边距。")]),t._v(" "),s("h2",{attrs:{id:"_2-2-根据个数动态设置margin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-根据个数动态设置margin"}},[t._v("#")]),t._v(" 2.2 根据个数动态设置margin")]),t._v(" "),s("p",[t._v("这里的动态设置margin指的是设置最后一个元素的margin值，假如我们这里每一行4个元素，但是最后一行只有三个元素，此时如果我们将最后一行的最后一个元素的右边距设置为元素宽度+间隙宽度，那么是可以实现左对齐效果的。\n但是这个时候我们需要知道最后一行有几个元素，这里会用到一个CSS选择器：")]),t._v(" "),s("p",[t._v(".list:last-child:nth-child(4n - 1)说明最后一行，要么3个元素，要么7个元素……\n.list:last-child:nth-child(4n - 2)说明最后一行，要么2个元素，要么6个元素……")]),t._v(" "),s("p",[t._v("上面的两行代码让我们取到了最后一行的第3个元素和第2个元素，然后动态设置margin，代码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("container "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 1px solid #"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  flex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wrap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  justify"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" space"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("between"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 65px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 65px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  margin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  background"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("148")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("148")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("131")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("last"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4n")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  margin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("66px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 12px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("last"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4n")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  margin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("66px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 66px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 12px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 12px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0246fb5db6b4625aba8e56990624bfc~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp"}}),t._v(" "),s("p",[t._v("当最后一行有三个元素时，则最后一个元素的右边距=元素宽度+间隙宽度。")]),t._v(" "),s("h2",{attrs:{id:"_3-每行子元素宽度不固定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-每行子元素宽度不固定"}},[t._v("#")]),t._v(" 3.每行子元素宽度不固定")]),t._v(" "),s("p",[t._v("有时候我们每行的元素宽度不是固定的，这个时候我们有两外两种方法来实现最后一行左对齐。")]),t._v(" "),s("h2",{attrs:{id:"_3-1-margin-right-auto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-margin-right-auto"}},[t._v("#")]),t._v(" 3.1 margin-right:auto")]),t._v(" "),s("p",[t._v("这种方式实现起来很简单，我们只需要设置最后一个元素的margin-right为auto即可，代码如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".container {\n  width: 300px;\n  border: 1px solid #000;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.list {\n  width: 65px;\n  height: 65px;\n  margin-bottom: 10px;\n  background-color: rgb(148, 148, 131);\n  margin-right: 10px;\n}\n\n.list:nth-child(1) {\n  width: 65px;\n  height: 65px;\n  margin-bottom: 10px;\n  background-color: rgb(148, 148, 131);\n  margin-right: 10px;\n}\n.list:nth-child(2) {\n  width: 60px;\n  height: 60px;\n  margin-bottom: 10px;\n  background-color: rgb(148, 148, 131);\n  margin-right: 10px;\n}\n.list:nth-child(3n) {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 10px;\n  background-color: rgb(148, 148, 131);\n  margin-right: 10px;\n}\n\n.list:last-child {\n  margin-right: auto;\n}\n")])])]),s("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1deb1658a4740fab3b2a4f54c24bc9b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp"}}),t._v(" "),s("p",[t._v("为了方便大家理解，我给很多list元素设置了不同宽度，大家可以看到最后一行元素虽然左对齐了，但是最右边并没有实现完美的贴边对齐，所有这也是这种方式的一个小小的缺陷。")]),t._v(" "),s("h2",{attrs:{id:"_3-2-设置伪元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-设置伪元素"}},[t._v("#")]),t._v(" 3.2 设置伪元素")]),t._v(" "),s("p",[t._v("除了利用margin-right:auto之外，我们还可以利用伪元素来实现最后一行左对齐，创建伪元素并设置flex:auto或者flex:1，代码如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".container {\n  width: 300px;\n  border: 1px solid #000;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.list {\n  width: 65px;\n  height: 65px;\n  margin-bottom: 10px;\n  background-color: rgb(148, 148, 131);\n  margin-right: 10px;\n}\n\n.list:nth-child(1) {\n  width: 65px;\n  height: 65px;\n  margin-bottom: 10px;\n  background-color: rgb(148, 148, 131);\n  margin-right: 10px;\n}\n\n.list:nth-child(2) {\n  width: 60px;\n  height: 60px;\n  margin-bottom: 10px;\n  background-color: rgb(148, 148, 131);\n  margin-right: 10px;\n}\n\n.list:nth-child(3n) {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 10px;\n  background-color: rgb(148, 148, 131);\n  margin-right: 10px;\n}\n\n.container::after {\n  content: '';\n  flex: auto;\n  /* 或者flex: 1 */\n}\n")])])]),s("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/934c4f2a6af8461390dc867c7f225b02~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp"}}),t._v(" "),s("p",[t._v("这种效果和margin:auto是一致的。")]),t._v(" "),s("h2",{attrs:{id:"_4-每行列数不固定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-每行列数不固定"}},[t._v("#")]),t._v(" 4.每行列数不固定")]),t._v(" "),s("p",[t._v("有些时候我们每一行的个数是不定的，这个时候上面的方法就不太适用了，我们需要使用其它方法来实现最后一行左对齐：使用足够多的占位空白元素来进行占位，占位元素的个数由最多列数的个数决定。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('.container {\n  border: 1px solid #000;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.list {\n  width: 65px;\n  height: 65px;\n  margin-bottom: 10px;\n  background-color: rgb(148, 148, 131);\n  margin-right: 10px;\n}\n\n.container>i {\n  width: 65px;\n  margin-right: 10px;\n}\n\n<div class="container">\n  <div class="list"></div>\n  <div class="list"></div>\n  <div class="list"></div>\n  <div class="list"></div>\n  <div class="list"></div>\n  <div class="list"></div>\n  <div class="list"></div>\n  <div class="list"></div>\n  <div class="list"></div>\n  <div class="list"></div>\n  <div class="list"></div>\n  <i></i><i></i><i></i><i></i><i></i>\n</div>\n')])])]),s("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2130b030b5934ee1adbd73431a21a7ba~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp"}}),t._v(" "),s("p",[t._v("这里我们声明了很多占位i标签元素，并且给它设置了宽度，因为我们没有给它设置高度，所以不会影响我们的布局，这种方式也实现了最后一行左对齐，但是它改变了html结构。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("这里给出了4种实现flex布局最后一行左对齐的方法，但是每一种都还是有瑕疵的，运用最广泛的还是利用占位元素的方式，因为它不仅适用于每行元素不固定的场景，每行元素个数固定时它也可以使用。\n但是如果想要完美实现两端对齐，可以考虑grid布局方式。")])])}),[],!1,null,null,null);s.default=n.exports}}]);