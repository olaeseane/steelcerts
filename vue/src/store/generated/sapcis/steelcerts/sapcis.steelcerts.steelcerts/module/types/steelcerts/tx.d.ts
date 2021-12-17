import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "sapcis.steelcerts.steelcerts";
export interface MsgAddCertificateById {
    creator: string;
    id: string;
    checksum: string;
    productname: string;
    status: string;
    url: string;
}
export interface MsgAddCertificateByIdResponse {
}
export declare const MsgAddCertificateById: {
    encode(message: MsgAddCertificateById, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddCertificateById;
    fromJSON(object: any): MsgAddCertificateById;
    toJSON(message: MsgAddCertificateById): unknown;
    fromPartial(object: DeepPartial<MsgAddCertificateById>): MsgAddCertificateById;
};
export declare const MsgAddCertificateByIdResponse: {
    encode(_: MsgAddCertificateByIdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddCertificateByIdResponse;
    fromJSON(_: any): MsgAddCertificateByIdResponse;
    toJSON(_: MsgAddCertificateByIdResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddCertificateByIdResponse>): MsgAddCertificateByIdResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    AddCertificateById(request: MsgAddCertificateById): Promise<MsgAddCertificateByIdResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    AddCertificateById(request: MsgAddCertificateById): Promise<MsgAddCertificateByIdResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
