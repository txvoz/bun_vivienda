import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiGeneral } from './api.utils';
import { SignatureResponse } from '../interfaces/SignatureResponse';

@Injectable({
  providedIn: 'root'
})
export class SignatureService extends ApiGeneral {

  URL: string = environment.signature.send.url

  constructor(http: HttpClient) {
    super(http);
  }

  protected needJwt(): boolean {
    return environment.signature.send.needJwt;
  }

  send(id: string): Observable<SignatureResponse> {
    console.log("Signature::send::" + id);
    let idPath = this.URL;
    idPath = idPath.replace(/{id}/g, id)+ '/confirmation';
    const data = {}
    return super.post(idPath,data);
  }

}
