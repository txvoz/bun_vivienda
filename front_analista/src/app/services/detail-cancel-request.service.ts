import { Injectable } from '@angular/core';
import { ApiGeneral } from './api.utils';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/AuthResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailCancelRequestService extends ApiGeneral {
  
  URL: string = environment.detailCancelRequest.resource.url;

  constructor(http: HttpClient) {
    super(http);
  }

  protected needJwt(): boolean {
    return environment.detailCancelRequest.resource.needJwt;
  }

    detailCancelRequest(id: string, data:any): Observable<AuthResponse> {
      let idPath = this.URL;
      idPath = idPath.replace(/{id}/g, id);
      return super.post(idPath,data);
    }
}
