import{a as o,r as h,f as p,h as g,i as c,A as u}from"./entry.3ba0642e.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const y=o({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(l,{slots:a,attrs:t}){const n=h(!1);return p(()=>{n.value=!0}),e=>{var r;if(n.value)return(r=a.default)==null?void 0:r.call(a);const i=a.fallback||a.placeholder;if(i)return i();const s=e.fallback||e.placeholder||"",d=e.fallbackTag||e.placeholderTag||"span";return g(d,t,s)}}}),f=new WeakMap;function k(l){if(f.has(l))return f.get(l);const a={...l};return a.render?a.render=(t,...n)=>{if(t.mounted$){const e=l.render(t,...n);return e.children===null||typeof e.children=="string"?c(e.type,e.props,e.children,e.patchFlag,e.dynamicProps,e.shapeFlag):u(e)}else return u("div",t.$attrs??t._.attrs)}:a.template&&(a.template=`
      <template v-if="mounted$">${l.template}</template>
      <template v-else><div></div></template>
    `),a.setup=(t,n)=>{var i;const e=h(!1);return p(()=>{e.value=!0}),Promise.resolve(((i=l.setup)==null?void 0:i.call(l,t,n))||{}).then(s=>typeof s!="function"?{...s,mounted$:e}:(...d)=>{if(e.value){const r=s(...d);return r.children===null||typeof r.children=="string"?c(r.type,r.props,r.children,r.patchFlag,r.dynamicProps,r.shapeFlag):u(r)}else return u("div",n.attrs)})},f.set(l,a),a}export{k as createClientOnly,y as default};
