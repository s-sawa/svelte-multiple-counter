import{n as p,s as E}from"./scheduler.659ee57f.js";const u=[];function x(e,t){return{subscribe:d(e,t).subscribe}}function d(e,t=p){let n;const o=new Set;function r(s){if(E(e,s)&&(e=s,n)){const c=!u.length;for(const i of o)i[1](),u.push(i,e);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function l(s){r(s(e))}function a(s,c=p){const i=[s,c];return o.add(i),o.size===1&&(n=t(r,l)||p),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:a}}var g;const A=((g=globalThis.__sveltekit_191p19a)==null?void 0:g.base)??"";var k;const R=((k=globalThis.__sveltekit_191p19a)==null?void 0:k.assets)??A,S="1701742738753",O="sveltekit:snapshot",U="sveltekit:scroll",L="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1},m=location.origin;function N(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function P(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...b,"":b.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function V(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function Y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||y(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===m&&e.hasAttribute("download");return{url:n,external:r,target:o,download:l}}function j(e){let t=null,n=null,o=null,r=null,l=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),l===null&&(l=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=v(s);function c(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:_[o??"off"],preload_data:_[r??"off"],keep_focus:c(t),noscroll:c(n),reload:c(l),replace_state:c(a)}}function h(e){const t=d(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function l(a){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&a(s=c)})}return{notify:o,set:r,subscribe:l}}function T(){const{set:e,subscribe:t}=d(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${R}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==S;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function y(e,t){return e.origin!==m||!e.pathname.startsWith(t)}let w;function q(e){w=e.client}function K(e){return(...t)=>w[e](...t)}const $={url:h({}),page:h({}),navigating:d(null),updated:T()};export{L as I,b as P,U as S,O as a,Y as b,j as c,$ as d,A as e,V as f,N as g,q as h,y as i,K as j,w as k,m as o,x as r,P as s,d as w};