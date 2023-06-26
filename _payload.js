export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:{"page-data/":{_path:"\u002F",_dir:f,_draft:c,_partial:c,_locale:f,_empty:c,title:v,description:"Gevamu* Payments Solution, developed by Exactpro based on R3 Corda, is aimed at fund distribution between a payer (the Participant) and a payment service provider (PSP).",body:{type:j,children:[{type:b,tag:w,props:{id:"whats-gevamu"},children:[{type:a,value:v}]},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fgevamu.com\u002F",rel:[h],target:i},children:[{type:a,value:"Gevamu* Payments Solution"}]},{type:a,value:", developed by "},{type:b,tag:g,props:{href:"https:\u002F\u002Fexactpro.com\u002F",rel:[h],target:i},children:[{type:a,value:"Exactpro"}]},{type:a,value:" based on "},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.r3.com\u002Fproducts\u002Fcorda\u002F",rel:[h],target:i},children:[{type:a,value:"R3 Corda"}]},{type:a,value:", is aimed at fund distribution between a payer (the "},{type:b,tag:n,props:{term:r},children:[{type:a,value:r}]},{type:a,value:") and a "},{type:b,tag:n,props:{term:x},children:[{type:a,value:y}]},{type:a,value:" (PSP)."}]},{type:b,tag:z,props:{id:A},children:[{type:a,value:B}]},{type:b,tag:d,props:{},children:[{type:a,value:"The solution allows the Participant to initiate a payment flow by calling the Gevamu Payments SDK implemented in a custom Payments CorDapp installed on their node in a "},{type:b,tag:n,props:{term:C},children:[{type:a,value:D}]},{type:a,value:E}]},{type:b,tag:d,props:{},children:[{type:a,value:"A "},{type:b,tag:n,props:{term:F},children:[{type:a,value:G}]},{type:a,value:" submitted by the Participant as a document formatted according to a payment standard (e.g. ISO 20022) is consumed by the Payments CorDapp and passed through the Gevamu Gateway implemented as another CorDapp installed on the Corda node within the same business network."}]},{type:b,tag:d,props:{},children:[{type:a,value:"The Gevamu Gateway acts as an authorized end-point connected to the payment gateway on the side of the PSP and transfers the payment instruction received from the Participant on-chain to the PSP located off-chain. The Gevamu Payments solution manages the payment "},{type:b,tag:n,props:{term:t},children:[{type:a,value:t}]},{type:a,value:". As part of the flow, it creates Corda "},{type:b,tag:n,props:{term:u},children:[{type:a,value:u}]},{type:a,value:" and updates them based on responses received by the Payment Gateway from the PSP. Payment status updates are communicated back to the Participant."}]},{type:b,tag:z,props:{id:H},children:[{type:a,value:I}]},{type:b,tag:d,props:{},children:[{type:a,value:"The solution consists of a payments SDK and a payment gateway, which are to be deployed in a Corda business network managed by a Corda "},{type:b,tag:n,props:{term:J},children:[{type:a,value:K}]},{type:a,value:" (BNO):"}]},{type:b,tag:"ul",props:{},children:[{type:b,tag:L,props:{},children:[{type:b,tag:M,props:{},children:[{type:a,value:"Gevamu  Payments SDK"}]},{type:a,value:": a Java\u002FKotlin library containing classes and methods used by the payment workflow. The SDK’s functionality is the core part of a custom CorDapp developed by the BNO or a third party and installed on the Participant’s node in a Corda business network operated by the BNO."},{type:b,tag:N,props:{},children:[]},{type:a,value:"Gevamu Payments SDK is distributed as an open-source software under Apache-2.0 License. Its source code is "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fgevamu\u002Fcorda-payments-sdk",rel:[h],target:i},children:[{type:a,value:"available on GitHub"}]},{type:a,value:". "}]},{type:b,tag:L,props:{},children:[{type:b,tag:M,props:{},children:[{type:a,value:"Gevamu Payment Gateway"}]},{type:a,value:": a CorDapp managing on-chain payment flows initiated by the Participant through the Gevamu Payments SDK and communicating with an off-chain payment service provider gateway to pass payment instructions and receive payment status updates."},{type:b,tag:N,props:{},children:[]},{type:a,value:"Gevamu Payments Gateway is proprietary technology licensed by Exactpro."}]}]},{type:b,tag:d,props:{},children:[{type:a,value:"The Gevamu Payments SDK and Payments Gateway are developed based on R3 Corda 4.x."}]},{type:b,tag:d,props:{},children:[{type:a,value:"System requirements of the implementation depend on the scope of a final system.\nFor hardware and software requirements for development on Corda, see official "},{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.r3.com\u002Fen\u002Fplatform\u002Fcorda\u002F4.8\u002Fopen-source\u002Fgetting-set-up.html",rel:[h],target:i},children:[{type:a,value:q}]},{type:a,value:E}]},{type:b,tag:"hr",props:{},children:[]},{type:b,tag:d,props:{},children:[{type:a,value:"*from Sinhala: ගෙවමු – "},{type:b,tag:"em",props:{},children:[{type:a,value:"Let’s pay"}]}]}],toc:{title:f,searchDepth:e,depth:e,links:[{id:A,depth:e,text:B},{id:H,depth:e,text:I}]}},_type:k,_id:"content:1.index.md",_source:l,_file:"1.index.md",_extension:m,before:null,after:{_path:"\u002Fapplication",_draft:c,_partial:c,title:"Application",description:"While the scope of the Gevamu payments solution comprises two components – the Payments SDK and Payments Gateway, – it is expected to be used as a part of solutions spanning various use cases."}},"term/Participant":{_path:"\u002F_terms\u002Fparticipant",_dir:o,_draft:c,_partial:p,_locale:f,_empty:c,title:r,description:O,alias:[P],body:{type:j,children:[{type:b,tag:w,props:{id:P},children:[{type:a,value:r}]},{type:b,tag:d,props:{},children:[{type:a,value:O}]}],toc:{title:f,searchDepth:e,depth:e,links:[]}},_type:k,_id:"content:_terms:participant.md",_source:l,_file:"_terms\u002Fparticipant.md",_extension:m},"term/PSP":{_path:"\u002F_terms\u002Fpsp",_dir:o,_draft:c,_partial:p,_locale:f,_empty:c,title:"Payment service provider (PSP)",description:Q,alias:["Payment service provider","Payment Service Provider",y,x],body:{type:j,children:[{type:b,tag:d,props:{},children:[{type:a,value:Q}]}],toc:{title:f,searchDepth:e,depth:e,links:[]}},_type:k,_id:"content:_terms:psp.md",_source:l,_file:"_terms\u002Fpsp.md",_extension:m},"term/CBN":{_path:"\u002F_terms\u002Fcorda-business-network",_dir:o,_draft:c,_partial:p,_locale:f,_empty:c,title:D,description:R,alias:["corda business network",C],body:{type:j,children:[{type:b,tag:d,props:{},children:[{type:a,value:R}]},{type:b,tag:d,props:{},children:[{type:a,value:s},{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.r3.com\u002Fen\u002Fplatform\u002Fcorda\u002F4.9\u002Fcommunity\u002Fcorda-network\u002Fcorda-network-foundation.html",rel:[h],target:i},children:[{type:a,value:q}]}]}],toc:{title:f,searchDepth:e,depth:e,links:[]}},_type:k,_id:"content:_terms:corda-business-network.md",_source:l,_file:"_terms\u002Fcorda-business-network.md",_extension:m},"term/PI":{_path:"\u002F_terms\u002Fpayment-instruction",_dir:o,_draft:c,_partial:p,_locale:f,_empty:c,title:"Payment instruction",description:S,alias:[G,F],body:{type:j,children:[{type:b,tag:d,props:{},children:[{type:a,value:S}]}],toc:{title:f,searchDepth:e,depth:e,links:[]}},_type:k,_id:"content:_terms:payment-instruction.md",_source:l,_file:"_terms\u002Fpayment-instruction.md",_extension:m},"term/flow":{_path:"\u002F_terms\u002Fflow",_dir:o,_draft:c,_partial:p,_locale:f,_empty:c,title:"Flow",description:T,alias:[t],body:{type:j,children:[{type:b,tag:d,props:{},children:[{type:a,value:T}]},{type:b,tag:d,props:{},children:[{type:a,value:s},{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.r3.com\u002Fen\u002Fplatform\u002Fcorda\u002F4.9\u002Fcommunity\u002Fkey-concepts-flows.html",rel:[h],target:i},children:[{type:a,value:q}]}]}],toc:{title:f,searchDepth:e,depth:e,links:[]}},_type:k,_id:"content:_terms:flow.md",_source:l,_file:"_terms\u002Fflow.md",_extension:m},"term/states":{_path:"\u002F_terms\u002Fstate",_dir:o,_draft:c,_partial:p,_locale:f,_empty:c,title:U,description:V,alias:[U,"state",u],body:{type:j,children:[{type:b,tag:d,props:{},children:[{type:a,value:V}]},{type:b,tag:d,props:{},children:[{type:a,value:s},{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.r3.com\u002Fen\u002Fplatform\u002Fcorda\u002F4.8\u002Fopen-source\u002Fkey-concepts-states.html",rel:[h],target:i},children:[{type:a,value:q}]}]}],toc:{title:f,searchDepth:e,depth:e,links:[]}},_type:k,_id:"content:_terms:state.md",_source:l,_file:"_terms\u002Fstate.md",_extension:m},"term/BNO":{_path:"\u002F_terms\u002Fbno",_dir:o,_draft:c,_partial:p,_locale:f,_empty:c,title:"Business network operator (BNO)",description:W,alias:["Business network operator",K,"business network operator",J],body:{type:j,children:[{type:b,tag:d,props:{},children:[{type:a,value:W}]},{type:b,tag:d,props:{},children:[{type:a,value:s},{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.r3.com\u002Fen\u002Fplatform\u002Fcorda\u002F4.9\u002Fcommunity\u002Fintroduction\u002Fbno.html",rel:[h],target:i},children:[{type:a,value:q}]}]}],toc:{title:f,searchDepth:e,depth:e,links:[]}},_type:k,_id:"content:_terms:bno.md",_source:l,_file:"_terms\u002Fbno.md",_extension:m}},prerenderedAt:void 0}}("text","element",false,"p",2,"","a","nofollow","_blank","root","markdown","content","md","term","_terms",true,"R3 documentation","Participant","See the term in ","flow","states","What's Gevamu?","h1","PSP","payment service provider","h2","functionality","Functionality","CBN","Corda business network",".","PI","payment instruction","structure","Structure","BNO","Business Network Operator","li","strong","br","An account that initiates transfer of funds through the Payment Service Provider (PSP)","participant","An intermediary (e.g. a bank) between participants who transfer funds and organizations that accept them","A logical network based on a set of common CorDapps as well as a shared business context;  a sub-group of Corda Network participants coordinated by a BNO","A payment request formatted according to a specific payment standard (e.g. ISO 20022) sent by the Participant and transformed into a Corda state to be used in the payment flow","A sequence of steps that tells a Corda node how to achieve a specific ledger update","State","A data structure representing a fact on the ledger","A coordinating party of a Corda business network who manages the distribution of the app and rules, including membership, for its use."))