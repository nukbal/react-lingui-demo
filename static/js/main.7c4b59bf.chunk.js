(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){var a={"./en/messages.js":[126,1],"./ja/messages.js":[127,2],"./ko-kr/messages.js":[128,3]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id=122,e.exports=r},123:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);n(60),n(90);var a=n(0),r=n.n(a),c=n(53),l=n(3),s=n.n(l),o=n(11),i=n(54),u=n(55),m=n(57),h=n(56),d=n(58),E=n(1),p=n(33),f="en",v=function(){var e=Object(o.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(122)("./".concat(t,"/messages.js")));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),b=Object(p.setupI18n)();b.willActivate(v);n(123);b.activate(f);var k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={locale:f,text:"",random:"",num:0},n.toEnglish=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.activate("en");case 2:n.setState({locale:"en"});case 3:case"end":return e.stop()}},e,this)})),n.toKorean=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.activate("ko-kr");case 2:n.setState({locale:"ko-kr"});case 3:case"end":return e.stop()}},e,this)})),n.toJapanese=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.activate("ja");case 2:n.setState({locale:"ja"});case 3:case"end":return e.stop()}},e,this)})),n.handleInput=function(e){var t=e.target;n.setState({text:t.value})},n.randomText=function(){var e=[{id:"rand.0",defaults:"\u30e9\u30f3\u30c0\u30e0"},{id:"rand.1",defaults:"\u3067\u306f"},{id:"rand.2",defaults:"\u3042\u308a\u307e\u305b\u3093"}];n.setState({random:b._(e[Math.floor(Math.random()*e.length)])})},n.increase=function(){return n.setState({num:n.state.num+1})},n.decrease=function(){n.state.num&&n.setState({num:n.state.num-1})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.text!==t.text||this.state.random!==t.random||this.state.num!==t.num||this.state.locale!==t.locale}},{key:"render",value:function(){var e=this;return r.a.createElement(E.I18nProvider,{i18n:b},r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("a",{role:"button",onClick:this.toEnglish},"English"),r.a.createElement("a",{role:"button",onClick:this.toKorean},"\ud55c\uad6d\uc5b4"),r.a.createElement("a",{role:"button",onClick:this.toJapanese},"\u65e5\u672c\u8a9e")),r.a.createElement("main",null,r.a.createElement("h1",null,r.a.createElement(E.Trans,{id:"LinguiJS \u30c7\u30e2"})),r.a.createElement("section",null,r.a.createElement(E.Trans,{id:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f \u56fd\u969b\u5316\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306e<0>LinguiJS</0>\u306e<1>React</1>\u30c7\u30e2\u3067\u3059\u3002",components:[r.a.createElement("a",{href:"https://lingui.js.org/",target:"_blank"}),r.a.createElement("a",{href:"https://reactjs.org/",target:"_blank"})]})),r.a.createElement("section",null,r.a.createElement("h3",null,r.a.createElement(E.Trans,{id:"JSX\u5bfe\u5fdc"})),r.a.createElement(E.I18n,null,function(){return r.a.createElement("input",{type:"text",name:"text",placeholder:b._({id:"\u540d\u524d\u3092\u66f8\u3044\u3066\u304f\u3060\u3055\u3044"}),value:e.state.text,onChange:e.handleInput})}),r.a.createElement("br",null),r.a.createElement(E.Trans,{id:"input-text",values:{0:this.state.text}})),r.a.createElement("section",null,r.a.createElement("h3",null,r.a.createElement(E.Trans,{id:"javascript\u5074"})),r.a.createElement(E.Trans,{id:"\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u305f\u3089\u30e9\u30f3\u30c0\u30e0\u306a\u30c6\u30ad\u30b9\u30c8\u3092\u8868\u793a\u3057\u307e\u3059"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.randomText},r.a.createElement(E.Trans,{id:"\u751f\u6210"})),r.a.createElement("br",null),r.a.createElement("span",null,this.state.random)),r.a.createElement("section",null,r.a.createElement("h3",null,r.a.createElement(E.Trans,{id:"\u6570\u5024"})),r.a.createElement(E.NumberFormat,{value:1e4,format:{style:"currency",currency:"JPY"}}),r.a.createElement("br",null),r.a.createElement(E.Trans,{id:"{0, plural, =0 {\u8ab0\u3082\u6765\u306a\u304b\u3063\u305f\u3093\u3067\u3059} =1 {1\u4eba\u306e\u30b2\u30b9\u30c8\u3055\u3093\u304c\u6765\u307e\u3057\u305f} other {#\u4eba\u306e\u30b2\u30b9\u30c8\u3055\u3093\u304c\u6765\u307e\u3057\u305f}}",values:{0:this.state.num}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.increase},"+"),r.a.createElement("button",{onClick:this.decrease},"-")),r.a.createElement("section",null,r.a.createElement("h3",null,r.a.createElement(E.Trans,{id:"\u65e5\u4ed8"})),r.a.createElement(E.Trans,{id:"\u4eca\u65e5\u306f {0,date}\u3067\u3059",values:{0:new Date}})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=document.getElementById("root");Object(c.render)(r.a.createElement(k,null),w),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,n){e.exports=n(125)}},[[59,5,4]]]);
//# sourceMappingURL=main.7c4b59bf.chunk.js.map