import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/AuthResponse';
import { ApiGeneral } from './api.utils';

@Injectable({
  providedIn: 'root'
})
export class CreditApplicationService extends ApiGeneral {

  URL:string = environment.creditApplication.resource.url;

  constructor(http: HttpClient) {
    super(http);
  }

  protected needJwt(): boolean {
    return  environment.creditApplication.resource.needJwt;
  }

  create(request:any):Observable<AuthResponse> {
    console.log("CreditApplication::create::" + request);
    return super.post(this.URL, request);
  }
 
}
