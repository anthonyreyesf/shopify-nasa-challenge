(this["webpackJsonpshopify-nasa-challenge"]=this["webpackJsonpshopify-nasa-challenge"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),s=n.n(i),r=(n(11),n(4)),o=n.n(r),u=n(6),j=n(2),l=(n(13),n(0));var d=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1];return Object(l.jsxs)("div",{className:"Card",children:[Object(l.jsx)("img",{src:e.image,alt:e.title}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsx)("p",{children:e.description}),Object(l.jsx)("p",{children:e.date}),Object(l.jsx)("button",{type:"button",onClick:function(){return i(!a)},children:a?"Liked":"Like"})]})]})},h=(n(15),"Z5BdQe6xe3pDMJeZHWcnmB9IBKJAKR9MLuIUpiJd");var b=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),s=Object(j.a)(i,2),r=s[0],b=s[1],f=Object(c.useState)(!1),p=Object(j.a)(f,2),O=p[0],x=p[1];return Object(c.useEffect)((function(){fetch("https://api.nasa.gov/planetary/apod?count=6&api_key=".concat(h)).then((function(e){return e.json()})).then((function(e){a(e)}))}),[r]),Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,fetch("https://api.nasa.gov/planetary/apod?count=6&api_key=".concat(h));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(n),x(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,r]),Object(l.jsxs)("div",{className:"root",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{children:"Spacestagram"}),Object(l.jsxs)("p",{children:["by ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/anthonyreyesf/",children:"Anthony Reyes"})," - Software Developer intern @ Ada, previously @ D2L"]})]}),Object(l.jsx)("div",{children:O?Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("h2",{children:"Loading..."})}):n.map((function(e){return Object(l.jsx)(d,{title:e.title,description:e.explanation,image:e.url,date:e.date})}))}),Object(l.jsx)("div",{className:"shuffle",children:Object(l.jsx)("button",{type:"button",className:"shuffleButton",onClick:function(){b(!r),window.scrollTo({top:0,behavior:"smooth"})},children:"Shuffle"})})]})};n(16);var f=function(){return Object(l.jsx)(b,{})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}],[[17,1,2]]]);
//# sourceMappingURL=main.57c5e879.chunk.js.map