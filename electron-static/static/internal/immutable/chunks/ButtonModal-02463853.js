import{S as O,i as P,s as T,k as g,a as Y,l as k,m as y,c as C,h as f,n as _,F as I,b as B,G as q,O as D,Y as F,f as A,t as M,P as G,N as H,$ as S,al as N,A as E,q as J,r as U,u as j,E as K,H as L,I as Q,J as R}from"./index-f308d2aa.js";import{Y as V}from"./runtime.esm-f063991c.js";function W(a){let t;return{c(){t=g("i"),this.h()},l(e){t=k(e,"I",{class:!0}),y(t).forEach(f),this.h()},h(){_(t,"class","gi-times svelte-1sz47b8")},m(e,l){B(e,t,l)},p:E,d(e){e&&f(t)}}}function X(a){let t;return{c(){t=g("i"),this.h()},l(e){t=k(e,"I",{class:!0}),y(t).forEach(f),this.h()},h(){_(t,"class","gi-circle-o svelte-1sz47b8")},m(e,l){B(e,t,l)},p:E,d(e){e&&f(t)}}}function Z(a){let t,e;return{c(){t=g("i"),this.h()},l(l){t=k(l,"I",{class:!0}),y(t).forEach(f),this.h()},h(){_(t,"class",e="gi-"+a[5]+" svelte-1sz47b8")},m(l,i){B(l,t,i)},p(l,i){i&32&&e!==(e="gi-"+l[5]+" svelte-1sz47b8")&&_(t,"class",e)},d(l){l&&f(t)}}}function p(a){let t,e=(a[1]||(a[0]==="confirm"?a[6]("confirmButton"):a[6]("cancelButton")))+"",l;return{c(){t=g("span"),l=J(e)},l(i){t=k(i,"SPAN",{});var n=y(t);l=U(n,e),n.forEach(f)},m(i,n){B(i,t,n),q(t,l)},p(i,n){n&67&&e!==(e=(i[1]||(i[0]==="confirm"?i[6]("confirmButton"):i[6]("cancelButton")))+"")&&j(l,e)},i:E,o:E,d(i){i&&f(t)}}}function w(a){let t;const e=a[10].default,l=K(e,a,a[9],null);return{c(){l&&l.c()},l(i){l&&l.l(i)},m(i,n){l&&l.m(i,n),t=!0},p(i,n){l&&l.p&&(!t||n&512)&&L(l,e,i,i[9],t?R(e,i[9],n,null):Q(i[9]),null)},i(i){t||(A(l,i),t=!0)},o(i){M(l,i),t=!1},d(i){l&&l.d(i)}}}function x(a){let t,e,l,i,n,u,h,d;function m(s,o){return s[5]?Z:s[0]==="confirm"?X:W}let r=m(a),c=r(a);const v=[w,p],b=[];function z(s,o){return s[7]?0:1}return l=z(a),i=b[l]=v[l](a),{c(){t=g("button"),c.c(),e=Y(),i.c(),this.h()},l(s){t=k(s,"BUTTON",{style:!0,class:!0});var o=y(t);c.l(o),e=C(o),i.l(o),o.forEach(f),this.h()},h(){t.disabled=a[2],_(t,"style",n=a[4]?`width:${a[4]}`:""),_(t,"class","svelte-1sz47b8"),I(t,"light",a[3])},m(s,o){B(s,t,o),c.m(t,null),q(t,e),b[l].m(t,null),u=!0,h||(d=D(t,"click",F(a[8])),h=!0)},p(s,[o]){r===(r=m(s))&&c?c.p(s,o):(c.d(1),c=r(s),c&&(c.c(),c.m(t,e))),i.p(s,o),(!u||o&4)&&(t.disabled=s[2]),(!u||o&16&&n!==(n=s[4]?`width:${s[4]}`:""))&&_(t,"style",n),o&8&&I(t,"light",s[3])},i(s){u||(A(i),u=!0)},o(s){M(i),u=!1},d(s){s&&f(t),c.d(),b[l].d(),h=!1,d()}}}function $(a,t,e){let l;G(a,V,s=>e(6,l=s));let{$$slots:i={},$$scope:n}=t;const u=t.$$slots;let{type:h="confirm"}=t,{text:d=""}=t,{disabled:m=!1}=t,{light:r=!1}=t,{width:c=""}=t,{icon:v=""}=t;const b=H(),z=()=>b("click");return a.$$set=s=>{e(12,t=S(S({},t),N(s))),"type"in s&&e(0,h=s.type),"text"in s&&e(1,d=s.text),"disabled"in s&&e(2,m=s.disabled),"light"in s&&e(3,r=s.light),"width"in s&&e(4,c=s.width),"icon"in s&&e(5,v=s.icon),"$$scope"in s&&e(9,n=s.$$scope)},t=N(t),[h,d,m,r,c,v,l,u,z,n,i]}class lt extends O{constructor(t){super(),P(this,t,$,x,T,{type:0,text:1,disabled:2,light:3,width:4,icon:5})}}export{lt as B};
