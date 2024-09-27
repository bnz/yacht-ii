"use strict";(self.webpackChunkyacht_ii=self.webpackChunkyacht_ii||[]).push([[366],{6052:function(e,t,n){n.d(t,{A:function(){return o}});var a=n(1413),r=n(1694),i=n.n(r),s=n(1493),l=n(7301),c=n(184);function o(e){var t=e.children,n=e.type,r=void 0===n?"button":n,o=e.className,u=e.style,d=e.icon,x=e.disabled,m=e.onClick,f=e.onMouseUp,v=e.onMouseDown;return(0,c.jsx)("button",(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({className:i()("bg-no-repeat bg-center",o),style:(0,a.Z)((0,a.Z)({},u),{},{backgroundImage:"url(".concat(l.Z,"#").concat(d).concat(s._.value?"-white":"",")")}),onClick:m},r?{type:r}:{}),f?{onMouseUp:f}:{}),v?{onMouseDown:v}:{}),x?{disabled:x}:{}),{},{children:t}))}},7847:function(e,t,n){n.d(t,{Qk:function(){return K},w0:function(){return Q},Jh:function(){return q}});var a=n(885),r=n(2982),i=n(2791),s=n(4412),l=n(6394),c=n(1694),o=n.n(c),u=n(4391),d=n(160),x=n(1382),m=n(5739),f=n(184);function v(){return(0,f.jsx)("div",{className:o()("flex items-center justify-center text-3xl px-1",Q),children:(0,f.jsxs)("button",{type:"button","data-empty":!0,onClick:d.F.columnView.toggleActive,className:o()("border border-[--line-color] rounded-full w-full h-[1em] relative","shadow-inner","hover:shadow","active:shadow-inner","before:block before:bg-[--line-color] before:w-[calc(50%-.05em)] before:rounded-full","before:absolute before:left-[0.05em] before:top-[.05em] before:bottom-[.05em]","before:transition-all before:duration-300",!d.F.columnView.isText&&o()("before:translate-x-full","[&>span:first-child]:text-[--text-color-semi]"),"[&>span]:flex [&>span]:items-center [&>span]:justify-center","[&>span]:absolute [&>span]:top-0 [&>span]:bottom-0 [&>span]:w-1/2","[&>span]:-z-10"),children:[(0,f.jsx)("span",{className:"left-0 text-[.4em]",children:(0,x.a)("text")}),(0,f.jsxs)("span",{className:o()("right-0 text-[.3em] pt-[.2em] flex gap-[.25em] relative",d.F.columnView.isText&&o()("after:absolute after:inset-0 after:rounded-full","after:bg-[--background-color-disabled]")),children:[(0,f.jsx)(m.b,{value:1,index:0}),(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:5,index:0})]})]})})}var b=n(1413),p=n(3683),h=n(4164),j=n(8990),g=n(2822),k=n(6052);function w(e){var t=e.playerId,n=e.children,r=d.F.getById(t),i=(0,p.R)(!1),s=(0,a.Z)(i,2),l=s[0],c=s[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{onClick:c,className:o()("cursor-pointer","hover:shadow-md hover:outline hover:outline-[--line-color]","active:shadow-inner","grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr]","rounded-full select-none"),children:n}),l&&(0,h.createPortal)((0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(j.y,{actions:{Escape:c}}),(0,f.jsx)(g.Y,{onClick:c}),(0,f.jsxs)("div",{className:o()("not-italic font-medium","fixed","left-1/2 -translate-y-1/2","top-1/2 -translate-x-1/2","md:min-w-96 max-w-screen-lg w-[95%] md:w-auto bg-[--background-color] shadow-2xl z-50 p-5 cursor-auto","border border-[--line-color] rounded","flex items-center justify-center"),children:[(0,f.jsx)(k.A,{onClick:c,className:"absolute right-2 top-2 w-10 h-10 !shadow-none !bg-transparent",icon:"close"}),(0,f.jsx)(u.q,{avatar:r.avatar,className:"!w-80 !h-80",edit:function(e){d.F.update((function(n){return n[t]=(0,b.Z)((0,b.Z)({},n[t]),{},{avatar:e}),n}))}})]})]}),document.body)]})}function N(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(v,{}),d.F.dataActiveFirst.map((function(e){var t=e.id,n=e.data,a=n.name,r=n.avatar,i=d.F.activeId!==t;return(0,f.jsx)("div",{className:o()(Q,"p-2",!i&&o()("bg-[--background-color-active]","rounded-tl-3xl rounded-tr-3xl")),children:(0,f.jsxs)(w,{playerId:t,children:[(0,f.jsx)(u.q,{disabled:i,avatar:r,className:"!w-12 !h-12 md:!w-20 md:!h-20 row-span-2 !z-0"}),(0,f.jsx)("div",{className:o()("flex items-end justify-start",i?"text-[--text-color-disabled]":"text-[--text-color]"),children:a}),(0,f.jsx)("div",{className:o()("md:text-3xl",i&&"text-[--text-color-disabled]"),children:d.F.points.totals[t]})]})},t)})),(0,f.jsx)("div",{className:Q})]})}var y="h-7";function I(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:y}),d.F.dataActiveFirst.map((function(e){var t=e.id;return(0,f.jsx)("div",{className:o()(y,d.F.activeId===t&&"bg-[--background-color-active] rounded-bl-3xl rounded-br-3xl")},t)})),(0,f.jsx)("div",{className:y})]})}var F,G=n(6457),A=n(4572);var C=(F={},(0,A.Z)(F,s.G5.SMALL_STRAIGHT,{points:25,maxPoints:25}),(0,A.Z)(F,s.G5.BIG_STRAIGHT,{points:30,maxPoints:30}),(0,A.Z)(F,s.G5.THE_YACHT,{points:50,maxPoints:50}),(0,A.Z)(F,s.G5.TWO_PAIR,{points:25,maxPoints:25}),(0,A.Z)(F,s.G5.FULL_HOUSE,{points:30,maxPoints:30}),F);function T(e,t,n){var a,i=Object.values(t).sort(),l=(a=i,(0,r.Z)(new Set(a))),c=l.toString(),o=function(e,t){var n=Object.values(t).sort();switch(e){case s.G5.ONE:case s.G5.TWO:case s.G5.THREE:case s.G5.FOUR:case s.G5.FIVE:case s.G5.SIX:var a=n.filter((function(t){return t===e}));return a.length>=3&&{points:a.length*e,maxPoints:5*e};default:return!1}}(e,t);if(o)return o;if(n)return{};switch(e){case s.G5.EQUAL_3:case s.G5.EQUAL_4:var u=parseInt(e.split("_")[1],10),d={};i.forEach((function(e){d[e]=(d[e]||0)+1}));var x=parseInt(Object.keys(d).filter((function(e){return d[e]>=u}))[0],10);if(!isNaN(x))return{points:x*u,maxPoints:6*u};break;case s.G5.SMALL_STRAIGHT:var m=C[s.G5.SMALL_STRAIGHT];if(5===l.length){if(-1!==["1,2,3,4,5","2,3,4,5,6"].indexOf(c))return m;for(var f=1;f<=l.length;f++)if(l[f-1]!==f){var v=(0,r.Z)(l);if(v.shift(),4===v.length&&"3,4,5,6"===v.toString())return m;if((v=(0,r.Z)(l)).pop(),4===v.length&&"1,2,3,4"===v.toString())return m}}if(4===l.length&&-1!==["1,2,3,4","2,3,4,5","3,4,5,6"].indexOf(c))return m;break;case s.G5.BIG_STRAIGHT:if(5===l.length&&-1!==["1,2,3,4,5","2,3,4,5,6"].indexOf(c))return C[s.G5.BIG_STRAIGHT];break;case s.G5.THE_YACHT:if(1===l.length&&-1!==l[0])return C[s.G5.THE_YACHT];break;case s.G5.CHANCE:return{points:i.reduce((function(e,t){return e+t}),0),maxPoints:30};case s.G5.FULL_HOUSE:if(2===l.length){var b=(0,r.Z)(i).sort();if(b[0]===b[1]&&b[1]===b[2]&&b[3]===b[4]&&b[0]!==b[3]||b[0]===b[1]&&b[2]===b[3]&&b[3]===b[4]&&b[0]!==b[2])return C[s.G5.FULL_HOUSE]}break;case s.G5.TWO_PAIR:var p=i.sort();if(p[0]===p[1]&&p[2]===p[3]&&p[0]!==p[2]||p[1]===p[2]&&p[3]===p[4]&&p[1]!==p[3]||p[0]===p[1]&&p[3]===p[4]&&p[0]!==p[3])return C[s.G5.TWO_PAIR];break;default:return{}}return{}}function O(e){var t=e.points,n=e.maxPoints;return void 0!==t&&void 0!==n&&t<n?(0,f.jsxs)(f.Fragment,{children:[t,(0,f.jsx)("span",{className:"ml-1 italic",children:"".concat((0,x.a)("ofMax")," ").concat(n)})]}):(0,f.jsx)(f.Fragment,{children:t})}var S=n(9672);function _(e){var t=e.onClick,n=e.innerClassName,a=e.buttonClassName,r=e.children;return(0,f.jsx)("button",{type:"button",onClick:t,"data-empty":!0,className:a,children:(0,f.jsx)("div",{className:o()("rounded-2xl animate-pulse shadow-2xl flex justify-center items-center h-12 mx-1",n),children:r})})}var E=n(9279),Z=n(4636);function H(e){var t=e.className,n=e.playerId,a=e.combination,l=d.F.points.get(n),c=E.A.getByPlayerId(n)===E.o.points,u=(0,i.useCallback)((function(){E.A.toggle(n)}),[n]),x=Z.m.player(n),v=(0,i.useMemo)((function(){return x.find((function(e){var t=e.result;return Object.keys(t).some((function(e){return e==="".concat(a)}))}))}),[x,a]);if(!v||!l[a])return(0,f.jsx)("div",{className:o()("text-2xl font-thin",t),onClick:u,children:l[a]});var b=(0,r.Z)(v.tries[v.tries.length-1]||[]).sort();return b=function(e,t){switch(t){case s.G5.ONE:case s.G5.TWO:case s.G5.THREE:case s.G5.FOUR:case s.G5.FIVE:case s.G5.SIX:e=e.filter((function(e){return e===t}));break;case s.G5.EQUAL_3:case s.G5.EQUAL_4:var n=parseInt(t.split("_")[1],10),a={};e.forEach((function(e){return a[e]=(a[e]||0)+1}));var i=Object.keys(a).filter((function(e){return a[e]>=n}));e=new Array(n).fill(i[0]);break;case s.G5.BIG_STRAIGHT:case s.G5.SMALL_STRAIGHT:e=Array.from(new Set(e));break;case s.G5.TWO_PAIR:var l={};e.forEach((function(e){return l[e]=(l[e]||0)+1}));var c=Object.keys(l).filter((function(e){return 2===l[e]})).map((function(e){return parseInt(e,10)}));e=[].concat((0,r.Z)(c),(0,r.Z)(c)).sort()}return e}(b,a),(0,f.jsxs)("div",{className:o()("relative",t),onClick:u,children:[(0,f.jsx)("div",{className:o()("text-2xl font-thin","opacity-0","absolute",c?"animate-fadeOut":"animate-fadeIn"),children:l[a]}),(0,f.jsx)("div",{className:o()("flex gap-[.25em]","opacity-0","absolute",c?"animate-fadeIn":"animate-fadeOut"),children:b.map((function(e,t){return(0,f.jsx)(m.b,{value:e,index:0},t)}))})]})}var P=n(3966),L=n(1326);function R(e){var t=e.playerId,n=e.combination,a=e.isMoveAvailable,r=e.className,l=T(n,L.I.value,P.o.value),c=l.points,u=l.maxPoints,m=d.F.points.get(t),v=void 0===(m||[])[n]?s.mk:(m||[])[n],b=d.F.activeId===t,p=(0,s.Kw)(n),h=v!==s.mk&&!p,j=o()({matched:h,matching:b&&!h&&void 0!==c&&c>0,bonus:p&&v!==s.mk,strike:b&&!h&&!p&&!a}),g=(0,i.useCallback)((function(){(0,G.k)({combination:n,points:c})}),[n,c]),k=(0,i.useCallback)((function(){(0,G.k)({combination:n,points:0})}),[n]),w=o()(r),N=o()("bg-[--background-color-active]");switch(j){case"matching":return(0,f.jsx)(_,{onClick:g,buttonClassName:o()(w,N),innerClassName:"bg-blue-200 dark:bg-blue-950",children:(0,f.jsx)(O,{points:c,maxPoints:u})});case"matched":return(0,f.jsx)(H,{playerId:t,combination:n,className:o()(w,b&&N)});case"bonus":var y=v,I=-1===Math.sign(y),F=I?"".concat((0,x.a)("more")," ").concat(-1*y," ").concat((0,S.X)(-1*y)):y;return(0,f.jsx)("div",{className:o()(w,I?"text-[rgba(0,0,0,.4)] dark:text-[rgba(255,255,255,.25)]":"not-italic"),children:F});case"strike":return(0,f.jsx)("button",{type:"button","data-empty":!0,className:w,onClick:k,children:(0,f.jsx)("div",{className:o()("animate-pulse shadow-2xl flex justify-center items-center h-12 mx-1","bg-red-200 dark:bg-red-950 rounded"),children:(0,x.a)("button.strikeOut")})});default:return(0,f.jsx)("div",{className:o()(w,"text-[--line-color]",b&&N),children:s.mk})}}function U(e){var t=e.children,n=e.onClose;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(j.y,{actions:{Escape:n}}),(0,f.jsx)(g.Y,{onClick:n}),(0,f.jsxs)("div",{className:o()("not-italic font-medium","fixed","left-1/2 -translate-y-1/2","top-1/2 -translate-x-1/2","max-w-7xl w-80 bg-[--background-color] shadow-2xl z-50 p-5 cursor-auto","border border-[--line-color] rounded"),children:[(0,f.jsx)(k.A,{onClick:n,className:"absolute right-2 top-2 w-10 h-10 !shadow-none !bg-transparent",icon:"close"}),t]})]})}var M=n(121);function B(e){var t=e.className,n=e.name,r=e.title,l=e.combination,c=r.split("###"),u=(0,a.Z)(c,2),x=u[0],v=u[1],b=(0,i.useCallback)((function(){(0,M.V)((function(e){return null===e?l:null}))}),[l]),p=(0,i.useMemo)((function(){return function(e){switch(e){case s.G5.ONE:case s.G5.TWO:case s.G5.THREE:case s.G5.FOUR:case s.G5.FIVE:case s.G5.SIX:return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.b,{value:e,index:0}),(0,f.jsx)(m.b,{value:e,index:0}),(0,f.jsx)(m.b,{value:e,index:0}),(0,f.jsxs)("div",{className:o()("flex relative","after:block","after:absolute after:inset-0","after:bg-[--background-color-disabled]"),children:[(0,f.jsx)(m.b,{value:e,index:0}),(0,f.jsx)(m.b,{value:e,index:0})]})]});case s.G5.EQUAL_3:return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:3,index:0})]});case s.G5.EQUAL_4:return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:3,index:0})]});case s.G5.SMALL_STRAIGHT:return[[1,2,3,4].map((function(e){return(0,f.jsx)(m.b,{value:e,index:0},e)})),(0,f.jsx)("div",{className:"flex flex-col gap-3",children:[0,1,2].map((function(e){return(0,f.jsx)("div",{className:"flex",children:[1,2,3,4].map((function(t){return(0,f.jsx)(m.b,{value:t+e,index:0},t)}))},e)}))})];case s.G5.BIG_STRAIGHT:return[[1,2,3,4,5].map((function(e){return(0,f.jsx)(m.b,{value:e,index:0},e)})),(0,f.jsx)("div",{className:"flex flex-col gap-3",children:[0,1].map((function(e){return(0,f.jsx)("div",{className:"flex",children:[1,2,3,4,5].map((function(t){return(0,f.jsx)(m.b,{value:t+e,index:0},t)}))},e)}))})];case s.G5.TWO_PAIR:return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.b,{value:2,index:0}),(0,f.jsx)(m.b,{value:2,index:0}),(0,f.jsx)("div",{className:"w-[.5em]"}),(0,f.jsx)(m.b,{value:5,index:0}),(0,f.jsx)(m.b,{value:5,index:0})]});case s.G5.FULL_HOUSE:return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)("div",{className:"w-[.5em]"}),(0,f.jsx)(m.b,{value:4,index:0}),(0,f.jsx)(m.b,{value:4,index:0}),(0,f.jsx)(m.b,{value:4,index:0})]});case s.G5.THE_YACHT:return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:3,index:0})]});case s.G5.CHANCE:return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.b,{value:2,index:0}),(0,f.jsx)(m.b,{value:3,index:0}),(0,f.jsx)(m.b,{value:2,index:0}),(0,f.jsx)(m.b,{value:5,index:0}),(0,f.jsx)(m.b,{value:1,index:0})]});default:return null}}(l)}),[l]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:o()(t,q,Q,"relative !justify-start cursor-pointer overflow-hidden"),onClick:b,children:l===s.G5.BONUS?(0,f.jsx)("div",{className:o()("absolute left-0 pl-2 top-1/2 -translate-y-1/2"),children:n}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:o()("opacity-0 absolute left-0 pl-2 top-1/2 -translate-y-1/2",d.F.columnView.isText?"animate-fadeOut":"animate-fadeIn"),children:n}),(0,f.jsx)("div",{className:o()("opacity-0 pl-2 text-sm flex absolute left-0 top-1/2 -translate-y-1/2",d.F.columnView.isText?"animate-fadeIn":"animate-fadeOut"),children:Array.isArray(p)?p[0]:p})]})}),M.h.value===l&&(0,h.createPortal)((0,f.jsxs)(U,{onClose:b,children:[(0,f.jsx)("h5",{className:"text-2xl mb-5",children:n}),(0,f.jsx)("p",{className:o()("font-thin",(v||p)&&"mb-5"),children:x}),p&&(0,f.jsx)("div",{className:"flex text-2xl mb-3",children:Array.isArray(p)?p[1]:p}),v&&(0,f.jsx)("p",{className:"font-bold text-xs",children:v})]}),document.body)]})}for(var z=(0,n(7401).Fl)((function(){var e=d.F.points.active,t=0,n=!1;return s.wm.forEach((function(a){var r=a.combination,i=T(r,L.I.value,P.o.value).points,c=r!==s.G5.BONUS&&e&&!!e[r];void 0===i||c||(t+=1),void 0===i&&d.F.activeShot===l.o&&(n=!0)})),!(0===t&&n)})),V=n(6132),D=160,X={},W=1;W<=l.k;W++)X[W]=[D].concat((0,r.Z)(new Array(W).fill(200)),[10]).join("px ")+"px";var Y="grid max-w-2/3 w-fit mx-auto relative",Q="border-b border-[--line-color]",q="h-14 flex items-center justify-center";function J(e){var t=e.children,n=(0,i.useState)(!1),r=(0,a.Z)(n,2),s=r[0],l=r[1];return(0,i.useEffect)((function(){window.addEventListener("scroll",(function(e){var t,n;l((null===(t=e.target)||void 0===t||null===(n=t.documentElement)||void 0===n?void 0:n.scrollTop)>5)}))}),[l]),(0,f.jsx)("div",{className:o()(Y,"sticky top-0 bg-[--background-color] z-10 pt-3 md:pt-0",s&&"shadow-xl md:shadow-none"),style:{gridTemplateColumns:X[d.F.dataActiveFirst.length]},children:t})}function K(e){var t=e.combinations;return(0,V.ZH)(),(0,f.jsxs)("div",{className:"w-full px-2 md:overflow-auto lg:px-0 order-1 md:order-2 pb-36",children:[(0,f.jsx)(J,{children:(0,f.jsx)(N,{})}),(0,f.jsxs)("div",{className:Y,style:{gridTemplateColumns:X[d.F.dataActiveFirst.length]},children:[t.map((function(e){var t=e.name,n=e.title,a=e.combination,r=o()((0,s.Kw)(a)&&"!bg-[--line-color] italic font-thin border-b-0 !h-8"),l=o()(a===s.G5.SIX&&"border-b-0");return(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(B,{className:o()(r,""!==r&&"rounded-bl rounded-tl",l),name:t,title:n,combination:a}),d.F.dataActiveFirst.map((function(e){var t=e.id;return(0,f.jsx)(R,{playerId:t,combination:a,isMoveAvailable:z.value,className:o()(r,Q,l,"h-14 flex items-center justify-center")},t)})),(0,f.jsx)("div",{className:o()(r,Q,""!==r&&o()("rounded-br rounded-tr"),l)})]},t)})),(0,f.jsx)(I,{})]}),(0,f.jsx)("div",{className:"h-20 lg:hidden"})]})}},5739:function(e,t,n){n.d(t,{b:function(){return x}});var a=n(2982),r=n(1493),i=n(184);function s(e){var t=e.filled;return(0,i.jsx)("div",{className:"flex items-center justify-center min-w-[.6em]",children:(0,i.jsx)("div",{className:"w-[80%] h-[80%] rounded-full",style:{boxShadow:t&&r._.value?"inset 0 0 .1em rgba(0, 0, 0, .8)":"none",background:t?r._.value?"#ccc":"var(--text-color)":"transparent"}})})}var l=n(1694),c=n.n(l);n(2791);var o=n.p+"static/media/face.488a7055ed32db2c13c5920070b0766d.svg",u={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]},d=(0,a.Z)(window.Array(9).keys());function x(e){var t=e.value,n=e.roll,a=e.selected,l=e.onClick,x=e.index;return(0,i.jsx)("div",{className:"relative w-[2em] min-w-[2em] max-w-[2em] h-[2em] flex-wrap flex-grow cursor-pointer",onClick:l,children:(0,i.jsx)("div",{className:c()("flex flex-wrap","bg-white dark:bg-black","rounded-[.2em]","w-[1.8em] max-w-[1.8em] min-w-[1.8em] h-[1.8em]","duration-300"),style:{transform:n?"rotate(".concat(359*(x%2===1?1:-1),"deg)"):"none",boxShadow:a?r._.value?"rgba(255, 255, 255, 0.5) 0 0 0 2px":"0 0 .2em rgba(0, 0, 0, 1)":"0 0 .1em rgba(0, 0, 0, .4)"},children:n?(0,i.jsx)("div",{className:"bg-no-repeat bg-center bg-contain absolute left-2 right-2 top-2 bottom-2",style:{backgroundImage:"url('".concat(o,"#").concat(r.r,"')")}}):d.map((function(e){return(0,i.jsx)(s,{filled:u[t]&&-1!==u[t].indexOf(e+1)},e)}))})})}},2324:function(e,t,n){n.d(t,{W:function(){return o}});var a=n(5739),r=n(160),i=n(65),s=n(1326),l=n(8844);var c=n(184);function o(){return(0,c.jsx)("div",{className:"flex flex-nowrap justify-center overflow-hidden gap-[0.333em] text-3xl lg:text-4xl pt-8 pb-3",children:s.I.value.map((function(e,t){var n=-1!==s.I.selected.value.indexOf(t);return(0,c.jsx)(a.b,{index:t,value:e,selected:n,roll:!n&&i.V.value,onClick:function(){r.F.isShotAvailable||-1===e||function(e){var t=(0,l.e)(s.I.selected.value),n=t.indexOf(e);-1!==n?t.splice(n,1):4!==t.length&&t.push(e),s.I.selected.update(t)}(t)}},t)}))})}},7609:function(e,t,n){n.d(t,{T:function(){return A}});var a=n(885),r=n(1382),i=n(2791),s=n(6394),l=n(7877),c=n(6052),o=n(1694),u=n.n(o),d=n(4164),x=n(4412),m=n(3683),f=n(1326),v=n(6457),b=n(4636),p=n(160),h=n(6132),j=n(184);function g(){var e=(0,i.useMemo)((function(){var e={};return Object.keys(b.m.value).forEach((function(t){e[p.F.getById(t)?p.F.getById(t).name:t]=b.m.value[t]})),e}),[p.F.value,b.m.value]);return Object.keys(e).length?(0,j.jsx)("pre",{className:"fixed top-1 bottom-1 right-1 rounded p-1 z-[999999] bg-amber-800 overflow-auto text-xs",children:JSON.stringify(e,(function(e,t){return"tries"===e||"dicesSelected"===e?JSON.stringify(t):t}),2)}):null}var k=(0,i.memo)((function(){var e=(0,m.R)(),t=(0,a.Z)(e,3),n=t[0],r=t[2],s=(0,i.useState)(!1),l=(0,a.Z)(s,2),c=l[0],o=l[1];function k(e,t,n){switch(e){case x.G5.ONE:case x.G5.TWO:case x.G5.THREE:case x.G5.FOUR:case x.G5.FIVE:case x.G5.SIX:n?f.I.update(new Array(3).fill(e).concat(new Array(2).fill(e===x.G5.SIX?e-1:e+1))):f.I.update(new Array(5).fill(e));break;case x.G5.EQUAL_3:n?f.I.update([1,1,1,4,6]):f.I.update([6,6,6,4,2]);break;case x.G5.EQUAL_4:n?f.I.update([1,1,1,4,1]):f.I.update([6,6,6,4,6]);break;case x.G5.SMALL_STRAIGHT:f.I.update([2,3,4,5,5]);break;case x.G5.BIG_STRAIGHT:f.I.update([1,2,3,4,5]);break;case x.G5.TWO_PAIR:f.I.update([2,2,3,4,4]);break;case x.G5.FULL_HOUSE:f.I.update([3,3,3,5,5]);break;case x.G5.CHANCE:n?f.I.update([1,1,1,1,1]):f.I.update([6,6,6,6,6]);break;case x.G5.THE_YACHT:f.I.update([4,4,4,4,4])}p.F.move.update((function(e){var t=(0,a.Z)(e,2);return[t[0],t[1]+1]})),b.m.updateDices(),(0,v.k)({combination:e,points:t})}(0,h.ZH)(),(0,i.useEffect)((function(){window.location.search&&"?dev"===window.location.search&&o(!0)}),[o]);var N=(0,i.useCallback)((function(){console.group("state"),console.log({history:b.m.value}),console.groupEnd()}),[]);return c?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:"absolute bottom-2 left-2 flex gap-3",children:[(0,j.jsx)("button",{type:"button",className:u()(n&&"shadow-none"),onClick:function(){r(!0)},children:"Dev"}),(0,j.jsx)("button",{type:"button",onClick:N,children:"Dump"})]}),n&&(0,d.createPortal)((0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{}),(0,j.jsx)("div",{className:u()("z-10","bg-[--background-color] shadow-2xl rounded","fixed left-2 top-1/2 -translate-y-1/2","p-3","min-w-max"),children:(0,j.jsx)("div",{className:"w-full grid grid-cols-[150px_200px_50px]",children:x.wm.map((function(e,t){var n=e.combination,a=e.name,r=e.min,i=e.max;return n===x.G5.BONUS?null:(0,j.jsx)(w,{isLast:t!==x.wm.length-1?"border-b":"",name:a,min:r,max:i,combination:n,onClick:k},t)}))})})]}),document.body)]}):null}),(function(){return!0}));function w(e){var t=e.combination,n=e.isLast,r=e.name,s=e.min,l=e.max,c=e.onClick,o=(0,i.useState)(s||l),d=(0,a.Z)(o,2),x=d[0],m=d[1],f=p.F.points.active,v=-1===Object.keys(f).indexOf("".concat(t));return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:u()("py-3 border-[--line-color] pl-3",n),children:r}),(0,j.jsxs)("div",{className:u()("border-x flex justify-between px-3 py-1 border-[--line-color]",n),onChange:function(e){m(parseInt(e.target.value,10))},children:[void 0===s?null:(0,j.jsxs)("label",{className:"flex items-center cursor-pointer relative px-2 rounded overflow-hidden w-20",children:[(0,j.jsx)("input",{type:"radio",name:"".concat(t),value:s,className:"hidden peer/draft",defaultChecked:!0}),(0,j.jsx)("div",{className:"absolute inset-0 peer-checked/draft:bg-[--text-color-semi]"}),(0,j.jsxs)("div",{className:"relative",children:["min: ",s]})]}),(0,j.jsxs)("label",{className:"flex items-center cursor-pointer relative px-2 rounded overflow-hidden w-20",children:[(0,j.jsx)("input",{type:"radio",name:"".concat(t),className:"hidden peer/draft",value:l,defaultChecked:void 0===s}),(0,j.jsx)("div",{className:"absolute inset-0 peer-checked/draft:bg-[--text-color-semi]"}),(0,j.jsxs)("div",{className:"relative",children:["max: ",l]})]})]}),(0,j.jsx)("button",{className:u()("py-3 border-[--line-color]",n,!v&&"text-[--background-color-active]"),disabled:!v,onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){c(t,x,void 0!==s&&x===s)})),children:"DO"})]})}var N=n(65),y=n(8844),I=300,F=0,G=null;function A(){var e=f.I.value,t=f.I.selected.value,n=(0,i.useCallback)((function(){F=Date.now(),(0,N.X)(!0),null!==G&&window.clearTimeout(G)}),[]),o=(0,i.useCallback)((function(){if(N.V.value){var n=Date.now()-F;G=window.setTimeout((function(){var n=(0,y.e)(e);e.forEach((function(e,a){-1===t.indexOf(a)&&(n[a]=(0,l.T)())})),f.I.update(n),p.F.move.update((function(e){var t=(0,a.Z)(e,2);return[t[0],t[1]+1]})),b.m.updateDices(),(0,N.X)(!1)}),n<I?I-n:0)}}),[e,t]),d=(0,i.useCallback)((function(){f.I.selected.reset()}),[]);return(0,j.jsxs)("div",{className:"relative transition-all duration-300 h-16 mb-2 md:mb-6",children:[(0,j.jsx)(k,{}),(0,j.jsx)(c.A,{onMouseUp:o,onMouseDown:n,disabled:p.F.isShotAvailable,className:u()("!pl-10 !bg-[8px_center] flex text-xl !rounded-2xl","absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2","whitespace-nowrap","after:!rounded-2xl"),icon:"casino",children:p.F.isShotAvailable?(0,r.a)("button.writeDownYourPoints"):(0,j.jsxs)(j.Fragment,{children:[(0,r.a)("button.dropDices"),(0,j.jsxs)("span",{className:"ml-2 text-red-600 w-12 block",children:[p.F.activeShot,(0,j.jsxs)("span",{className:"text-gray-500 dark:text-gray-300 font-bold",children:[" / ",s.o]})]})]})}),(0,j.jsx)(c.A,{icon:"close",onClick:d,className:u()(0===t.length||p.F.isShotAvailable?"animate-fadeIn":"animate-fadeOut","absolute left-1/2 top-1/2","w-11 h-11 !rounded-full"),style:{transform:"translate(-50%, -50%) translateX(-160px)"}})]})}},82:function(e,t,n){n.d(t,{G:function(){return s}});var a=n(1694),r=n.n(a),i=n(184);function s(e){var t=e.children;return(0,i.jsx)("div",{className:r()("bg-[--background-color]","z-50","fixed md:sticky","left-0 md:left-auto","right-0 md:right-auto","bottom-0 md:bottom-auto","md:top-0","overflow-hidden","order-2 md:order-1","shadow-[0_-5px_15px_rgba(0,0,0,0.3)] md:shadow-none","md:mb-6 mt-6 md:mt-0","pb-6 md:p-0"),children:t})}},6576:function(e,t,n){n.d(t,{a:function(){return b}});var a=n(2822),r=n(1694),i=n.n(r),s=n(6145),l=n(1382),c=n(4412),o=n(9672),u=n(4391),d=n(8990),x=n(184);function m(){return(0,x.jsx)("div",{className:"pyro"})}var f=n(818),v=n(7233);function b(){return null!==s.m.value&&v.td.value?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.y,{actions:{Escape:function(){(0,v.Ud)(!1)}}}),(0,x.jsx)(a.Y,{className:"z-50 dark:bg-black/50 backdrop-blur"}),(0,x.jsx)(m,{}),(0,x.jsxs)("div",{className:"fixed left-1/2 top-1/2 lg:top-1/3 z-[52] -translate-y-1/2 -translate-x-1/2 w-[96%] md:w-2/3",children:[(0,x.jsx)("h1",{className:"text-center text-4xl md:text-7xl mb-7 md:mb-14",children:(0,l.a)("gameOver")}),(0,x.jsx)("h3",{className:"text-center text-2xl md:text-5xl mb-7 md:mb-14",children:(0,l.a)("winner")}),(0,x.jsxs)("div",{className:"text-center -mt-12 md:-mt-20",children:[(0,x.jsx)(u.q,{avatar:s.m.value.avatar,className:"!w-64 !h-64 z-10 inline-block"}),(0,x.jsx)("div",{className:"-mt-8 text-3xl mb-1 md:mb-3",children:s.m.value.name}),(0,x.jsxs)("div",{className:"text-xl mb-7 md:mb-14 before:content-['('] after:content-[')']",children:[s.m.value.total," ",(0,o.X)(s.m.value.total)]})]}),(0,x.jsxs)("div",{className:i()("text-center mb-7 md:mb-14 flex flex-col md:flex-row gap-3 md:gap-5 justify-center w-1/2 md:w-full mx-auto"),children:[(0,x.jsx)("button",{type:"button",onClick:f.B,children:(0,l.a)("button.goHome")}),(0,x.jsx)("button",{type:"button",children:(0,l.a)("button.restartGame")}),(0,x.jsx)("button",{type:"button",onClick:v.Pd,children:(0,l.a)("button.returnToGame")})]}),(0,x.jsxs)("div",{className:"text-center w-2/3 mx-auto",children:[(0,l.a)("maximumPossibleNumberOfPoints"),": ",(0,x.jsx)("b",{children:c.eL})]})]})]}):null}},4391:function(e,t,n){n.d(t,{q:function(){return k}});var a=n(885),r=n(2791),i=n(1694),s=n.n(i),l=n(7301),c=n(2822),o=n(1493),u=n(1413),d=n(160),x=n(1314),m=n(184);function f(e){var t=e.children;return(0,m.jsx)("ul",{className:"flex flex-grow flex-wrap gap-5 justify-center",children:t})}function v(e){var t=e.url,n=e.isClickable,a=e.taken,r=e.selected,i=e.onClick,l=e.children;return(0,m.jsxs)("li",{className:"text-center",children:[(0,m.jsx)("div",{className:s()("border-2 bg-no-repeat bg-center bg-[length:70%]","w-40 h-40","rounded-full mb-2",n&&"cursor-pointer",r?"border-[--text-color] bg-black/10":"border-[--line-color]",a&&!r?"":s()("hover:border-[--text-color]","hover:shadow-inner")),style:{backgroundImage:"url('".concat(t,"')")},onClick:i}),l]})}function b(e){var t=e.avatar,n=e.onClick;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(f,{children:Object.keys(x.zF).map((function(e){var a=x.zF[e],r=t===e,i=d.F.takenAvatars.includes(e),s=!r&&!i,l=d.F.data.find((function(t){return t.data.avatar===e}));return(0,m.jsx)(v,(0,u.Z)((0,u.Z)({url:"".concat(a,"#").concat(o.r.value).concat(i?"-disabled":""),isClickable:s,selected:r,taken:i},s?{onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){n(e)}))}:{}),{},{children:l&&l.data.name}),a)}))})})}function p(e){var t=e.avatar,n=e.onClick;return(0,m.jsxs)("div",{className:"grid grid-cols-2 px-5 gap-5 mt-10",children:[(0,m.jsx)("input",{id:"avatar-tab-1",type:"radio",name:"avatar-tab",className:"peer/tab1 hidden appearance-none"}),(0,m.jsx)("input",{id:"avatar-tab-2",name:"avatar-tab",type:"radio",className:"peer/tab2 hidden appearance-none",defaultChecked:!0}),(0,m.jsx)("div",{className:"col-span-2 hidden animate-fadeIn peer-checked/tab1:animate-fadeOut peer-checked/tab1:block"}),(0,m.jsx)("div",{className:"col-span-2 hidden animate-fadeIn peer-checked/tab2:animate-fadeOut peer-checked/tab2:block",children:(0,m.jsx)(b,{avatar:t,onClick:n})})]})}function h(e){var t=e.avatar,n=e.toggle,a=e.onClick;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.Y,{onClick:n}),(0,m.jsxs)("div",{className:s()("w-[calc(100%-24px)] md:w-[800px] z-50","rounded shadow","object-center","bg-[--background-color]","flex flex-col","pb-5"),children:[(0,m.jsx)("button",{onClick:n,className:"absolute right-0 top-0 w-8 h-8 bg-no-repeat bg-center",style:{backgroundImage:"url('".concat(l.Z,"#close").concat(o._.value?"-white":"","')")}}),(0,m.jsx)(p,{avatar:t,onClick:a})]})]})}var j=n(4164),g=n(3683);function k(e){var t=e.avatar,n=e.edit,i=e.className,c=e.disabled,u=(0,g.R)(!1),d=(0,a.Z)(u,2),f=d[0],v=d[1],b=(0,r.useCallback)((function(e){n&&n(e),v()}),[n,v]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:s()("border border-transparent",n?"hover:border-[--text-color] cursor-pointer":"-z-10","relative w-10 h-full","rounded-full","bg-no-repeat bg-[length:75%] bg-center",i),style:{backgroundImage:"url('".concat(x.zF[t],"#").concat(o.r.value).concat(c?"-disabled":"","')")},onClick:v,children:n&&(0,m.jsx)("div",{className:"w-4 h-4 absolute -bottom-1.5 -right-1.5 bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat(l.Z,"#").concat(o._.value?"down-white":"down","')")}})}),f&&n&&(0,j.createPortal)((0,m.jsx)(h,{avatar:t,toggle:v,onClick:b}),document.body)]})}},9672:function(e,t,n){function a(e,t){return-1!==e.indexOf(t)}n.d(t,{X:function(){return i}});var r=n(1382);function i(e){var t=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return a(n,e%10)}}(e);return a([11,12,13,14],e)?(0,r.a)("points1"):t(1)?(0,r.a)("points2"):t(2,3,4)?(0,r.a)("points3"):t(0,5,6,7,8,9)?(0,r.a)("points4"):void 0}},121:function(e,t,n){n.d(t,{V:function(){return i},h:function(){return r}});var a=(0,n(8098).fl)(null,null),r=a.signal,i=a.update},1326:function(e,t,n){n.d(t,{I:function(){return r}});var a=n(8098),r=function(){var e=[-1,-1,-1,-1,-1],t=(0,a.fl)("dices",e),n=t.signal,r=t.update,i=(0,a.fl)("dicesSelected",[]),s=i.signal,l=i.update;return{get value(){return n.value},update:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){r(e)})),reset:function(){r(e)},selected:{get value(){return s.value},update:function(e){l(e)},reset:function(){l([])}}}}()},7233:function(e,t,n){n.d(t,{Pd:function(){return s},Ud:function(){return i},td:function(){return r}});var a=(0,n(8098).fl)(null,!0),r=a.signal,i=a.update,s=a.toggle},4636:function(e,t,n){n.d(t,{m:function(){return o}});var a=n(1413),r=n(8098),i=n(7401),s=n(1326),l=n(8844),c=n(160),o=function(){var e=(0,r.fl)("history",{}),t=e.signal,n=e.update;return{get value(){return t.value},update:function(e){n(e)},get activePlayer(){return(0,i.Fl)((function(){return t.value[c.F.activeId]||[]})).value},player:function(e){return t.value[e]},updateActivePlayerResult:function(e){var t=e.combination,n=e.points,a=(0,l.e)(this.activePlayer);a.length||a.push({result:{},dicesSelected:[],tries:[]}),a[a.length-1].result[t]=n,this.updateActivePlayer(a)},updateActivePlayer:function(e){var n=(0,l.e)(t.value);n[c.F.activeId]=e,this.update((0,a.Z)({},n))},updateDices:function(){var e=(0,l.e)(this.activePlayer);if(1===c.F.activeShot)e.push({tries:[s.I.value],result:{},dicesSelected:[]});else{var t=e.length-1;e[t].tries.push(s.I.value),e[t].dicesSelected.push(s.I.selected.value)}this.updateActivePlayer(e)}}}()},65:function(e,t,n){n.d(t,{V:function(){return r},X:function(){return i}});var a=(0,n(8098).fl)(null,!1),r=a.signal,i=a.update},9279:function(e,t,n){n.d(t,{A:function(){return s},o:function(){return i}});var a=n(8098),r=n(8844),i=function(e){return e[e.points=0]="points",e[e.preview=1]="preview",e}({}),s=function(){var e=(0,a.fl)("matchedView",{}),t=e.signal,n=e.update;return{getByPlayerId:function(e){return t.value[e]},toggle:function(e){var a=(0,r.e)(t.value);a[e]=a[e]===i.points?i.preview:i.points,n(a)},reset:function(){n({})}}}()},818:function(e,t,n){n.d(t,{B:function(){return o}});var a=n(1326),r=n(5245),i=n(3966),s=n(4636),l=n(160),c=n(9279);function o(){a.I.reset(),a.I.selected.reset(),(0,r.Ns)(r.Tr.PRE_GAME),(0,i.T)(!1),s.m.update({}),l.F.points.reset(),l.F.columnView.reset(),l.F.reset(),c.A.reset()}},6457:function(e,t,n){n.d(t,{k:function(){return c}});var a=n(4412),r=n(160),i=n(1326),s=n(4636),l=n(8844);function c(e){var t=e.combination,n=e.points;s.m.updateActivePlayerResult({combination:t,points:n});var c=(0,l.e)(r.F.points.active);c[t]=n,c[a.G5.BONUS]=function(e){var t=Object.keys(e).reduce((function(t,n){return isNaN(parseInt(n,10))?t:t+e[n]}),0);return t>=a.ck?a.tB:-1*(a.ck-t)}(c),r.F.points.updateActive(c),r.F.nextTurn(),i.I.reset(),i.I.selected.reset(),window.scrollTo({top:0,behavior:"smooth"})}},6145:function(e,t,n){n.d(t,{m:function(){return o}});var a=n(2982),r=n(7401),i=n(3966),s=n(4412),l=n(160),c=(0,r.Fl)((function(){var e=l.F.data,t=e[e.length-1].id,n=l.F.points.get(t);return Object.keys(i.o.value?s.mK:s.wm).length===Object.keys(n).length})),o=(0,r.Fl)((function(){if(c.value){var e=Object.keys(l.F.points.totals),t=Math.max.apply(Math,(0,a.Z)(e.map((function(e){return l.F.points.totals[e]})))),n=e.findIndex((function(e){return l.F.points.totals[e]===t})),r=l.F.data[n].data;return{name:r.name,avatar:r.avatar,total:t}}return null}))}}]);
//# sourceMappingURL=366.0661b89c.chunk.js.map