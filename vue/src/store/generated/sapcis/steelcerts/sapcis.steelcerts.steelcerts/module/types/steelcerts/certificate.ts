/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sapcis.steelcerts.steelcerts";

export interface Certificate {
  index: string;
  companycode: string;
  productname: string;
  status: string;
  url: string;
  checkcsum: string;
}

const baseCertificate: object = {
  index: "",
  companycode: "",
  productname: "",
  status: "",
  url: "",
  checkcsum: "",
};

export const Certificate = {
  encode(message: Certificate, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.companycode !== "") {
      writer.uint32(18).string(message.companycode);
    }
    if (message.productname !== "") {
      writer.uint32(26).string(message.productname);
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.checkcsum !== "") {
      writer.uint32(50).string(message.checkcsum);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCertificate } as Certificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.companycode = reader.string();
          break;
        case 3:
          message.productname = reader.string();
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.url = reader.string();
          break;
        case 6:
          message.checkcsum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Certificate {
    const message = { ...baseCertificate } as Certificate;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.companycode !== undefined && object.companycode !== null) {
      message.companycode = String(object.companycode);
    } else {
      message.companycode = "";
    }
    if (object.productname !== undefined && object.productname !== null) {
      message.productname = String(object.productname);
    } else {
      message.productname = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checkcsum !== undefined && object.checkcsum !== null) {
      message.checkcsum = String(object.checkcsum);
    } else {
      message.checkcsum = "";
    }
    return message;
  },

  toJSON(message: Certificate): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.companycode !== undefined &&
      (obj.companycode = message.companycode);
    message.productname !== undefined &&
      (obj.productname = message.productname);
    message.status !== undefined && (obj.status = message.status);
    message.url !== undefined && (obj.url = message.url);
    message.checkcsum !== undefined && (obj.checkcsum = message.checkcsum);
    return obj;
  },

  fromPartial(object: DeepPartial<Certificate>): Certificate {
    const message = { ...baseCertificate } as Certificate;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.companycode !== undefined && object.companycode !== null) {
      message.companycode = object.companycode;
    } else {
      message.companycode = "";
    }
    if (object.productname !== undefined && object.productname !== null) {
      message.productname = object.productname;
    } else {
      message.productname = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checkcsum !== undefined && object.checkcsum !== null) {
      message.checkcsum = object.checkcsum;
    } else {
      message.checkcsum = "";
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
