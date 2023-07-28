export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:{"page-data/application":{_path:"\u002Fapplication",_dir:h,_draft:d,_partial:d,_locale:h,_empty:d,title:j,description:k,body:{type:"root",children:[{type:a,tag:"h1",props:{id:"application"},children:[{type:b,value:j}]},{type:a,tag:c,props:{},children:[{type:b,value:k}]},{type:a,tag:c,props:{},children:[{type:b,value:"Potential use cases for the Gevamu payments solution include but are not limited to:"}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"payment infrastructures"}]},{type:a,tag:g,props:{},children:[{type:b,value:"exchanges and central counterparties"}]},{type:a,tag:g,props:{},children:[{type:b,value:"DLT-based and hybrid platforms"}]},{type:a,tag:g,props:{},children:[{type:b,value:"financial standards and protocols"}]},{type:a,tag:g,props:{},children:[{type:b,value:"asset classes: fiat, digital assets (including CBDCs and NFTs)"}]}]},{type:a,tag:"h2",props:{id:l},children:[{type:b,value:m}]},{type:a,tag:c,props:{},children:[{type:b,value:"The diagram below illustrates a use case of Gevamu Payments solution being integrated into a hybrid DLT\u002Fnon-DLT payments ecosystem."}]},{type:a,tag:c,props:{},children:[{type:a,tag:"img",props:{alt:"Sample implementation schema",src:"\u002Fimg\u002FSample_implementation.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"In the sample configuration proposed on the diagram, the Gevamu payments solution (Payments SDK and Payments Gateway) interacts with the following components:"}]},{type:a,tag:e,props:{id:n},children:[{type:b,value:o}]},{type:a,tag:c,props:{},children:[{type:b,value:"Most typically, the Client Application is a Web UI or a mobile application on a user’s machine. It is developed by the Participant\u002FBNO organization and customized according to their needs. By filling out a payment form in the Client Application’s UI, the Participant specifies necessary information about the payment and triggers the payment initiation process that is subsequently to be handled by the Gevamu Payments SDK and Payments Gateway’s Corda flows."}]},{type:a,tag:e,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"Middleware is a backend to enable communication between the Client Application and the Participant Node in the Corda Network. The payment data specified by the Participant through the Client Application is processed and sent to the Payments CorDapp to be translated into the payment instruction by the Gevamu Payments SDK. The middleware is developed by the Participant\u002FBNO."}]},{type:a,tag:r,props:{":note":s,note:t},children:[{type:a,tag:c,props:{},children:[{type:b,value:"A sample Client Application UI along with middleware is developed by Exactpro. In this implementation, the middleware communicates with the Client Application via REST API; its communication with the Payments CorDapp is done via Corda RPC. The source code of both sample components is available as a "},{type:a,tag:"a",props:{href:"https:\u002F\u002Fgithub.com\u002Fgevamu\u002Fcorda-payments-sdk\u002Ftree\u002Fmaster\u002Fpayments-app-sample",rel:["nofollow"],target:"_blank"},children:[{type:b,value:"supplementary part of the Payments SDK"}]},{type:b,value:"."}]}]},{type:a,tag:e,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"A Corda network is a collection of nodes with a vetted, unique identity that share a common “root of trust” upon which all certificates and signatures are ultimately chained back to. Its subset (business network) is managed by the BNO. In the context of the payment solution described here, such a network hosts the Corda nodes where both parts of the Gevamu solution are deployed as CorDapps."}]},{type:a,tag:e,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"The Participant node is a node in the Corda business network with the Payments CorDapp installed on it."}]},{type:a,tag:e,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:"The Payments CorDapp is a custom CorDapp developed by the Participant or the BNO using the Gevamu Payments SDK."}]},{type:a,tag:e,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:"The Gateway node is a node in the Corda business network where the Gevamu Payments Gateway is installed as a CorDapp. The Gateway node communicates on-chain with the Participant’s CorDapp based on the Gevamu Payments SDK via a proprietary API; the connection with the PSP is off-chain."}]},{type:a,tag:r,props:{":info":s,info:t},children:[{type:a,tag:c,props:{},children:[{type:b,value:"To simplify the development of a custom Payments CorDapp in the absence of the Gevamu Payments Gateway license, a payments gateway stub is developed by Exactpro and available as a supplementary to the Gevamu Payments SDK."}]}]},{type:a,tag:e,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:"The PSP payments gateway is an endpoint of a proprietary off-chain payments solution on the PSP side."}]}],toc:{title:h,searchDepth:i,depth:i,links:[{id:l,depth:i,text:m,children:[{id:n,depth:f,text:o},{id:p,depth:f,text:q},{id:u,depth:f,text:v},{id:w,depth:f,text:x},{id:y,depth:f,text:z},{id:A,depth:f,text:B},{id:C,depth:f,text:D}]}]}},_type:"markdown",_id:"content:2.application.md",_source:"content",_file:"2.application.md",_extension:"md",before:{_path:"\u002F",_draft:d,_partial:d,title:"What's Gevamu?",description:"Gevamu (from Sinhala: ගෙවමු – Let’s pay) Payments Solution, developed by Exactpro based on R3 Corda, is aimed at fund distribution between a payer (the Participant) and a payment service provider (PSP)."},after:{_path:"\u002Fworkflow",_draft:d,_partial:d,title:"Workflow",description:"Within the use case example introduced in the Application section, the Gevamu Payment solution supports the following business flows:"}}},prerenderedAt:void 0}}("element","text","p",false,"h3",3,"li","",2,"Application","While the scope of the Gevamu payments solution comprises two components – the Payments SDK and Payments Gateway, – it is expected to be used as a part of solutions spanning various use cases.","example-payments-ecosystem","Example: Payments ecosystem","client-application","Client Application","middleware","Middleware","notice","true",true,"corda-network","Corda network","participant-node","Participant node","payments-cordapp","Payments CorDapp","gateway-node","Gateway node","psp-payments-gateway","PSP payments gateway"))