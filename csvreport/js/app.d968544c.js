(function(){"use strict";var t={861:function(t,e,n){var r=n(963),a=n(252);function o(t,e,n,r,o,i){const s=(0,a.up)("HelloWorld");return(0,a.wg)(),(0,a.j4)(s)}const i=t=>((0,a.dD)("data-v-3b4ee544"),t=t(),(0,a.Cn)(),t),s=i((()=>(0,a._)("h1",null,"CSV Daten",-1))),c=["innerHTML"];function l(t,e,n,r,o,i){return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,(0,a._)("div",null,[(0,a._)("p",{innerHTML:this.csvDataStore.csvdata},null,8,c)])],64)}var u=n(876),f=n(945);const p=(0,u.Q_)({id:"csvstore",state:()=>({csvdata:"",rawdata:null,basePath:"https://testspiel.danielglueck.de/wp-json",taskPath:"/wp/v2/erhebungsdaten",allposts:"?per_page=100",offset:"offset=",perpage:"per_page=100"}),getters:{},actions:{async fetchCSVDATA(){this.csvdata="",this.rawdata=null;for(let n=0;n<1e5;n+=100){var t="?"+this.offset+n+"&"+this.perpage,e=this.basePath+this.taskPath+t;console.log(e),this.rawdata=this.rawdata+await f.Z.get(e).then((t=>{if(console.log(t.data),null==t.data||""==t.data||0==t.data.length)return n=1e3,"";var e="";t.data.forEach((t=>{console.log(t.title.rendered);var n=t.title.rendered+", "+t.aufgabentitel+", "+t.zp_begonnen+", "+t.zp_abgeschlossen+","+t.zp_spielbeginn+", "+t.nutzername+","+t.einfach+" <br> ";e+=n})),console.log(e);const r=e,a="Titel, AufgabenTitel, Beginn, Ende, SpielBeginn, Nutzer, Einfach <br>",o=a+r;return this.csvdata=this.csvdata+o,o})).catch((t=>console.log(t))).finally((()=>{this.loading=!1}))}}}});var d={name:"HelloWorld",setup(){const t=p();return t.fetchCSVDATA(),{csvDataStore:t}}},h=n(744);const v=(0,h.Z)(d,[["render",l],["__scopeId","data-v-3b4ee544"]]);var g=v,b={name:"App",components:{HelloWorld:g}};const w=(0,h.Z)(b,[["render",o]]);var O=w;const _=(0,u.WB)(),y=(0,r.ri)(O);y.use(_),y.mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],o=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,a,o]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(e&&e(r);l<i.length;l++)o=i[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkcsvreport"]=self["webpackChunkcsvreport"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(861)}));r=n.O(r)})();
//# sourceMappingURL=app.d968544c.js.map