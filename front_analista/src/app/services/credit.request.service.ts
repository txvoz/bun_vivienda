import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiGeneral } from './api.utils';
import { CreditRequestResponse } from '../interfaces/CreditRequestResponse';

@Injectable({
  providedIn: 'root'
})
export class CreditRequestService extends ApiGeneral {

  URL: string = environment.creditRequest.get.url;

  constructor(http: HttpClient) {
    super(http);
  }

  protected needJwt(): boolean {
    return environment.creditRequest.get.needJwt;
  }

  getRequest(id: string): Observable<CreditRequestResponse> {
    console.log("CreditRequest::get::" + id);
    let idPath = this.URL;
    idPath = idPath.replace(/{id}/g, id);
    return super.get(idPath);
  }

}
