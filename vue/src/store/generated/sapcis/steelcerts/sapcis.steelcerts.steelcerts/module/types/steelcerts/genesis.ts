/* eslint-disable */
import { Certificate } from "../steelcerts/certificate";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sapcis.steelcerts.steelcerts";

/** GenesisState defines the steelcerts module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  certificateList: Certificate[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.certificateList) {
      Certificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.certificateList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificateList.push(
            Certificate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.certificateList = [];
    if (
      object.certificateList !== undefined &&
      object.certificateList !== null
    ) {
      for (const e of object.certificateList) {
        message.certificateList.push(Certificate.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.certificateList) {
      obj.certificateList = message.certificateList.map((e) =>
        e ? Certificate.toJSON(e) : undefined
      );
    } else {
      obj.certificateList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.certificateList = [];
    if (
      object.certificateList !== undefined &&
      object.certificateList !== null
    ) {
      for (const e of object.certificateList) {
        message.certificateList.push(Certificate.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
