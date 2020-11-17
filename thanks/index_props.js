import projectConfig from '/pagic.config.js';
import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
export default {
    'prev': {
        "title": "编译选项",
        "link": "engineering/compiler-options.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig },
    'pagePath': "thanks/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "thanks/index.html",
    'title': "感谢",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>感谢</h1>\n<ul>\n<li>感谢<a href="https://github.com/Microsoft/TypeScript/graphs/contributors">创造和维护 TypeScript 的人们</a>，给我们带来了如此优秀的工具</li>\n<li>感谢 <a href="https://github.com/zhongsp/">@zhongsp</a> 对<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/index.html">官方手册的翻译</a>，本书参考了大量他的翻译，能一直坚持跟进非常不容易</li>\n<li>感谢 <a href="http://www.ruanyifeng.com/home.html">@阮一峰</a> 老师的 <a href="http://es6.ruanyifeng.com/">ECMAScript 6 入门</a>，本书引用了多处 ES6 的知识</li>\n</ul>\n<p>最后，感谢你阅读完本书，希望你会有所收获。</p>\n<h2 id="%E4%B8%8B%E4%B8%80%E6%AD%A5">下一步<a class="anchor" href="#%E4%B8%8B%E4%B8%80%E6%AD%A5">§</a></h2>\n<ul>\n<li>在 <a href="https://github.com/xcatliu/typescript-tutorial">GitHub</a> 上关注本书</li>\n<li>阅读<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">官方手册</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/">中文版</a>）巩固知识</li>\n<li>阅读 <a href="http://www.typescriptlang.org/docs/handbook/tsconfig-json.html">Project Configuration</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html">中文版</a>） 学习如何配置 TypeScript 工程</li>\n<li>查看<a href="http://www.typescriptlang.org/samples/index.html">官方示例</a>，学习真实项目</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-14" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u611F\u8C22"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li>感谢<a href="https://github.com/Microsoft/TypeScript/graphs/contributors">创造和维护 TypeScript 的人们</a>，给我们带来了如此优秀的工具</li>\n<li>感谢 <a href="https://github.com/zhongsp/">@zhongsp</a> 对<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/index.html">官方手册的翻译</a>，本书参考了大量他的翻译，能一直坚持跟进非常不容易</li>\n<li>感谢 <a href="http://www.ruanyifeng.com/home.html">@阮一峰</a> 老师的 <a href="http://es6.ruanyifeng.com/">ECMAScript 6 入门</a>，本书引用了多处 ES6 的知识</li>\n</ul>\n<p>最后，感谢你阅读完本书，希望你会有所收获。</p>\n<h2 id="%E4%B8%8B%E4%B8%80%E6%AD%A5">下一步<a class="anchor" href="#%E4%B8%8B%E4%B8%80%E6%AD%A5">§</a></h2>\n<ul>\n<li>在 <a href="https://github.com/xcatliu/typescript-tutorial">GitHub</a> 上关注本书</li>\n<li>阅读<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">官方手册</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/">中文版</a>）巩固知识</li>\n<li>阅读 <a href="http://www.typescriptlang.org/docs/handbook/tsconfig-json.html">Project Configuration</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html">中文版</a>） 学习如何配置 TypeScript 工程</li>\n<li>查看<a href="http://www.typescriptlang.org/samples/index.html">官方示例</a>，学习真实项目</li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%8B%E4%B8%80%E6%AD%A5">下一步</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu",
        "CENCHAOCHAO",
        "Maecenas Li",
        "wenbing"
    ],
    'date': "2017-01-16T11:20:03.000Z",
    'updated': "2020-07-02T14:29:45.000Z",
    'excerpt': " - 感谢创造和维护 TypeScript 的人们，给我们带来了如此优秀的工具 - 感谢 @zhongsp 对官方手册的翻译，本书参考了大量他的翻译，能一直坚持跟进非常不容易 - 感谢 @阮一峰 老师的 ECMAScript 6 入门，本书引用了多处 ES6 的知...",
    'cover': undefined,
    'sidebar': [
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "title": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html",
                    "pagePath": "introduction/what-is-typescript.md"
                },
                {
                    "title": "安装 TypeScript",
                    "link": "introduction/get-typescript.html",
                    "pagePath": "introduction/get-typescript.md"
                },
                {
                    "title": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html",
                    "pagePath": "introduction/hello-typescript.md"
                }
            ],
            "title": "简介",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "title": "原始数据类型",
                    "link": "basics/primitive-data-types.html",
                    "pagePath": "basics/primitive-data-types.md"
                },
                {
                    "title": "任意值",
                    "link": "basics/any.html",
                    "pagePath": "basics/any.md"
                },
                {
                    "title": "类型推论",
                    "link": "basics/type-inference.html",
                    "pagePath": "basics/type-inference.md"
                },
                {
                    "title": "联合类型",
                    "link": "basics/union-types.html",
                    "pagePath": "basics/union-types.md"
                },
                {
                    "title": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html",
                    "pagePath": "basics/type-of-object-interfaces.md"
                },
                {
                    "title": "数组的类型",
                    "link": "basics/type-of-array.html",
                    "pagePath": "basics/type-of-array.md"
                },
                {
                    "title": "函数的类型",
                    "link": "basics/type-of-function.html",
                    "pagePath": "basics/type-of-function.md"
                },
                {
                    "title": "类型断言",
                    "link": "basics/type-assertion.html",
                    "pagePath": "basics/type-assertion.md"
                },
                {
                    "title": "声明文件",
                    "link": "basics/declaration-files.html",
                    "pagePath": "basics/declaration-files.md"
                },
                {
                    "title": "内置对象",
                    "link": "basics/built-in-objects.html",
                    "pagePath": "basics/built-in-objects.md"
                }
            ],
            "title": "基础",
            "pagePath": "basics/README.md"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "title": "类型别名",
                    "link": "advanced/type-aliases.html",
                    "pagePath": "advanced/type-aliases.md"
                },
                {
                    "title": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html",
                    "pagePath": "advanced/string-literal-types.md"
                },
                {
                    "title": "元组",
                    "link": "advanced/tuple.html",
                    "pagePath": "advanced/tuple.md"
                },
                {
                    "title": "枚举",
                    "link": "advanced/enum.html",
                    "pagePath": "advanced/enum.md"
                },
                {
                    "title": "类",
                    "link": "advanced/class.html",
                    "pagePath": "advanced/class.md"
                },
                {
                    "title": "类与接口",
                    "link": "advanced/class-and-interfaces.html",
                    "pagePath": "advanced/class-and-interfaces.md"
                },
                {
                    "title": "泛型",
                    "link": "advanced/generics.html",
                    "pagePath": "advanced/generics.md"
                },
                {
                    "title": "声明合并",
                    "link": "advanced/declaration-merging.html",
                    "pagePath": "advanced/declaration-merging.md"
                },
                {
                    "title": "扩展阅读",
                    "link": "advanced/further-reading.html",
                    "pagePath": "advanced/further-reading.md"
                }
            ],
            "title": "进阶",
            "pagePath": "advanced/README.md"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "title": "代码检查",
                    "link": "engineering/lint.html",
                    "pagePath": "engineering/lint.md"
                },
                {
                    "title": "编译选项",
                    "link": "engineering/compiler-options.html",
                    "pagePath": "engineering/compiler-options.md"
                }
            ],
            "title": "工程",
            "pagePath": "engineering/README.md"
        },
        {
            "title": "感谢",
            "link": "thanks/index.html",
            "pagePath": "thanks/README.md"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "thanks/index.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u611F\u8C22" })
};