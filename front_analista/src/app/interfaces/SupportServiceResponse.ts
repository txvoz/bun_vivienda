import { SupportServerBaseResponse } from "./RequestServerResponse";

export interface SupportServiceResponse extends SupportServerBaseResponse<SupportItemResponse> {}

export interface SupportItemResponse {
    idValueDomain?: number,
    code?: string,
    name?: string,
    description?: string,
}