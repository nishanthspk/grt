import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { DataUpdated } from "../generated/Contract/Contract"

export function createDataUpdatedEvent(newData: string): DataUpdated {
  let dataUpdatedEvent = changetype<DataUpdated>(newMockEvent())

  dataUpdatedEvent.parameters = new Array()

  dataUpdatedEvent.parameters.push(
    new ethereum.EventParam("newData", ethereum.Value.fromString(newData))
  )

  return dataUpdatedEvent
}
