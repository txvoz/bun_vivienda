import { ContextResponse, ContextTransaction } from './ContextTransaction';

export interface RequestServerResponse<T> {
  contextTransaction?: ContextTransaction;
  response?: T;
}

export interface SupportServerBaseResponse<T> {
  contextTransaction?: ContextTransaction;
  domain?: SupportDomain<T>;
}

export interface SupportServerBaseContextResponse<T> {
  contextResponse?: ContextResponse;
  domain?: SupportDomains<T>;
}

export interface SupportDomains<T> {
  idDomain?: number;
  key?: string;
  valuesDomain?: T[] | Array<{ name: string }>;
}

export interface SupportDomain<T> {
  idDomain?: number;
  key?: string;
  valuesDomain?: T[];
}
