export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){return {data:{"page-data/examples/send-payment":{_path:"\u002Fexamples\u002Fsend-payment",_dir:"examples",_draft:m,_partial:m,_locale:t,_empty:m,title:w,description:x,body:{type:"root",children:[{type:a,tag:"h1",props:{id:"sending-payments"},children:[{type:b,value:w}]},{type:a,tag:i,props:{},children:[{type:b,value:x}]},{type:a,tag:u,props:{code:"Y2xhc3NEaWFncmFtCiAgY2xhc3MgR2V2YW11RmFjYWRlIHsKICAgICsgc2VuZFBheW1lbnQoKQogIH0="},children:[]},{type:a,tag:y,props:{id:z},children:[{type:b,value:A}]},{type:a,tag:i,props:{},children:[{type:b,value:"Sending a payment is a one-step operation, consisting of a single "},{type:a,tag:B,props:{},children:[{type:b,value:C}]},{type:b,value:" call."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Before starting the flow, provide a payment instruction created according to a chosen payment standard:"}]},{type:a,tag:D,props:{code:"class ClientApplication(private val gevamuFacade: GevamuFacade) {\n    fun sendPaymentViaGevamu() {\n        \u002F\u002F Create payment instruction with payment details\n        val paymentInstruction = PaymentInstruction(\u002F* payment details *\u002F)\n        \n        \u002F\u002F Specify gateway node for payment processing\n        val gateway = Party(\u002F* gateway node data *\u002F)\n        \n        \u002F\u002F Use GevamuFacade to send payment instruction to gateway node\n        gevamuFacade.sendPayment(paymentInstruction, gateway)\n    }\n}\n\nclass GevamuFacade(private val serviceHub: AppServiceHub): SingletonSerializeAsToken() {\n  fun sendPayment(\n    paymentInstruction: PaymentInstruction,\n    gateway: Party\n  ): List\u003CStateAndRef\u003CPayment\u003E\u003E {\n    val flowHandle = serviceHub.startFlow(PaymentFlow(paymentInstruction, gateway))\n    return flowHandle.returnValue.get()\n  }\n}\n",language:"kotlin",meta:E},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:D,props:{__ignoreMap:t},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"ClientApplication"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"gevamuFacade"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:H}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:") {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:I}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:J},children:[{type:b,value:"sendPaymentViaGevamu"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:K}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:q},children:[{type:b,value:"\u002F\u002F Create payment instruction with payment details"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" paymentInstruction "}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:q},children:[{type:b,value:"\u002F* payment details *\u002F"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:M}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:q},children:[{type:b,value:"\u002F\u002F Specify gateway node for payment processing"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" gateway "}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:q},children:[{type:b,value:"\u002F* gateway node data *\u002F"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:M}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:q},children:[{type:b,value:"\u002F\u002F Use GevamuFacade to send payment instruction to gateway node"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        gevamuFacade.sendPayment(paymentInstruction, gateway)"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    }"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:O}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:H}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"serviceHub"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"AppServiceHub"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"): "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"SingletonSerializeAsToken"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:K}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:I}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:J},children:[{type:b,value:"sendPayment"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"paymentInstruction"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:","}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"gateway"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:N}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  ): "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"List"}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"StateAndRef"}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"Payment"}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"\u003E\u003E"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" flowHandle "}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" serviceHub.startFlow("}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:C}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(paymentInstruction, gateway))"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"return"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" flowHandle.returnValue.get()"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  }"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:O}]}]}]}]}]},{type:a,tag:y,props:{id:Q},children:[{type:b,value:R}]},{type:a,tag:i,props:{},children:[{type:b,value:"When creating a payment transaction, use one of the formats listed in "},{type:a,tag:S,props:{href:"https:\u002F\u002Fgevamu.github.io\u002Fcorda-payments-sdk\u002Fpayments-workflows\u002Fcom.gevamu.corda.flows\u002F-payment-instruction-format\u002Findex.html",rel:["nofollow"],target:"_blank"},children:[{type:a,tag:B,props:{},children:[{type:b,value:"PaymentInstructionFormat"}]}]},{type:b,value:" enum."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Once a payment instruction is received, the Gevamu Payment Solution validates the payment by checking the Participant node's identity and the Participant ID, and authorizes it."}]},{type:a,tag:i,props:{},children:[{type:b,value:"If the validation passes, the Payment Gateway sets the payment status to ‘Sent to Gateway’ and communicates the status change back to the Participant's node."}]},{type:a,tag:i,props:{},children:[{type:b,value:"If a payment initiation request contains multiple payment instructions, multiple payment states will be created and independently updated."}]},{type:a,tag:i,props:{},children:[{type:b,value:"On the side of the Payment Services Provider, the transaction can be accepted or rejected.\nIf payment cannot be immediately completed, the \"Pending\" status is returned.\nOnce the Gevamu Payment Gateway receives a new status from the PSP, the payment state will be updated with the final status."}]},{type:a,tag:i,props:{},children:[{type:b,value:"You can find sequence diagrams of payment processing and payment state transition below:"}]},{type:a,tag:u,props:{code:"c2VxdWVuY2VEaWFncmFtCiAgcGFydGljaXBhbnQgQ0EgYXMgQ2xpZW50QXBwbGljYXRpb24KICBwYXJ0aWNpcGFudCBQQ0QgYXMgR2V2YW11RmFjYWRlCgogIENBLT4+UENEOiBJbml0aWF0ZSBQYXltZW50CiAgUENELT4+UENEOiBJbml0aWF0ZSBwYXltZW50IDxici8+IHdpdGhpbiBQU1AKICBQQ0QtPj5DQTogUGF5bWVudCBzdGF0dXM6IENyZWF0ZWQKICBQQ0QtPj5QQ0Q6IFBhc3NpdmUgcGF5bWVudCB1cGRhdGUuLi4KICBOb3RlIG92ZXIgQ0EsUENEOiBBZnRlciBzdGF0ZSBjaGFuZ2UKICBDQS0+PlBDRDogUXVlcnkgcGF5bWVudAogIFBDRC0+PkNBOiBQYXltZW50IHdpdGggcmVsZXZhbnQgc3RhdHVz"},children:[]},{type:a,tag:"notice",props:{":info":"true",info:true},children:[{type:a,tag:i,props:{},children:[{type:b,value:"Find more information about payment queries "},{type:a,tag:S,props:{href:"\u002Fexamples\u002Fquery-payment-states"},children:[{type:b,value:"here"}]},{type:b,value:"."}]}]},{type:a,tag:u,props:{code:"c3RhdGVEaWFncmFtLXYyCiAgICBTZW50OiBTZW50IHRvIEdhdGV3YXkKICAgIFsqXSAtLT4gQ3JlYXRlZAogICAgQ3JlYXRlZCAtLT4gU2VudAogICAgU2VudCAtLT4gUGVuZGluZwogICAgU2VudCAgLS0+IEFjY2VwdGVkCiAgICBTZW50ICAtLT4gUmVqZWN0ZWQKICAgIFBlbmRpbmcgLS0+IEFjY2VwdGVkCiAgICBQZW5kaW5nIC0tPiBSZWplY3RlZAogICAgQWNjZXB0ZWQgLS0+IFsqXQogICAgUmVqZWN0ZWQgLS0+IFsqXQ=="},children:[]},{type:a,tag:"style",children:[{type:b,value:".ct-694509{color:#56B6C2}\n.ct-1fac66{color:#7F848E}\n.ct-f1f5b9{color:#61AFEF}\n.ct-b60fcd{color:#E5C07B}\n.ct-dc8676{color:#ABB2BF}\n.ct-da83ec{color:#C678DD}"}]}],toc:{title:t,searchDepth:s,depth:s,links:[{id:z,depth:s,text:A},{id:Q,depth:s,text:R}]}},_type:"markdown",_id:"content:4.examples:send-payment.md",_source:"content",_file:"4.examples\u002Fsend-payment.md",_extension:"md",before:{_path:"\u002Fexamples\u002Fregister-participant",_draft:m,_partial:m,title:"Participant registration",description:"In order to send payments, you need to register a Participant within the Gevamu Payments Solution. This example shows how to register a Participant node."},after:E}},prerenderedAt:void 0}}("element","text","span","ct-dc8676","div","line","ct-b60fcd","ct-da83ec","p"," ","        ","ct-694509",false,"(","val","    ","ct-1fac66",": ",2,"","mermaid","=","Sending Payments","This example shows how to send a payment from one account to another via the Gevamu Payments Solution.","h2","implementation","Implementation","code-inline","PaymentFlow","code",null,"class","private","GevamuFacade","fun","ct-f1f5b9","() {","PaymentInstruction",")","Party","}","\u003C","transaction-lifecycle","Transaction lifecycle","a"))