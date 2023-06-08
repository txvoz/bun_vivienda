import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthRequest } from '../interfaces/AuthRequest';
import { AuthResponse } from '../interfaces/AuthResponse';
import { ApiGeneral } from './api.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiGeneral{

  URL:string = environment.auth.validateBroker.url;

  constructor(http: HttpClient) {
    super(http);
  }

  protected needJwt():boolean {
    return environment.auth.validateBroker.needJwt;
  }

  login(email:string):Observable<AuthResponse> {
    let auth:AuthRequest = {
      email: email
    };
    console.log("AuthService::login::" + email);
    return super.post(this.URL, auth);
  }
}
