import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import {} from "@graphprotocol/graph-ts"
import { DataUpdated } from "../generated/schema"
import { DataUpdated as DataUpdatedEvent } from "../generated/Contract/Contract"
import { handleDataUpdated } from "../src/contract"
import { createDataUpdatedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let newData = "Example string value"
    let newDataUpdatedEvent = createDataUpdatedEvent(newData)
    handleDataUpdated(newDataUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DataUpdated created and stored", () => {
    assert.entityCount("DataUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DataUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newData",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
