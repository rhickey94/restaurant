(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),d=t.n(i),l=new URL(t(653),t.b),s=c()(o()),u=d()(l);s.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  font-family: "Roboto", sans-serif;\n}\n\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: 10rem;\n}\n\n#content {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n#content header {\n  background: #333333;\n  color: #f3d3bd;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 15%;\n}\n\n#header {\n  padding-top: 3rem;\n  font-size: 32px;\n  font-weight: 900;\n}\n\n#content header ul {\n  display: flex;\n  gap: 25px;\n}\n\n#content header li {\n  border: 2px solid #fcfaf9;\n  border-bottom: 0;\n  border-radius: 10px 10px 0 0;\n  padding: 10px;\n  width: 100px;\n  text-align: center;\n}\n\n#content main {\n  flex-grow: 1;\n  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),\n    center/100% url('+u+");\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#content main section {\n  border: 1px solid #fcfaf9;\n  border-radius: 5px;\n  /* background-color: rgba(133, 133, 133, 0.685); */\n  /* background-color: #48e5c3a8; */\n  background-color: #f3d3bd9b;\n  color: #333333;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  /* flex-wrap: wrap; */\n  gap: 50px;\n}\n\n#content main section > * {\n  border: 10px solid #333333;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: #f3d3bd;\n}\n\n#content main section h1 {\n  font-size: 36px;\n  margin-top: 50px;\n  padding: 20px;\n}\n\n#content main section article {\n  width: 50%;\n  text-align: center;\n}\n\nfooter {\n  height: 60px;\n  background: #333333;\n  color: #f3d3bd;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n",""]);const p=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],l=r.base?d[0]+r.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=r(e,o),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},653:(e,n,t)=>{e.exports=t.p+"0812674c60421f107771.jpg"},142:(e,n,t)=>{e.exports=t.p+"aa6c5b9f120e90b22efb.jpg"},887:(e,n,t)=>{e.exports=t.p+"1ff6f3c85680a78f4171.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),d=t.n(i),l=t(216),s=t.n(l),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(){const e=document.createElement("section");return e.appendChild(function(){const e=document.createElement("h1");return e.textContent="Restaurant for eating!",e}()),e.appendChild(function(){const e=document.createElement("article"),n=document.createElement("p");return n.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione, deserunt commodi\n  quam ducimus a eos ipsam tenetur quo ex, fugit mollitia dolores, quis esse sed nam sit\n  debitis dicta quos distinctio. Totam at exercitationem nulla libero facilis inventore\n  earum! Recusandae fugit in debitis et numquam ipsa minus non labore.",e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("article"),n=document.createElement("h3");n.textContent="Hours",e.appendChild(n);const t=document.createElement("ul");return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].forEach((e=>{const n=document.createElement("li");n.textContent=`${e}: 8am - 8pm`,t.appendChild(n)})),e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("address"),n=document.createElement("h3");n.textContent="Location",e.appendChild(n);const t=document.createElement("p");return t.textContent="123 Yum St, Yumsville, NY",e.appendChild(t),e}()),e};var g=t(142),b=t(887);function x(e,n,t){const r=document.createElement("article"),o=function(e,n,t){const r=document.createElement("figure"),o=document.createElement("div"),a=document.createElement("figcaption");a.textContent=t;const c=document.createElement("span");c.textContent=e;const i=function(e){const n=new Image;return n.src=e,n.alt="bruh",n}(n);return o.appendChild(i),o.appendChild(a),r.appendChild(o),r.appendChild(c),r}(e,n,t);return r.appendChild(o),r}var v;(v=document.querySelector("#content")).appendChild(function(){const e=["Home","Menu","Contact"],n=document.createElement("header"),t=document.createElement("div");t.setAttribute("id","header"),t.textContent="Restaurant!";const r=document.createElement("nav"),o=document.createElement("ul");for(let n=0;n<e.length;n++){const t=document.createElement("li");t.textContent=e[n],o.appendChild(t)}return r.appendChild(o),n.appendChild(t),n.appendChild(r),n}()),v.appendChild(document.createElement("main")),v.appendChild(function(){const e=document.createElement("footer");return e.innerHTML="Copyright &copy; The Odin Project 2021",e}());const y=document.querySelector("header"),C=document.querySelector("main");document.querySelector("footer"),C.appendChild(h()),y.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(e=>{C.innerHTML="",C.appendChild(function(e){let n=null;switch(e){case"Home":n=h();break;case"Menu":n=function(){const e=document.createElement("section");return e.appendChild(function(){const e=document.createElement("article"),n=document.createElement("h3"),t=document.createElement("ul");return["shrimp","beef","chicken"].forEach((e=>{const n=document.createElement("li");n.textContent=e,t.appendChild(n)})),e.appendChild(n),e.appendChild(t),e}()),e}();break;case"Contact":n=function(){const e=document.createElement("section"),n=x("henlo",g,"Chef"),t=x("henlo!!!",b,"Master Chef");return e.appendChild(n),e.appendChild(t),e}()}return n}(e.target.textContent))}))}))})()})();