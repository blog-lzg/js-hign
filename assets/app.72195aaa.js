import{i as D,c as Ze,e as et,a as tt,b as nt,d as st,f as Se,h as Ce,g as ot,j as rt,k as at,l as Ee,m as it,s as ct,r as lt,n as h,o as Ae,p as ut,q as G,t as dt,w as ft,u as $,v as H,_ as x,x as d,y as p,z as l,A as b,B as ee,C as A,D as f,E as Pe,F as E,G as Te,H as Ne,I as Re,J as q,K as F,L as O,M as z,N as te,O as g,P as k,Q as B,R as pt,S as He,T as Y,U as ce,V as P}from"./plugin-vue_export-helper.abe1cdd2.js";const ht="http://www.w3.org/2000/svg",R=typeof document!="undefined"?document:null,le=R&&R.createElement("template"),_t={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?R.createElementNS(ht,e):R.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>R.createTextNode(e),createComment:e=>R.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>R.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{le.innerHTML=s?`<svg>${e}</svg>`:e;const i=le.content;if(s){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vt(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function mt(e,t,n){const s=e.style,o=D(n);if(n&&!o){for(const r in n)V(s,r,n[r]);if(t&&!D(t))for(const r in t)n[r]==null&&V(s,r,"")}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const ue=/\s*!important$/;function V(e,t,n){if(Se(n))n.forEach(s=>V(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=gt(e,t);ue.test(n)?e.setProperty(Ce(s),n.replace(ue,""),"important"):e[s]=n}}const de=["Webkit","Moz","ms"],K={};function gt(e,t){const n=K[t];if(n)return n;let s=ot(t);if(s!=="filter"&&s in e)return K[t]=s;s=rt(s);for(let o=0;o<de.length;o++){const r=de[o]+s;if(r in e)return K[t]=r}return t}const fe="http://www.w3.org/1999/xlink";function bt(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fe,t.slice(6,t.length)):e.setAttributeNS(fe,t,n);else{const r=at(t);n==null||r&&!Ee(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function $t(e,t,n,s,o,r,a){if(t==="innerHTML"||t==="textContent"){s&&a(s,o,r),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ee(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}const[Ie,wt]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Q=0;const kt=Promise.resolve(),xt=()=>{Q=0},yt=()=>Q||(kt.then(xt),Q=Ie());function Lt(e,t,n,s){e.addEventListener(t,n,s)}function St(e,t,n,s){e.removeEventListener(t,n,s)}function Ct(e,t,n,s,o=null){const r=e._vei||(e._vei={}),a=r[t];if(s&&a)a.value=s;else{const[i,c]=Et(t);if(s){const u=r[t]=At(s,o);Lt(e,i,u,c)}else a&&(St(e,i,a,c),r[t]=void 0)}}const pe=/(?:Once|Passive|Capture)$/;function Et(e){let t;if(pe.test(e)){t={};let n;for(;n=e.match(pe);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ce(e.slice(2)),t]}function At(e,t){const n=s=>{const o=s.timeStamp||Ie();(wt||o>=n.attached-1)&&it(Pt(s,n.value),t,5,[s])};return n.value=e,n.attached=yt(),n}function Pt(e,t){if(Se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const he=/^on[a-z]/,Tt=(e,t,n,s,o=!1,r,a,i,c)=>{t==="class"?vt(e,s,o):t==="style"?mt(e,n,s):tt(t)?nt(t)||Ct(e,t,n,s,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nt(e,t,s,o))?$t(e,t,s,r,a,i,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),bt(e,t,s,o))};function Nt(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&he.test(t)&&st(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||he.test(t)&&D(n)?!1:t in e}const Rt=et({patchProp:Tt},_t);let J,_e=!1;function Ht(){return J=_e?J:Ze(Rt),_e=!0,J}const It=(...e)=>{const t=Ht().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Bt(s);if(o)return n(o,!0,o instanceof SVGElement)},t};function Bt(e){return D(e)?document.querySelector(e):e}var Mt='{"lang":"en-US","title":"javascript\u9AD8\u7EA7","description":"javascript\u9AD8\u7EA7\u6587\u6863","base":"/js-hign/","head":[],"themeConfig":{"docsDir":"docs","editLinks":true,"editLinkText":"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875","lastUpdated":"\u4E0A\u6B21\u66F4\u65B0","notFound":["\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709","\u6211\u4EEC\u600E\u4E48\u5230\u8FD9\u6765\u4E86\uFF1F","\u8FD9\u662F\u4E00\u4E2A 404 \u9875\u9762","\u770B\u8D77\u6765\u6211\u4EEC\u8FDB\u5165\u4E86\u9519\u8BEF\u7684\u94FE\u63A5"],"backToHome":"\u8FD4\u56DE\u9996\u9875","algolia":{"apiKey":"c57105e511faa5558547599f120ceeba","indexName":"vitepress"},"nav":[{"text":"Guide","link":"/","activeMatch":"^/$|^/guide/"},{"text":"Config Reference","link":"/config/basics","activeMatch":"^/config/"}],"sidebar":{"/":[{"text":"js-hign","link":"/js-hign/mds/mds","children":[{"text":"day01","link":"/js-hign/mds/day01.html"},{"text":"day02","link":"/js-hign/mds/day02.html"},{"text":"day03","link":"/js-hign/mds/day03.html"},{"text":"day04","link":"/js-hign/mds/day04.html"}]}]}},"locales":{},"langs":{}}';const Be=/^https?:/i,S=typeof window!="undefined";function Dt(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function ve(e,t){const n=Dt(t,Object.keys(e));return n?e[n]:void 0}function Ot(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((s,o)=>(s[o]={label:t[o].label,lang:n[o].lang},s),{}):{}}function Ut(e,t){t=jt(e,t);const n=ve(e.locales||{},t),s=ve(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:Ot(e)})}function jt(e,t){if(!S)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const Me=Symbol(),ne=ct(qt(Mt));function qt(e){return lt(JSON.parse(e))}function Ft(e){const t=h(()=>Ut(ne.value,e.path));return{site:t,theme:h(()=>t.value.themeConfig),page:h(()=>e.data),frontmatter:h(()=>e.data.frontmatter),lang:h(()=>t.value.lang),localePath:h(()=>{const{langs:n,lang:s}=t.value,o=Object.keys(n).find(r=>n[r].lang===s);return I(o||"/")}),title:h(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:h(()=>e.data.description||t.value.description)}}function C(){const e=Ae(Me);if(!e)throw new Error("vitepress data not properly injected in app");return e}function zt(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function I(e){return Be.test(e)?e:zt(ne.value.base,e)}function De(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),S){const n="/js-hign/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const Oe=Symbol(),me="http://a.com",Wt=()=>({path:"/",component:null,data:null});function Gt(e,t){const n=ut(Wt());function s(a=S?location.href:"/"){const i=new URL(a,me);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",a=i.pathname+i.search+i.hash),S&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",a)),r(a)}let o=null;async function r(a,i=0){const c=new URL(a,me),u=o=c.pathname;try{let _=e(u);if("then"in _&&typeof _.then=="function"&&(_=await _),o===u){o=null;const{default:v,__pageData:y}=_;if(!v)throw new Error(`Invalid route component: ${v}`);n.path=u,n.component=G(v),n.data=G(JSON.parse(y)),S&&dt(()=>{if(c.hash&&!i){let w=null;try{w=document.querySelector(decodeURIComponent(c.hash))}catch(L){console.warn(L)}if(w){ge(w,c.hash);return}}window.scrollTo(0,i)})}}catch(_){_.message.match(/fetch/)||console.error(_),o===u&&(o=null,n.path=u,n.component=t?G(t):null)}}return S&&(window.addEventListener("click",a=>{const i=a.target.closest("a");if(i){const{href:c,protocol:u,hostname:_,pathname:v,hash:y,target:w}=i,L=window.location,N=v.match(/\.\w+$/);!a.ctrlKey&&!a.shiftKey&&!a.altKey&&!a.metaKey&&w!=="_blank"&&u===L.protocol&&_===L.hostname&&!(N&&N[0]!==".html")&&(a.preventDefault(),v===L.pathname?y&&y!==L.hash&&(history.pushState(null,"",y),window.dispatchEvent(new Event("hashchange")),ge(i,y,i.classList.contains("header-anchor"))):s(c))}},{capture:!0}),window.addEventListener("popstate",a=>{r(location.href,a.state&&a.state.scrollPosition||0)}),window.addEventListener("hashchange",a=>{a.preventDefault()})),{route:n,go:s}}function Kt(){const e=Ae(Oe);if(!e)throw new Error("useRouter() is called without provider.");return e}function T(){return Kt().route}function ge(e,t,n=!1){let s=null;try{s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(o){console.warn(o)}if(s){const o=s.offsetTop;!n||Math.abs(o-window.scrollY)>window.innerHeight?window.scrollTo(0,o):window.scrollTo({left:0,top:o,behavior:"smooth"})}}function Jt(e,t){let n=[],s=!0;const o=r=>{if(s){s=!1;return}const a=[],i=Math.min(n.length,r.length);for(let c=0;c<i;c++){let u=n[c];const[_,v,y=""]=r[c];if(u.tagName.toLocaleLowerCase()===_){for(const w in v)u.getAttribute(w)!==v[w]&&u.setAttribute(w,v[w]);for(let w=0;w<u.attributes.length;w++){const L=u.attributes[w].name;L in v||u.removeAttribute(L)}u.innerHTML!==y&&(u.innerHTML=y)}else document.head.removeChild(u),u=be(r[c]),document.head.append(u);a.push(u)}n.slice(i).forEach(c=>document.head.removeChild(c)),r.slice(i).forEach(c=>{const u=be(c);document.head.appendChild(u),a.push(u)}),n=a};ft(()=>{const r=e.data,a=t.value,i=r&&r.title,c=r&&r.description,u=r&&r.frontmatter.head;document.title=(i?i+" | ":"")+a.title,document.querySelector("meta[name=description]").setAttribute("content",c||a.description),o([...u?Yt(u):[]])})}function be([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function Xt(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Yt(e){return e.filter(t=>!Xt(t))}const Vt=$({name:"VitePressContent",setup(){const e=T();return()=>H("div",{style:{position:"relative"}},[e.component?H(e.component):null])}});const Qt=/#.*$/,Zt=/(index)?\.(md|html)$/,U=/\/$/,en=/^[a-z]+:/i;function se(e){return Array.isArray(e)}function oe(e){return en.test(e)}function tn(e,t){if(t===void 0)return!1;const n=$e(`/${e.data.relativePath}`),s=$e(t);return n===s}function $e(e){return decodeURI(e).replace(Qt,"").replace(Zt,"")}function nn(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function Z(e){return/^\//.test(e)?e:`/${e}`}function Ue(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function sn(e){return e===!1||e==="auto"||se(e)}function on(e){return e.children!==void 0}function rn(e){return se(e)?e.length===0:!e}function re(e,t){if(sn(e))return e;t=Z(t);for(const n in e)if(t.startsWith(Z(n)))return e[n];return"auto"}function je(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Ue(n.link)}),on(n)&&(t=[...t,...je(n.children)]),t),[])}const an=["href","aria-label"],cn=["src"],ln=$({setup(e){const{site:t,theme:n,localePath:s}=C();return(o,r)=>(d(),p("a",{class:"nav-bar-title",href:l(s),"aria-label":`${l(t).title}, back to home`},[l(n).logo?(d(),p("img",{key:0,class:"logo",src:l(I)(l(n).logo),alt:"Logo"},null,8,cn)):b("",!0),ee(" "+A(l(t).title),1)],8,an))}});var un=x(ln,[["__scopeId","data-v-4a583abe"]]);function dn(){const{site:e,localePath:t,theme:n}=C();return h(()=>{const s=e.value.langs,o=Object.keys(s);if(o.length<2)return null;const a=T().path.replace(t.value,""),i=o.map(u=>({text:s[u].label,link:`${u}${a}`}));return{text:n.value.selectText||"Languages",items:i}})}const fn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function pn(){const{site:e}=C();return h(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=hn(n);return{text:_n(s,t.repoLabel),link:s}})}function hn(e){return Be.test(e)?e:`https://github.com/${e}`}function _n(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=fn.find(([o,r])=>r.test(n[0]));return s&&s[0]?s[0]:"Source"}function qe(e){const t=T(),n=oe(e.value.link);return{props:h(()=>{const o=we(`/${t.data.relativePath}`);let r=!1;if(e.value.activeMatch)r=new RegExp(e.value.activeMatch).test(o);else{const a=we(e.value.link);r=a==="/"?a===o:o.startsWith(a)}return{class:{active:r,isExternal:n},href:n?e.value.link:I(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function we(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const vn={},mn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},gn=f("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),bn=f("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),$n=[gn,bn];function wn(e,t){return d(),p("svg",mn,$n)}var ae=x(vn,[["render",wn]]);const kn={class:"nav-link"},xn=$({props:{item:null},setup(e){const n=Pe(e),{props:s,isExternal:o}=qe(n.item);return(r,a)=>(d(),p("div",kn,[f("a",Te({class:"item"},l(s)),[ee(A(e.item.text)+" ",1),l(o)?(d(),E(ae,{key:0})):b("",!0)],16)]))}});var ke=x(xn,[["__scopeId","data-v-b8818f8c"]]);const yn=e=>(Ne("data-v-bbc27490"),e=e(),Re(),e),Ln={class:"nav-dropdown-link-item"},Sn=yn(()=>f("span",{class:"arrow"},null,-1)),Cn={class:"text"},En={class:"icon"},An=$({props:{item:null},setup(e){const n=Pe(e),{props:s,isExternal:o}=qe(n.item);return(r,a)=>(d(),p("div",Ln,[f("a",Te({class:"item"},l(s)),[Sn,f("span",Cn,A(e.item.text),1),f("span",En,[l(o)?(d(),E(ae,{key:0})):b("",!0)])],16)]))}});var Pn=x(An,[["__scopeId","data-v-bbc27490"]]);const Tn=["aria-label"],Nn={class:"button-text"},Rn={class:"dialog"},Hn=$({props:{item:null},setup(e){const t=T(),n=q(!1);F(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,r)=>(d(),p("div",{class:O(["nav-dropdown-link",{open:n.value}])},[f("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[f("span",Nn,A(e.item.text),1),f("span",{class:O(["button-arrow",n.value?"down":"right"])},null,2)],8,Tn),f("ul",Rn,[(d(!0),p(z,null,te(e.item.items,a=>(d(),p("li",{key:a.text,class:"dialog-item"},[g(Pn,{item:a},null,8,["item"])]))),128))])],2))}});var xe=x(Hn,[["__scopeId","data-v-56bf3a3f"]]);const In={key:0,class:"nav-links"},Bn={key:1,class:"item"},Mn={key:2,class:"item"},Dn=$({setup(e){const{theme:t}=C(),n=dn(),s=pn(),o=h(()=>t.value.nav||s.value||n.value);return(r,a)=>l(o)?(d(),p("nav",In,[l(t).nav?(d(!0),p(z,{key:0},te(l(t).nav,i=>(d(),p("div",{key:i.text,class:"item"},[i.items?(d(),E(xe,{key:0,item:i},null,8,["item"])):(d(),E(ke,{key:1,item:i},null,8,["item"]))]))),128)):b("",!0),l(n)?(d(),p("div",Bn,[g(xe,{item:l(n)},null,8,["item"])])):b("",!0),l(s)?(d(),p("div",Mn,[g(ke,{item:l(s)},null,8,["item"])])):b("",!0)])):b("",!0)}});var Fe=x(Dn,[["__scopeId","data-v-eab3edfe"]]);const On={emits:["toggle"]},Un=f("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[f("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),jn=[Un];function qn(e,t,n,s,o,r){return d(),p("div",{class:"sidebar-button",onClick:t[0]||(t[0]=a=>e.$emit("toggle"))},jn)}var Fn=x(On,[["render",qn]]);const zn=e=>(Ne("data-v-675d8756"),e=e(),Re(),e),Wn={class:"nav-bar"},Gn=zn(()=>f("div",{class:"flex-grow"},null,-1)),Kn={class:"nav"},Jn=$({emits:["toggle"],setup(e){return(t,n)=>(d(),p("header",Wn,[g(Fn,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),g(un),Gn,f("div",Kn,[g(Fe)]),k(t.$slots,"search",{},void 0,!0)]))}});var Xn=x(Jn,[["__scopeId","data-v-675d8756"]]);function Yn(){let e=null,t=null;const n=ts(s,300);function s(){const a=Vn(),i=Qn(a);for(let c=0;c<i.length;c++){const u=i[c],_=i[c+1],[v,y]=es(c,u,_);if(v){history.replaceState(null,document.title,y||" "),o(y);return}}}function o(a){if(r(t),r(e),t=document.querySelector(`.sidebar a[href="${a}"]`),!t)return;t.classList.add("active");const i=t.closest(".sidebar-links > ul > li");i&&i!==t.parentElement?(e=i.querySelector("a"),e&&e.classList.add("active")):e=null}function r(a){a&&a.classList.remove("active")}B(()=>{s(),window.addEventListener("scroll",n)}),pt(()=>{o(decodeURIComponent(location.hash))}),He(()=>{window.removeEventListener("scroll",n)})}function Vn(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function Qn(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function Zn(){return document.querySelector(".nav-bar").offsetHeight}function ye(e){const t=Zn();return e.parentElement.offsetTop-t-15}function es(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<ye(t)?[!1,null]:!n||s<ye(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function ts(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function ns(){const e=T(),{site:t}=C();return Yn(),h(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Le(n,o);const r=re(t.value.themeConfig.sidebar,e.data.relativePath);return r===!1?[]:r==="auto"?Le(n,o):r})}function Le(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:r,slug:a})=>{if(o-1>t)return;const i={text:r,link:`#${a}`};o===2?(s=i,n.push(i)):s&&(s.children||(s.children=[])).push(i)}),n}const ze=e=>{const t=T(),{site:n,frontmatter:s}=C(),o=e.depth||1,r=s.value.sidebarDepth||1/0,a=t.data.headers,i=e.item.text,c=ss(n.value.base,e.item.link),u=e.item.children,_=tn(t,e.item.link),v=o<r?We(_,u,a,o+1):null;return H("li",{class:"sidebar-link"},[H(c?"a":"p",{class:{"sidebar-link-item":!0,active:_},href:c},i),v])};function ss(e,t){return t===void 0||t.startsWith("#")?t:nn(e,t)}function We(e,t,n,s=1){return t&&t.length>0?H("ul",{class:"sidebar-links"},t.map(o=>H(ze,{item:o,depth:s}))):e&&n?We(!1,os(n),void 0,s):null}function os(e){return Ge(rs(e))}function rs(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Ge(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Ge(t.children):void 0}))}const as={key:0,class:"sidebar-links"},is=$({setup(e){const t=ns();return(n,s)=>l(t).length>0?(d(),p("ul",as,[(d(!0),p(z,null,te(l(t),o=>(d(),E(l(ze),{item:o},null,8,["item"]))),256))])):b("",!0)}});const cs=$({props:{open:{type:Boolean}},setup(e){return(t,n)=>(d(),p("aside",{class:O(["sidebar",{open:e.open}])},[g(Fe,{class:"nav"}),k(t.$slots,"sidebar-top",{},void 0,!0),g(is),k(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var ls=x(cs,[["__scopeId","data-v-83e92a68"]]);const us=/bitbucket.org/;function ds(){const{page:e,theme:t,frontmatter:n}=C(),s=h(()=>{const{repo:r,docsDir:a="",docsBranch:i="master",docsRepo:c=r,editLinks:u}=t.value,_=n.value.editLink!=null?n.value.editLink:u,{relativePath:v}=e.value;return!_||!v||!r?null:fs(r,c,a,i,v)}),o=h(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function fs(e,t,n,s,o){return us.test(e)?hs(e,t,n,s,o):ps(e,t,n,s,o)}function ps(e,t,n,s,o){return(oe(t)?t:`https://github.com/${t}`).replace(U,"")+`/edit/${s}/`+(n?n.replace(U,"")+"/":"")+o}function hs(e,t,n,s,o){return(oe(t)?t:e).replace(U,"")+`/src/${s}/`+(n?n.replace(U,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const _s={class:"edit-link"},vs=["href"],ms=$({setup(e){const{url:t,text:n}=ds();return(s,o)=>(d(),p("div",_s,[l(t)?(d(),p("a",{key:0,class:"link",href:l(t),target:"_blank",rel:"noopener noreferrer"},[ee(A(l(n))+" ",1),g(ae,{class:"icon"})],8,vs)):b("",!0)]))}});var gs=x(ms,[["__scopeId","data-v-1ed99556"]]);const bs={key:0,class:"last-updated"},$s={class:"prefix"},ws={class:"datetime"},ks=$({setup(e){const{theme:t,page:n}=C(),s=h(()=>{const a=t.value.lastUpdated;return a!==void 0&&a!==!1}),o=h(()=>{const a=t.value.lastUpdated;return a===!0?"Last Updated":a}),r=q("");return B(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(a,i)=>l(s)?(d(),p("p",bs,[f("span",$s,A(l(o))+":",1),f("span",ws,A(r.value),1)])):b("",!0)}});var xs=x(ks,[["__scopeId","data-v-5797b537"]]);const ys={class:"page-footer"},Ls={class:"edit"},Ss={class:"updated"},Cs=$({setup(e){return(t,n)=>(d(),p("footer",ys,[f("div",Ls,[g(gs)]),f("div",Ss,[g(xs)])]))}});var Es=x(Cs,[["__scopeId","data-v-fb8d84c6"]]);function As(){const{page:e,theme:t}=C(),n=h(()=>Ue(Z(e.value.relativePath))),s=h(()=>{const c=re(t.value.sidebar,n.value);return se(c)?je(c):[]}),o=h(()=>s.value.findIndex(c=>c.link===n.value)),r=h(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),a=h(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),i=h(()=>!!r.value||!!a.value);return{next:r,prev:a,hasLinks:i}}const Ps={},Ts={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ns=f("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Rs=[Ns];function Hs(e,t){return d(),p("svg",Ts,Rs)}var Is=x(Ps,[["render",Hs]]);const Bs={},Ms={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ds=f("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Os=[Ds];function Us(e,t){return d(),p("svg",Ms,Os)}var js=x(Bs,[["render",Us]]);const qs={key:0,class:"next-and-prev-link"},Fs={class:"container"},zs={class:"prev"},Ws=["href"],Gs={class:"text"},Ks={class:"next"},Js=["href"],Xs={class:"text"},Ys=$({setup(e){const{hasLinks:t,prev:n,next:s}=As();return(o,r)=>l(t)?(d(),p("div",qs,[f("div",Fs,[f("div",zs,[l(n)?(d(),p("a",{key:0,class:"link",href:l(I)(l(n).link)},[g(Is,{class:"icon icon-prev"}),f("span",Gs,A(l(n).text),1)],8,Ws)):b("",!0)]),f("div",Ks,[l(s)?(d(),p("a",{key:0,class:"link",href:l(I)(l(s).link)},[f("span",Xs,A(l(s).text),1),g(js,{class:"icon icon-next"})],8,Js)):b("",!0)])])])):b("",!0)}});var Vs=x(Ys,[["__scopeId","data-v-38ede35f"]]);const Qs={class:"page"},Zs={class:"container"},eo=$({setup(e){return(t,n)=>{const s=Y("Content");return d(),p("main",Qs,[f("div",Zs,[k(t.$slots,"top",{},void 0,!0),g(s,{class:"content"}),g(Es),g(Vs),k(t.$slots,"bottom",{},void 0,!0)])])}}});var to=x(eo,[["__scopeId","data-v-7eddb2c4"]]);const no={key:0,id:"ads-container"},so=$({setup(e){const t=ce(()=>import("./Home.0c84eb3b.js")),n=()=>null,s=n,o=n,r=ce(()=>import("./AlgoliaSearchBox.ae59e1bb.js")),a=T(),{site:i,page:c,theme:u,frontmatter:_}=C(),v=h(()=>!!_.value.customLayout),y=h(()=>!!_.value.home),w=h(()=>Object.keys(i.value.langs).length>1),L=h(()=>{const m=u.value;return _.value.navbar===!1||m.navbar===!1?!1:i.value.title||m.logo||m.repo||m.nav}),N=q(!1),Je=h(()=>_.value.home||_.value.sidebar===!1?!1:!rn(re(u.value.sidebar,a.data.relativePath))),W=m=>{N.value=typeof m=="boolean"?m:!N.value},Xe=W.bind(null,!1);F(a,Xe);const Ye=h(()=>[{"no-navbar":!L.value,"sidebar-open":N.value,"no-sidebar":!Je.value}]);return(m,ie)=>{const Ve=Y("Content"),Qe=Y("Debug");return d(),p(z,null,[f("div",{class:O(["theme",l(Ye)])},[l(L)?(d(),E(Xn,{key:0,onToggle:W},{search:P(()=>[k(m.$slots,"navbar-search",{},()=>[l(u).algolia?(d(),E(l(r),{key:0,options:l(u).algolia,multilang:l(w)},null,8,["options","multilang"])):b("",!0)])]),_:3})):b("",!0),g(ls,{open:N.value},{"sidebar-top":P(()=>[k(m.$slots,"sidebar-top")]),"sidebar-bottom":P(()=>[k(m.$slots,"sidebar-bottom")]),_:3},8,["open"]),f("div",{class:"sidebar-mask",onClick:ie[0]||(ie[0]=bo=>W(!1))}),l(v)?(d(),E(Ve,{key:1})):l(y)?k(m.$slots,"home",{key:2},()=>[g(l(t),null,{hero:P(()=>[k(m.$slots,"home-hero")]),features:P(()=>[k(m.$slots,"home-features")]),footer:P(()=>[k(m.$slots,"home-footer")]),_:3})]):(d(),E(to,{key:3},{top:P(()=>[k(m.$slots,"page-top-ads",{},()=>[l(u).carbonAds&&l(u).carbonAds.carbon?(d(),p("div",no,[(d(),E(l(s),{key:"carbon"+l(c).relativePath,code:l(u).carbonAds.carbon,placement:l(u).carbonAds.placement},null,8,["code","placement"]))])):b("",!0)]),k(m.$slots,"page-top")]),bottom:P(()=>[k(m.$slots,"page-bottom"),k(m.$slots,"page-bottom-ads",{},()=>[l(u).carbonAds&&l(u).carbonAds.custom?(d(),E(l(o),{key:"custom"+l(c).relativePath,code:l(u).carbonAds.custom,placement:l(u).carbonAds.placement},null,8,["code","placement"])):b("",!0)])]),_:3}))],2),g(Qe)],64)}}}),oo={class:"theme"},ro=f("h1",null,"404",-1),ao=["href"],io=$({setup(e){const{site:t}=C(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,r)=>(d(),p("div",oo,[ro,f("blockquote",null,A(s()),1),f("a",{href:l(t).base,"aria-label":"go to home"},"Take me home.",8,ao)]))}}),j={Layout:so,NotFound:io};const X=new Set,Ke=()=>document.createElement("link"),co=e=>{const t=Ke();t.rel="prefetch",t.href=e,document.head.appendChild(t)},lo=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let M;const uo=S&&(M=Ke())&&M.relList&&M.relList.supports&&M.relList.supports("prefetch")?co:lo;function fo(){if(!S||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(a=>{if(a.isIntersecting){const i=a.target;n.unobserve(i);const{pathname:c}=i;if(!X.has(c)){X.add(c);const u=De(c);uo(u)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:a,hostname:i,pathname:c}=r,u=c.match(/\.\w+$/);u&&u[0]!==".html"||a!=="_blank"&&i===location.hostname&&(c!==location.pathname?n.observe(r):X.add(c))})})};B(s);const o=T();F(()=>o.path,s),He(()=>{n&&n.disconnect()})}const po=$({setup(e,{slots:t}){const n=q(!1);return B(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),ho=j.NotFound||(()=>"404 Not Found"),_o={name:"VitePressApp",setup(){const{site:e}=C();return B(()=>{F(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),fo(),()=>H(j.Layout)}};function vo(){const e=go(),t=mo();t.provide(Oe,e);const n=Ft(e.route);return t.provide(Me,n),S&&Jt(e.route,n.site),t.component("Content",Vt),t.component("ClientOnly",po),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),j.enhanceApp&&j.enhanceApp({app:t,router:e,siteData:ne}),{app:t,router:e}}function mo(){return It(_o)}function go(){let e=S,t;return Gt(n=>{let s=De(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),S?(e=!1,import(s)):require(s)},ho)}if(S){const{app:e,router:t}=vo();t.go().then(()=>{e.mount("#app")})}export{ke as N,T as a,Kt as b,vo as createApp,C as u,I as w};
