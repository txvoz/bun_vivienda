import { Injectable } from '@angular/core';
import { ApiGeneral } from './api.utils';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AmountApprovedService extends ApiGeneral {
  URL: string = environment.amountApproved.resources.url;

  constructor(http: HttpClient) {
    super(http);
  }

  protected override needJwt(): boolean {
    return environment.byStates.resources.needJwt;
  }

  amountApproved(id: string, value: string): Observable<AuthResponse> {
    let url = `${this.URL}/{id}/amountApproved`;
    url = url.replace('{id}', id);
  
    const requestBody = { value: value };
  
    return this.http.put<AuthResponse>(url, requestBody);
  }
  
}
