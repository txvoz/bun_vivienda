import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/AuthResponse';
import { ApiGeneral } from './api.utils';

@Injectable({
  providedIn: 'root'
})
export class AccessService extends ApiGeneral{


  URL:string = environment.access.validate.url;

  constructor(http: HttpClient) {
    super(http);
  }

  protected needJwt(): boolean {
    return environment.access.validate.needJwt;
  }

  validate(authToken:string):Observable<AuthResponse> {
    console.log("Access::validate::" + authToken);
    localStorage.setItem("authToken", authToken);
    return super.get(this.URL);
  }
  
}
