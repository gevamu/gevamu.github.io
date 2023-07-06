export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:{"page-data/examples":{_path:"\u002Fexamples",_dir:i,_draft:g,_partial:g,_locale:i,_empty:g,title:x,description:y,navigation:g,body:{type:"root",children:[{type:a,tag:"h1",props:{id:"examples"},children:[{type:b,value:x}]},{type:a,tag:j,props:{},children:[{type:b,value:y}]},{type:a,tag:z,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:j,props:{},children:[{type:b,value:"To demonstrate a possible architecture of your app integrated with the Gevamu Payments Solution, this example uses an abstract CorDapp as a sample."}]},{type:a,tag:C,props:{code:"LS0tCnRpdGxlOiBEZXBlbmRlbmNpZXMKLS0tCgpmbG93Y2hhcnQgTFIKICB0YXJnZXRbWW91ciBBcHBdCiAgbmV0LmNvcmRhOmNvcmRhLWNvcmUgLS0+IHRhcmdldAogIGNvbS5nZXZhbXUuY29yZGE6cGF5bWVudHMtd29ya2Zsb3dzIC0tPiB0YXJnZXQKICBjb20uZ2V2YW11LmNvcmRhOnBheW1lbnRzLWNvbnRyYWN0cyAtLT4gdGFyZ2V0CiAgY3VzdG9tWy4uLiB5b3VyIGRlcGVuZGVuY2llc10gLS0+IHRhcmdldA=="},children:[]},{type:a,tag:j,props:{},children:[{type:b,value:"See a sample dependencies configuration in the "},{type:a,tag:s,props:{},children:[{type:b,value:D}]},{type:b,value:" file:"}]},{type:a,tag:m,props:{code:"repositories {\n    mavenCentral()\n    \u002F\u002F Repository with corda artifacts\n    maven(\"https:\u002F\u002Fsoftware.r3.com\u002Fartifactory\u002Fcorda\")\n}\n\ndependencies {\n    \u002F\u002F Core Corda dependencies\n    implementation(\"net.corda:corda-core:4.9.3\")\n    \u002F\u002F Gevamu dependencies\n    implementation(\"com.gevamu.corda:payments-workflows:0.1.0\")\n    implementation(\"com.gevamu.corda:payments-contracts:0.1.0\")\n}\n\n",filename:D,language:E,meta:"[build.gradle.kts]"},children:[{type:a,tag:F,props:{},children:[{type:a,tag:m,props:{__ignoreMap:i},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"repositories {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    mavenCentral()"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:o},children:[{type:b,value:"\u002F\u002F Repository with corda artifacts"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    maven("}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"\"https:\u002F\u002Fsoftware.r3.com\u002Fartifactory\u002Fcorda\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"dependencies {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:o},children:[{type:b,value:"\u002F\u002F Core Corda dependencies"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"\"net.corda:corda-core:4.9.3\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:o},children:[{type:b,value:"\u002F\u002F Gevamu dependencies"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"\"com.gevamu.corda:payments-workflows:0.1.0\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"\"com.gevamu.corda:payments-contracts:0.1.0\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]}]}]}]},{type:a,tag:j,props:{},children:[{type:b,value:"The example below describes different methods in the sample "},{type:a,tag:s,props:{},children:[{type:b,value:v}]},{type:b,value:" class. This class implements a facade pattern and provides a simple interface to the Gevamu Payments Solution."}]},{type:a,tag:C,props:{code:"Y2xhc3NEaWFncmFtCiAgY2xhc3MgR2V2YW11RmFjYWRlIHsKICAgICsgc2VuZFBheW1lbnQoKQogICAgKyByZWdpc3RlclBhcnRpY2lwYW50KCkKICAgICsgZ2V0UGF5bWVudCgpCiAgICArIHF1ZXJ5UGF5bWVudHMoKQogIH0="},children:[]},{type:a,tag:z,props:{id:G},children:[{type:b,value:H}]},{type:a,tag:j,props:{},children:[{type:b,value:"In order to have access to Corda flows and services, the "},{type:a,tag:s,props:{},children:[{type:b,value:v}]},{type:b,value:" class should be implemented as a Corda service, see the example below:"}]},{type:a,tag:m,props:{code:"import net.corda.core.node.AppServiceHub\nimport net.corda.core.node.services.CordaService\nimport net.corda.core.serialization.SingletonSerializeAsToken\n\n@CordaService\nclass GevamuFacade(private val serviceHub: AppServiceHub): SingletonSerializeAsToken() {\n    \u002F\u002F Here goes the implementation of the GevamuFacade class\n}\n",language:E,meta:null},children:[{type:a,tag:F,props:{},children:[{type:a,tag:m,props:{__ignoreMap:i},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"net.corda.core.node.AppServiceHub"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"net.corda.core.node.services.CordaService"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"net.corda.core.serialization.SingletonSerializeAsToken"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:"@CordaService"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:"class"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"("}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"private"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"val"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"serviceHub"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:": "}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"AppServiceHub"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"): "}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"SingletonSerializeAsToken"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"() {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:o},children:[{type:b,value:"\u002F\u002F Here goes the implementation of the GevamuFacade class"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]}]}]}]},{type:a,tag:j,props:{},children:[{type:b,value:"Read more about Corda services implementation in "},{type:a,tag:"a",props:{href:"https:\u002F\u002Fdocs.r3.com\u002Fen\u002Fplatform\u002Fcorda\u002F4.7\u002Fenterprise\u002Fcordapps\u002Fapi-service-classes.html",rel:["nofollow"],target:"_blank"},children:[{type:b,value:"Corda documentation"}]},{type:b,value:"."}]},{type:a,tag:"style",children:[{type:b,value:".ct-4b1a29{color:#E5C07B}\n.ct-c70fba{color:#C678DD}\n.ct-033c92{color:#98C379}\n.ct-9e67a2{color:#7F848E}\n.ct-e41e06{color:#ABB2BF}"}]}],toc:{title:i,searchDepth:r,depth:r,links:[{id:A,depth:r,text:B},{id:G,depth:r,text:H}]}},_type:"markdown",_id:"content:4.examples:0.index.md",_source:"content",_file:"4.examples\u002F0.index.md",_extension:"md",before:{_path:"\u002Fworkflow\u002Fpayment-initiation",_draft:g,_partial:g,title:"3. Payment initiation",description:i},after:{_path:"\u002Fexamples\u002Fquery-payment-states",_draft:g,_partial:g,title:"Payment state queries",description:"Corda stores the state of a payment in the vault of the node that initiated the payment, so you can access the state of a payment by querying the vault."}}},prerenderedAt:void 0}}("element","text","span","ct-e41e06","div","line",false,"ct-c70fba","","p"," ","ct-4b1a29","code","    ","ct-9e67a2","ct-033c92",")",2,"code-inline","}","    implementation(","GevamuFacade","import","Examples","This section contains examples illustrating how to use various features of the Gevamu Payments Solution.","h2","architecture","Architecture","mermaid","build.gradle.kts","kotlin","pre","template","Template"))