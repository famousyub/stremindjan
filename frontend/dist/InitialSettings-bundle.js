(()=>{"use strict";var e={6323:(e,t,n)=>{var r=n(3935),o=n(7294),l=n(9669),a=n.n(l),u=n(2692),i=n(4599),c=n(3520),f=n(1718),s=n(3987),d=n(6210);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,l=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,l=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw l}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(){var e=h((0,o.useState)({}),2),t=e[0],n=e[1],r=h((0,o.useState)(!1),2),l=r[0],m=r[1],p=h((0,o.useState)(""),2),v=p[0],b=p[1];(0,o.useEffect)((function(){y()}),[]);var y=function(){a().get("/panel/api/global-settings").then((function(e){n(e.data),m(!0)})).catch((function(e){console.log(e),b((0,u.b)(e)),m(!0)}))};return o.createElement("div",{className:"my-5"},o.createElement("h1",null,"Initial Setup"),o.createElement("hr",null),function(){if(""!==v)return o.createElement(s.Z,null,v)}(),!l&&(0,d.xb)(t)?o.createElement("h3",null,"Loading..."):l&&(0,d.xb)(t)?o.createElement("h3",null,"There is a problem. No settings are fetched."):t.forcePasswordChange?o.createElement(i.Z,null):t.dotenv&&""===t.dotenv.MOVIEDB_API?o.createElement(c.Z,{fetchSettings:y}):t.dotenv&&""===t.dotenv.SUBTITLE_LANGS?o.createElement(f.Z,{fetchSettings:y}):(setTimeout((function(){var e=new URLSearchParams(window.location.search).get("next");null===e&&(e="/"),window.location.href=e}),2e3),o.createElement("div",null,o.createElement("h1",null,"Setup complete!"),o.createElement("p",null,"You are being redirected..."))))};(0,r.render)(o.createElement(p,null),document.getElementById("root"))}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=710,(()=>{var e={710:0},t=[[6323,622]],r=e=>{},o=(o,l)=>{for(var a,u,[i,c,f,s]=l,d=0,h=[];d<i.length;d++)u=i[d],n.o(e,u)&&e[u]&&h.push(e[u][0]),e[u]=0;for(a in c)n.o(c,a)&&(n.m[a]=c[a]);for(f&&f(n),o&&o(l);h.length;)h.shift()();return s&&t.push.apply(t,s),r()},l=self.webpackChunkfrontend=self.webpackChunkfrontend||[];function a(){for(var r,o=0;o<t.length;o++){for(var l=t[o],a=!0,u=1;u<l.length;u++){var i=l[u];0!==e[i]&&(a=!1)}a&&(t.splice(o--,1),r=n(n.s=l[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l));var u=n.x;n.x=()=>(n.x=u||(e=>{}),(r=a)())})(),n.x()})();