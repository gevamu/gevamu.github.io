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

Structure of the `PaymentState` is as follows:

```mermaid
classDiagram
  class PaymentState {
    + payer: Party
    + gateway: Party
    + endToEndId: String
    + paymentInstructionId: AttachmentId
    + status: Payment.PaymentStatus
    + additionalInfo: String?
    + uniquePaymentId: UUID
    + timestamp: Instant
  }
```