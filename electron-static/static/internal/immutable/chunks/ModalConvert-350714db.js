import{S as He,i as Oe,s as Ue,v as G,a as y,w as Y,c as I,x as Z,b as fe,f as j,t as J,y as K,h as i,P as Se,Z as Ne,V as qe,k as p,q as w,l as c,m,r as D,n as u,p as ye,F as Ae,G as t,u as A}from"./index-f308d2aa.js";import{Y as ze}from"./runtime.esm-f063991c.js";import{h as Re,p as Fe}from"./app-stores-2ed5feba.js";import{a as ke}from"./index-2f7744fb.js";import{p as Be}from"./audio-e5af375c.js";import{I as Ie}from"./WishResult-073b8507.js";import{M as Ge}from"./_page-344018f3.js";import{M as Ye,R as Ze}from"./_modal-balance-412c3d1f.js";function Te(a){let s,n=a[2]("shop.insufficient")+"",l;return{c(){s=p("div"),l=w(n),this.h()},l(r){s=c(r,"DIV",{class:!0});var e=m(s);l=D(e,n),e.forEach(i),this.h()},h(){u(s,"class","error red svelte-5sh5yx")},m(r,e){fe(r,s,e),t(s,l)},p(r,e){e&4&&n!==(n=r[2]("shop.insufficient")+"")&&A(l,n)},d(r){r&&i(s)}}}function je(a){let s,n,l,r,e,v,h,C=a[2]("shop.item.genesis")+"",B,_,g,M,R,pe,T,L=a[2]("shop.item.primogem")+"",ee,ce,H,Q,me,P,S,O,W=a[2]("shop.qty")+"",se,ue,de,U,X=(a[1]<1?1:a[0])+"",te,ve,V,N,he,$,x=a[2]("shop.consume")+"",ae,_e,k,ge,q,ne,$e,b;e=new Ie({props:{type:"genesis",width:"50%"}}),R=new Ie({props:{type:"primogem",width:"50%"}}),N=new Ze({props:{value:a[1]<1?1:a[0],min:a[1]<=1?0:1,max:a[1]||1,disabled:a[1]<1}}),k=new Ie({props:{type:"genesis"}});let d=a[1]<1&&Te(a);return{c(){s=p("div"),n=p("div"),l=p("div"),r=p("picture"),G(e.$$.fragment),v=y(),h=p("span"),B=w(C),_=y(),g=p("div"),M=p("picture"),G(R.$$.fragment),pe=y(),T=p("span"),ee=w(L),ce=y(),H=p("div"),Q=p("i"),me=y(),P=p("div"),S=p("div"),O=p("span"),se=w(W),ue=w(" :"),de=y(),U=p("span"),te=w(X),ve=y(),V=p("div"),G(N.$$.fragment),he=y(),$=p("div"),ae=w(x),_e=y(),G(k.$$.fragment),ge=y(),q=p("span"),ne=w(a[0]),$e=y(),d&&d.c(),this.h()},l(o){s=c(o,"DIV",{class:!0});var f=m(s);n=c(f,"DIV",{class:!0});var E=m(n);l=c(E,"DIV",{class:!0});var Ve=m(l);r=c(Ve,"PICTURE",{class:!0});var le=m(r);Y(e.$$.fragment,le),v=I(le),h=c(le,"SPAN",{class:!0});var be=m(h);B=D(be,C),be.forEach(i),le.forEach(i),Ve.forEach(i),_=I(E),g=c(E,"DIV",{class:!0});var we=m(g);M=c(we,"PICTURE",{class:!0});var re=m(M);Y(R.$$.fragment,re),pe=I(re),T=c(re,"SPAN",{class:!0});var De=m(T);ee=D(De,L),De.forEach(i),re.forEach(i),we.forEach(i),ce=I(E),H=c(E,"DIV",{class:!0});var Ce=m(H);Q=c(Ce,"I",{class:!0}),m(Q).forEach(i),Ce.forEach(i),E.forEach(i),me=I(f),P=c(f,"DIV",{class:!0});var oe=m(P);S=c(oe,"DIV",{class:!0});var ie=m(S);O=c(ie,"SPAN",{});var Ee=m(O);se=D(Ee,W),ue=D(Ee," :"),Ee.forEach(i),de=I(ie),U=c(ie,"SPAN",{style:!0});var Me=m(U);te=D(Me,X),Me.forEach(i),ie.forEach(i),ve=I(oe),V=c(oe,"DIV",{class:!0});var z=m(V);Y(N.$$.fragment,z),he=I(z),$=c(z,"DIV",{class:!0,style:!0});var F=m($);ae=D(F,x),_e=I(F),Y(k.$$.fragment,F),ge=I(F),q=c(F,"SPAN",{class:!0});var Pe=m(q);ne=D(Pe,a[0]),Pe.forEach(i),F.forEach(i),$e=I(z),d&&d.l(z),z.forEach(i),oe.forEach(i),f.forEach(i),this.h()},h(){u(h,"class","svelte-5sh5yx"),u(r,"class","svelte-5sh5yx"),u(l,"class","col genesis svelte-5sh5yx"),u(T,"class","svelte-5sh5yx"),u(M,"class","svelte-5sh5yx"),u(g,"class","col primo-exchange svelte-5sh5yx"),u(Q,"class","gi-arrow-right"),u(H,"class","divider svelte-5sh5yx"),u(n,"class","row genesis-exchange svelte-5sh5yx"),ye(U,"font-size","larger"),u(S,"class","rangeNumber svelte-5sh5yx"),u(q,"class","svelte-5sh5yx"),Ae(q,"red",a[1]<1),u($,"class","consume"),ye($,"display","inline-flex"),ye($,"align-items","center"),u(V,"class","rangeInput svelte-5sh5yx"),u(P,"class","slider svelte-5sh5yx"),u(s,"class","content svelte-5sh5yx")},m(o,f){fe(o,s,f),t(s,n),t(n,l),t(l,r),Z(e,r,null),t(r,v),t(r,h),t(h,B),t(n,_),t(n,g),t(g,M),Z(R,M,null),t(M,pe),t(M,T),t(T,ee),t(n,ce),t(n,H),t(H,Q),t(s,me),t(s,P),t(P,S),t(S,O),t(O,se),t(O,ue),t(S,de),t(S,U),t(U,te),t(P,ve),t(P,V),Z(N,V,null),t(V,he),t(V,$),t($,ae),t($,_e),Z(k,$,null),t($,ge),t($,q),t(q,ne),t(V,$e),d&&d.m(V,null),b=!0},p(o,f){(!b||f&4)&&C!==(C=o[2]("shop.item.genesis")+"")&&A(B,C),(!b||f&4)&&L!==(L=o[2]("shop.item.primogem")+"")&&A(ee,L),(!b||f&4)&&W!==(W=o[2]("shop.qty")+"")&&A(se,W),(!b||f&3)&&X!==(X=(o[1]<1?1:o[0])+"")&&A(te,X);const E={};f&3&&(E.value=o[1]<1?1:o[0]),f&2&&(E.min=o[1]<=1?0:1),f&2&&(E.max=o[1]||1),f&2&&(E.disabled=o[1]<1),N.$set(E),(!b||f&4)&&x!==(x=o[2]("shop.consume")+"")&&A(ae,x),(!b||f&1)&&A(ne,o[0]),f&2&&Ae(q,"red",o[1]<1),o[1]<1?d?d.p(o,f):(d=Te(o),d.c(),d.m(V,null)):d&&(d.d(1),d=null)},i(o){b||(j(e.$$.fragment,o),j(R.$$.fragment,o),j(N.$$.fragment,o),j(k.$$.fragment,o),b=!0)},o(o){J(e.$$.fragment,o),J(R.$$.fragment,o),J(N.$$.fragment,o),J(k.$$.fragment,o),b=!1},d(o){o&&i(s),K(e),K(R),K(N),K(k),d&&d.d()}}}function Je(a){let s,n=a[2]("shop.purchaseButton")+"",l;return{c(){s=p("div"),l=w(n),this.h()},l(r){s=c(r,"DIV",{slot:!0});var e=m(s);l=D(e,n),e.forEach(i),this.h()},h(){u(s,"slot","confirmtext")},m(r,e){fe(r,s,e),t(s,l)},p(r,e){e&4&&n!==(n=r[2]("shop.purchaseButton")+"")&&A(l,n)},d(r){r&&i(s)}}}function Ke(a){let s,n,l,r;return s=new Ye({}),l=new Ge({props:{title:a[2]("shop.exchangeHeading"),disabled:a[1]<1,$$slots:{confirmtext:[Je],default:[je]},$$scope:{ctx:a}}}),l.$on("cancel",a[3]),l.$on("confirm",a[4]),{c(){G(s.$$.fragment),n=y(),G(l.$$.fragment)},l(e){Y(s.$$.fragment,e),n=I(e),Y(l.$$.fragment,e)},m(e,v){Z(s,e,v),fe(e,n,v),Z(l,e,v),r=!0},p(e,[v]){const h={};v&4&&(h.title=e[2]("shop.exchangeHeading")),v&2&&(h.disabled=e[1]<1),v&135&&(h.$$scope={dirty:v,ctx:e}),l.$set(h)},i(e){r||(j(s.$$.fragment,e),j(l.$$.fragment,e),r=!0)},o(e){J(s.$$.fragment,e),J(l.$$.fragment,e),r=!1},d(e){K(s,e),e&&i(n),K(l,e)}}}function Le(a,s,n){let l,r;Se(a,Re,_=>n(1,l=_)),Se(a,ze,_=>n(2,r=_));let e=1;Ne("setValue",_=>n(0,e=_));const v=qe("openObtained"),h=qe("closeConvertModal"),C=()=>{h(),Be("close")};Ne("closeModal",C);const B=()=>{Fe.update(_=>{const g=_+e;return ke.set("primogem",g),g}),Re.update(_=>{const g=_-e;return ke.set("genesis",g),g}),Be(),h(),v([{item:"primogem",qty:e}])};return a.$$.update=()=>{a.$$.dirty&3&&n(0,e=e>l?l:parseInt(e))},[e,l,r,C,B]}class ns extends He{constructor(s){super(),Oe(this,s,Le,Ke,Ue,{})}}export{ns as default};
