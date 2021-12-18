import { Reader, Writer } from "protobufjs/minimal";
import { Certificate } from "../steelcerts/certificate";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "sapcis.steelcerts.steelcerts";
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
export declare const QueryGetCertificateRequest: {
    encode(message: QueryGetCertificateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCertificateRequest;
    fromJSON(object: any): QueryGetCertificateRequest;
    toJSON(message: QueryGetCertificateRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCertificateRequest>): QueryGetCertificateRequest;
};
export declare const QueryGetCertificateResponse: {
    encode(message: QueryGetCertificateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCertificateResponse;
    fromJSON(object: any): QueryGetCertificateResponse;
    toJSON(message: QueryGetCertificateResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCertificateResponse>): QueryGetCertificateResponse;
};
export declare const QueryAllCertificateRequest: {
    encode(message: QueryAllCertificateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCertificateRequest;
    fromJSON(object: any): QueryAllCertificateRequest;
    toJSON(message: QueryAllCertificateRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCertificateRequest>): QueryAllCertificateRequest;
};
export declare const QueryAllCertificateResponse: {
    encode(message: QueryAllCertificateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCertificateResponse;
    fromJSON(object: any): QueryAllCertificateResponse;
    toJSON(message: QueryAllCertificateResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCertificateResponse>): QueryAllCertificateResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a certificate by index. */
    Certificate(request: QueryGetCertificateRequest): Promise<QueryGetCertificateResponse>;
    /** Queries a list of certificate items. */
    CertificateAll(request: QueryAllCertificateRequest): Promise<QueryAllCertificateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Certificate(request: QueryGetCertificateRequest): Promise<QueryGetCertificateResponse>;
    CertificateAll(request: QueryAllCertificateRequest): Promise<QueryAllCertificateResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
