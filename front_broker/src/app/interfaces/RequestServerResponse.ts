import { ContextTransaction } from "./ContextTransaction";

export interface RequestServerResponse<T>{
    contextTransaction:ContextTransaction;
    response?:T
}

export interface SupportServerBaseResponse<T>{
    contextTransaction:ContextTransaction;
    domain?:SupportDomain<T>
}

export interface SupportDomain<T> {
    idDomain?: number,
    key?: string,
    valuesDomain?: T[]
}