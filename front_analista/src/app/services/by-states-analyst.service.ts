import { Injectable } from '@angular/core';
import { ApiGeneral } from './api.utils';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../interfaces/AuthResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ByStatesAnalystService extends ApiGeneral{

  URL:string = environment.byStates.resources.url;

   constructor(http: HttpClient) {
    super(http);
  }

  protected override needJwt(): boolean {
    return  environment.byStates.resources.needJwt;
  }

  byStates(id: string, status: string, user: string): Observable<AuthResponse> {
    let idPath = this.URL;
    idPath = idPath.replace(/{id}/g, id);
  
    const request = {
      status: status,
      user: user
    };
  
    return super.post(idPath, request);
  }
  
  

} 

