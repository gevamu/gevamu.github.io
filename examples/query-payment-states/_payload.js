export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay){return {data:{"page-data/examples/query-payment-states":{_path:"\u002Fexamples\u002Fquery-payment-states",_dir:"examples",_draft:F,_partial:F,_locale:r,_empty:F,title:X,description:Y,body:{type:"root",children:[{type:a,tag:"h1",props:{id:"query-payment-states"},children:[{type:b,value:X}]},{type:a,tag:l,props:{},children:[{type:b,value:Y}]},{type:a,tag:Z,props:{code:"Y2xhc3NEaWFncmFtCiAgY2xhc3MgTXlQYXltZW50U2VydmljZSB7CiAgICArIHF1ZXJ5UGF5bWVudHNWaWFHZXZhbXUoKQogIH0KICBjbGFzcyBHZXZhbXVGYWNhZGUgewogICAgKyBnZXRQYXltZW50KCkKICAgICsgcXVlcnlQYXltZW50cygpCiAgfQoKICBNeVBheW1lbnRTZXJ2aWNlIC4uPiBHZXZhbXVGYWNhZGU="},children:[]},{type:a,tag:y,props:{id:_},children:[{type:b,value:$}]},{type:a,tag:l,props:{},children:[{type:b,value:"Structure of the "},{type:a,tag:G,props:{href:"https:\u002F\u002Fgevamu.github.io\u002Fcorda-payments-sdk\u002Fpayments-contracts\u002Fcom.gevamu.corda.states\u002F-payment\u002Findex.html",rel:[H],target:I},children:[{type:a,tag:t,props:{},children:[{type:b,value:n}]}]},{type:b,value:" state is as follows:"}]},{type:a,tag:Z,props:{code:"Y2xhc3NEaWFncmFtCiAgY2xhc3MgUGF5bWVudCB7CiAgICArIHBheWVyOiBQYXJ0eQogICAgKyBnYXRld2F5OiBQYXJ0eQogICAgKyBlbmRUb0VuZElkOiBTdHJpbmcKICAgICsgcGF5bWVudEluc3RydWN0aW9uSWQ6IEF0dGFjaG1lbnRJZAogICAgKyBzdGF0dXM6IFBheW1lbnRTdGF0dXMKICAgICsgYWRkaXRpb25hbEluZm86IFN0cmluZz8KICAgICsgdW5pcXVlUGF5bWVudElkOiBVVUlECiAgICArIHRpbWVzdGFtcDogSW5zdGFudAogIH0KCiAgY2xhc3MgUGF5bWVudFN0YXR1c3sKICAgIDw8ZW51bWVyYXRpb24+PgogICAgQ1JFQVRFRAogICAgU0VOVF9UT19HQVRFV0FZCiAgICBBQ0NFUFRFRAogICAgUEVORElORwogICAgQ09NUExFVEVECiAgICBSRUpFQ1RFRAogIH0KCiAgY2xhc3MgQXR0YWNobWVudCB7CiAgICA8PGludGVyZmFjZT4+CiAgICArIGlkOiBTZWN1cmVIYXNoCiAgICArIG9wZW4oKTogSW5wdXRTdHJlYW0KICB9CgogIFBheW1lbnQgby0tIFBheW1lbnRTdGF0dXMKICBQYXltZW50IC4uIEF0dGFjaG1lbnQ6IHBheW1lbnRJbnN0cnVjdGlvbklkIC0tPiBpZA=="},children:[]},{type:a,tag:aa,props:{":info":ab,info:ac},children:[{type:a,tag:l,props:{},children:[{type:b,value:"Note that the full payment instruction is stored as a Corda "},{type:a,tag:G,props:{href:"https:\u002F\u002Fdocs.r3.com\u002Fen\u002Fapi-ref\u002Fcorda\u002F4.8\u002Fopen-source\u002Fjavadoc\u002Fnet\u002Fcorda\u002Fcore\u002Fcontracts\u002FAttachment.html",rel:[H],target:I},children:[{type:a,tag:t,props:{},children:[{type:b,value:"Attachment"}]}]},{type:b,value:u}]}]},{type:a,tag:y,props:{id:ad},children:[{type:b,value:ae}]},{type:a,tag:l,props:{},children:[{type:b,value:"Every Corda node has a vault that stores all the states created by the node (in our case, the "},{type:a,tag:t,props:{},children:[{type:b,value:n}]},{type:b,value:" states)."}]},{type:a,tag:l,props:{},children:[{type:b,value:"Corda provides a powerful query language to search for states in the vault – learn more about "},{type:a,tag:G,props:{href:"https:\u002F\u002Fdocs.r3.com\u002Fen\u002Fplatform\u002Fcorda\u002F4.7\u002Fenterprise\u002Fcordapps\u002Fapi-vault-query.html",rel:[H],target:I},children:[{type:b,value:"Writing vault queries"}]},{type:b,value:" in Corda documentation."}]},{type:a,tag:aa,props:{":warning":ab,warning:ac},children:[{type:a,tag:l,props:{},children:[{type:b,value:"Gevamu SDK doesn't provide any ready-to-use solution for querying by payments details stored in the attachment. However, you can create additional tables with the information needed for your business needs and use them in vault queries.\nTo get all payment details from the attachment, download and deserialize it."}]}]},{type:a,tag:l,props:{},children:[{type:b,value:"To create queries for the Gevamu payments, use the following imports:"}]},{type:a,tag:o,props:{code:"\u002F\u002F Corda imports\nimport net.corda.core.node.services.vault.QueryCriteria\n\u002F\u002F Gevamu SDK imports\nimport com.gevamu.corda.schema.PaymentSchemaV1\nimport com.gevamu.corda.states.Payment\n",language:z,meta:v},children:[{type:a,tag:A,props:{},children:[{type:a,tag:o,props:{__ignoreMap:r},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:p},children:[{type:b,value:"\u002F\u002F Corda imports"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:B}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:p},children:[{type:b,value:"\u002F\u002F Gevamu SDK imports"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:J}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:C}]}]}]}]}]},{type:a,tag:y,props:{id:af},children:[{type:b,value:ag}]},{type:a,tag:l,props:{},children:[{type:b,value:"To find a unique payment, search by the "},{type:a,tag:t,props:{},children:[{type:b,value:ah}]},{type:b,value:" field, accepted by the "},{type:a,tag:t,props:{},children:[{type:b,value:ai}]},{type:b,value:" method as a parameter."}]},{type:a,tag:o,props:{code:"import java.util.UUID\nimport net.corda.core.node.services.vault.QueryCriteria\nimport com.gevamu.corda.schema.PaymentSchemaV1\nimport com.gevamu.corda.states.Payment\n\nclass GevamuFacade {\n    fun getPayment(uniquePaymentId: UUID): StateAndRef\u003CPayment\u003E? {\n        \u002F\u002F Create custom query criteria to search by id\n        val criteria = QueryCriteria.VaultCustomQueryCriteria(\n            \u002F\u002F Pay attention to method `equal` here. It is not `equals`!\n            PaymentSchemaV1.PersistentPayment::uniquePaymentId.equal(uniquePaymentId)\n        )\n        \u002F\u002F Query vault and return single payment state\n        return serviceHub.vaultService.queryBy\u003CPayment\u003E(criteria).states.singleOrNull()\n    }\n}\n",language:z,meta:v},children:[{type:a,tag:A,props:{},children:[{type:a,tag:o,props:{__ignoreMap:r},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"java.util.UUID"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:B}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:J}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:K}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:M}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:O},children:[{type:b,value:ai}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:ah}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"UUID"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:Q}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"? {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"\u002F\u002F Create custom query criteria to search by id"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:aj}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:ak}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:al}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:am}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:S}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"\u002F\u002F Pay attention to method `equal` here. It is not `equals`!"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:S}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:an}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:ao}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"::uniquePaymentId.equal(uniquePaymentId)"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:ap}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"\u002F\u002F Query vault and return single payment state"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(criteria).states.singleOrNull()"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:V}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:W}]}]}]}]}]},{type:a,tag:y,props:{id:aq},children:[{type:b,value:ar}]},{type:a,tag:l,props:{},children:[{type:b,value:"Search criteria for payments can be unique to particular businesses. The following example shows a generic method for querying payments."}]},{type:a,tag:o,props:{code:"import net.corda.core.node.services.vault.QueryCriteria\nimport com.gevamu.corda.states.Payment\n\nclass GevamuFacade {\n    fun queryPayments(criteria: QueryCriteria): List\u003CStateAndRef\u003CPayment\u003E\u003E {\n        \u002F\u002F Query vault and return list of payment states\n        return serviceHub.vaultService.queryBy\u003CPayment\u003E(criteria).states\n    }\n}\n",language:z,meta:v},children:[{type:a,tag:A,props:{},children:[{type:a,tag:o,props:{__ignoreMap:r},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:B}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:K}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:M}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:O},children:[{type:b,value:"queryPayments"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"criteria"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:as}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:Q}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:at}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:au}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:av}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:V}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:W}]}]}]}]}]},{type:a,tag:"h3",props:{id:aw},children:[{type:b,value:ax}]},{type:a,tag:l,props:{},children:[{type:b,value:"Querying objects by a date range is a common task for many businesses. The following example shows how to implement this functionality."}]},{type:a,tag:o,props:{code:"import java.time.Instant\nimport net.corda.core.node.services.vault.QueryCriteria\nimport com.gevamu.corda.schema.PaymentSchemaV1\nimport com.gevamu.corda.states.Payment\n\nclass GevamuFacade {\n    fun queryPaymentsByDateRange(from: Instant, to: Instant): List\u003CStateAndRef\u003CPayment\u003E\u003E {\n        \u002F\u002F Create custom query criteria to search by date range\n        val criteria = QueryCriteria.VaultCustomQueryCriteria(\n            PaymentSchemaV1.PersistentPayment::timestamp.between(from, to)\n        )\n        \u002F\u002F Query vault and return list of payment states\n        return serviceHub.vaultService.queryBy\u003CPayment\u003E(criteria).states\n    }\n}\n",language:z,meta:v},children:[{type:a,tag:A,props:{},children:[{type:a,tag:o,props:{__ignoreMap:r},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"java.time.Instant"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:B}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:J}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:h},children:[{type:b,value:K}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:M}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:O},children:[{type:b,value:"queryPaymentsByDateRange"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"from"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:ay}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:", "}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"to"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:ay}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:as}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:Q}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:at}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"\u002F\u002F Create custom query criteria to search by date range"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:aj}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:ak}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:al}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:am}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:S}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:an}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:ao}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"::timestamp.between(from, to)"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:ap}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:au}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:av}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:V}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:W}]}]}]}]}]},{type:a,tag:"style",children:[{type:b,value:".ct-a63688{color:#56B6C2}\n.ct-f1aa9d{color:#61AFEF}\n.ct-5d6dae{color:#E5C07B}\n.ct-138727{color:#ABB2BF}\n.ct-0566a2{color:#C678DD}\n.ct-eb46d7{color:#7F848E}"}]}],toc:{title:r,searchDepth:s,depth:s,links:[{id:_,depth:s,text:$},{id:ad,depth:s,text:ae},{id:af,depth:s,text:ag},{id:aq,depth:s,text:ar,children:[{id:aw,depth:3,text:ax}]}]}},_type:"markdown",_id:"content:4.examples:query-payment-states.md",_source:"content",_file:"4.examples\u002Fquery-payment-states.md",_extension:"md"},toPQVJ9SEG:v},prerenderedAt:void 0}}("element","text","span","ct-138727","div","line","ct-5d6dae","ct-0566a2"," ","ct-a63688","import","p","        ","Payment","code","ct-eb46d7","\u003C","",2,"code-inline",".",null," {","(","h2","kotlin","pre","net.corda.core.node.services.vault.QueryCriteria","com.gevamu.corda.states.Payment",": ","\u003E",false,"a","nofollow","_blank","com.gevamu.corda.schema.PaymentSchemaV1","class","GevamuFacade","    ","fun","ct-f1aa9d","): ","StateAndRef","QueryCriteria","            ","return"," serviceHub.vaultService.queryBy","    }","}","Query payment states","Corda stores the state of a payment in the vault of the node that initiated the payment, so you can access the state of a payment by querying the vault.","mermaid","payment-structure","Payment structure","notice","true",true,"about-vault-queries","About vault queries","get-a-single-payment","Get a single payment","uniquePaymentId","getPayment","val"," criteria ","=","VaultCustomQueryCriteria","PaymentSchemaV1","PersistentPayment","        )","query-payments","Query payments","List","\u003E\u003E","\u002F\u002F Query vault and return list of payment states","(criteria).states","query-payments-by-date-range","Query payments by date range","Instant"))