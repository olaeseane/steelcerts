/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Certificate } from "../steelcerts/certificate";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "sapcis.steelcerts.steelcerts";
const baseQueryGetCertificateRequest = { index: "" };
export const QueryGetCertificateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCertificateRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetCertificateRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetCertificateRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetCertificateResponse = {};
export const QueryGetCertificateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.certificate !== undefined) {
            Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCertificateResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetCertificateResponse,
        };
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = Certificate.fromJSON(object.certificate);
        }
        else {
            message.certificate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificate !== undefined &&
            (obj.certificate = message.certificate
                ? Certificate.toJSON(message.certificate)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetCertificateResponse,
        };
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = Certificate.fromPartial(object.certificate);
        }
        else {
            message.certificate = undefined;
        }
        return message;
    },
};
const baseQueryAllCertificateRequest = {};
export const QueryAllCertificateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllCertificateRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllCertificateRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllCertificateRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllCertificateResponse = {};
export const QueryAllCertificateResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.certificate) {
            Certificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllCertificateResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllCertificateResponse,
        };
        message.certificate = [];
        if (object.certificate !== undefined && object.certificate !== null) {
            for (const e of object.certificate) {
                message.certificate.push(Certificate.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.certificate) {
            obj.certificate = message.certificate.map((e) => e ? Certificate.toJSON(e) : undefined);
        }
        else {
            obj.certificate = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllCertificateResponse,
        };
        message.certificate = [];
        if (object.certificate !== undefined && object.certificate !== null) {
            for (const e of object.certificate) {
                message.certificate.push(Certificate.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Certificate(request) {
        const data = QueryGetCertificateRequest.encode(request).finish();
        const promise = this.rpc.request("sapcis.steelcerts.steelcerts.Query", "Certificate", data);
        return promise.then((data) => QueryGetCertificateResponse.decode(new Reader(data)));
    }
    CertificateAll(request) {
        const data = QueryAllCertificateRequest.encode(request).finish();
        const promise = this.rpc.request("sapcis.steelcerts.steelcerts.Query", "CertificateAll", data);
        return promise.then((data) => QueryAllCertificateResponse.decode(new Reader(data)));
    }
}
