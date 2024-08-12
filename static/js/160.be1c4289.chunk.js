"use strict";(self.webpackChunkyacht_ii=self.webpackChunkyacht_ii||[]).push([[160],{7121:function(t,e,o){o.d(e,{$:function(){return i}});var n=o(184);function i(){return(0,n.jsx)("footer",{className:"select-none flex items-center justify-center h-20",children:"bonez \xa9 2023"})}},674:function(t,e,o){o.d(e,{X:function(){return c}});var n=o(1382),i=o(1694),a=o.n(i),r=o(7658),s=o(184);function c(t){var e=t.className;return(0,s.jsx)(r.X,{className:a()("text-5xl md:text-7xl lg:text-9xl font-thin text-center !mt-0","sticky top-0 left-0 right-0",e),children:(0,n.a)("yacht")})}},7658:function(t,e,o){o.d(e,{X:function(){return s}});var n=o(2791),i=o(1694),a=o.n(i),r=o(184),s=(0,n.forwardRef)((function(t,e){var o=t.children,n=t.className;return(0,r.jsx)("h3",{ref:e,className:a()("font-bold mt-2 mb-5",n),children:o})}))},1160:function(t,e,o){o.r(e),o.d(e,{default:function(){return w}});var n=o(1382),i=o(885),a=o(184);function r(t){var e=t.rows;return(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:e.map((function(t){var e=(0,n.a)("combination.".concat(t,".title")).split("###"),o=(0,i.Z)(e,2),r=o[0],s=o[1];return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,n.a)("combination.".concat(t))}),(0,a.jsxs)("td",{children:[r,(0,a.jsx)("div",{className:"text-sm",children:s})]})]},t)}))})})}var s=o(7658),c=o(1694),l=o.n(c);function u(t){var e=t.children,o=t.className,n=t.underline;return(0,a.jsx)("p",{className:l()("mb-3 font-thin",o,n&&"underline underline-offset-4 decoration-1"),children:e})}function m(){return(0,a.jsxs)("div",{className:"mx-auto px-5 mb-14",children:[(0,a.jsx)(s.X,{children:(0,n.a)("help.gameplay.header")}),(0,a.jsx)(u,{children:(0,n.a)("help.gameplay.text")}),(0,a.jsx)(s.X,{children:(0,n.a)("help.scoring.header")}),(0,a.jsx)(u,{children:(0,n.a)("help.scoring.text")}),(0,a.jsx)(u,{underline:!0,children:(0,n.a)("help.topSection")}),(0,a.jsx)(r,{rows:[1,2,3,4,5,6]}),(0,a.jsx)(u,{className:"md:w-2/3 md:mt-5 md:mb-10",children:(0,n.a)("help.topSection.tip")}),(0,a.jsx)(u,{underline:!0,children:(0,n.a)("help.bottomSection")}),(0,a.jsx)(r,{rows:["threeOfAKind","equal_4","smallStraight","bigStraight","fullHouse","theYacht","chance"]})]})}var h=o(1493),b=o(2791);var d=o.p+"static/media/logo.5c63fce4ab3053a5bc8991a5f3af1736.svg",f=o(674),p=o(7121),g=o(9077),y=o(5245);function v(){return(0,a.jsx)(f.X,{className:l()("bg-[--background-color] z-10","transition-shadow","logo"===g.o.value?"shadow-lg":"shadow-none")})}function x(t){var e=t.children;return(0,a.jsx)("div",{className:l()("sticky top-12 md:top-32 bg-[--background-color] py-5 my-5 lg:my-10","transition-shadow","button"===g.o.value&&"shadow-lg"),children:e})}function w(){var t=(0,b.useCallback)((function(){(0,y.Ns)(y.Tr.PLAYERS_SELECTION)}),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{}),(0,a.jsx)("div",{className:l()("w-56 md:w-72 lg:w-96 h-56 md:h-72 lg:h-96","mx-auto my-5 lg:my-10","bg-no-repeat bg-contain"),style:{backgroundImage:"url('".concat(d,"#").concat(h.r,"')")}}),(0,a.jsx)(u,{className:"text-2xl px-5 mx-auto text-center w-full md:w-2/3",children:(0,n.a)("help.intro")}),(0,a.jsx)(x,{children:(0,a.jsxs)("button",{type:"button",className:"text-xl lg:text-3xl lg:!py-5 !pr-10 !pl-16 lg:!pl-24 relative mx-auto block group",onClick:t,children:[(0,a.jsx)("div",{className:"w-8 h-8 lg:w-12 lg:h-12 bg-no-repeat bg-contain absolute left-3 lg:left-7 top-2 lg:top-3 group-hover:animate-spin",style:{backgroundImage:"url('".concat(d,"#").concat(h.r,"')")}}),(0,n.a)("button.startNewGame")]})}),(0,a.jsx)(m,{}),(0,a.jsx)(p.$,{})]})}},1382:function(t,e,o){o.d(e,{a:function(){return a}});var n=JSON.parse(localStorage.getItem("common-settings")||JSON.stringify({language:"rus"})).language||"rus",i={rus:{yacht:"\u042f\u0445\u0442\u0430",darkTheme:"\u0422\u0435\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430",language:"\u042f\u0437\u044b\u043a",playersHeader:"\u0418\u0433\u0440\u043e\u043a\u0438",chooseDog:"\u0412\u044b\u0431\u0438\u0440\u0438\u0442\u0435 \u0441\u043e\u0431\u0430\u0447\u043a\u0443",compactTable:"\u041a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430",activePlayerFirst:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0438\u0433\u0440\u043e\u043a \u043f\u0435\u0440\u0432\u044b\u0439",diceSize:"\u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u0441\u0442\u0435\u0439",playerNo:"\u0418\u0433\u0440\u043e\u043a \u2116",currentGameWillBeLost:"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0438\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0442\u0435\u0440\u044f\u043d\u0430.",combinations:"\u041a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438",total:"\u0418\u0442\u043e\u0433",gameOver:"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430",maximumPossibleNumberOfPoints:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0447\u043a\u043e\u0432",ofMax:"\u0438\u0437 \u043c\u0430\u043a\u0441.",more:"\u0435\u0449\u0435",auto:"\u0410\u0432\u0442\u043e (\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b)",enterName:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",saved:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e",required:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",points1:"\u043e\u0447\u043a\u043e\u0432",points2:"\u043e\u0447\u043a\u043e",points3:"\u043e\u0447\u043a\u0430",points4:"\u043e\u0447\u043a\u043e\u0432",winner:"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044f",preview:"","button.returnToGame":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0438\u0433\u0440\u0435","button.startGame":"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443","button.restartGame":"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e","button.rotate":"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c","button.startNewGame":"\u043d\u0430\u0447\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0438\u0433\u0440\u0443","button.cancel":"\u041e\u0442\u043c\u0435\u043d\u0430","button.add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","button.reset":"\u0421\u0431\u0440\u043e\u0441","button.reset2":"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c","button.dropDices":"\u0411\u0440\u043e\u0441\u0438\u0442\u044c \u043a\u043e\u0441\u0442\u0438","button.addPlayer":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430","button.writeDownYourPoints":"\u0417\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u043e\u0447\u043a\u0438","button.goHome":"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e","button.strikeOut":"\u0412\u044b\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044c","button.remove":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c","button.showEndOfGame":"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u0435\u0439","tab.combinations":"\u041a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438","tab.settings":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","tab.rules":"\u041f\u0440\u0430\u0432\u0438\u043b\u0430","tab.history":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f","history.header":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f","history.user.label":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0438\u0433\u0440\u043e\u043a\u0430","history.noHistoryYet":"\u0418\u0441\u0442\u043e\u0440\u0438\u0438 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442","history.activeMove":"\u0412\u0430\u0448 \u0445\u043e\u0434, \u0435\u0449\u0435 #triesLeft# #tries#...","history.activeMoveTries1":"\u043f\u043e\u043f\u044b\u0442\u043a\u0430","history.activeMoveTries2":"\u043f\u043e\u043f\u044b\u0442\u043a\u0438","history.checkbox.followActivePlayer":"","combination.1":"\u0415\u0434\u0438\u043d\u0438\u0446\u044b","combination.1.title":"\u0421\u0443\u043c\u043c\u0430 \u0432\u0441\u0435\u0445 \u043a\u043e\u0441\u0442\u0435\u0439 (\u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u043a\u043e\u0441\u0442\u0438), \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u043f\u0430\u043b\u0438 \u0435\u0434\u0438\u043d\u0438\u0446\u044b. ### \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b 3, 4 \u0438\u043b\u0438 5 \u043e\u0447\u043a\u043e\u0432.","combination.2":"\u0414\u0432\u043e\u0439\u043a\u0438","combination.2.title":"\u0421\u0443\u043c\u043c\u0430 \u0432\u0441\u0435\u0445 \u043a\u043e\u0441\u0442\u0435\u0439 (\u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u043a\u043e\u0441\u0442\u0438), \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u043f\u0430\u043b\u0438 \u0434\u0432\u043e\u0439\u043a\u0438. ### \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b 6, 8 \u0438\u043b\u0438 10 \u043e\u0447\u043a\u043e\u0432.","combination.3":"\u0422\u0440\u043e\u0439\u043a\u0438","combination.3.title":"\u0421\u0443\u043c\u043c\u0430 \u0432\u0441\u0435\u0445 \u043a\u043e\u0441\u0442\u0435\u0439 (\u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u043a\u043e\u0441\u0442\u0438), \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u043f\u0430\u043b\u0438 \u0442\u0440\u043e\u0439\u043a\u0438. ### \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b 9, 12 \u0438\u043b\u0438 15 \u043e\u0447\u043a\u043e\u0432.","combination.4":"\u0427\u0435\u0442\u0432\u0435\u0440\u043a\u0438","combination.4.title":"\u0421\u0443\u043c\u043c\u0430 \u0432\u0441\u0435\u0445 \u043a\u043e\u0441\u0442\u0435\u0439 (\u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u043a\u043e\u0441\u0442\u0438), \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u043f\u0430\u043b\u0438 \u0447\u0435\u0442\u0432\u0435\u0440\u043a\u0438. ### \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b 12, 16 \u0438\u043b\u0438 20 \u043e\u0447\u043a\u043e\u0432.","combination.5":"\u041f\u044f\u0442\u0435\u0440\u043a\u0438","combination.5.title":"\u0421\u0443\u043c\u043c\u0430 \u0432\u0441\u0435\u0445 \u043a\u043e\u0441\u0442\u0435\u0439 (\u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u043a\u043e\u0441\u0442\u0438), \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u043f\u0430\u043b\u0438 \u043f\u044f\u0442\u0435\u0440\u043a\u0438. ### \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b 15, 20 \u0438\u043b\u0438 25 \u043e\u0447\u043a\u043e\u0432.","combination.6":"\u0428\u0435\u0441\u0442\u0451\u0440\u043a\u0438","combination.6.title":"\u0421\u0443\u043c\u043c\u0430 \u0432\u0441\u0435\u0445 \u043a\u043e\u0441\u0442\u0435\u0439 (\u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u043a\u043e\u0441\u0442\u0438), \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u043f\u0430\u043b\u0438 \u0448\u0435\u0441\u0442\u0435\u0440\u043a\u0438. ### \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b 18, 24 \u0438\u043b\u0438 30 \u043e\u0447\u043a\u043e\u0432.","combination.bonus":"\u0411\u043e\u043d\u0443\u0441","combination.bonus.title":"\u0415\u0441\u043b\u0438 \u0438\u0433\u0440\u043e\u043a \u043d\u0430\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u043e \u043a\u0440\u0430\u0439\u043d\u0435\u0439 \u043c\u0435\u0440\u0435 63 \u043e\u0447\u043a\u043e\u0432 (\u043f\u043e \u0442\u0440\u0438 \u043a\u043e\u0441\u0442\u0438 \u0441 \u043a\u0430\u0436\u0434\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c) \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0441\u0435\u043a\u0446\u0438\u0438, \u043e\u043d \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0431\u043e\u043d\u0443\u0441 \u0432 \u0432\u0438\u0434\u0435 35 \u043e\u0447\u043a\u043e\u0432","combination.threeOfAKind":"\u0421\u044d\u0442","combination.threeOfAKind.title":"\u0422\u0440\u0438 \u043a\u043e\u0441\u0442\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u043f\u0430\u043b\u0438 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u0412 \u043e\u0447\u043a\u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0443\u043c\u043c\u0430 \u044d\u0442\u0438\u0445 \u0442\u0440\u0451\u0445 \u043a\u043e\u0441\u0442\u0435\u0439. ### \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e 18 \u043e\u0447\u043a\u043e\u0432.","combination.equal_4":"\u041a\u0430\u0440\u044d","combination.equal_4.title":"\u0427\u0435\u0442\u044b\u0440\u0435 \u043a\u043e\u0441\u0442\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u043f\u0430\u043b\u0438 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u0412 \u043e\u0447\u043a\u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0443\u043c\u043c\u0430 \u044d\u0442\u0438\u0445 \u0447\u0435\u0442\u044b\u0440\u0451\u0445 \u043a\u043e\u0441\u0442\u0435\u0439. ### \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e 24 \u043e\u0447\u043a\u043e\u0432.","combination.smallStraight":"\u041c\u043b\u0430\u0434\u0448\u0438\u0439 \u0441\u0442\u0440\u0438\u0442","combination.smallStraight.title":"\u041b\u044e\u0431\u044b\u0435 \u0447\u0435\u0442\u044b\u0440\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u0430 (1, 2, 3, 4 \u0438\u043b\u0438 2, 3, 4, 5 \u0438\u043b\u0438 3, 4, 5, 6). ### \u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f 25 \u043e\u0447\u043a\u043e\u0432.","combination.bigStraight":"\u0421\u0442\u0430\u0440\u0448\u0438\u0439 \u0441\u0442\u0440\u0438\u0442","combination.bigStraight.title":"\u041f\u044f\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b (1, 2, 3, 4, 5 \u0438\u043b\u0438 2, 3, 4, 5, 6). ### \u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f 30 \u043e\u0447\u043a\u043e\u0432.","combination.twoPair":"\u0414\u0432\u0435 \u043f\u0430\u0440\u044b","combination.twoPair.title":"\u0414\u0432\u0435 \u043f\u0430\u0440\u044b \u043b\u044e\u0431\u044b\u0445 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0445 \u043a\u043e\u0441\u0442\u0435\u0439. ### \u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f 25 \u043e\u0447\u043a\u043e\u0432","combination.fullHouse":"\u0424\u0443\u043b \u0425\u0430\u0443\u0441","combination.fullHouse.title":"\u041f\u0430\u0440\u0430 \u0438 \u0442\u0440\u043e\u0439\u043a\u0430 \u043b\u044e\u0431\u044b\u0445 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0445 \u043a\u043e\u0441\u0442\u0435\u0439. ### \u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f 30 \u043e\u0447\u043a\u043e\u0432.","combination.theYacht":"\u042f\u0445\u0442\u0430","combination.theYacht.title":"\u041f\u044f\u0442\u044c \u043a\u043e\u0441\u0442\u0435\u0439, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u043f\u0430\u043b\u0438 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. ### \u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f 50 \u043e\u0447\u043a\u043e\u0432.","combination.chance":"\u0428\u0430\u043d\u0441","combination.chance.title":"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0443\u043c\u043c\u0430 \u0432\u0441\u0435\u0445 \u0432\u044b\u043f\u0430\u0432\u0448\u0438\u0445 \u043a\u043e\u0441\u0442\u0435\u0439. ### \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e 30 \u043e\u0447\u043a\u043e\u0432.","help.intro":"\u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0438\u0433\u0440\u0430 \u0432 \u043a\u043e\u0441\u0442\u0438, \u043d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u044e\u0449\u0430\u044f \u041f\u043e\u043a\u0435\u0440 \u043d\u0430 \u043a\u043e\u0441\u0442\u044f\u0445, \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a \u0438\u0433\u0440\u044b Yahtzee.","help.gameplay.header":"\u0425\u043e\u0434 \u0438\u0433\u0440\u044b","help.gameplay.text":"\u0412 \u044f\u0445\u0442\u0443 \u043c\u043e\u0436\u043d\u043e \u0438\u0433\u0440\u0430\u0442\u044c \u0432 \u043e\u0434\u0438\u043d\u043e\u0447\u043a\u0443 \u0438\u043b\u0438 \u0441 \u043b\u044e\u0431\u044b\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u043e\u0432. \u0418\u0433\u0440\u043e\u043a\u0438 \u0445\u043e\u0434\u044f\u0442 \u043f\u043e \u043e\u0447\u0435\u0440\u0435\u0434\u0438, \u0431\u0440\u043e\u0441\u0430\u044f \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u044f\u0442\u044c \u043a\u043e\u0441\u0442\u0435\u0439. \u041f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0431\u0440\u043e\u0441\u043a\u0430 \u0438\u0433\u0440\u043e\u043a \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442, \u043a\u0430\u043a\u0438\u0435 \u043a\u043e\u0441\u0442\u0438 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c, \u0430 \u043a\u0430\u043a\u0438\u0435 \u043f\u0435\u0440\u0435\u0431\u0440\u043e\u0441\u0438\u0442\u044c. \u0418\u0433\u0440\u043e\u043a \u043c\u043e\u0436\u0435\u0442 \u043f\u0435\u0440\u0435\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e (\u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0432\u0441\u0435 \u043f\u044f\u0442\u044c) \u043a\u043e\u0441\u0442\u0435\u0439 \u0434\u0432\u0430 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0445\u043e\u0434. \u0412 \u043a\u0430\u0436\u0434\u043e\u043c \u0445\u043e\u0434\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043e\u0447\u043a\u0438 \u0437\u0430 \u043e\u0434\u043d\u0443 \u0438\u0437 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0439, \u0435\u0441\u043b\u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u043d\u0435 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c, \u0442\u043e \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c 0 \u0437\u0430 \u043b\u044e\u0431\u0443\u044e. \u041a\u0430\u0436\u0434\u0443\u044e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437. \u0418\u0433\u0440\u043e\u043a \u0441 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u043e\u0447\u043a\u043e\u0432 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0438\u0433\u0440\u044b \u043f\u043e\u0431\u0435\u0436\u0434\u0430\u0435\u0442.","help.scoring.header":"\u041f\u043e\u0434\u0441\u0447\u0451\u0442 \u043e\u0447\u043a\u043e\u0432","help.scoring.text":"\u041e\u0447\u043a\u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0437\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438:","help.topSection":"\u0412\u0435\u0440\u0445\u043d\u044f\u044f \u0441\u0435\u043a\u0446\u0438\u044f:","help.topSection.tip":"\u0415\u0441\u043b\u0438 \u0438\u0433\u0440\u043e\u043a \u043d\u0430\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u043e \u043a\u0440\u0430\u0439\u043d\u0435\u0439 \u043c\u0435\u0440\u0435 63 \u043e\u0447\u043a\u043e\u0432 (\u043f\u043e \u0442\u0440\u0438 \u043a\u043e\u0441\u0442\u0438 \u0441 \u043a\u0430\u0436\u0434\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c) \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0441\u0435\u043a\u0446\u0438\u0438, \u043e\u043d \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0431\u043e\u043d\u0443\u0441 \u0432 \u0432\u0438\u0434\u0435 35 \u043e\u0447\u043a\u043e\u0432.","help.bottomSection":"\u041d\u0438\u0436\u043d\u044f\u044f \u0441\u0435\u043a\u0446\u0438\u044f:"},eng:{yacht:"Yacht",darkTheme:"Dark theme",language:"Language",playersHeader:"Players",chooseDog:"Choose your dog",compactTable:"Compact table",activePlayerFirst:"Active player first",diceSize:"Dice size",playerNo:"Player #",currentGameWillBeLost:"Current game will be lost.",combinations:"Combinations",total:"Total",gameOver:"Game over",maximumPossibleNumberOfPoints:"Maximum possible number of points",ofMax:"of max",more:"",auto:"Auto (sync with OS settings)",enterName:"Enter name",saved:"Saved",required:"Required",points1:"points left",points2:"points left",points3:"points left",points4:"points left",winner:"Winner",text:"Text",preview:"Preview","button.returnToGame":"Return to game","button.startGame":"Start game","button.restartGame":"Restart game","button.rotate":"Rotate","button.startNewGame":"start new game","button.cancel":"Cancel","button.add":"Add","button.reset":"Reset","button.reset2":"Reset","button.dropDices":"Drop dices","button.addPlayer":"Add player","button.writeDownYourPoints":"Write down your points","button.goHome":"Go home","button.strikeOut":"Strike out","button.remove":"Remove","button.showEndOfGame":"Show winners","tab.combinations":"Combinations","tab.settings":"Settings","tab.rules":"Rules","tab.history":"History","history.header":"History","history.user.label":"History of user","history.noHistoryYet":"No history yet","history.activeMove":"Your move, #triesLeft# tries left...","history.activeMoveTries1":"","history.activeMoveTries2":"","history.checkbox.followActivePlayer":"\u0421\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0437\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c \u0438\u0433\u0440\u043e\u043a\u043e\u043c","combination.1":"Ones","combination.1.title":"The sum of dice with the number 1","combination.2":"Twos","combination.2.title":"The sum of dice with the number 2","combination.3":"Threes","combination.3.title":"The sum of dice with the number 3","combination.4":"Fours","combination.4.title":"The sum of dice with the number 4","combination.5":"Fives","combination.5.title":"The sum of dice with the number 5","combination.6":"Sixes","combination.6.title":"The sum of dice with the number 6","combination.bonus":"Bonus","combination.bonus.title":"If a player scores a total of 63 or more points in these six boxes, a bonus of 35 is added to the upper section score.","combination.threeOfAKind":"Three of a Kind","combination.threeOfAKind.title":"At least three dice showing the same face. Sum of those four dice","combination.equal_4":"Four of a kind","combination.equal_4.title":"At least four dice showing the same face. Sum of those four dice","combination.smallStraight":"Small Straight","combination.smallStraight.title":"Four sequential dice (1-2-3-4, 2-3-4-5, or 3-4-5-6). 25 points","combination.bigStraight":"Big straight","combination.bigStraight.title":"Five sequential dice (1-2-3-4-5 or 2-3-4-5-6). 30 points","combination.twoPair":"Two pair","combination.twoPair.title":"Two of one number and two of another. 25 points","combination.fullHouse":"Full house","combination.fullHouse.title":"Three of one number and two of another. 30 points","combination.theYacht":"Yacht","combination.theYacht.title":"All five dice showing the same face. 50 points","combination.chance":"Chance","combination.chance.title":"Any combination. Sum of all dice","help.intro":"Yacht - is a public domain dice game, similar to the Latin American game Generala, the English game of Poker Dice, the Scandinavian Yatzy, and Cheerio.","help.gameplay.header":"Gameplay","help.gameplay.text":"The object of the game is to score points by rolling five dice to make certain combinations. The dice can be rolled up to three times in a turn to try to make these combinations. A game consists of twelve rounds. After each round the player chooses which scoring category is to be used for that round. Once a category has been used in the game, it cannot be used again. The scoring categories have varying point values, some of which are fixed values and others where the score depends on the playerId of the dice. A Yacht is five-of-a-kind and scores 50 points; the highest of any category. The winner is the player who scores the most points.","help.scoring.header":"Scoring","help.scoring.text":"The following are categories and the points scored in those categories:","help.topSection":"Top section","help.topSection.tip":"If a player scores a total of 63 or more points in these six boxes, a bonus of 35 is added to the upper section score.","help.bottomSection":"Bottom section"}};function a(t){var e=i[n][t];return void 0===e?"~".concat(t,"~"):e}},907:function(t,e,o){function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}o.d(e,{Z:function(){return n}})},885:function(t,e,o){o.d(e,{Z:function(){return i}});var n=o(181);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var n,i,a,r,s=[],c=!0,l=!1;try{if(a=(o=o.call(t)).next,0===e){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=a.call(o)).done)&&(s.push(n.value),s.length!==e);c=!0);}catch(u){l=!0,i=u}finally{try{if(!c&&null!=o.return&&(r=o.return(),Object(r)!==r))return}finally{if(l)throw i}}return s}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(t,e,o){o.d(e,{Z:function(){return i}});var n=o(907);function i(t,e){if(t){if("string"===typeof t)return(0,n.Z)(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?(0,n.Z)(t,e):void 0}}}}]);
//# sourceMappingURL=160.be1c4289.chunk.js.map