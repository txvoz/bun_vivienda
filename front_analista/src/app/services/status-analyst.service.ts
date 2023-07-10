import { Injectable } from '@angular/core';
import { ApiGeneral } from './api.utils';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StatusResponse } from '../interfaces/StatusResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusAnalystService extends ApiGeneral{

  URL:string = environment.statusAnalyst.url;

   constructor(http: HttpClient) {
    super(http);
  }

  protected override needJwt(): boolean {
    return  environment.statusAnalyst.needJwt;
  }

  getStatusAnalyst(typeDomain: string):Observable<StatusResponse> { 
    return super.get(this.URL+typeDomain);
  }

  getApprovedException(): Observable<StatusResponse> {
    return this.getStatusAnalyst(environment.statusAnalyst.resources.statusApprovedException.path)
  }

   getStatusRefused(): Observable<StatusResponse> {
    return this.getStatusAnalyst(environment.statusAnalyst.resources.statusRefused.path)
  }

  getStatusReturned(): Observable<StatusResponse> {
    return this.getStatusAnalyst(environment.statusAnalyst.resources.statusReturned.path)
  }

}
