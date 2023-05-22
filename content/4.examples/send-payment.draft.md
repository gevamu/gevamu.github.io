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

To make a transaction as a network participant, enter the Participant ID and your target Business Network name obtained during onboarding.
After that, pass the desired transaction amount along with Debtor and Creditor details.
The transaction now has the ‘Created’ status. 

Once payment instruction is received, the Payment Gateway validates its node identity as well as the Participant ID. If the validation passes, the Payment Gateway sends the instruction to an external Payment Service Provider's gateway and returns the ‘Sent to Gateway’ status back to the Participant.
The Payment Service Provider can accept or reject the transaction.

```mermaid

sequenceDiagram
  participant CA as Client Application
  participant PCD as Payment CorDapp powered by Gevamu Payment SDK
  participant GPG as Gevamu Payment Gateway
  participant PSP


  CA->>PCD: Initiate Payment
  PCD->>PCD: Pre-validate ISO 20022 XML* <br/> Create Payment state <br/> Payment status: Created
  PCD->>CA: Payment status: Created
  PCD->>GPG: Request to send Payment
  GPG->>GPG: Validate request*
  GPG->>PSP: Payment instruction
  
  PSP->>GPG: Payment status: Pending
  GPG->>PCD: Payment status: Pending
  PCD->>CA: Payment status: Pending
  
  alt Payment accepted

    PSP->>GPG: Payment status: Accepted 
    GPG->>PCD: Payment status: Accepted 
    PCD->>CA: Payment status: Accepted 
  
  else Payment rejected
    
    PSP->>GPG: Payment status: Rejected 
    GPG->>PCD: Payment status: Rejected 
    PCD->>CA: Payment status: Rejected 
    
  end

```