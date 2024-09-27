"use strict";(self.webpackChunkyacht_ii=self.webpackChunkyacht_ii||[]).push([[971],{6052:function(e,a,n){n.d(a,{A:function(){return i}});var t=n(1413),r=n(1694),l=n.n(r),c=n(1493),s=n(7301),o=n(184);function i(e){var a=e.children,n=e.type,r=void 0===n?"button":n,i=e.className,u=e.style,d=e.icon,f=e.disabled,b=e.onClick,x=e.onMouseUp,v=e.onMouseDown;return(0,o.jsx)("button",(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({className:l()("bg-no-repeat bg-center",i),style:(0,t.Z)((0,t.Z)({},u),{},{backgroundImage:"url(".concat(s.Z,"#").concat(d).concat(c._.value?"-white":"",")")}),onClick:b},r?{type:r}:{}),x?{onMouseUp:x}:{}),v?{onMouseDown:v}:{}),f?{disabled:f}:{}),{},{children:a}))}},7121:function(e,a,n){n.d(a,{$:function(){return r}});var t=n(184);function r(){return(0,t.jsx)("footer",{className:"select-none flex items-center justify-center h-20",children:"bonez \xa9 2023"})}},674:function(e,a,n){n.d(a,{X:function(){return o}});var t=n(1382),r=n(1694),l=n.n(r),c=n(7658),s=n(184);function o(e){var a=e.className;return(0,s.jsx)(c.X,{className:l()("text-5xl md:text-7xl lg:text-9xl font-thin text-center !mt-0","sticky top-0 left-0 right-0",a),children:(0,t.a)("yacht")})}},4391:function(e,a,n){n.d(a,{q:function(){return k}});var t=n(885),r=n(2791),l=n(1694),c=n.n(l),s=n(7301),o=n(2822),i=n(1493),u=n(1413),d=n(160),f=n(1314),b=n(184);function x(e){var a=e.children;return(0,b.jsx)("ul",{className:"flex flex-grow flex-wrap gap-5 justify-center",children:a})}function v(e){var a=e.url,n=e.isClickable,t=e.taken,r=e.selected,l=e.onClick,s=e.children;return(0,b.jsxs)("li",{className:"text-center",children:[(0,b.jsx)("div",{className:c()("border-2 bg-no-repeat bg-center bg-[length:70%]","w-40 h-40","rounded-full mb-2",n&&"cursor-pointer",r?"border-[--text-color] bg-black/10":"border-[--line-color]",t&&!r?"":c()("hover:border-[--text-color]","hover:shadow-inner")),style:{backgroundImage:"url('".concat(a,"')")},onClick:l}),s]})}function h(e){var a=e.avatar,n=e.onClick;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(x,{children:Object.keys(f.zF).map((function(e){var t=f.zF[e],r=a===e,l=d.F.takenAvatars.includes(e),c=!r&&!l,s=d.F.data.find((function(a){return a.data.avatar===e}));return(0,b.jsx)(v,(0,u.Z)((0,u.Z)({url:"".concat(t,"#").concat(i.r.value).concat(l?"-disabled":""),isClickable:c,selected:r,taken:l},c?{onClick:function(e){function a(){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}((function(){n(e)}))}:{}),{},{children:s&&s.data.name}),t)}))})})}function m(e){var a=e.avatar,n=e.onClick;return(0,b.jsxs)("div",{className:"grid grid-cols-2 px-5 gap-5 mt-10",children:[(0,b.jsx)("input",{id:"avatar-tab-1",type:"radio",name:"avatar-tab",className:"peer/tab1 hidden appearance-none"}),(0,b.jsx)("input",{id:"avatar-tab-2",name:"avatar-tab",type:"radio",className:"peer/tab2 hidden appearance-none",defaultChecked:!0}),(0,b.jsx)("div",{className:"col-span-2 hidden animate-fadeIn peer-checked/tab1:animate-fadeOut peer-checked/tab1:block"}),(0,b.jsx)("div",{className:"col-span-2 hidden animate-fadeIn peer-checked/tab2:animate-fadeOut peer-checked/tab2:block",children:(0,b.jsx)(h,{avatar:a,onClick:n})})]})}function p(e){var a=e.avatar,n=e.toggle,t=e.onClick;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Y,{onClick:n}),(0,b.jsxs)("div",{className:c()("w-[calc(100%-24px)] md:w-[800px] z-10","rounded shadow","object-center","bg-[--background-color]","flex flex-col","pb-5"),children:[(0,b.jsx)("button",{onClick:n,className:"absolute right-0 top-0 w-8 h-8 bg-no-repeat bg-center",style:{backgroundImage:"url('".concat(s.Z,"#close").concat(i._.value?"-white":"","')")}}),(0,b.jsx)(m,{avatar:a,onClick:t})]})]})}var g=n(4164),j=n(3683);function k(e){var a=e.avatar,n=e.edit,l=e.className,o=e.disabled,u=(0,j.R)(!1),d=(0,t.Z)(u,2),x=d[0],v=d[1],h=(0,r.useCallback)((function(e){n&&n(e),v()}),[n,v]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:c()("border border-transparent",n?"hover:border-[--text-color] cursor-pointer":"-z-10","relative w-10 h-full","rounded-full","bg-no-repeat bg-[length:75%] bg-center",l),style:{backgroundImage:"url('".concat(f.zF[a],"#").concat(i.r.value).concat(o?"-disabled":"","')")},onClick:v,children:n&&(0,b.jsx)("div",{className:"w-4 h-4 absolute -bottom-1.5 -right-1.5 bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat(s.Z,"#").concat(i._.value?"down-white":"down","')")}})}),x&&n&&(0,g.createPortal)((0,b.jsx)(p,{avatar:a,toggle:v,onClick:h}),document.body)]})}},7658:function(e,a,n){n.d(a,{X:function(){return s}});var t=n(2791),r=n(1694),l=n.n(r),c=n(184),s=(0,t.forwardRef)((function(e,a){var n=e.children,t=e.className;return(0,c.jsx)("h3",{ref:a,className:l()("font-bold mt-2 mb-5",t),children:n})}))},7971:function(e,a,n){n.r(a),n.d(a,{default:function(){return U}});var t=n(1382),r=n(160),l=n(885),c=n(2791),s=n(1413),o=n(8990),i=n(184);function u(e){var a=e.children;return a?(0,i.jsx)("div",{className:"absolute left-3 -bottom-4 py-0 px-2 bg-red-600 text-white rounded animate-pulse text-xs",children:a}):null}var d=n(1694),f=n.n(d);function b(e){var a=e.value,n=e.onChange,t=e.placeholder,r=e.error,l=e.className,s=(0,c.useRef)(null);return(0,c.useEffect)((function(){var e,a;null===(e=s.current)||void 0===e||e.focus(),null===(a=s.current)||void 0===a||a.select()}),[s]),(0,i.jsxs)("div",{className:f()("flex-1 relative",l),children:[(0,i.jsx)("input",{className:"w-full",ref:s,type:"text",value:a,onChange:n,placeholder:t}),(0,i.jsx)(u,{children:r})]})}var x=n(6052),v=n(4391);function h(e){var a=e.onClick;return(0,i.jsx)(x.A,{icon:"refresh",className:"!bg-transparent !shadow-none !py-5 absolute top-1/2 -translate-y-1/2 right-0",onClick:a})}var m=n(7877),p=[].concat(["\u0410\u0433\u043d\u0435\u0441\u0441","\u0410\u0440\u0438\u0435\u043b\u044c","\u0410\u043b\u0438\u0448\u0430","\u0410\u0433\u043d\u0435\u0441\u0441","\u0410\u043c\u0430\u043d\u0434\u0430","\u0410\u043d\u043d\u0430\u0431\u0435\u0442","\u0410\u043b\u0438\u0441\u0438\u044f","\u0410\u043f\u043f\u043e\u043b\u0438\u043d","\u0411\u0435\u0430\u0442\u0440\u0438\u0441","\u0411\u044d\u0442\u043b\u0430","\u0411\u0435\u043b\u043e\u0440\u0438\u044f","\u0411\u044d\u0442\u043b\u0430","\u0411\u0430\u0440\u043c\u0438\u044f","\u0411\u0440\u0430\u0439\u0430\u043d\u0430","\u0412\u0438\u043a\u0442\u043e\u0440\u0438\u044f","\u0412\u0435\u0440\u043e\u043d\u0438\u044f","\u0412\u0438\u0441\u043a\u043e\u043d\u0441\u0438\u044f","\u0412\u0438\u043e\u043b\u0430","\u0412\u0438\u043e\u043b\u0435\u0442\u0442\u0430","\u0413\u0432\u0438\u0430\u0440\u0438\u044f","\u0413\u0435\u043d\u0440\u0438\u0435\u0442\u0442\u0430","\u0413\u0430\u0440\u043c\u043e\u043d\u0438\u044f","\u0413\u0435\u0441\u0442\u0438\u044f","\u0414\u0438\u0430\u043d\u0430","\u0414\u0436\u043e\u0430\u043d\u043d\u0430","\u0414\u0436\u0435\u0441\u0441\u0438\u043a\u0430","\u0414\u0436\u0443\u0434\u0438","\u0414\u0430\u0440\u0438\u043d\u0435\u0442\u0442\u0430","\u0414\u0436\u0435\u0439\u043d","\u042d\u043b\u0438\u0437\u0430\u0431\u0435\u0442","\u042d\u043d\u0440\u0438\u043a\u0430","\u042d\u0437\u0435\u0442\u0438\u044f","\u042d\u043b\u0430\u043d\u043e\u0440","\u042d\u0441\u043c\u0435","\u042d\u043b\u0438\u0441","\u042d\u043b\u0435\u043d\u0430","\u042d\u043d\u043d","\u042d\u043c\u043c\u0430","\u0415\u0432\u0430","\u0416\u043e\u0437\u0435\u0442\u0442\u0430","\u0416\u0438\u0437\u0435\u043b\u044c","\u0416\u0430\u043d\u043d\u0430","\u0416\u0435\u0430\u043d\u0430","\u0416\u0438\u0441\u043a\u0435\u0442\u0430","\u0416\u0430\u0441\u043c\u0438\u043d","\u0417\u0430\u0440\u0438\u043d\u0430","\u0417\u0430\u043d\u0432\u0435\u0437\u0438\u044f","\u0418\u0440\u0438\u0434\u0430","\u0418\u043d\u0438\u043c\u0438\u043a\u0430","\u0418\u043b\u043b\u0438\u0430\u0434\u0430","\u0418\u043d\u043d\u043e\u043a\u0435\u043d\u0442\u0438\u044f","\u0418\u0437\u0430\u0431\u0435\u043b\u044c","\u0418\u0437\u0430\u0431\u0435\u043b\u043b\u0430","\u041a\u0430\u0440\u0438\u043d\u0430","\u041a\u0430\u0440\u043c\u0435\u043d\u0441\u0438\u0442\u0430","\u041a\u0430\u0442\u0440\u0438\u043d","\u041a\u043b\u0430\u0440\u0430","\u041a\u043b\u0430\u0440\u0435\u043d\u0441","\u041a\u0430\u043b\u0438\u043f\u0441\u043e","\u041a\u0430\u0440\u043c\u0435\u043d","\u041a\u0435\u0439\u0442","\u041a\u044d\u0440\u0438","\u041a\u0435\u0442\u0440\u0438\u043d","\u041a\u0438\u0440\u0441\u0442\u0435\u043d","\u041b\u0438\u0430\u043d\u0430","\u041b\u0438\u0440\u0430","\u041b\u0443\u0438\u0437\u0430","\u041b\u0435\u0439\u043b\u0430","\u041b\u0430\u0441\u043a\u0435\u0442\u0438\u044f","\u041b\u0435\u043e\u043d\u0430","\u041b\u0438\u0432","\u041c\u043e\u0440\u0430\u043d","\u041c\u044d\u0439\u043b\u0438\u043d","\u041c\u044d\u0432\u0435\u043d","\u041c\u044d\u0440\u0438","\u041c\u043e\u0440\u0438\u044f","\u041c\u0438\u0440\u0430\u043d\u0434\u0430","\u041c\u044d\u0433\u0433\u0438","\u041c\u0438\u0441\u043e\u0440\u0430","\u041d\u044d\u043d\u0441\u0438","\u041d\u0430\u0442\u0430\u043b\u0438","\u041d\u0430\u0442\u0430\u043b\u0438\u044f","\u041d\u0430\u0439\u0442\u0438\u0440\u0438","\u041d\u0430\u0440\u0438\u043d\u044d","\u041d\u0430\u043e\u043c\u0438","\u041e\u043d\u0442\u0430\u0440\u0438\u044f","\u041e\u0444\u0435\u043b\u0438\u044f","\u041e\u043d\u0435\u0440\u0438\u044f","\u041e\u0432\u043b\u0438\u0446\u0438\u044f","\u041e\u043b\u0438\u043c\u043f\u0438\u0430\u0434\u0430","\u041f\u0435\u043d\u0435\u043b\u043e\u043f\u0430","\u041f\u0438\u043e\u043d\u0438\u044f","\u041f\u043e\u043b\u0438\u043d","\u041f\u0435\u0440\u0441\u0435\u044f","\u041f\u0430\u043e","\u0420\u0430\u043c\u043e\u043d\u0438\u044f","\u0420\u0430\u043c\u0438\u0440\u0438\u044f","\u0420\u044d\u0439\u0447\u0435\u043b","\u0420\u043e\u043a\u0441\u0430\u043d\u0430","\u0420\u043e\u0437\u0430","\u0420\u043e\u0443\u0437","\u0421\u0438\u043d\u0442\u0438\u044f","\u0421\u0435\u043b\u0435\u043d\u0430","\u0421\u0438\u043c\u043f\u043b\u0438\u0446\u0438\u044f","\u0421\u0435\u0440\u0435\u043d\u0438\u0442\u0438","\u0421\u0442\u0435\u043b\u043b\u0430","\u0421\u0430\u044e","\u0421\u043a\u0430\u0440\u043b\u0435\u0442\u0442","\u0422\u0438\u0440\u0438\u0441","\u0422\u0438\u0442\u0430\u043d\u0438\u044f","\u0422\u0438\u0440\u0430\u043d\u0438\u044f","\u0422\u0438\u0442\u0430\u043d\u0438\u044f","\u0422\u0430\u043c\u0438\u044f","\u0422\u0440\u0438\u043d\u043d\u0438","\u0423\u044d\u0434\u0438","\u0423\u0440\u0430\u043d\u0438\u044f","\u0423\u043b\u0430\u043d\u0438\u044f","\u0424\u0443\u043b\u043e\u043d\u0430","\u0424\u0438\u043b\u043e\u043c\u0435\u043d\u0430","\u0424\u0435\u0435\u0440\u0438\u044f","\u0424\u0430\u0438\u043d\u0430","\u0424\u043b\u043e\u0440\u0430","\u0424\u0430\u0443\u043d\u0430","\u0424\u0440\u0438\u0434\u0430","\u0425\u0440\u0438\u0441\u0442\u0438\u043d\u0430","\u0425\u0435\u043b\u0435\u043d","\u0425\u0430\u0430\u0440\u0430","\u0425\u0430\u043b\u043b\u0435","\u0425\u0435\u0439\u0434\u0438","\u0425\u0438\u043b\u0430\u0440\u0438","\u0425\u0438\u0437\u0435\u0440","\u0425\u043e\u043b\u043b\u0438","\u0427\u0436\u043e\u0443","\u0427\u0430\u043e","\u0428\u0430\u044d\u0440\u0430","\u0428\u0438\u0435\u0442\u0442\u0430","\u0428\u0430\u043b\u0438\u044f","\u0428\u0435\u0440\u043b\u0438\u0437","\u042e\u0434\u0436\u0438\u044f","\u042e\u0434\u0436\u0438\u043d\u0430","\u042e\u043e\u0440\u0438\u044f","\u042e\u0441\u0442\u0430\u043d\u0430","\u042f\u043d\u043d\u0430"],["\u0410\u044d\u043b\u043c\u0430\u0440","\u0410\u044d\u043b\u043d\u0435\u0441\u0441","\u0410\u0444\u043a\u0438\u043b\u043b\u0430\u0440","\u0410\u0440\u0440\u0430\u0432\u0435\u043b","\u0410\u0433\u043c\u0430\u0441\u0441","\u0410\u043d\u0434\u0435\u0440\u0441","\u0410\u043b\u0435\u043a\u0441","\u0410\u043d\u0442\u0435\u043e\u043d","\u0410\u0439\u0431\u0435\u0440","\u0411\u0435\u0441\u0442\u0430\u043b\u043b","\u0411\u0430\u044d\u043b\u043d\u0435\u0441\u0441","\u0411\u043e\u0431","\u0411\u0435\u043e\u043d","\u0411\u0443\u0440\u0431\u043e\u043d","\u0412\u0435\u0440\u0440\u043e\u043d\u043d","\u0412\u0435\u0440\u043b\u043b\u0438\u0430\u043d\u043d","\u0412\u0438\u043b\u044c\u0433\u0435\u043b\u044c\u043c","\u0412\u0435\u043d\u0438\u0430\u043c\u0438\u043d","\u0412\u0430\u043d\u0434\u043e\u043d","\u0412\u0438\u043a\u0442\u0443\u0430\u0440","\u0413\u0438\u043b\u0434\u0440\u0438\u043c\u043c","\u0413\u0430\u0440\u0440\u0438","\u0413\u044d\u0440\u0438","\u0413\u0430\u0440\u043e\u043b\u044c\u0434","\u0413\u043e\u0440\u0434\u043e\u043d","\u0413\u0430\u0440\u0440\u0438\u0441\u043e\u043d","\u0413\u0443\u0434\u0432\u0438\u043d","\u0414\u0436\u0435\u0440\u043b\u0430\u0441\u0441","\u0414\u0438\u043a","\u0414\u043e\u0430\u0440","\u0414\u0438\u043f\u043b\u0435\u043a\u0441\u0438\u0439","\u0414\u0436\u0435\u043a","\u0414\u0436\u043e\u0440\u0434\u0436","\u0414\u0436\u043e\u0443\u043b","\u0414\u0436\u0435\u043a\u043e\u0431","\u0414\u0436\u0435\u0439\u043a\u043e\u0431","\u042d\u0439\u043b\u0434\u0430\u0440","\u042d\u0432\u0430\u0440\u0438","\u042d\u0439\u0440\u0435\u0432\u0435\u043b\u043b","\u042d\u043b\u0431\u0435\u0440\u0442","\u042d\u043b\u044c\u0431\u0435\u0440\u0442","\u042d\u0434\u0432\u0430\u0440\u0434","\u042d\u043d\u0442\u043e\u043d\u0438","\u0416\u0435\u0430\u043d","\u0416\u0430\u043d","\u0418\u043b\u0430\u0434\u0430\u0440","\u0418\u0440\u0440\u0430\u0434\u0438\u043e\u043d","\u0418\u043b\u043b\u0438\u0440\u0438\u0439","\u0418\u043d\u0433\u0430\u0440\u0434","\u0418\u0432\u0438\u043d\u0438\u043a\u0443\u043c","\u041a\u0430\u0438\u043b\u043b\u0430\u043d","\u041a\u0430\u043d\u0442\u0438\u043b","\u041a\u0435\u043b\u043b\u0444\u0435\u0440","\u041a\u0440\u0438\u0430\u043d","\u041a\u0430\u0434\u043c\u0438\u0439","\u041a\u0430\u0434\u043c","\u041b\u044e\u0446\u0438\u0443\u0441","\u041b\u044e\u0446\u0438\u0439","\u041b\u0443\u0446\u0438\u0439","\u041b\u0435\u043a\u0441","\u041b\u044d\u0440\u0438","\u041b\u0430\u043a\u0441","\u041b\u0430\u0439\u0442","\u041c\u044d\u0434\u0438\u0441\u043e\u043d","\u041c\u0430\u043a\u0441","\u041c\u0430\u0439\u043a","\u041c\u0438\u043a","\u041c\u0430\u0440\u0442\u0438\u043d","\u041c\u044d\u0442\u044c\u044e","\u041d\u0430\u0438\u0441\u0435\u043b\u043b","\u041d\u0430\u0442\u0430\u043d\u0438\u044d\u043b\u044c","\u041d\u043e\u043a\u0441","\u041d\u0443\u0440","\u041d\u0438\u0430","\u041e\u043b\u0438\u0432\u0435\u0440","\u041f\u0430\u0440\u043c\u0438\u0441","\u041f\u0435\u0440","\u041f\u043e\u043b\u044c","\u041f\u0430\u0443\u043b\u044c","\u041f\u044c\u0435\u0440","\u041f\u0438\u0442\u0435\u0440","\u0420\u0438\u0434\u0435\u0441\u0430\u0440","\u0420\u043e\u0434\u0438\u0441\u043b\u0430\u0432","\u0420\u0430\u043c\u0435\u0440\u0438\u0439","\u0420\u043e\u043c\u0435\u043e","\u0420\u043e\u043d\u0430\u043b\u044c\u0434","\u0420\u0438\u0447\u0430\u0440\u0434","\u0420\u043e\u0434\u0436\u0435\u0440","\u0421\u0430\u044d\u043b\u043b\u0430\u0442","\u0421\u0435\u0445\u0435\u043b\u0438\u0441","\u0421\u0435\u043b\u0443\u0430\u043d\u043d","\u0421\u043e\u043b\u044c\u043c\u0438\u0440","\u0421\u0438\u044d\u043b\u044c","\u0421\u0442\u0438\u0432","\u0421\u0435\u0434\u0440\u0438\u043a","\u0421\u0438\u0434\u043e","\u0422\u0438\u0442\u0430\u043d\u0438\u0439","\u0422\u043e\u0431\u0435\u0440\u043e\u043d","\u0422\u0438\u0431\u0435\u0440\u0438\u0439","\u0422\u043e\u0440","\u0422\u0435\u0439\u043b\u043e\u0440","\u0423\u043b\u0430\u043d","\u0423\u0440\u0433","\u0423\u0438\u043b\u043b","\u0424\u0435\u0440\u043c\u043c\u0430\u0440","\u0424\u0430\u0430\u0432\u0435\u043b","\u0424\u0435\u043e\u0444\u0438\u043b","\u0424\u0438\u0434\u0435\u043b\u0438\u0439","\u0424\u0435\u0431","\u0425\u0430\u0440\u0440\u0438\u043d","\u0428\u043e\u043d","\u042f\u043b\u043c\u0438\u0440","\u042f\u043d\u0432\u0438","\u042f\u043a\u043e\u0431","\u042f\u043a\u0438\u043d"]),g=[].concat(["\u0410\u0441\u044f","\u0411\u043e\u043d\u044f","\u0412\u0438\u0442\u0430","\u0413\u043e\u043b\u0434\u0438","\u0414\u0436\u0435\u0441","\u0415\u0432\u0430","\u0416\u0443\u0436\u0430","\u0417\u0430\u0440\u0430","\u0418\u0440\u043c\u0430","\u041a\u0438\u0440\u0430","\u041a\u0438\u043a\u0438","\u041b\u043e\u0440\u0430","\u041c\u0430\u0440\u0442\u0430","\u041d\u043e\u0440\u0430","\u0420\u0430\u0434\u0430","\u0421\u043e\u043d\u044f","\u0422\u043e\u0441\u044f","\u0424\u0435\u043d\u044f","\u0425\u0430\u0441\u044f","\u0427\u0430\u0440\u0430"],["\u041c\u0430\u043a\u0441","\u0427\u0430\u0440\u043b\u0438","\u0410\u043b\u044c\u0444","\u041b\u0435\u043e","\u041d\u0438\u043a","\u041e\u0441\u043a\u0430\u0440","\u0420\u0435\u043a\u0441","\u0421\u0451\u043c\u0430","\u0422\u043e\u043c","\u0427\u0430\u043a","\u0428\u0440\u0435\u043a","\u042f\u0440\u0438\u043a","\u0410\u0440\u0447\u0438","\u0411\u0443\u0447","\u0412\u0435\u043d\u044f","\u0413\u0440\u0435\u0439","\u0414\u0436\u0435\u043a","\u0416\u043e\u0440\u0438\u043a","\u0417\u0430\u043a","\u041a\u0430\u0441\u043f\u0435\u0440"]);function j(e){var a,n=r.F.data.map((function(e){return e.data.name})),t=e?g:p;do{a=(0,m.X)(0,t.length-1)}while(n.includes(t[a]));return t[a]}var k=n(1314);function C(e){var a=e.id,n=e.callback,u=r.F.getById(a),d=u.name,f=u.avatar,m=(0,c.useState)(f),p=(0,l.Z)(m,2),g=p[0],C=p[1],N=(0,c.useState)(d),y=(0,l.Z)(N,2),w=y[0],F=y[1],Z=(0,c.useState)(null),A=(0,l.Z)(Z,2),I=A[0],S=A[1],_=(0,c.useCallback)((function(e){F(e.currentTarget.value),S(null)}),[F,S]),E=(0,c.useCallback)((function(e){e.preventDefault(),""!==w.trim()?(r.F.update(a,{name:w,avatar:g}),n(!0)):S((0,t.a)("required"))}),[a,w,n,S,g]),O=(0,c.useCallback)((function(){n(!1)}),[n]),q=(0,c.useCallback)((function(e){C(e),r.F.update((function(n){return n[a]=(0,s.Z)((0,s.Z)({},n[a]),{},{avatar:e}),n})),n(!0)}),[C,a,n]),z=(0,c.useCallback)((function(){F(j(-1!==k.tw.indexOf(g)))}),[F,g]),R=w===d&&g===f;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.y,{actions:{Escape:O}}),(0,i.jsx)(v.q,{edit:q,avatar:g}),(0,i.jsxs)("form",{className:"flex-1 flex gap-3",onSubmit:E,children:[(0,i.jsxs)("div",{className:"w-full relative",children:[(0,i.jsx)(b,{placeholder:(0,t.a)("enterName"),value:w,onChange:_,error:I}),(0,i.jsx)(h,{onClick:z})]}),(0,i.jsx)(x.A,{type:"submit",icon:"save",disabled:R}),(0,i.jsx)(x.A,{icon:"close",onClick:O})]})]})}var N=n(8098),y=(0,N.fl)(null,!1),w=y.signal,F=y.update;function Z(e){var a=e.id,n=e.callback,l=e.flash,s=e.flashEnd,o=r.F.getById(a),u=o.name,d=o.avatar,f=(0,c.useCallback)((function(){r.F.remove(a)}),[a]),b=w.value;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.q,{avatar:d}),(0,i.jsxs)("div",{className:"flex-1 border-l border-r border-transparent relative flex items-center pl-2",children:[u,l&&(0,i.jsx)("div",{className:"text-green-500 animate-flash absolute right-0 top-1/2 -translate-y-1/2",onAnimationEnd:s,children:(0,t.a)("saved")})]}),(0,i.jsx)(x.A,{className:"w-10",icon:"edit",onClick:n,disabled:b}),(0,i.jsx)(x.A,{className:"w-10",icon:"delete",onClick:f,disabled:b})]})}function A(e){var a=e.children;return(0,i.jsx)("li",{className:"relative border-gray-100 dark:border-gray-700 box-border border-b last:border-b-0 flex gap-3 h-14 py-2 px-3",children:a})}var I=n(3683);function S(e){var a=e.id,n=(0,I.R)(),t=(0,l.Z)(n,2),r=t[0],s=t[1],o=(0,c.useState)(!1),u=(0,l.Z)(o,2),d=u[0],f=u[1],b=(0,c.useCallback)((function(){s(),F(!0)}),[s]);return(0,i.jsx)(A,{children:r?(0,i.jsx)(C,{id:a,callback:function(e){e&&f(!0),s(),F(!1)}}):(0,i.jsx)(Z,{id:a,callback:b,flash:d,flashEnd:function(){f(!1)}})})}var _=(0,N.fl)(null,!1),E=_.signal,O=_.update;function q(e){var a=e.initial,n=(0,c.useRef)(null),s=(0,c.useState)(r.F.availableAvatar),u=(0,l.Z)(s,2),d=u[0],f=u[1],m=(0,c.useState)(j(-1!==k.tw.indexOf(d))),p=(0,l.Z)(m,2),g=p[0],C=p[1],N=(0,c.useState)(null),y=(0,l.Z)(N,2),w=y[0],Z=y[1],I=(0,c.useCallback)((function(e){C(e.currentTarget.value),Z(null)}),[C,Z]),S=(0,c.useCallback)((function(e){e.preventDefault();var a=g.trim();""!==a?(r.F.add({name:a,avatar:d}),O(!1),F(!1)):Z((0,t.a)("required"))}),[Z,g,d]),_=(0,c.useCallback)((function(){O(!1),F(!1)}),[]),E=(0,c.useCallback)((function(e){f(e),C(j(-1!==k.tw.indexOf(e)))}),[]),q=(0,c.useCallback)((function(){C(j(-1!==k.tw.indexOf(d)))}),[C,d]);return(0,c.useEffect)((function(){var e;null===(e=n.current)||void 0===e||e.focus()}),[n]),(0,i.jsxs)(A,{children:[(0,i.jsx)(o.y,{actions:{Escape:_}}),(0,i.jsx)(v.q,{edit:E,avatar:d}),(0,i.jsxs)("form",{className:"flex-1 flex gap-3",onSubmit:S,children:[(0,i.jsxs)("div",{className:"w-full relative",children:[(0,i.jsx)(b,{placeholder:(0,t.a)("enterName"),value:g,onChange:I,error:w,className:"[&>input]:pr-9"}),(0,i.jsx)(h,{onClick:q})]}),(0,i.jsx)(x.A,{type:"submit",icon:"add"}),(0,i.jsx)(x.A,{type:"button",icon:"close",disabled:a,onClick:_})]})]})}function z(e){var a=e.children;return(0,i.jsx)("ul",{className:"mb-5 md:w-full md:rounded shadow lg:border-l lg:border-r border-b border-t border-gray-200 dark:border-gray-700",children:a})}function R(){return r.F.data.length<=0?(0,i.jsx)(z,{children:(0,i.jsx)(q,{initial:!0})}):(0,i.jsxs)(z,{children:[r.F.data.map((function(e){var a=e.id;return(0,i.jsx)(S,{id:a},a)})),E.value&&(0,i.jsx)(q,{})]})}var T=n(6394);function D(){return(0,i.jsx)(x.A,{className:"!py-5 !absolute right-3 md:right-0 top-1/2 -translate-y-1/2",icon:"add",type:"button",onClick:(0,c.useCallback)((function(){O(!0),F(!0)}),[]),disabled:0===r.F.count||E.value||r.F.count>=T.k||w.value})}var M=n(5245),X=n(3966),P=(0,n(7401).Fl)((function(){return r.F.data.length<=0||w.value}));function H(){return(0,i.jsx)(x.A,{icon:"casino",disabled:P.value,onClick:function(){r.F.nextTurn(),(0,M.Ns)(X.o.value?M.Tr.CHILD_PLAY:M.Tr.IN_PLAY)},className:f()("my-10 text-3xl !py-5 !pl-24 !pr-10 inline-block mx-auto","!bg-[24px_center] bg-[length:50px_50px]","[&:not([disabled])]:animate-pulse hover:animate-none"),children:(0,t.a)("button.startGame")})}function L(){return(0,i.jsx)(x.A,{icon:"back",className:"!py-5 absolute left-3 md:left-0 top-1/2 -translate-y-1/2 !bg-transparent !shadow-none",onClick:(0,c.useCallback)((function(){(0,M.Ns)(M.Tr.PRE_GAME),r.F.reset()}),[])})}var Y=n(674),B=n(7121),G=n(6132);function U(){return(0,G.ZH)(),(0,i.jsxs)("div",{className:"w-full md:w-2/3 lg:w-1/2 mx-auto text-center",children:[(0,i.jsx)(Y.X,{}),(0,i.jsxs)("h3",{className:"text-center mb-5 font-bold py-7 relative",children:[(0,i.jsx)(L,{}),(0,t.a)("playersHeader"),(0,i.jsx)(D,{})]}),(0,i.jsx)(R,{}),(0,i.jsx)(H,{}),(0,i.jsx)(B.$,{})]})}}}]);
//# sourceMappingURL=971.d0eceb74.chunk.js.map