export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:{"page-data/examples/register-participant":{_path:"\u002Fexamples\u002Fregister-participant",_dir:"examples",_draft:i,_partial:i,_locale:o,_empty:i,title:u,description:v,body:{type:"root",children:[{type:a,tag:"h1",props:{id:"participant-registration"},children:[{type:b,value:u}]},{type:a,tag:k,props:{},children:[{type:b,value:v}]},{type:a,tag:w,props:{code:"Y2xhc3NEaWFncmFtCiAgY2xhc3MgTXlQYXltZW50U2VydmljZSB7CiAgICArIHJlZ2lzdGVyVmlhR2V2YW11KCkKICB9CiAgY2xhc3MgR2V2YW11RmFjYWRlIHsKICAgICsgcmVnaXN0ZXJQYXJ0aWNpcGFudCgpCiAgfQoKICBNeVBheW1lbnRTZXJ2aWNlIC4uPiBHZXZhbXVGYWNhZGU="},children:[]},{type:a,tag:k,props:{},children:[{type:b,value:"The Gevamu Payments Solution provides "},{type:a,tag:p,props:{href:"https:\u002F\u002Fgevamu.github.io\u002Fcorda-payments-sdk\u002Fpayments-workflows\u002Fcom.gevamu.corda.flows\u002F-register-participant-flow\u002Findex.html",rel:[q],target:r},children:[{type:a,tag:j,props:{},children:[{type:b,value:m}]}]},{type:b,value:" as the flow for registration and "},{type:a,tag:p,props:{href:"https:\u002F\u002Fgevamu.github.io\u002Fcorda-payments-sdk\u002Fpayments-workflows\u002Fcom.gevamu.corda.flows\u002F-participant-registration\u002Findex.html",rel:[q],target:r},children:[{type:a,tag:j,props:{},children:[{type:b,value:s}]}]},{type:b,value:" as the participant registration record."}]},{type:a,tag:"h2",props:{id:x},children:[{type:b,value:y}]},{type:a,tag:k,props:{},children:[{type:b,value:"See an example of calling "},{type:a,tag:j,props:{},children:[{type:b,value:m}]},{type:b,value:" below:"}]},{type:a,tag:z,props:{code:"import com.gevamu.corda.flows.ParticipantRegistration\nimport com.gevamu.corda.flows.RegisterParticipantFlow\nimport net.corda.core.identity.Party\nimport net.corda.core.node.services.CordaService\n\nclass GevamuFacade {\n  \n  fun registerParticipant(gateway: Party): ParticipantRegistration {\n        val flowHandle = serviceHub.startFlow(RegisterParticipantFlow(gateway))\n        return flowHandle.returnValue.get()\n    }\n}\n",language:"kotlin",meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:z,props:{__ignoreMap:o},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"com.gevamu.corda.flows.ParticipantRegistration"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"com.gevamu.corda.flows.RegisterParticipantFlow"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"net.corda.core.identity.Party"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"net.corda.core.node.services.CordaService"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"class"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"GevamuFacade"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"fun"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:"ct-8592e2"},children:[{type:b,value:"registerParticipant"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"("}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"gateway"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:": "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:C}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"): "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"val"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" flowHandle "}]},{type:a,tag:c,props:{class:"ct-1d916c"},children:[{type:b,value:"="}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" serviceHub.startFlow("}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(gateway))"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"return"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" flowHandle.returnValue.get()"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    }"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"}"}]}]}]}]}]},{type:a,tag:k,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:m}]},{type:b,value:" requests registration from the Gevamu Gateway node identified via the "},{type:a,tag:j,props:{},children:[{type:b,value:C}]},{type:b,value:" instance."}]},{type:a,tag:k,props:{},children:[{type:b,value:"You may choose to design your CorDapp so that it initiates the Participant node registration flow via an RPC call or using the "},{type:a,tag:p,props:{href:"https:\u002F\u002Fdocs.r3.com\u002Fen\u002Fapi-ref\u002Fcorda\u002F4.8\u002Fopen-source\u002Fkotlin\u002Fcorda\u002Fnet.corda.core.node\u002F-service-hub\u002Findex.html",rel:[q],target:r},children:[{type:a,tag:j,props:{},children:[{type:b,value:"serviceHub"}]}]},{type:b,value:" as in the example above."}]},{type:a,tag:k,props:{},children:[{type:b,value:"Upon successful registration, the Payment Gateway node returns the participant registration record with the Participant ID and the BNO Network ID.\nThe structure of the "},{type:a,tag:j,props:{},children:[{type:b,value:s}]},{type:b,value:" data class is shown below."}]},{type:a,tag:w,props:{code:"Y2xhc3NEaWFncmFtCiAgY2xhc3MgUGFydGljaXBhbnRSZWdpc3RyYXRpb24gewogICAgbmV0d29ya0lkOiBTdHJpbmcKICAgIHBhcnRpY2lwYW50SWQ6IFN0cmluZwogIH0="},children:[]},{type:a,tag:"style",children:[{type:b,value:".ct-1d916c{color:#56B6C2}\n.ct-8592e2{color:#61AFEF}\n.ct-f07bc8{color:#E5C07B}\n.ct-5ac822{color:#ABB2BF}\n.ct-e3664d{color:#C678DD}"}]}],toc:{title:o,searchDepth:t,depth:t,links:[{id:x,depth:t,text:y}]}},_type:"markdown",_id:"content:4.examples:register-participant.md",_source:"content",_file:"4.examples\u002Fregister-participant.md",_extension:"md",before:{_path:"\u002Fexamples\u002Fquery-payment-states",_draft:i,_partial:i,title:"Payment state queries",description:"Corda stores the state of a payment in the vault of the node that initiated the payment, so you can access the state of a payment by querying the vault."},after:{_path:"\u002Fexamples\u002Fsend-payment",_draft:i,_partial:i,title:"Sending Payments",description:"This example shows how to send a payment from one account to another via the Gevamu Payments Solution."}}},prerenderedAt:void 0}}("element","text","span","ct-5ac822","div","line","ct-e3664d","ct-f07bc8",false,"code-inline","p"," ","RegisterParticipantFlow","import","","a","nofollow","_blank","ParticipantRegistration",2,"Participant registration","In order to send payments, you need to register a Participant within the Gevamu Payments Solution. This example shows how to register a Participant node.","mermaid","registering-a-participant-node-using-classes-provided-by-gevamu-sdk","Registering a Participant Node using classes provided by Gevamu SDK","code"," {","  ","Party","        "))