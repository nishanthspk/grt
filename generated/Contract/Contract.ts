// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class DataUpdated extends ethereum.Event {
  get params(): DataUpdated__Params {
    return new DataUpdated__Params(this);
  }
}

export class DataUpdated__Params {
  _event: DataUpdated;

  constructor(event: DataUpdated) {
    this._event = event;
  }

  get newData(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  getData(): string {
    let result = super.call("getData", "getData():(string)", []);

    return result[0].toString();
  }

  try_getData(): ethereum.CallResult<string> {
    let result = super.tryCall("getData", "getData():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  storedData(): string {
    let result = super.call("storedData", "storedData():(string)", []);

    return result[0].toString();
  }

  try_storedData(): ethereum.CallResult<string> {
    let result = super.tryCall("storedData", "storedData():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get initialData(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SetDataCall extends ethereum.Call {
  get inputs(): SetDataCall__Inputs {
    return new SetDataCall__Inputs(this);
  }

  get outputs(): SetDataCall__Outputs {
    return new SetDataCall__Outputs(this);
  }
}

export class SetDataCall__Inputs {
  _call: SetDataCall;

  constructor(call: SetDataCall) {
    this._call = call;
  }

  get newData(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetDataCall__Outputs {
  _call: SetDataCall;

  constructor(call: SetDataCall) {
    this._call = call;
  }
}
