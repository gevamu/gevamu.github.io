# Send Payment

This example shows how to send a payment from one account to another via Gevamu Payments Solution.

```mermaid
classDiagram
  class MyPaymentService {
    + sendPaymentViaGevamu()
  }
  class GevamuFacade {
    + sendPayment()
  }

  MyPaymentService ..> GevamuFacade
```

```kotlin
class MyPaymentService(private val gevamuFacade: GevamuFacade) {
    fun sendPaymentViaGevamu() {
        // Create payment instruction with payment details
        val paymentInstruction = PaymentInstruction(/* payment details */)
        
        // Specify gateway node for payment processing
        val gateway = Party(/* gateway node data */)
        
        // Use GevamuFacade to send payment instruction to gateway node
        gevamuFacade.sendPayment(paymentInstruction, gateway)
    }
}

class GevamuFacade(private val serviceHub: AppServiceHub): SingletonSerializeAsToken() {

  fun sendPayment(
    paymentInstruction: PaymentInstruction,
    gateway: Party
  ): List<StateAndRef<Payment>> {
    val flowHandle = serviceHub.startFlow(PaymentFlow(paymentInstruction, gateway, UUID.randomUUID()))
    return flowHandle.returnValue.get()
  }

```

To make a transaction as a network participant, provide the Participant ID and your target Business Network name obtained during onboarding.
After that, pass the desired transaction amount along with Debtor and Creditor details.
The transaction will have the ‘Created’ status. 

Once payment instruction is received, the Payment Gateway validates its node identity as well as the Participant ID. 
If the validation passes, the Payment Gateway returns the ‘Sent to Gateway’ status back to the Participant.
Transaction can be accepted or rejected by the Payment Service Provider.

```mermaid

sequenceDiagram
  participant CA as MyPaymentService
  participant PCD as GevamuFacade
  participant GPG as Gevamu Payment Gateway
  participant PSP


  CA->>PCD: Initiate Payment
  PCD->>PCD: Initiate payment <br/> within PSP
  PCD->>CA: Payment status: Created
  PCD->>PCD: Passive payment update...
  CA->>PCD: Query payment
  PCD->>PCD: Payment with relevant status

```