import{A as U,f as S,h as k,B as F,C as D,w as H,u as M,v as N,m as O,D as I,E as q,F as K,_ as W}from"./entry.ccd854ff.js";import{w as P,s as Q,a as G}from"./utils.c82d394e.js";const J=()=>null;function _t(...n){var h;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[r,e,t={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??J,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const i=U(),o=()=>i.isHydrating?i.payload.data[r]:i.static.data[r],c=()=>o()!==void 0;i._asyncData[r]||(i._asyncData[r]={data:S(o()??((h=t.default)==null?void 0:h.call(t))??null),pending:S(!c()),error:S(i.payload._errors[r]?k(i.payload._errors[r]):null)});const a={...i._asyncData[r]};a.refresh=a.execute=(y={})=>{if(i._asyncDataPromises[r]){if(y.dedupe===!1)return i._asyncDataPromises[r];i._asyncDataPromises[r].cancelled=!0}if(y._initial&&c())return o();a.pending.value=!0;const _=new Promise((l,d)=>{try{l(e(i))}catch(x){d(x)}}).then(l=>{if(_.cancelled)return i._asyncDataPromises[r];let d=l;t.transform&&(d=t.transform(l)),t.pick&&(d=V(d,t.pick)),a.data.value=d,a.error.value=null}).catch(l=>{var d;if(_.cancelled)return i._asyncDataPromises[r];a.error.value=l,a.data.value=M(((d=t.default)==null?void 0:d.call(t))??null)}).finally(()=>{_.cancelled||(a.pending.value=!1,i.payload.data[r]=a.data.value,a.error.value&&(i.payload._errors[r]=k(a.error.value)),delete i._asyncDataPromises[r])});return i._asyncDataPromises[r]=_,i._asyncDataPromises[r]};const u=()=>a.refresh({_initial:!0}),f=t.server!==!1&&i.payload.serverRendered;{const y=N();if(y&&!y._nuxtOnBeforeMountCbs){y._nuxtOnBeforeMountCbs=[];const l=y._nuxtOnBeforeMountCbs;y&&(F(()=>{l.forEach(d=>{d()}),l.splice(0,l.length)}),D(()=>l.splice(0,l.length)))}f&&i.isHydrating&&c()?a.pending.value=!1:y&&(i.payload.serverRendered&&i.isHydrating||t.lazy)&&t.immediate?y._nuxtOnBeforeMountCbs.push(u):t.immediate&&u(),t.watch&&H(t.watch,()=>a.refresh());const _=i.hook("app:data:refresh",l=>{if(!l||l.includes(r))return a.refresh()});y&&D(_)}const p=Promise.resolve(i._asyncDataPromises[r]).then(()=>a);return Object.assign(p,a),p}function V(n,s){const r={};for(const e of s)r[e]=n[e];return r}const X={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function Y(n,s={}){s={...X,...s};const r=j(s);return r.dispatch(n),r.toString()}function j(n){const s=[];let r=[];const e=t=>{s.push(t)};return{toString(){return s.join("")},getContext(){return r},dispatch(t){return n.replacer&&(t=n.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){const i=/\[object (.*)]/i,o=Object.prototype.toString.call(t),c=i.exec(o),a=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let u=null;if((u=r.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(r.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")if(this["_"+a])this["_"+a](t);else{if(n.ignoreUnknown)return e("["+a+"]");throw new Error('Unknown object type "'+a+'"')}else{let f=Object.keys(t);n.unorderedObjects&&(f=f.sort()),n.respectType!==!1&&!v(t)&&f.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(f=f.filter(function(p){return!n.excludeKeys(p)})),e("object:"+f.length+":");for(const p of f)this.dispatch(p),e(":"),n.excludeValues||this.dispatch(t[p]),e(",")}},_array(t,i){if(i=typeof i<"u"?i:n.unorderedArrays!==!1,e("array:"+t.length+":"),!i||t.length<=1){for(const a of t)this.dispatch(a);return}const o=[],c=t.map(a=>{const u=j(n);return u.dispatch(a),o.push(u.getContext()),u.toString()});return r=[...r,...o],c.sort(),this._array(c,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),v(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const i=[...t];return this._array(i,n.unorderedSets!==!1)},_set(t){e("set:");const i=[...t];return this._array(i,n.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function v(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class w{constructor(s,r){s=this.words=s||[],this.sigBytes=r!==void 0?r:s.length*4}toString(s){return(s||Z).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const Z={stringify(n){const s=[];for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},tt={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,i=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|i<<8|o;for(let a=0;a<4&&e*8+a*6<n.sigBytes*8;a++)r.push(s.charAt(c>>>6*(3-a)&63))}return r.join("")}},et={parse(n){const s=n.length,r=[];for(let e=0;e<s;e++)r[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new w(r,s)}},rt={parse(n){return et.parse(unescape(encodeURIComponent(n)))}};class st{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new w,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=rt.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,i=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=i}return new w(r,i)}}class nt extends st{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const it=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],at=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],g=[];class ot extends nt{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new w([...it])}_doProcessBlock(s,r){const e=this._hash.words;let t=e[0],i=e[1],o=e[2],c=e[3],a=e[4],u=e[5],f=e[6],p=e[7];for(let h=0;h<64;h++){if(h<16)g[h]=s[r+h]|0;else{const b=g[h-15],T=(b<<25|b>>>7)^(b<<14|b>>>18)^b>>>3,B=g[h-2],L=(B<<15|B>>>17)^(B<<13|B>>>19)^B>>>10;g[h]=T+g[h-7]+L+g[h-16]}const y=a&u^~a&f,_=t&i^t&o^i&o,l=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),d=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),x=p+d+y+at[h]+g[h],R=l+_;p=f,f=u,u=a,a=c+x|0,c=o,o=i,i=t,t=x+R|0}e[0]=e[0]+t|0,e[1]=e[1]+i|0,e[2]=e[2]+o|0,e[3]=e[3]+c|0,e[4]=e[4]+a|0,e[5]=e[5]+u|0,e[6]=e[6]+f|0,e[7]=e[7]+p|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ct(n){return new ot().finalize(n).toString(tt)}function C(n,s={}){const r=typeof n=="string"?n:Y(n,s);return ct(r).slice(0,10)}const A=(n,s)=>s.split(".").reduce((r,e)=>r&&r[e],n),E=(n,s)=>Object.keys(n).filter(s).reduce((r,e)=>Object.assign(r,{[e]:n[e]}),{}),gt=n=>s=>Array.isArray(s)?s.map(r=>n(r)):n(s),$=n=>{const s=[],r=[];for(const e of n)["$","_"].includes(e)?s.push(e):r.push(e);return{prefixes:s,properties:r}},mt=(n=[])=>s=>{if(n.length===0||!s)return s;const{prefixes:r,properties:e}=$(n);return E(s,t=>!e.includes(t)&&!r.includes(t[0]))},wt=(n=[])=>s=>{if(n.length===0||!s)return s;const{prefixes:r,properties:e}=$(n);return E(s,t=>e.includes(t)||r.includes(t[0]))},bt=(n,s)=>{const r=new Intl.Collator(s.$locale,{numeric:s.$numeric,caseFirst:s.$caseFirst,sensitivity:s.$sensitivity}),e=Object.keys(s).filter(t=>!t.startsWith("$"));for(const t of e)n=n.sort((i,o)=>{const c=[A(i,t),A(o,t)].map(a=>{if(a!==null)return a instanceof Date?a.toISOString():a});return s[t]===-1&&c.reverse(),r.compare(c[0],c[1])});return n},Bt=(n,s="Expected an array")=>{if(!Array.isArray(n))throw new TypeError(s)},m=n=>Array.isArray(n)?n:n?[n]:[],ut=["sort","where","only","without"],lt=(n,s)=>{const r={...s};for(const i of ut)r[i]&&(r[i]=m(r[i]));const e=(i,o=c=>c)=>(...c)=>(r[i]=o(...c),t),t={params:()=>r,only:e("only",m),without:e("without",m),where:e("where",i=>[...m(r.where),...m(i)]),sort:e("sort",i=>[...m(r.sort),...m(i)]),limit:e("limit",i=>parseInt(String(i),10)),skip:e("skip",i=>parseInt(String(i),10)),find:()=>n(t),findOne:()=>(r.first=!0,n(t)),findSurround:(i,o)=>(r.surround={query:i,...o},n(t)),locale:i=>t.where({_locale:i})};return t};function z(n){return JSON.stringify(n,ft)}function ft(n,s){return s instanceof RegExp?`--REGEX ${s.toString()}`:s}const ht=n=>{let s=z(n);return s=typeof Buffer<"u"?Buffer.from(s).toString("base64"):btoa(s),s=s.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(s.match(/.{1,100}/g)||[]).join("/")},pt=()=>async n=>{const{content:s}=O().public,r=n.params(),e=s.experimental.stripQueryParameters?P(`/query/${`${C(r)}.${s.integrity}`}/${ht(r)}.json`):P(`/query/${C(r)}.${s.integrity}.json`);if(Q())return(await W(()=>import("./client-db.8e5ddbee.js"),["./client-db.8e5ddbee.js","./entry.ccd854ff.js","./entry.b0b9e949.css","./utils.c82d394e.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.useContentDatabase())).fetch(n);const t=await $fetch(e,{method:"GET",responseType:"json",params:s.experimental.stripQueryParameters?void 0:{_params:z(r),previewToken:G("previewToken").value}});if(typeof t=="string"&&t.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return t};function xt(n,...s){const{content:r}=O().public,e=lt(pt(),typeof n!="string"?n:{});let t;typeof n=="string"&&(t=I(q(n,...s)));const i=e.params;return e.params=()=>{var c,a,u;const o=i();return t&&(o.where=o.where||[],o.first&&(o.where||[]).length===0?o.where.push({_path:K(t)}):o.where.push({_path:new RegExp(`^${t.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=o.sort)!=null&&c.length||(o.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((u=(a=o.where)==null?void 0:a.find(p=>p._locale))!=null&&u._locale||(o.where=o.where||[],o.where.push({_locale:r.defaultLocale}))),o},e}export{Bt as a,m as b,gt as c,wt as d,ht as e,lt as f,A as g,C as h,z as j,xt as q,bt as s,_t as u,mt as w};
