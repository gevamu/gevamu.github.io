export default (function(a,b,c,d,e,f,g,h,i){return {data:{"page-data/workflow/payment-initiation":{_path:"\u002Fworkflow\u002Fpayment-initiation",_dir:"workflow",_draft:d,_partial:d,_locale:e,_empty:d,title:h,description:e,body:{type:"root",children:[{type:b,tag:"h1",props:{id:"3-payment-initiation"},children:[{type:a,value:h}]},{type:b,tag:"ol",props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"The Participant initiates the payment transaction off-chain via a Web UI. The payment request is handled by a web server on the Participant’s node of the Corda business network and sent via Corda RPC to the custom Payment CorDapp installed on the Participant’s node on-chain."}]},{type:b,tag:c,props:{},children:[{type:a,value:"The Participant’s request is accepted by the CorDapp on the Participant’s node and is transformed to a payment instruction formatted according to the industry-accepted payment standard (ISO 20022 formatted XML representing a "},{type:b,tag:"code-inline",props:{},children:[{type:a,value:"CustomerCreditTransferInitiation"}]},{type:a,value:" message) to be passed to Gevamu Payments SDK. Gevamu Payments SDK pre-validates the payment instruction and creates a state (or several states if multiple payments are instructed) with an attachment containing the original payment instruction."}]},{type:b,tag:c,props:{},children:[{type:a,value:"The payment instruction is sent to Gevamu Payments Gateway."}]},{type:b,tag:c,props:{},children:[{type:a,value:"The Gevamu Payments Gateway validates the payment instruction."},{type:b,tag:g,props:{},children:[]},{type:a,value:"The Payments Gateway checks if the Participant is authorized to submit this payment request, validating the payment instruction from the following aspects:"},{type:b,tag:"ul",props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"Node Identity – whether a payment request is received from the node that initially registered the Participant initiating the request."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Participant ID – whether the Participant is registered with the Payments network and if Participant ID is registered to the Participant’s node."}]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"If valid, the Payment Gateway sends the payment instruction to the external gateway of the PSP, updates the status of the payment instruction to "},{type:b,tag:f,props:{},children:[{type:a,value:"Set to Gateway"}]},{type:a,value:" and communicates it to the Participant."},{type:b,tag:g,props:{},children:[]},{type:a,value:"If not valid, a corresponding status is sent back to the Participant’s CorDapp."}]},{type:b,tag:c,props:{},children:[{type:a,value:"The payment status changes to "},{type:b,tag:f,props:{},children:[{type:a,value:"Pending"}]},{type:a,value:" and is sent to the Participant."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Once the PSP replies to the payment request, a returned payment status ("},{type:b,tag:f,props:{},children:[{type:a,value:"Accepted"}]},{type:a,value:" or "},{type:b,tag:f,props:{},children:[{type:a,value:"Rejected"}]},{type:a,value:") is propagated back to the Participant’s node. The updated status is made available as a new Corda state in the payment statuses chain."},{type:b,tag:g,props:{},children:[]},{type:a,value:"The participant’s CorDapp may subscribe to the payment state updates to be notified on Payment processing progress."}]}]},{type:b,tag:"mermaid",props:{code:"LS0tCnRpdGxlOiBJbml0aWF0ZSBQYXltZW50Ci0tLQpzZXF1ZW5jZURpYWdyYW0KICAgICUlIFBhcnRpY2lwYW50cwogICAgcGFydGljaXBhbnQgcG4gYXMgUGFydGljaXBhbnQgTm9kZQogICAgcGFydGljaXBhbnQgZ3BnIGFzIEdldmFtdSBQYXltZW50IEdhdGV3YXkKICAgIHBhcnRpY2lwYW50IHBzcCBhcyBQU1AvQmFuawoKICAgIHBuIC0+PiBwbjogUmVjZWl2ZSBQYXltZW50IGluc3RydWN0aW9uLCAgPGJyLz4gdHJhbnNmb3JtIGludG8gSVNPIDIwMDIyIGZvcm1hdHRlZCBYTUwKICAgIHBuIC0+PiBwbjogU0RLIHByZXZhbGlkYXRlcyBYTUwKCiAgICAlJXByZXZhbGlkYXRpb24gYnkgU0RLCiAgICAKICAgIHBuICAtPj4gIHBuOiBDcmVhdGUgQ29yZGEgc3RhdGUKICAgIHBuICAtPj4gZ3BnOiBQYXltZW50IHJlcXVlc3QKICAgIGdwZyAtPj4gZ3BnOiBWYWxpZGF0ZSBwYXltZW50IHJlcXVlc3QgIDxici8+IChjaGVjayBub2RlIGFuZCBQYXJ0aWNpcGFudCBpZGVudGl0eSkKCiAgICAlJSBhZnRlciB2YWxpZGF0aW9uIGJ5IEdhdGV3YXkKCiAgICBncGcgLT4+IHBzcDogUGF5bWVudCBpbnN0cnVjdGlvbgogICAgZ3BnIC0+PiBwbjogIFVwZGF0ZSBDb3JkYSBzdGF0ZSA8YnIvPiBQYXltZW50IFN0YXR1czogU2VudCB0byBHYXRld2F5CgogICAgJSUgUGVuZGluZyBTdGF0dXMgYnkgUFNQCiAgICBhbHQgUFNQIHNldHMgUGF5bWVudCBzdGF0dXMgYXMgUGVuZGluZwogICAgcHNwIC0+PiBncGc6IFBheW1lbnQgU3RhdHVzOiBQZW5kaW5nCiAgICBncGcgLT4+IHBuIDogVXBkYXRlIENvcmRhIHN0YXRlIDxici8+IFBheW1lbnQgU3RhdHVzOiBQZW5kaW5nIAogICAgCiAgICAlJSBSZXF1ZXN0IGhhcyBiZWVuIHByb2Nlc3NlZCBieSBQU1AgCiAgICBlbHNlIFBTUCBwcm9jZXNzZXMgUGF5bWVudCBJbnN0cnVjdGlvbgogICAgcHNwIC0+PiBncGc6IFBheW1lbnQgU3RhdHVzOiBBY2NlcHRlZC9SZWplY3RlZAogICAgZ3BnIC0+PiBwbiA6IFVwZGF0ZSBDb3JkYSBzdGF0ZSA8YnIvPiBQYXltZW50IFN0YXR1czogQWNjZXB0ZWQvUmVqZWN0ZWQgCiAgICBlbmQ="},children:[]}],toc:{title:e,searchDepth:i,depth:i,links:[]}},_type:"markdown",_id:"content:3.workflow:4.payment-initiation.md",_source:"content",_file:"3.workflow\u002F4.payment-initiation.md",_extension:"md",before:{_path:"\u002Fworkflow\u002Fparticipant-onboarding",_draft:d,_partial:d,title:"2. Participant onboarding",description:e},after:{_path:"\u002Fexamples",_draft:d,_partial:d,title:"Examples",description:"This section contains examples illustrating how to use various features of the Gevamu Payments Solution."}}},prerenderedAt:void 0}}("text","element","li",false,"","em","br","3. Payment initiation",2))