import { DataUpdated as DataUpdatedEvent } from "../generated/Contract/Contract"
import { DataUpdated } from "../generated/schema"

export function handleDataUpdated(event: DataUpdatedEvent): void {
  let entity = new DataUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newData = event.params.newData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
