import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sapcis.steelcerts.steelcerts";
export interface Certificate {
    index: string;
    companycode: string;
    productname: string;
    status: string;
    url: string;
    checkcsum: string;
}
export declare const Certificate: {
    encode(message: Certificate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Certificate;
    fromJSON(object: any): Certificate;
    toJSON(message: Certificate): unknown;
    fromPartial(object: DeepPartial<Certificate>): Certificate;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
