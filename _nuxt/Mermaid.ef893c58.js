import{a as f,b as _,e as k,r as o,f as g,o as r,h as n,i as c,j as y,u as a,t as v,k as C}from"./entry.3ba0642e.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const h=["textContent"],x={key:0,class:"absolute inset-0 font-serif"},D=f({__name:"Mermaid",props:{code:null},setup(i){const l=i,{$mermaid:s}=_(),u=k(()=>atob(l.code)),d=o(null),t=o(null),e=o(!0);async function m(){if(e.value=!0,t.value&&s){try{await s.run({nodes:[t.value],suppressErrors:!0})}catch{}e.value=!1}}return g(()=>{m()}),(p,B)=>(r(),n("figure",{ref_key:"root",ref:d,class:"relative"},[c("pre",{ref_key:"codeBlock",ref:t,style:{background:"none"},class:y({"opacity-0":a(e)}),textContent:v(a(u))},null,10,h),c("div",null,[a(e)?(r(),n("div",x," Mermaid diagram is loading... ")):C("",!0)])],512))}});export{D as default};
