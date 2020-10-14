(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},102:function(e,t,n){"use strict";var r=n(0),a=n(21);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},103:function(e,t,n){"use strict";n.r(t),n.d(t,"useBaseUrlUtils",(function(){return o})),n.d(t,"default",(function(){return i}));var r=n(102),a=n(107);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},107:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(101)),i={id:"introduction",title:"Introduction",description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",slug:"/"},s={unversionedId:"introduction",id:"version-1.1.0/introduction",isDocsHomePage:!1,title:"Introduction",description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",source:"@site/versioned_docs/version-1.1.0/introduction.md",slug:"/",permalink:"/my-website/docs/",editUrl:"https://iitjammu.ac.in/versioned_docs/version-1.1.0/introduction.md",version:"1.1.0"},u=[{value:"Disclaimer",id:"disclaimer",children:[]},{value:"A better Docusaurus is coming to town",id:"a-better-docusaurus-is-coming-to-town",children:[]},{value:"Features",id:"features",children:[]},{value:"Comparison with other tools",id:"comparison-with-other-tools",children:[{value:"Gatsby",id:"gatsby",children:[]},{value:"GitBook",id:"gitbook",children:[]},{value:"Jekyll",id:"jekyll",children:[]},{value:"VuePress",id:"vuepress",children:[]}]},{value:"Staying informed",id:"staying-informed",children:[]},{value:"Something missing?",id:"something-missing",children:[]}],c={rightToc:u};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"disclaimer"},"Disclaimer"),Object(o.b)("p",null,"It has been a year since we made the first ",Object(o.b)("strong",{parentName:"p"},"alpha release")," of Docusaurus 2 and things have been pretty stable since then. Many of Facebook's new open source websites are using Docusaurus 2 now. At this point, we highly encourage you to use Docusaurus 2 over Docusaurus 1 for your new websites. For feedback and questions, chat with us on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://discordapp.com/invite/docusaurus"}),Object(o.b)("strong",{parentName:"a"},"Discord"))," \ud83d\ude09."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"You should use this if:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u2705 You want to contribute to Docusaurus 2"),Object(o.b)("li",{parentName:"ul"},"\u2705 You want to build a modern website with client-side routing and prerendering"),Object(o.b)("li",{parentName:"ul"},"\u2705 You want to provide feedback to make sure Docusaurus 2 suits your needs"),Object(o.b)("li",{parentName:"ul"},"\u2705 You are curious about what comes next as a Docusaurus user"),Object(o.b)("li",{parentName:"ul"},"\u2705 You want to ease the pain of migration in future"),Object(o.b)("li",{parentName:"ul"},"\u2705 You do not need support for IE11")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Do not use this if:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u274c You need a fully production-ready solution (try ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docusaurus.io/"}),"Docusaurus 1")," instead)"),Object(o.b)("li",{parentName:"ul"},"\u274c You need the translation features present in v1"),Object(o.b)("li",{parentName:"ul"},"\u274c You prefer not to work with potential breaking changes and/or features not yet working properly as we improve it during the alpha period"),Object(o.b)("li",{parentName:"ul"},"\u274c You need support for IE11")),Object(o.b)("h2",{id:"a-better-docusaurus-is-coming-to-town"},"A better Docusaurus is coming to town"),Object(o.b)("img",{alt:"Docusaurus ",src:n(103).default("img/slash-introducing.svg")}),Object(o.b)("p",null,"Docusaurus 1 used to be a pure documentation site generator. In Docusaurus 2, we rebuilt it from the ground up, allowing for more customizability but preserved the best parts of Docusaurus 1 - easy to get started, versioned docs, and i18n (",Object(o.b)("em",{parentName:"p"},"coming soon"),")."),Object(o.b)("p",null,"Beyond that, Docusaurus 2 is a ",Object(o.b)("strong",{parentName:"p"},"performant static site generator")," and can be used to create common content-driven websites (e.g. Documentation, Blogs, Product Landing and Marketing Pages, etc) extremely quickly."),Object(o.b)("p",null,"While our main focus will still be helping you get your documentations right and well, it is possible to build any kind of website using Docusaurus 2 as it is just a React application. ",Object(o.b)("strong",{parentName:"p"},"Docusaurus can now be used to build any website, not just documentation websites.")),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("p",null,"Docusaurus is built with high attention to your experience building your site and maintaining it with your collaborators and contributors."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u269b\ufe0f ",Object(o.b)("strong",{parentName:"li"},"Built with \ud83d\udc9a and React"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Extend and customize with React"),Object(o.b)("li",{parentName:"ul"},"Gain full control of your site's browsing experience by ",Object(o.b)("inlineCode",{parentName:"li"},"swizzling")," in your own components"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Pluggable"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Bootstrap your site with a basic template, then pick and plug functionalities built by us and our community"),Object(o.b)("li",{parentName:"ul"},"Open source your plugins to share with your fellow documentarians, because sharing is caring"))),Object(o.b)("li",{parentName:"ul"},"\u2702\ufe0f ",Object(o.b)("strong",{parentName:"li"},"Developer experience"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Multiple bootstrapping templates to get your site up and running, start writing your docs right now"),Object(o.b)("li",{parentName:"ul"},"Universal configuration entry point to make it more maintainable by contributors"),Object(o.b)("li",{parentName:"ul"},"Hot reloading with lightning fast incremental build on changes"),Object(o.b)("li",{parentName:"ul"},"Route-based code and data splitting"),Object(o.b)("li",{parentName:"ul"},"Publish to GitHub Pages, Netlify, and other deployment services with ease")))),Object(o.b)("p",null,"Our shared goal \u2014 to help your users find what they need fast, and understand your products better. With the experience of Docusaurus 1, we share with you our best practices to help you build your doc site right and well."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\ud83c\udfaf ",Object(o.b)("strong",{parentName:"li"},"SEO friendly"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"HTML files are statically generated for every possible path"),Object(o.b)("li",{parentName:"ul"},"page-specific SEO to help your users land on your official docs directly relating their problems at hand"))),Object(o.b)("li",{parentName:"ul"},"\ud83d\udcdd ",Object(o.b)("strong",{parentName:"li"},"Powered by MDX"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Write interactive components via JSX and React embedded in markdown"),Object(o.b)("li",{parentName:"ul"},"Share your code in live editors to get your users love your products on the spot"))),Object(o.b)("li",{parentName:"ul"},"\ud83d\udd0d ",Object(o.b)("strong",{parentName:"li"},"Search")," - Your full site is searchable"),Object(o.b)("li",{parentName:"ul"},"\ud83d\udcbe ",Object(o.b)("strong",{parentName:"li"},"Document Versioning")," - Helps you keep documentation in sync with project releases."),Object(o.b)("li",{parentName:"ul"},"\ud83c\udf0d ",Object(o.b)("strong",{parentName:"li"},"i18n")," (",Object(o.b)("em",{parentName:"li"},"coming soon"),")")),Object(o.b)("p",null,"Docusaurus 2 is born to be compassionately accessible to all your users, and lightning fast."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u26a1\ufe0f ",Object(o.b)("strong",{parentName:"li"},"Lightning fast")," - Docusaurus 2 follows the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/web/fundamentals/performance/prpl-pattern/"}),"PRPL Pattern")," that makes sure your content loads blazing fast"),Object(o.b)("li",{parentName:"ul"},"\ud83e\udd96 ",Object(o.b)("strong",{parentName:"li"},"Accessible")," - Attention to accessibility, making your site equally accessible to all users")),Object(o.b)("h2",{id:"comparison-with-other-tools"},"Comparison with other tools"),Object(o.b)("p",null,"Across all static site generators, Docusaurus has a unique focus on doc sites and has out-of-the-box structure you need."),Object(o.b)("p",null,"We've also studied other main static site generators and would like to share our insights on the comparison, hopefully to help you navigate through the prismatic choices out there."),Object(o.b)("h3",{id:"gatsby"},"Gatsby"),Object(o.b)("p",null,"Gatsby is packed with a lot of features, has a rich ecosystem of plugins and is capable of doing everything that Docusaurus does. Naturally, that comes at a cost of a higher learning curve. Gatsby does many things well and is suitable for building many types of websites. On the other hand, Docusaurus tries to do one thing super well - be the best tool for writing and publishing content."),Object(o.b)("p",null,"GraphQL is also pretty core to Gatsby, although you don't necessarily need GraphQL to build a Gatsby site. In most cases when building static websites, you won't need the flexibility that GraphQL provides."),Object(o.b)("p",null,"Many aspects of Docusaurus 2 were inspired by the best things about Gatsby and it's a great alternative."),Object(o.b)("h3",{id:"gitbook"},"GitBook"),Object(o.b)("p",null,"GitBook has very clean design and has been used by many open source projects. With its focus shifting towards a commercial product rather than an open-source tool, many of its requirements no longer fit the needs as an open source project's documentation site. As a result, many have turned to other products. You may read about Redux's switch to Docusaurus ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux/issues/3161"}),"here"),"."),Object(o.b)("p",null,"Currently, GitBook is only free for open-source and non-profit teams. Docusaurus is free for everyone."),Object(o.b)("h3",{id:"jekyll"},"Jekyll"),Object(o.b)("p",null,"Jekyll is one of the most mature static site generators around and has been a great tool to use \u2014 in fact, before Docusaurus, most of Facebook's Open Source websites are/were built on Jekyll! It is extremely simple to get started. We want to bring a similar developer experience as building a static site with Jekyll."),Object(o.b)("p",null,"In comparison with statically generated HTML and interactivity added using ",Object(o.b)("inlineCode",{parentName:"p"},"<script />")," tags, Docusaurus sites are React apps. Using modern JavaScript ecosystem tooling, we hope to set new standards on doc sites performance, asset build pipeline and optimizations, and ease to setup."),Object(o.b)("h3",{id:"vuepress"},"VuePress"),Object(o.b)("p",null,"VuePress has many similarities with Docusaurus - both focus heavily on content-centric website and provides tailored documentation features out of the box. However, VuePress is powered by Vue, while Docusaurus is powered by React. If you want a Vue-based solution, VuePress would be a decent choice."),Object(o.b)("h2",{id:"staying-informed"},"Staying informed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/docusaurus"}),"GitHub")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://twitter.com/docusaurus"}),"Twitter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/blog"}),"Blog"))),Object(o.b)("h2",{id:"something-missing"},"Something missing?"),Object(o.b)("p",null,"If you find issues with the documentation or have suggestions on how to improve the documentation or the project in general, please ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/docusaurus"}),"file an issue")," for us, or send a tweet mentioning the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/docusaurus"}),"@docusaurus")," Twitter account."),Object(o.b)("p",null,"For new feature requests, you can create a post on our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/feedback"}),"Canny board"),", which is a handy tool for roadmapping and allows for sorting by upvotes, which gives the core team a better indicator of what features are in high demand, as compared to GitHub issues which are harder to triage. Refrain from making a Pull Request for new features (especially large ones) as someone might already be working on it or will be part of our roadmap. Talk to us first!"))}l.isMDXComponent=!0}}]);