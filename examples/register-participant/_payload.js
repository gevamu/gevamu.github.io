export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:{"page-data/examples/register-participant":{_path:"\u002Fexamples\u002Fregister-participant",_dir:"examples",_draft:n,_partial:n,_locale:o,_empty:n,title:u,description:v,body:{type:"root",children:[{type:a,tag:"h1",props:{id:"register"},children:[{type:b,value:u}]},{type:a,tag:k,props:{},children:[{type:b,value:v}]},{type:a,tag:w,props:{code:"Y2xhc3NEaWFncmFtCiAgY2xhc3MgTXlQYXltZW50U2VydmljZSB7CiAgICArIHJlZ2lzdGVyVmlhR2V2YW11KCkKICB9CiAgY2xhc3MgR2V2YW11RmFjYWRlIHsKICAgICsgcmVnaXN0ZXJQYXJ0aWNpcGFudCgpCiAgfQoKICBNeVBheW1lbnRTZXJ2aWNlIC4uPiBHZXZhbXVGYWNhZGU="},children:[]},{type:a,tag:k,props:{},children:[{type:b,value:"The Gevamu Payments Solution provides "},{type:a,tag:p,props:{href:"https:\u002F\u002Fgevamu.github.io\u002Fcorda-payments-sdk\u002Fpayments-workflows\u002Fcom.gevamu.corda.flows\u002F-register-participant-flow\u002Findex.html",rel:[q],target:r},children:[{type:a,tag:i,props:{},children:[{type:b,value:l}]}]},{type:b,value:" as the flow for registration and "},{type:a,tag:p,props:{href:"https:\u002F\u002Fgevamu.github.io\u002Fcorda-payments-sdk\u002Fpayments-workflows\u002Fcom.gevamu.corda.flows\u002F-participant-registration\u002Findex.html",rel:[q],target:r},children:[{type:a,tag:i,props:{},children:[{type:b,value:s}]}]},{type:b,value:" as the participant registration record."}]},{type:a,tag:"h2",props:{id:x},children:[{type:b,value:y}]},{type:a,tag:k,props:{},children:[{type:b,value:"See an example of calling "},{type:a,tag:i,props:{},children:[{type:b,value:l}]},{type:b,value:" below:"}]},{type:a,tag:z,props:{code:"import com.gevamu.corda.flows.ParticipantRegistration\nimport com.gevamu.corda.flows.RegisterParticipantFlow\nimport net.corda.core.identity.Party\nimport net.corda.core.node.services.CordaService\n\nclass GevamuFacade {\n  \n  fun registerParticipant(gateway: Party): ParticipantRegistration {\n        val flowHandle = serviceHub.startFlow(RegisterParticipantFlow(gateway))\n        return flowHandle.returnValue.get()\n    }\n}\n",language:"kotlin",meta:A},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:z,props:{__ignoreMap:o},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"com.gevamu.corda.flows.ParticipantRegistration"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"com.gevamu.corda.flows.RegisterParticipantFlow"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"net.corda.core.identity.Party"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"net.corda.core.node.services.CordaService"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"class"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"GevamuFacade"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"fun"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:"ct-590786"},children:[{type:b,value:"registerParticipant"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"("}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"gateway"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:": "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"): "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"val"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" flowHandle "}]},{type:a,tag:c,props:{class:"ct-659321"},children:[{type:b,value:"="}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" serviceHub.startFlow("}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(gateway))"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"return"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" flowHandle.returnValue.get()"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    }"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"}"}]}]}]}]}]},{type:a,tag:k,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:l}]},{type:b,value:" requests registration from the Gevamu Gateway node identified via the "},{type:a,tag:i,props:{},children:[{type:b,value:D}]},{type:b,value:" instance.\nDepending on how you design your CorDapp, the flow to register the participant node can be started with an RPC call or using the "},{type:a,tag:p,props:{href:"https:\u002F\u002Fdocs.r3.com\u002Fen\u002Fapi-ref\u002Fcorda\u002F4.8\u002Fopen-source\u002Fkotlin\u002Fcorda\u002Fnet.corda.core.node\u002F-service-hub\u002Findex.html",rel:[q],target:r},children:[{type:a,tag:i,props:{},children:[{type:b,value:"serviceHub"}]}]},{type:b,value:" as in the example above."}]},{type:a,tag:k,props:{},children:[{type:b,value:"Upon successful registration, the Gateway node returns the participant registration record with the Participant ID and the BNO Network ID.\nThe structure of the "},{type:a,tag:i,props:{},children:[{type:b,value:s}]},{type:b,value:"  data class is shown below."}]},{type:a,tag:w,props:{code:"Y2xhc3NEaWFncmFtCiAgY2xhc3MgUGFydGljaXBhbnRSZWdpc3RyYXRpb24gewogICAgbmV0d29ya0lkOiBTdHJpbmcKICAgIHBhcnRpY2lwYW50SWQ6IFN0cmluZwogIH0="},children:[]},{type:a,tag:"style",children:[{type:b,value:".ct-659321{color:#56B6C2}\n.ct-590786{color:#61AFEF}\n.ct-f40247{color:#E5C07B}\n.ct-c11ef0{color:#ABB2BF}\n.ct-b71d33{color:#C678DD}"}]}],toc:{title:o,searchDepth:t,depth:t,links:[{id:x,depth:t,text:y}]}},_type:"markdown",_id:"content:4.examples:register-participant.md",_source:"content",_file:"4.examples\u002Fregister-participant.md",_extension:"md"},toPQVJ9SEG:A},prerenderedAt:void 0}}("element","text","span","ct-c11ef0","div","line","ct-b71d33","ct-f40247","code-inline"," ","p","RegisterParticipantFlow","import",false,"","a","nofollow","_blank","ParticipantRegistration",2,"Register","In order to send payments, you need to register a participant within the Gevamu Payments Solution. This example shows how to register a participant node.","mermaid","registering-a-participant-node-using-classes-provided-by-gevamu-sdk","Registering a Participant Node using classes provided by Gevamu SDK","code",null," {","  ","Party","        "))