/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Certificate } from "../steelcerts/certificate";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "sapcis.steelcerts.steelcerts";

export interface QueryGetCertificateRequest {
  index: string;
}

export interface QueryGetCertificateResponse {
  certificate: Certificate | undefined;
}

export interface QueryAllCertificateRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCertificateResponse {
  certificate: Certificate[];
  pagination: PageResponse | undefined;
}

const baseQueryGetCertificateRequest: object = { index: "" };

export const QueryGetCertificateRequest = {
  encode(
    message: QueryGetCertificateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCertificateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCertificateRequest,
    } as QueryGetCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCertificateRequest {
    const message = {
      ...baseQueryGetCertificateRequest,
    } as QueryGetCertificateRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetCertificateRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCertificateRequest>
  ): QueryGetCertificateRequest {
    const message = {
      ...baseQueryGetCertificateRequest,
    } as QueryGetCertificateRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetCertificateResponse: object = {};

export const QueryGetCertificateResponse = {
  encode(
    message: QueryGetCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.certificate !== undefined) {
      Certificate.encode(
        message.certificate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCertificateResponse,
    } as QueryGetCertificateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCertificateResponse {
    const message = {
      ...baseQueryGetCertificateResponse,
    } as QueryGetCertificateResponse;
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromJSON(object.certificate);
    } else {
      message.certificate = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCertificateResponse): unknown {
    const obj: any = {};
    message.certificate !== undefined &&
      (obj.certificate = message.certificate
        ? Certificate.toJSON(message.certificate)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCertificateResponse>
  ): QueryGetCertificateResponse {
    const message = {
      ...baseQueryGetCertificateResponse,
    } as QueryGetCertificateResponse;
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromPartial(object.certificate);
    } else {
      message.certificate = undefined;
    }
    return message;
  },
};

const baseQueryAllCertificateRequest: object = {};

export const QueryAllCertificateRequest = {
  encode(
    message: QueryAllCertificateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCertificateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCertificateRequest,
    } as QueryAllCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCertificateRequest {
    const message = {
      ...baseQueryAllCertificateRequest,
    } as QueryAllCertificateRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCertificateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCertificateRequest>
  ): QueryAllCertificateRequest {
    const message = {
      ...baseQueryAllCertificateRequest,
    } as QueryAllCertificateRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCertificateResponse: object = {};

export const QueryAllCertificateResponse = {
  encode(
    message: QueryAllCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.certificate) {
      Certificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCertificateResponse,
    } as QueryAllCertificateResponse;
    message.certificate = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificate.push(Certificate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCertificateResponse {
    const message = {
      ...baseQueryAllCertificateResponse,
    } as QueryAllCertificateResponse;
    message.certificate = [];
    if (object.certificate !== undefined && object.certificate !== null) {
      for (const e of object.certificate) {
        message.certificate.push(Certificate.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCertificateResponse): unknown {
    const obj: any = {};
    if (message.certificate) {
      obj.certificate = message.certificate.map((e) =>
        e ? Certificate.toJSON(e) : undefined
      );
    } else {
      obj.certificate = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCertificateResponse>
  ): QueryAllCertificateResponse {
    const message = {
      ...baseQueryAllCertificateResponse,
    } as QueryAllCertificateResponse;
    message.certificate = [];
    if (object.certificate !== undefined && object.certificate !== null) {
      for (const e of object.certificate) {
        message.certificate.push(Certificate.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a certificate by index. */
  Certificate(
    request: QueryGetCertificateRequest
  ): Promise<QueryGetCertificateResponse>;
  /** Queries a list of certificate items. */
  CertificateAll(
    request: QueryAllCertificateRequest
  ): Promise<QueryAllCertificateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Certificate(
    request: QueryGetCertificateRequest
  ): Promise<QueryGetCertificateResponse> {
    const data = QueryGetCertificateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sapcis.steelcerts.steelcerts.Query",
      "Certificate",
      data
    );
    return promise.then((data) =>
      QueryGetCertificateResponse.decode(new Reader(data))
    );
  }

  CertificateAll(
    request: QueryAllCertificateRequest
  ): Promise<QueryAllCertificateResponse> {
    const data = QueryAllCertificateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sapcis.steelcerts.steelcerts.Query",
      "CertificateAll",
      data
    );
    return promise.then((data) =>
      QueryAllCertificateResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
