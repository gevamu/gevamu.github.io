# Register

In order to send payments, you need to register a participant within the Gevamu Payments Solution. This example shows how to register a participant node.

```mermaid
classDiagram
  class MyPaymentService {
    + registerViaGevamu()
  }
  class GevamuFacade {
    + registerParticipant()
  }

  MyPaymentService ..> GevamuFacade
```

This is done by calling the `RegisterParticipantFlow` flow.

## Registration Summary
1. The Participant requests to join the BNO through the Payments node
2. The Payments node requests the Gevamu Gateway Node for registration
3. The Gevamu gateway provides the Payments Node with a ParticipantId and the NetworkID of the BNO

When building your CorDapp reference our published artifacts (com.gevamu.corda.payments-workflows and com.gevamu.corda.payments-contracts) as dependencies in the Kotlin/Java project.

## Corda Payments SDK

### Participant Registration class

A Kotlin data class that holds the Participant Id and the Network Id

```mermaid
classDiagram
  class ParticipantRegistration {
    + equals() Boolean
    + hashcode() Int
    + serialVersionUID : Int

  }
```

### Register Participant Flow Class

```mermaid
classDiagram
  class RegisterParticipantFlow {
    + call(ParticipantRegistration) 
  }
  class FlowLogic
  class Party
  FlowLogic <|-- RegisterParticipantFlow
  RegisterParticipantFlow <.. Party
```

This class initiates the flow to register the participant. 
The call() method executes the actual logic of the flow by starting a flow session to the correct Gevamu Gateway Corda node after receiving an RPC call. 
This flow can be suspended.
The Gevamu Gateway Corda node is where the participant wants to register their payments node.
The correct Gevamu Gateway Node is identified using the parameter gateway of type Party(Party is imported from the corda identity package).
The flow returns the Participant Id and Network Id after the Gevamu Gateway successfully registers the participant.


