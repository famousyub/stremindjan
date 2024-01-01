(()=>{"use strict";var e={9015:(e,t,n)=>{var r=n(3935),a=n(7294),o=n(9669),l=n.n(o);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const i=function(e){var t=e.addMovieRequest,n=c((0,a.useState)(""),2),r=n[0],o=n[1],l=c((0,a.useState)(""),2),u=l[0],i=l[1];return a.createElement("div",null,a.createElement("div",{className:"col-sm-auto col-md-auto col-lg-auto my-1"},a.createElement("input",{onChange:function(e){return o(e.target.value)},value:r,placeholder:"*Copy an IMDB link or IMDB ID",type:"text",className:"form-control default-input","aria-label":"","aria-describedby":"Copy an IMDB link or IMDB ID",autoFocus:!0,minLength:9})),a.createElement("div",{className:"col-sm-auto col-md-auto col-lg-auto my-2"},a.createElement("textarea",{onChange:function(e){return i(e.target.value)},value:u,className:"form-control default-input",name:"torrent_source",cols:"40",rows:"8",placeholder:"*Copy a torrent magnet or link",style:{width:"100%"},required:!0,id:"id_torrent_source"}," ")),a.createElement("div",{className:"col-sm-auto col-md-auto col-lg-auto text-end"},a.createElement("button",{onClick:function(){return t({imdbId:r,source:u})},className:"btn btn-light"},"Download & Add")))};var s=n(5211),d=n(1388),m=n(3987),f=n(2692),y=n(6210);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const p=function(e){var t,n,r=e.data,o=e.downloadFunction,l=(t=(0,a.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],u=l[1];return a.createElement("div",null,a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return u(!c)},className:"row border-top py-1 align-items-center justify-content-center result-row"},a.createElement("div",{className:"col-1"},a.createElement("img",{src:r.image})),a.createElement("div",{className:"col"},a.createElement("span",null,r.title?r.title:r.imdbId," ",r.year?"(".concat(r.year,")"):"")),a.createElement("div",{className:"col align-center"},r.sources&&r.sources.constructor===Array&&r.sources.map((function(e,t){if(void 0!==e.quality)return a.createElement("span",{className:"border rounded m-1 p-1",key:t},e.quality)})))),function(){if(c&&void 0!==r.sources&&r.sources!==[]&&r.sources.constructor===Array&&0!==r.sources.length)return a.createElement("div",{className:"row align-items-center justify-content-center result-details-row"},a.createElement("table",{className:"table table-hover table-dark table-sm"},a.createElement("thead",null,a.createElement("tr",null,void 0!==r.sources[0].quality?a.createElement("th",{scope:"col",style:{paddingLeft:14}},"Quality"):null,void 0!==r.sources[0].type?a.createElement("th",{scope:"col"},"Type"):null,void 0!==r.sources[0].seeds?a.createElement("th",{scope:"col"},"Seeds"):null,void 0!==r.sources[0].size?a.createElement("th",{scope:"col"},"Size"):null,a.createElement("th",{scope:"col",style:{paddingRight:14},className:"col-1"},"Download"))),a.createElement("tbody",null,r.sources.map((function(e,t){return a.createElement("tr",{key:t},void 0!==e.quality?a.createElement("th",{scope:"row",style:{paddingLeft:14}},e.quality):null,void 0!==e.type?a.createElement("td",null,e.type):null,void 0!==e.seeds?a.createElement("td",null,e.seeds):null,void 0!==e.size?a.createElement("td",null,e.size):null,a.createElement("td",{style:{paddingRight:14},className:"text-end"},a.createElement("button",{onClick:function(){o({imdbId:r.imdbId,source:e.source}),window.location.href="#"},className:"btn btn-secondary btn-sm p-1"},"Download&Add")))})))))}())};var b=n(3094);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const E=function(e){var t=e.mudSource,n=e.addMovieRequest,r=h((0,a.useState)(0),2),o=r[0],c=r[1],u=h((0,a.useState)(""),2),i=u[0],s=u[1],d=h((0,a.useState)(""),2),v=d[0],g=d[1],E=h((0,a.useState)(!1),2),S=E[0],w=E[1],A=h((0,a.useState)([]),2),I=A[0],N=A[1],j="";(0,a.useEffect)((function(){var e=setInterval((function(){return k()}),500);return function(){clearInterval(e)}}),[o,t]);var k=function(){i.length<3||(0!==o||Date.now()-o>500)&&j!==i&&(console.log("Searching ".concat(i)),j=i,l().get((0,y.f3)(t.apiUrl,{searchInput:i})).then((function(e){var n=(0,b.MudParser)(t,e.data);N(n),w(!1)})).catch((function(e){w(!1),console.log(e),g((0,f.b)(e))})))};return a.createElement("div",null,a.createElement("div",{className:"input-group mb-3"},a.createElement("input",{onChange:function(e){return t=e.target.value,s(t),c(Date.now()),void(t.length>2&&w(!0));var t},value:i,placeholder:"Search a movie title",type:"text",className:"form-control default-input","aria-label":"search a movie title","aria-describedby":"search a movie title",autoFocus:!0})),function(){if(""!==v)return a.createElement(m.Z,null,v)}(),S&&a.createElement("div",{className:"container"},a.createElement("div",{className:"row py-3",style:{backgroundColor:"rgb(33, 37, 41)"}},a.createElement("div",{className:"col"},"Loading..."))),!S&&i.length>=3&&a.createElement("div",{className:"container"},a.createElement("div",{className:"row py-3",style:{backgroundColor:"rgb(33, 37, 41)"}},a.createElement("div",{className:"col"},"Results")),I&&I.map((function(e){return a.createElement(p,{key:e.imdbId,downloadFunction:n,data:e})}))))};function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const A=function(e){var t=e.addMovieRequest,n=S((0,a.useState)(!1),2),r=n[0],o=n[1],c=S((0,a.useState)([]),2),u=c[0],i=c[1],s=S((0,a.useState)(null),2),d=s[0],v=s[1],p=S((0,a.useState)(""),2),b=p[0],h=p[1];(0,a.useEffect)((function(){r||g(),0!==u.length&&A()}),[u]);var g=function(){l().get("/panel/api/mud-sources").then((function(e){o(!0),i(e.data)})).catch((function(e){console.log(e),o(!0),h((0,f.b)(e))}))},w=function(e){var t=JSON.parse(JSON.stringify(e));return t.source=JSON.parse(e.source.replace(/\'/g,'"')),t},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=null!==e?e:(0,y.tv)("selectedSource",null);if(null!==t){var n=u.find((function(e){return e.id===t}));if(void 0!==n)return v(w(n)),void(0,y.co)("selectedSource",t)}(0,y.co)("selectedSource",u[0].id),v(w(u[0]))};return a.createElement("div",null,function(){if(""!==b)return a.createElement(m.Z,null,b)}(),function(){if(r)return 0===u.length?a.createElement("div",null,a.createElement("h3",null,"There are no sources"),"Please add sources in the ",a.createElement("a",{onClick:function(){(0,y.co)("settingsTabPref","Search Sources"),window.location.href="/panel/settings/"},style:{textDecoration:"underline"}},"settings"),"."):a.createElement("div",{className:"dropdown mb-3"},a.createElement("button",{className:"btn btn-sm btn-light dropdown-toggle",type:"button",id:"dropdownMenuButton2","data-bs-toggle":"dropdown","aria-expanded":"false"},null===d?"Choose a source":d.name),a.createElement("ul",{className:"dropdown-menu dropdown-menu-dark","aria-labelledby":"dropdownMenuButton2"},u.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{className:"dropdown-item "+(null!==d&&e.id===d.id?"active":""),onClick:function(){return A(e.id)},href:"#"},e.name))}))))}(),null!==d?a.createElement(E,{mudSource:d.source,addMovieRequest:t}):null)};function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=function(){var e=["Search","Add manually"],t=I((0,a.useState)((0,y.tv)("addMovieTabPref",e[0])),2),n=t[0],r=t[1],o=I((0,a.useState)(""),2),c=o[0],u=o[1],v=I((0,a.useState)(""),2),p=v[0],b=v[1];(0,a.useEffect)((function(){(0,y.co)("addMovieTabPref",n)}),[n]);var h=function(e){var t=e.imdbId,n=e.source;""!==n&&""!==t?(u(""),b(""),l().post("/panel/api/add-movie",{imdbId:t,source:n},{headers:{"X-CSRFToken":(0,s.m)()}}).then((function(e){console.log(e.data),e.data&&e.data.operation?b(e.data.operation):b(JSON.stringify(e.data))})).catch((function(e){console.error(e),u((0,f.b)(e))}))):""===n?u("Source cannot be empty."):""===t&&u("IMDB ID or IMDB link is required.")};return a.createElement("div",null,a.createElement("ul",{className:"nav nav-tabs mb-4"},e.map((function(e){var t=e===n?"active":"";return a.createElement("li",{key:e,className:"nav-item"},a.createElement("a",{onClick:function(){return r(e)},className:"nav-link "+t,"aria-current":"page",href:"#"},e))}))),function(){if(""!==p)return a.createElement(d.Z,null,a.createElement("p",null,p),a.createElement("p",null,"Go to"," ",a.createElement("a",{href:"/panel/background-management/"},"Background Management")))}(),function(){if(""!==c)return a.createElement(m.Z,{style:{fontSize:"x-large"}},c)}(),a.createElement("div",{style:{marginBottom:14,marginLeft:6}}),function(){switch(n){case"Search":return a.createElement(A,{addMovieRequest:h});case"Add manually":default:return a.createElement(i,{addMovieRequest:h})}}())};(0,r.render)(a.createElement(j,null),document.getElementById("root"))}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=456,(()=>{var e={456:0},t=[[9015,622]],r=e=>{},a=(a,o)=>{for(var l,c,[u,i,s,d]=o,m=0,f=[];m<u.length;m++)c=u[m],n.o(e,c)&&e[c]&&f.push(e[c][0]),e[c]=0;for(l in i)n.o(i,l)&&(n.m[l]=i[l]);for(s&&s(n),a&&a(o);f.length;)f.shift()();return d&&t.push.apply(t,d),r()},o=self.webpackChunkfrontend=self.webpackChunkfrontend||[];function l(){for(var r,a=0;a<t.length;a++){for(var o=t[a],l=!0,c=1;c<o.length;c++){var u=o[c];0!==e[u]&&(l=!1)}l&&(t.splice(a--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var c=n.x;n.x=()=>(n.x=c||(e=>{}),(r=l)())})(),n.x()})();