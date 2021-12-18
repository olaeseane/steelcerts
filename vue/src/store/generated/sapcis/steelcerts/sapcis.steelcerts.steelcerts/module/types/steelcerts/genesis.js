/* eslint-disable */
import { Certificate } from "../steelcerts/certificate";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "sapcis.steelcerts.steelcerts";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.certificateList) {
            Certificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.certificateList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateList.push(Certificate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.certificateList = [];
        if (object.certificateList !== undefined &&
            object.certificateList !== null) {
            for (const e of object.certificateList) {
                message.certificateList.push(Certificate.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.certificateList) {
            obj.certificateList = message.certificateList.map((e) => e ? Certificate.toJSON(e) : undefined);
        }
        else {
            obj.certificateList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.certificateList = [];
        if (object.certificateList !== undefined &&
            object.certificateList !== null) {
            for (const e of object.certificateList) {
                message.certificateList.push(Certificate.fromPartial(e));
            }
        }
        return message;
    },
};
