import { RequestServerResponse } from "./RequestServerResponse";

export interface CreditDetailResponse extends RequestServerResponse<CreditDetail> { }

export interface CreditDetail {
    analystName?: any
    idRequest?: number
    createAt?: string
    status?: string
    brokerName?: string
    brokerDni?: string
    participants?: Participant[] | undefined | null
  }
  
  export interface Participant {
    idCustomer?: number
    names?: string
    lastNames?: string
    type?: any
    documentType?: string
    dni?: number
    email?: string
    number?: string
  }
  