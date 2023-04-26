# Query payment states

Corda stores the state of a payment in the vault of the node that initiated the payment. So you can access the state of a payment by querying the vault.

```mermaid
classDiagram
  class MyPaymentService {
    + queryPaymentsViaGevamu()
  }
  class GevamuFacade {
    + getPayment()
    + queryPayments()
  }

  MyPaymentService ..> GevamuFacade
```

## Payment structure

Structure of the [`Payment`](https://gevamu.github.io/corda-payments-sdk/payments-contracts/com.gevamu.corda.states/-payment/index.html) is as follows:

```mermaid
classDiagram
  class Payment {
    + payer: Party
    + gateway: Party
    + endToEndId: String
    + paymentInstructionId: AttachmentId
    + status: PaymentStatus
    + additionalInfo: String?
    + uniquePaymentId: UUID
    + timestamp: Instant
  }

  class PaymentStatus{
    <<enumeration>>
    CREATED
    SENT_TO_GATEWAY
    ACCEPTED
    PENDING
    COMPLETED
    REJECTED
  }

  Payment ..> PaymentStatus
```