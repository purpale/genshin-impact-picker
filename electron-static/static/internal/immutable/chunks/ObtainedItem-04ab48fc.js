import{S as fe,i as ue,s as ve,k as g,a as N,q as K,l as w,m as q,h as d,c as T,r as L,n as b,b as J,G as i,O as ne,u as M,f as G,g as re,d as ie,K as he,L as _e,t as R,aa as ce,P as Z,V as de,o as me,a4 as pe,e as x,ak as be,v as ge,w as we,p as ee,x as qe,aj as Ee,y as Ie,A as ke}from"./index-f308d2aa.js";import{m as De}from"./index-2f7744fb.js";import{Y as ye}from"./runtime.esm-f063991c.js";import{h as F,I as Ve}from"./WishResult-832fdba1.js";import{a as Se}from"./app-stores-4e7315fd.js";import{p as Oe}from"./audio-e5af375c.js";function te(l,t,a){const e=l.slice();return e[7]=t[a].item,e[8]=t[a].qty,e}function se(l,t,a){const e=l.slice();return e[11]=t[a],e}function ae(l){let t,a,e,o,c,p,D,I,S=l[8]+"",v,j,k,O=l[1](`shop.item.${l[7]}`)+"",H,B,y,V,A,P;o=new Ve({props:{width:"100%",type:l[7]}});let C=Array(l[3](l[7])),_=[];for(let s=0;s<C.length;s+=1)_[s]=le(se(l,C,s));return{c(){t=g("div"),a=g("div"),e=g("div"),ge(o.$$.fragment),c=N(),p=g("div");for(let s=0;s<_.length;s+=1)_[s].c();D=N(),I=g("span"),v=K(S),j=N(),k=g("div"),H=K(O),B=N(),this.h()},l(s){t=w(s,"DIV",{class:!0});var m=q(t);a=w(m,"DIV",{class:!0});var E=q(a);e=w(E,"DIV",{class:!0,style:!0});var f=q(e);we(o.$$.fragment,f),c=T(f),p=w(f,"DIV",{class:!0});var r=q(p);for(let h=0;h<_.length;h+=1)_[h].l(r);r.forEach(d),f.forEach(d),D=T(E),I=w(E,"SPAN",{class:!0});var Y=q(I);v=L(Y,S),Y.forEach(d),E.forEach(d),j=T(m),k=w(m,"DIV",{class:!0});var n=q(k);H=L(n,O),n.forEach(d),B=T(m),m.forEach(d),this.h()},h(){b(p,"class","star svelte-1v6bqwa"),b(e,"class","pic svelte-1v6bqwa"),ee(e,"--bg","url('"+l[2][`${l[3](l[7])}star-bg.webp`]+"')"),b(I,"class","svelte-1v6bqwa"),b(a,"class","body svelte-1v6bqwa"),b(k,"class","name svelte-1v6bqwa"),b(t,"class",y="item "+l[7]+" svelte-1v6bqwa")},m(s,m){J(s,t,m),i(t,a),i(a,e),qe(o,e,null),i(e,c),i(e,p);for(let E=0;E<_.length;E+=1)_[E].m(p,null);i(a,D),i(a,I),i(I,v),i(t,j),i(t,k),i(k,H),i(t,B),V=!0,A||(P=ne(t,"mousedown",Ee(l[5])),A=!0)},p(s,m){const E={};if(m&1&&(E.type=s[7]),o.$set(E),m&1){C=Array(s[3](s[7]));let f;for(f=0;f<C.length;f+=1){const r=se(s,C,f);_[f]?_[f].p(r,m):(_[f]=le(),_[f].c(),_[f].m(p,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=C.length}(!V||m&5)&&ee(e,"--bg","url('"+s[2][`${s[3](s[7])}star-bg.webp`]+"')"),(!V||m&1)&&S!==(S=s[8]+"")&&M(v,S),(!V||m&3)&&O!==(O=s[1](`shop.item.${s[7]}`)+"")&&M(H,O),(!V||m&1&&y!==(y="item "+s[7]+" svelte-1v6bqwa"))&&b(t,"class",y)},i(s){V||(G(o.$$.fragment,s),V=!0)},o(s){R(o.$$.fragment,s),V=!1},d(s){s&&d(t),Ie(o),ce(_,s),A=!1,P()}}}function le(l){let t;return{c(){t=g("i"),this.h()},l(a){t=w(a,"I",{class:!0}),q(t).forEach(d),this.h()},h(){b(t,"class","gi-star svelte-1v6bqwa")},m(a,e){J(a,t,e)},p:ke,d(a){a&&d(t)}}}function oe(l){let t,a,e=l[8]>0&&ae(l);return{c(){e&&e.c(),t=x()},l(o){e&&e.l(o),t=x()},m(o,c){e&&e.m(o,c),J(o,t,c),a=!0},p(o,c){o[8]>0?e?(e.p(o,c),c&1&&G(e,1)):(e=ae(o),e.c(),G(e,1),e.m(t.parentNode,t)):e&&(re(),R(e,1,1,()=>{e=null}),ie())},i(o){a||(G(e),a=!0)},o(o){R(e),a=!1},d(o){e&&e.d(o),o&&d(t)}}}function Ce(l){let t,a,e,o,c,p,D=l[1]("obtained")+"",I,S,v,j,k,O=l[1]("extra")+"",H,B,y,V,A,P=l[1]("pressToContinue")+"",C,_,s,m,E,f=l[0],r=[];for(let n=0;n<f.length;n+=1)r[n]=oe(te(l,f,n));const Y=n=>R(r[n],1,1,()=>{r[n]=null});return{c(){t=g("section"),a=g("div"),e=g("div"),o=N(),c=g("div"),p=g("h3"),I=K(D),S=N(),v=g("i"),j=N(),k=g("h4"),H=K(O),B=N(),y=g("div");for(let n=0;n<r.length;n+=1)r[n].c();V=N(),A=g("h4"),C=K(P),this.h()},l(n){t=w(n,"SECTION",{class:!0});var h=q(t);a=w(h,"DIV",{class:!0});var u=q(a);e=w(u,"DIV",{class:!0}),q(e).forEach(d),o=T(u),c=w(u,"DIV",{class:!0});var $=q(c);p=w($,"H3",{class:!0});var z=q(p);I=L(z,D),S=T(z),v=w(z,"I",{class:!0}),q(v).forEach(d),z.forEach(d),j=T($),k=w($,"H4",{class:!0});var U=q(k);H=L(U,O),U.forEach(d),B=T($),y=w($,"DIV",{class:!0});var W=q(y);for(let Q=0;Q<r.length;Q+=1)r[Q].l(W);W.forEach(d),V=T($),A=w($,"H4",{class:!0});var X=q(A);C=L(X,P),X.forEach(d),$.forEach(d),u.forEach(d),h.forEach(d),this.h()},h(){b(e,"class","bg svelte-1v6bqwa"),b(v,"class","gi-primo-star svelte-1v6bqwa"),b(p,"class","title svelte-1v6bqwa"),b(k,"class","svelte-1v6bqwa"),b(y,"class","milestone svelte-1v6bqwa"),b(A,"class","msg svelte-1v6bqwa"),b(c,"class","content svelte-1v6bqwa"),b(a,"class","container svelte-1v6bqwa"),b(t,"class","svelte-1v6bqwa")},m(n,h){J(n,t,h),i(t,a),i(a,e),i(a,o),i(a,c),i(c,p),i(p,I),i(p,S),i(p,v),i(c,j),i(c,k),i(k,H),i(c,B),i(c,y);for(let u=0;u<r.length;u+=1)r[u].m(y,null);i(c,V),i(c,A),i(A,C),s=!0,m||(E=ne(t,"mousedown",l[4]),m=!0)},p(n,[h]){if((!s||h&2)&&D!==(D=n[1]("obtained")+"")&&M(I,D),(!s||h&2)&&O!==(O=n[1]("extra")+"")&&M(H,O),h&15){f=n[0];let u;for(u=0;u<f.length;u+=1){const $=te(n,f,u);r[u]?(r[u].p($,h),G(r[u],1)):(r[u]=oe($),r[u].c(),G(r[u],1),r[u].m(y,null))}for(re(),u=f.length;u<r.length;u+=1)Y(u);ie()}(!s||h&2)&&P!==(P=n[1]("pressToContinue")+"")&&M(C,P)},i(n){if(!s){for(let h=0;h<f.length;h+=1)G(r[h]);_||he(()=>{_=_e(c,De,{start:0,duration:200}),_.start()}),s=!0}},o(n){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)R(r[h]);s=!1},d(n){n&&d(t),ce(r,n),m=!1,E()}}}function $e(l,t,a){let e,o;Z(l,ye,v=>a(1,e=v)),Z(l,Se,v=>a(2,o=v));let{data:c=[{item:"primogem",qty:0}]}=t;const p=v=>v==="stardust"?4:5,D=de("closeObtained");me(()=>Oe("obtain"));const I=F.getScope();F("*","obtain",v=>{v.preventDefault(),D()}),F.setScope("obtain"),pe(()=>F.deleteScope("obtain",I));function S(v){be.call(this,l,v)}return l.$$set=v=>{"data"in v&&a(0,c=v.data)},[c,e,o,p,D,S]}class Be extends fe{constructor(t){super(),ue(this,t,$e,Ce,ve,{data:0})}}export{Be as default};
