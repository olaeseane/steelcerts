/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "sapcis.steelcerts.steelcerts";
const baseMsgAddCertificateById = {
    creator: "",
    id: "",
    checksum: "",
    productname: "",
    status: "",
    url: "",
};
export const MsgAddCertificateById = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.checksum !== "") {
            writer.uint32(26).string(message.checksum);
        }
        if (message.productname !== "") {
            writer.uint32(34).string(message.productname);
        }
        if (message.status !== "") {
            writer.uint32(42).string(message.status);
        }
        if (message.url !== "") {
            writer.uint32(50).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddCertificateById };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.checksum = reader.string();
                    break;
                case 4:
                    message.productname = reader.string();
                    break;
                case 5:
                    message.status = reader.string();
                    break;
                case 6:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgAddCertificateById };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.checksum !== undefined && object.checksum !== null) {
            message.checksum = String(object.checksum);
        }
        else {
            message.checksum = "";
        }
        if (object.productname !== undefined && object.productname !== null) {
            message.productname = String(object.productname);
        }
        else {
            message.productname = "";
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.checksum !== undefined && (obj.checksum = message.checksum);
        message.productname !== undefined &&
            (obj.productname = message.productname);
        message.status !== undefined && (obj.status = message.status);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddCertificateById };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.checksum !== undefined && object.checksum !== null) {
            message.checksum = object.checksum;
        }
        else {
            message.checksum = "";
        }
        if (object.productname !== undefined && object.productname !== null) {
            message.productname = object.productname;
        }
        else {
            message.productname = "";
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        return message;
    },
};
const baseMsgAddCertificateByIdResponse = {};
export const MsgAddCertificateByIdResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgAddCertificateByIdResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgAddCertificateByIdResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgAddCertificateByIdResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    AddCertificateById(request) {
        const data = MsgAddCertificateById.encode(request).finish();
        const promise = this.rpc.request("sapcis.steelcerts.steelcerts.Msg", "AddCertificateById", data);
        return promise.then((data) => MsgAddCertificateByIdResponse.decode(new Reader(data)));
    }
}
