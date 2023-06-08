import { RequestServerResponse } from "./RequestServerResponse"

export interface CreditRequestResponse extends RequestServerResponse<CreditRequestItem[]> { }

export interface CreditRequestItem {
    propertyInformation?: PropertyInformation,
    applicantDetails?: ApplicantDetails,
    economicInformation?: EconomicInformation,
    activeOrPassive?: ActiveOrPassive,
    references?: References,
    documents?: Documents
  }
  
  export interface PropertyInformation {
    type_credit?: number,
    type_purchase?: string,
    type_use?: string,
    comercial_value?: number,
    city_of?: number,
    address?: string,
    date?: string,
    has_mortgage?: boolean,
  }
  
  export interface ApplicantDetails {
    customer_type?: string,
    first_name?: string,
    second_name?: string,
    first_lastname?: string,
    second_lastname?: string,
    gender?: number,
    type_identification?: number,
    num_identification?: number,
    expedition_date?: string,
    nationality_type?: string,
    origin_country?: number,
    location_born?: string,
    born_date?: string,
    home_country?: number,
    home_department?: string,
    home_city?: number,
    time_abroad?: number,
    adress_home?: string,
    zip?: string,
    studies_level?: number,
    ocupation?: string,
    civil_status?: number,
    dependents?: number,
    home_type?: number,
    cellphone?: number,
    email?: string,
    zip_city?: number,
    address_zip?: string,
    colombian_phone?: string,
    other_phone?: string
  }
  
  export interface EconomicInformation {
    ocupation?: number,
    enterprice_name?: string,
    enterprice_address?: string,
    enterprice_activity?: string,
    enterprice_phone?: string,
    enterprice_position?: string,
    contract_type?: number,
    work_time?: string,
    time_at_enterprice?: number,
    prp?: string,
    vhc?: string,
    tme?: string,
    bank_name?: string,
    account_number?: string,
    type_money?: string,
    operation_country?: number,
    operation_city?: number,
    opi?: string,
    operation_type?: number,
    other_type?: string
    product_identity?: string,
    ttype_product?: string,
    average_amount?: number
  }
  
  export interface ActiveOrPassive {
    have_loans?: string,
    have_tc?: string,
    have_debt?: string,
    have_vehicle?: string,
    have_property?: string,
    loans?: any[],
    tcs?: any[],
    debts?: any[],
    vehicles?: any[],
    properties?: any[],
    total_actives?: number,
    actives_currency_value?: string,
    total_passives?: number,
    passives_currency_value?: string
  }
  
  export interface References {
    personalRefer?: string,
    personal_ref_full_name?: string,
    personal_ref_country?: string,
    personal_ref_phone?: string,
    personal_relationship?: string,
    personalRefer2?: string,
    family_ref_full_name?: string,
    family_ref_country?: string,
    family_ref_phone?: string,
    family_relationship?: string
  }
  
  export interface Documents {
    other_customer?: string
  }