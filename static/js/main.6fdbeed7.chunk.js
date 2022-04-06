(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(0),i=n(1),a=n(16),l=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/djustice23.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(o);var b=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=n(5),d=n(21),h=[{index:!0,label:"David Justice",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(4).then(n.t.bind(null,168,7))})),m=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return a(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(23),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/djustice23.com","/images/me.png"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"David Justice"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:asu23justice@gmail.com",children:"asu23justice@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm David. I like figuring out things. I am a ",Object(c.jsx)("a",{href:"https://www.appstate.edu/",children:"App State"})," graduate, self-taught coder, and experienced traveler, currently traveling the USA and living and working out of a camper."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 David Justice ",Object(c.jsx)(u.b,{to:"/",children:"djustice23.com"}),"."]})]})]})},v=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},g=function(e){return Object(c.jsxs)(a.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(v,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | David Justice",defaultTitle:"David Justice",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};g.defaultProps={children:null,fullPage:!1,title:null,description:"David Justice's personal website."};t.a=g},23:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(27)),a=n(28),l=n(29),s=n(30),r=n(31),j=n(32),o=[{link:"https://github.com/djustice23",label:"Github",icon:a.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/asu23justice/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/",label:"LinkedIn",icon:r.faLinkedinIn},{link:"mailto:asu23justice@gmail.com",label:"Email",icon:j.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),l=n(15),s=n(5),r=n(3),j=n(20),o=(n(45),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,164))}))),b=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,171))})),u=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,165))})),d=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,166))})),h=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,170))})),O=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,167))})),m=Object(i.lazy)((function(){return Promise.all([n.e(5),n.e(12)]).then(n.bind(null,169))})),x=function(){return Object(c.jsx)(s.a,{basename:"/djustice23.com",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:o}),Object(c.jsx)(r.a,{path:"/projects",component:h}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(p,{}),f):Object(l.render)(Object(c.jsx)(p,{}),f)}},[[46,1,3]]]);
//# sourceMappingURL=main.6fdbeed7.chunk.js.map