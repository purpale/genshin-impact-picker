import{S as O,i as P,s as $,k as d,a as S,X as W,l as h,h as f,c as q,m as C,n as p,G as b,b as w,f as g,t as v,d as I,P as A,o as N,v as R,w as G,x as L,y as X,g as Y}from"../../../../chunks/index-f308d2aa.js";import{p as j}from"../../../../chunks/stores-6fcbf25a.js";import{g as z}from"../../../../chunks/navigation-1518871f.js";import{Y as B}from"../../../../chunks/runtime.esm-f063991c.js";import{A as E}from"../../../../chunks/env-f184adc0.js";import{d as F,a as H}from"../../../../chunks/outfit-fe887b40.js";import{W as J,f as K}from"../../../../chunks/WishResult-073b8507.js";function D(l){let n,a;return n=new J({props:{list:l[0],isOutfit:l[2],skip:!0,standalone:!0}}),{c(){R(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,o){L(n,t,o),a=!0},p(t,o){const c={};o&1&&(c.list=t[0]),o&4&&(c.isOutfit=t[2]),n.$set(c)},i(t){a||(g(n.$$.fragment,t),a=!0)},o(t){v(n.$$.fragment,t),a=!1},d(t){X(n,t)}}}function Q(l){let n,a,t,o,c,m,u;document.title=n=`
		`+l[3](`${l[1]}.name`)+" | "+l[3]("title")+`
	`;let e=l[0].length>0&&D(l);return{c(){a=d("meta"),t=d("meta"),o=d("meta"),c=S(),m=d("section"),e&&e.c(),this.h()},l(s){const i=W('[data-svelte="svelte-h0ssec"]',document.head);a=h(i,"META",{name:!0,content:!0}),t=h(i,"META",{property:!0,content:!0}),o=h(i,"META",{property:!0,content:!0}),i.forEach(f),c=q(s),m=h(s,"SECTION",{class:!0});var r=C(m);e&&e.l(r),r.forEach(f),this.h()},h(){p(a,"name","title"),p(a,"content",E),p(t,"property","og:title"),p(t,"content",E),p(o,"property","twitter:title"),p(o,"content",E),p(m,"class","svelte-1bfm8fx")},m(s,i){b(document.head,a),b(document.head,t),b(document.head,o),w(s,c,i),w(s,m,i),e&&e.m(m,null),u=!0},p(s,[i]){(!u||i&10)&&n!==(n=`
		`+s[3](`${s[1]}.name`)+" | "+s[3]("title")+`
	`)&&(document.title=n),s[0].length>0?e?(e.p(s,i),i&1&&g(e,1)):(e=D(s),e.c(),g(e,1),e.m(m,null)):e&&(Y(),v(e,1,1,()=>{e=null}),I())},i(s){u||(g(e),u=!0)},o(s){v(e),u=!1},d(s){f(a),f(t),f(o),s&&f(c),s&&f(m),e&&e.d()}}}function U(l,n,a){let t,o;A(l,j,r=>a(4,t=r)),A(l,B,r=>a(3,o=r));let c=[],m="",u=!1;const{url:e}=t,s=r=>{const{name:_,type:y,useOutfit:T}=r;a(1,m=_),a(2,u=T);const k=(y==="character"?F:H).find(M=>M.name===_);return{...r,...k}};return N(()=>{try{const r=e.searchParams.get("a");if(!r)throw new Error("no Data");const _=K.single(r),y=s(_);a(0,c=[y])}catch{console.error("something Wrong"),z("/")}}),[c,m,u,o]}class ot extends O{constructor(n){super(),P(this,n,U,Q,$,{})}}export{ot as default};
