import { RequestServerResponse } from "./RequestServerResponse"

export interface InterviewResponse extends RequestServerResponse<InterviewItem> { }

export interface InterviewItem {
    statementIncome?: string
    originAssetsFunds?: string
    accountNumber?: number
    paymentMethod?: string
    otherPayment?: string
    interviewResult?: string
    automaticDebit?: string
    id?: number
}