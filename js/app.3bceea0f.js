(function(e){function t(t){for(var s,c,o=t[0],i=t[1],u=t[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"bef381e9"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=n[e]=[t,s]}));t.push(a[2]=s);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=c(e);var u=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",u.name="ChunkLoadError",u.type=s,u.request=r,a[1](u)}n[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/exchangerate/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"17f2":function(e,t,a){"use strict";var s=a("9a00"),n=a.n(s);n.a},"21bb":function(e,t,a){"use strict";var s=a("2dad"),n=a.n(s);n.a},"2dad":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s,n,r=a("2b0e"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("5c0b"),a("2877")),u={},d=Object(i["a"])(u,c,o,!1,null,null,null),l=d.exports,f=(a("d3b7"),a("8c4f")),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"chart__area"},[a("h2",[e._v("貨幣匯率圖表")]),a("Chart")],1),a("Main",{on:{getactive:e.changeActive}})],1)},b=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Rate"},[a("div",{staticClass:"change"},e._l(e.chartDatas,(function(t,s){return a("div",{key:s,staticClass:"change__item",on:{click:function(a){return e.emitEventData([t.currency,t.datas,e.dates])}}},[e._v(" "+e._s(t.currency)+" ")])})),0),a("h2",[e._v("外幣換算(依臺灣期貨交易所 API 資料換算)")]),a("div",{staticClass:"conver"},[a("div",{staticClass:"conver__row"},[a("div",{staticClass:"conver__item"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.converInput,expression:"converInput",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"請輸入兌換金額"},domProps:{value:e.converInput},on:{input:function(t){t.target.composing||(e.converInput=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("div",[e._v("新台幣")])]),a("div",{staticClass:"conver__item conver__item--target"},[a("div",{staticClass:"conver__item--tip"},[e._v("(請選擇兌換幣值)")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.converSelect,expression:"converSelect"}],attrs:{name:"conver__select"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.converSelect=t.target.multiple?a:a[0]}}},e._l(e.currencyKeys,(function(t,s){return a("option",{key:s,domProps:{value:[s,t]}},[e._v(" "+e._s(t)+" ")])})),0),a("div",[e._v(e._s(e.computedCurrency))])])])]),a("h2",[e._v("每日外幣參考匯率")]),a("div",{staticClass:"list"},e._l(e.ratelist,(function(t,s){return a("div",{key:s,staticClass:"list__item"},[a("div",{staticClass:"list__date"},[e._v(e._s(t["日期"]))]),a("div",[a("span",[e._v("1 美元兌")]),a("span",[e._v(e._s(t["美元／新台幣"])+" 新台幣")])]),a("div",[a("span",[e._v("1 美元兌")]),a("span",[e._v(e._s(t["美元／日幣"])+" 日幣")])]),a("div",[a("span",[e._v("1 美元兌")]),a("span",[e._v(e._s(t["美元／港幣"])+" 港幣")])]),a("div",[a("span",[e._v("1 美元兌")]),a("span",[e._v(e._s(t["美元／人民幣"])+" 人民幣")])]),a("div",[a("span",[e._v("1 美元兌")]),a("span",[e._v(e._s(t["美元／南非幣"])+" 南非幣")])]),a("div",[a("span",[e._v("1 歐元兌")]),a("span",[e._v(e._s(t["歐元／美元"])+" 美元")])]),a("div",[a("span",[e._v("1 澳幣兌")]),a("span",[e._v(e._s(t["澳幣／美元"])+" 美元")])]),a("div",[a("span",[e._v("1 紐幣兌")]),a("span",[e._v(e._s(t["紐幣／美元"])+" 美元")])]),a("div",[a("span",[e._v("1 英鎊兌")]),a("span",[e._v(e._s(t["英鎊／美元"])+" 美元")])]),a("div",[a("span",[e._v("1 人民幣兌")]),a("span",[e._v(e._s(t["人民幣／新台幣"])+" 新台幣")])])])})),0),a("div",{staticClass:"loading",class:{"loading--hide":e.loadingState}},[a("div",{staticClass:"loading-circle__mask"},[a("svg",[a("use",{attrs:{"xlink:href":"#circle"}})])]),a("div",{staticClass:"loading-circle"},[a("svg",[a("use",{attrs:{"xlink:href":"#circle"}})])])]),a("svg",{attrs:{display:"none"}},[a("symbol",{attrs:{id:"circle",viewBox:"0 0 50 50"}},[a("circle",{attrs:{cx:"25",cy:"25",r:"20","stroke-dasharray":"125.66"}})])])])},h=[],j=(a("4160"),a("fb6a"),a("a9e3"),a("b680"),a("ac1f"),a("1276"),a("159b"),a("bc3a")),m=a.n(j),_={name:"Rate",data:function(){return{field:["日期","美元／新台幣","人民幣／新台幣","歐元／美元","美元／日幣","英鎊／美元","澳幣／美元","美元／港幣","美元／人民幣","美元／南非幣","紐幣／美元"],datas:[],dates:[],chartDatas:[],currencyDatas:[],currencyKeys:[],converSelect:[],converInput:0,currentCurrency:0,loadingState:!1}},methods:{emitDatas:function(){this.$emit("get-datas",this.datas)},emitEventData:function(e){this.$bus.$emit("event:data",e)},emitActiveShow:function(){this.$emit("getactive")}},computed:{ratelist:function(){var e=this,t=[];return e.datas.forEach((function(a,s){var n={};a.forEach((function(t,a){n[e.field[a]]=e.datas[s][a]})),t.push(n)})),t.reverse()},computedCurrency:function(){var e=this,t=e.converSelect[0],a=e.converInput,s="",n="",r=e.currentCurrency;if(0==e.converSelect.length)return"";if(s=e.currencyDatas[t].conver,n=e.currencyDatas[t][e.converSelect[1]],1==s){var c=1/(r*n)*a;return c.toFixed(2)}if(0==s){var o=n/r*a;return o.toFixed(2)}var i=n*a;return i.toFixed(2)}},mounted:function(){var e=this,t="https://cors-anywhere.herokuapp.com/",a="http://www.taifex.com.tw/data_gov/taifex_open_data.asp?data_name=DailyForeignExchangeRates";m.a.get(t+a).then((function(t){var a=t.data.split("\n").reverse().slice(1,11).reverse();a.forEach((function(t){var a=t.split(",");e.datas.push(a)})),e.field.forEach((function(t,a){var s={};s.currency=t,s.datas=[],e.chartDatas.push(s),e.datas.forEach((function(t){e.chartDatas[a]["datas"].push(t[a])}))}));var s=[];e.datas[e.datas.length-1].forEach((function(t,a){var n=e.field[a].split("／");if("美元"==n[0]&&"新台幣"==n[1]){var r={conver:2};r[n[0]]=(1/Number(t.split("\r")[0])).toFixed(5),s.push(r),e.currencyKeys.push(n[0]),e.currentCurrency=t.split("\r")[0]}else if("美元"==n[0]){var c={conver:0};c[n[1]]=t.split("\r")[0],s.push(c),e.currencyKeys.push(n[1])}else if("日期"!=n[0]&&"人民幣"!=n[0]){var o={conver:1};o[n[0]]=t.split("\r")[0],s.push(o),e.currencyKeys.push(n[0])}})),e.currencyDatas=s,e.dates=e.chartDatas[0],e.chartDatas=e.chartDatas.slice(1),e.emitEventData([e.chartDatas[0]["currency"],e.chartDatas[0]["datas"],e.dates]),e.emitActiveShow(),e.loadingState=!0})).catch((function(e){console.log("err: ",e)}))}},g=_,y=(a("17f2"),Object(i["a"])(g,p,h,!1,null,null,null)),k=y.exports,w=a("1fca"),C={extends:w["a"],props:["chartdata","options","propDatas"],computed:{},methods:{creatChart:function(e){var t=e[0],a=e[1],s=e[2]["datas"],n=[],r=a,c=["255, 215, 0","0, 200, 255","235, 70, 70","245, 100, 40","40, 245, 175"],o=c[Math.floor(Math.random()*c.length)];s.forEach((function(e,t){n.push(s[t].slice(4))})),this.gradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,0,450),this.gradient.addColorStop(0,"rgba("+o+", 0.9)"),this.gradient.addColorStop(.5,"rgba("+o+", 0.25)"),this.gradient.addColorStop(1,"rgba("+o+", 0)"),this.renderChart({labels:n,datasets:[{label:t,borderColor:"white",pointBackgroundColor:"white",borderWidth:1,pointBorderColor:"rgba("+o+", 0.9)",backgroundColor:this.gradient,data:r}]},{responsive:!0,maintainAspectRatio:!1})}},created:function(){var e=this;this.$bus.$on("event:data",(function(t){e.creatChart(t)}))},beforeDestroy:function(){this.$bus.$off("event:data")}},x=C,z=Object(i["a"])(x,s,n,!1,null,null,null),D=z.exports,S={name:"Home",components:{Main:k,Chart:D},data:function(){return{datas:[],show:!1}},methods:{changeData:function(e){this.datas=e},changeActive:function(){this.show=!this.show}},computed:{}},E=S,O=(a("21bb"),Object(i["a"])(E,v,b,!1,null,null,null)),$=O.exports;r["a"].use(f["a"]);var P=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],A=new f["a"]({routes:P}),M=A,I=a("2f62");r["a"].use(I["a"]);var F=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],new r["a"]({router:M,store:F,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"9a00":function(e,t,a){},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.3bceea0f.js.map