import{a as y,r as he,L as O,o as n,h as a,i as o,c as _,j as x,k as f,a2 as h,F as C,t as z,ac as ce,ad as me,a5 as T,a4 as E,X as ue,u as r,a3 as I,ae as pe,e as _e,w as fe,$ as ve,ab as ge,l as be,d as ke,_ as ye}from"./entry.bd4a98cc.js";import{f as we,_ as $e}from"./Header.vue.17d6732c.js";/* empty css                   */import L from"./Icon.7e6020fb.js";import{_ as xe}from"./nuxt-link.e80131d3.js";import{b as de,u as Ce,a as Ie}from"./states.70f923d6.js";import Te from"./ContentNavigation.b2efb725.js";import{_ as w}from"./_plugin-vue_export-helper.c27b6911.js";import Ee from"./ContentRendererMarkdown.dd64e8b9.js";import Le from"./ContentRenderer.4977898f.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./Icon.vue.d7643833.js";import"./asyncData.3ac2f11b.js";/* empty css                   *//* empty css                          *//* empty css                      *//* empty css                    */import"./index.a6ef77ff.js";const Oe=y({name:"ContentNavigationItem",props:{navItem:{type:Object,required:!0},parentPath:{type:String,default:void 0}},setup(){return{showChildren:he(!1),showContentTree:de()}},computed:{link(){var e,s;return(s=(e=this.navItem)==null?void 0:e.children)!=null&&s.length?this.navItem.children[0]._path:this.navItem._path},isActive(){const e=this.navItem._path;return e==="/"?this.$route.path==="/":this.$route.path.startsWith(e)},isExact(){return this.$route.path===this.navItem._path},haveChildren(){return!!this.navItem.children&&!!this.navItem.children.length}},created(){this.showChildren=this.isActive}});function ze(e,s,t,u,l,c){const p=L,d=xe,i=O("ContentNavigationItem",!0);return n(),a("li",null,[o("div",{class:x(["w-full flex items-center pl-5 py-1 border-r-2 hover:bg-gray-50 transition-colors",{"border-accent":e.isActive,"bg-tertiary-50":e.isExact,"border-accent-50":!e.isActive}])},[e.haveChildren?(n(),_(p,{key:0,name:"heroicons:chevron-right",class:x(["w-4 h-4 -ml-4 pr-1 transition-transform hover:cursor-pointer",{"rotate-90":e.showChildren}]),onClick:s[0]||(s[0]=m=>e.showChildren=!e.showChildren)},null,8,["class"])):f("",!0),h(d,{to:e.navItem._path,class:"w-full",onClick:s[1]||(s[1]=m=>e.showContentTree=!1)},{default:C(()=>[o("div",null,z(e.navItem.title),1)]),_:1},8,["to"])],2),ce(o("ul",null,[(n(!0),a(T,null,E(e.navItem.children,m=>(n(),_(i,{key:m._path,"nav-item":m,"parent-path":e.navItem._path},null,8,["nav-item","parent-path"]))),128))],512),[[me,e.haveChildren&&e.showChildren]])])}const Ae=w(Oe,[["render",ze],["__scopeId","data-v-233e6bed"]]),Se=""+new URL("github.9ed7f916.svg",import.meta.url).href,Ne=""+new URL("facebook.baf8439d.svg",import.meta.url).href,Re=""+new URL("twitter.dd85fa9f.svg",import.meta.url).href,Pe=""+new URL("linkedin.6bd1afdf.svg",import.meta.url).href,je=""+new URL("youtube.6f587a24.svg",import.meta.url).href,Fe={class:"flex flex-wrap gap-2"},Ue=["href"],Be={key:0,src:Se,alt:"Exactpro GitHub page",class:"icon"},He=["href"],Me={key:0,src:Ne,alt:"Exactpro Facebook page",class:"icon"},Ve=["href"],De={key:0,src:Re,class:"icon",alt:"Exactpro Twitter page"},qe=["href"],We={key:0,class:"icon",src:Pe,alt:"Exactpro LinkedIn page"},Xe=["href"],Ye={key:0,class:"icon",src:je,alt:"Exactpro Youtube account"},Ge=y({__name:"FooterSocial",setup(e){const t=ue().exactproDocs.social;return(u,l)=>{var p,d,i,m,g,b,k,v,$,A,S,N,R,P,j,F,U,B,H,M,V,D,q,W,X,Y,G,J,K,Q,Z,ee,te,oe,ne,se,re,ae,ie,le;const c=L;return n(),a("div",Fe,[(d=(p=r(t))==null?void 0:p.githhub)!=null&&d.disabled?f("",!0):(n(),a("a",{key:0,href:(m=(i=r(t))==null?void 0:i.githhub)==null?void 0:m.url,target:"_blank"},[(b=(g=r(t))==null?void 0:g.githhub)!=null&&b.customIcon?(n(),_(c,{key:1,class:"icon",name:(v=(k=r(t))==null?void 0:k.githhub)==null?void 0:v.customIcon},null,8,["name"])):(n(),a("img",Be))],8,Ue)),(A=($=r(t))==null?void 0:$.facebook)!=null&&A.disabled?f("",!0):(n(),a("a",{key:1,href:(N=(S=r(t))==null?void 0:S.facebook)==null?void 0:N.url,target:"_blank"},[(P=(R=r(t))==null?void 0:R.facebook)!=null&&P.customIcon?(n(),_(c,{key:1,class:"icon",name:(F=(j=r(t))==null?void 0:j.facebook)==null?void 0:F.customIcon},null,8,["name"])):(n(),a("img",Me))],8,He)),(B=(U=r(t))==null?void 0:U.twitter)!=null&&B.disabled?f("",!0):(n(),a("a",{key:2,href:(M=(H=r(t))==null?void 0:H.twitter)==null?void 0:M.url,target:"_blank"},[(D=(V=r(t))==null?void 0:V.twitter)!=null&&D.customIcon?(n(),_(c,{key:1,class:"icon",name:(W=(q=r(t))==null?void 0:q.twitter)==null?void 0:W.customIcon},null,8,["name"])):(n(),a("img",De))],8,Ve)),(Y=(X=r(t))==null?void 0:X.linkedin)!=null&&Y.disabled?f("",!0):(n(),a("a",{key:3,href:(J=(G=r(t))==null?void 0:G.linkedin)==null?void 0:J.url,target:"_blank"},[(Q=(K=r(t))==null?void 0:K.linkedin)!=null&&Q.customIcon?(n(),_(c,{key:1,class:"icon",name:(ee=(Z=r(t))==null?void 0:Z.linkedin)==null?void 0:ee.customIcon},null,8,["name"])):(n(),a("img",We))],8,qe)),(oe=(te=r(t))==null?void 0:te.youtube)!=null&&oe.disabled?f("",!0):(n(),a("a",{key:4,href:(se=(ne=r(t))==null?void 0:ne.youtube)==null?void 0:se.url,target:"_blank"},[(ae=(re=r(t))==null?void 0:re.youtube)!=null&&ae.customIcon?(n(),_(c,{key:1,class:"icon",name:(le=(ie=r(t))==null?void 0:ie.youtube)==null?void 0:le.customIcon},null,8,["name"])):(n(),a("img",Ye))],8,Xe))])}}}),Je=w(Ge,[["__scopeId","data-v-96b4d995"]]),Ke={},Qe={class:"font-sans bg-primary box-border text-white py-6 px-4"},Ze={class:"p-3 m-auto max-w-5xl"},et={class:"flex justify-between gap-3 flex-col items-center md:flex-row md:items-start"},tt=o("div",{class:"flex flex-col items-center"},[o("a",{href:"https://exactpro.com/",target:"_blank"},[o("img",{class:"w-full h-auto",src:we,alt:"exactpro logo"})]),o("span",null,"Build Software to Test Software")],-1),ot={class:"flex flex-col items-center md:items-start"},nt=o("h2",{class:"e-footer__h2"},"Contact Us",-1),st=o("hr",{class:"e-footer__hr"},null,-1),rt={class:"flex flex-col justify-center m-1"},at={href:"mailto:docops@exactpro.com"},it={href:"mailto:info@exactpro.com"},lt={href:"tel:+4402033191644"},ct={href:"tel:+16463403000"},mt={class:"flex flex-col items-center md:items-start"},dt=o("h2",{class:"e-footer__h2"},"Follow Us",-1),ht=o("hr",{class:"e-footer__hr"},null,-1),ut=pe('<hr class="my-12 w-full h-0 border-neutral-400 border-0 border-t-[thin]"><div class="my-5 text-sm text-center"> Copyright © 2009 - 2023 Exactpro. All Rights Reserved. Exactpro refers to Exactpro Systems Limited, registered in England and Wales, and/or one of its subsidiaries, each of which is a separate legal entity, registered in the relevant jurisdictions. </div><div class="flex flex-wrap justify-center underline text-sm gap-2"><a href="https://exactpro.com/terms-and-conditions" target="_blank">Terms and Conditions</a><a href="https://exactpro.com/privacy-policy" target="_blank">Privacy Policy</a><a href="https://exactpro.com/cookies-policy" target="_blank">Cookies Policy</a></div>',3);function pt(e,s){const t=L,u=Je;return n(),a("footer",Qe,[o("div",Ze,[o("div",et,[tt,o("div",ot,[nt,st,o("ul",rt,[o("li",null,[o("a",at,[h(t,{name:"heroicons:envelope",size:"1.5em",class:"inline-block mr-3"}),I("docops@exactpro.com")])]),o("li",null,[o("a",it,[h(t,{name:"heroicons:envelope",size:"1.5em",class:"inline-block mr-3"}),I("info@exactpro.com")])]),o("li",null,[o("a",lt,[h(t,{name:"heroicons:phone",size:"1.5em",class:"inline-block mr-3"}),I("+44 (0) 20 3319 1644")])]),o("li",null,[o("a",ct,[h(t,{name:"heroicons:phone",size:"1.5em",class:"inline-block mr-3"}),I("+1 (646) 340 3000")])])])]),o("div",mt,[dt,ht,h(u,{class:"pt-2"})])]),ut])])}const _t=w(Ke,[["render",pt]]),ft=y({name:"TableOfContentsItem",props:{link:{type:Object,required:!0},active:{type:Array,default:()=>[]}},computed:{isActive(){return this.active.findIndex(e=>e===this.link.id)>-1}}}),vt=["href"],gt={key:0};function bt(e,s,t,u,l,c){const p=O("TableOfContentsItem",!0);return n(),a("li",null,[o("a",{href:"#"+e.link.id},[o("div",{class:x(["hover:translate-x-2 py-1 transition-all",{"text-accent-700":e.isActive,"font-semibold":e.link.depth===2,"pl-2":e.link.depth===3,"pl-3":e.link.depth===4,"pl-4":e.link.depth===5,"pl-5":e.link.depth>=6}])},z(e.link.text),3)],8,vt),e.link.children&&e.link.children.length?(n(),a("ul",gt,[(n(!0),a(T,null,E(e.link.children,d=>(n(),_(p,{key:d.id,active:e.active,link:d},null,8,["active","link"]))),128))])):f("",!0)])}const kt=w(ft,[["render",bt]]),yt=y({name:"TableOfContents",components:{TableOfContentsItem:kt},props:{toc:{type:Object,required:!0}},data(){return{headersToHighlight:[],observer:null}},watch:{toc(){setTimeout(()=>{this.setupObserver()},100)}},mounted(){this.setupObserver()},methods:{isHighlighted(e){return this.headersToHighlight.findIndex(s=>s===e)>-1},setupObserver(){const e=new Map;this.observer?this.observer.disconnect():this.observer=new IntersectionObserver(u=>{u.forEach(l=>{e.set(l.target.id,l.isIntersecting)}),this.headersToHighlight=Array.from(e.keys()).filter(l=>e.get(l))});const s=this.observer,t=u=>{u.forEach(l=>{const c=document.getElementById(l.id);c&&s.observe(c),l.children&&t(l.children)})};t(this.toc.links)}}});function wt(e,s,t,u,l,c){const p=O("TableOfContentsItem");return n(),a("ul",null,[(n(!0),a(T,null,E(e.toc.links,d=>(n(),_(p,{key:d.id,link:d,active:e.headersToHighlight},null,8,["link","active"]))),128))])}const $t=w(yt,[["render",wt]]),xt={class:"bg-accent text-white text-right text-sm -mx-2 -mt-2 mb-2"},Ct={key:1,class:"text-error"},It=y({__name:"TermPopup",setup(e){const{model:s,isFocused:t,debugInfo:u}=Ce(),l=_e(()=>{var m;const i=(m=s.value.ref)==null?void 0:m.getBoundingClientRect();return{top:((i==null?void 0:i.bottom)??0)+window.scrollY+5+"px",left:((i==null?void 0:i.left)??0)+window.scrollX+"px",transition:"all 0.3s ease"}});let c;fe(t,i=>{i?clearTimeout(c):c=setTimeout(()=>{t.value||(s.value.show=!1)},1e3)});function p(){t.value=!0}function d(){t.value=!1}return(i,m)=>{const g=L,b=Ee,k=Le;return n(),_(ge,{name:"term-popup"},{default:C(()=>[ce(o("div",{class:"term-popup gevamu-prose",style:ve(r(l)),onMouseenter:p,onMouseleave:d},[o("div",xt,[o("button",{class:"mx-1 mb-1",onClick:m[0]||(m[0]=v=>r(s).show=!1)},[h(g,{name:"heroicons:x-mark",size:"2em",class:"inline-block hover:scale-150 transition-transform"})])]),r(s).content?(n(),_(k,{key:0,value:r(s).content},{default:C(()=>[h(b,{value:r(s).content},null,8,["value"])]),_:1},8,["value"])):(n(),a("div",Ct,' Term "'+z(r(u).desiredTerm)+'" is not found ',1))],36),[[me,r(s).show]])]),_:1})}}}),Tt=y({name:"DocsLayout",setup(){return{toc:Ie(),showContentTree:de()}}}),Et=ke(()=>ye(()=>import("./client-only.c350267b.js"),["./client-only.c350267b.js","./entry.bd4a98cc.js","./entry.731baea1.css"],import.meta.url).then(e=>e.default||e)),Lt={class:"grid min-h-screen grid-rows-[1fr_auto]"},Ot={class:"pt-24 flex mx-auto w-fit flex-col-reverse md:grid md:max-w-screen-xl md:w-full md:grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto]"},zt={class:"sticky top-32 overflow-hidden"},At={class:"px-4 md:px-0 md:w-72"},St={key:0,class:"md:sticky md:z-0 md:top-32 md:overflow-hidden"},Nt={key:0,class:"text-neutral-500 mb-2"},Rt=o("hr",{class:"mt-5 md:hidden"},null,-1);function Pt(e,s,t,u,l,c){const p=$e,d=Ae,i=Te,m=It,g=Et,b=$t,k=_t;return n(),a("div",Lt,[h(p,{"show-content-tree":e.showContentTree,"onUpdate:showContentTree":s[0]||(s[0]=v=>e.showContentTree=v),class:"fixed z-30"},null,8,["show-content-tree"]),o("div",Ot,[o("aside",{class:x(["w-72 px-3 fixed z-20 h-full bg-neutral-50 top-0 transition-all lg:h-auto lg:relative lg:bg-inherit lg:left-0",{"-left-72":!e.showContentTree,"left-0":e.showContentTree}])},[o("nav",zt,[h(i,null,{default:C(({navigation:v})=>[o("ul",null,[(n(!0),a(T,null,E(v,$=>(n(),_(d,{key:$._path,"nav-item":$},null,8,["nav-item"]))),128))])]),_:1})])],2),o("div",{class:x(["fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10 transition-all md:hidden",{"translate-x-full":!e.showContentTree}]),onClick:s[1]||(s[1]=v=>e.showContentTree=!1)},null,2),o("main",null,[h(g,null,{default:C(()=>[h(m,{class:"z-10"})]),_:1}),be(e.$slots,"default")]),o("aside",At,[e.toc?(n(),a("nav",St,[e.toc.links.length?(n(),a("h1",Nt," On this page: ")):f("",!0),h(b,{toc:e.toc},null,8,["toc"])])):f("",!0),Rt])]),h(k)])}const to=w(Tt,[["render",Pt]]);export{to as default};