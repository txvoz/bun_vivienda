import { RequestServerResponse } from "./RequestServerResponse";

export interface CreditItemResponse extends RequestServerResponse<CreditListItem> { }

export interface CreditListResponse extends RequestServerResponse<CreditListPagesItem> { }

export interface CreditListPagesItem {
    numberPage?: number,
    totalElements?: number,
    totalPages?: number,
    pages?: any[],
    content?: CreditListItem[]
}

export interface CreditListItem {
    id_request?: number,
    identification?: number,
    first_name?: string,
    last_name?: string,
    middle_name?: string,
    middle_last_name?: string,
    datecreated?: string,
    credit_value?: string,
    amount_approved?: string,
    amount_credit_study?: string,
    status?: string,
}