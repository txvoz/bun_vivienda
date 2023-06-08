import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiGeneral } from './api.utils';
import { CreditDetailResponse } from '../interfaces/CreditDetailResponse';

@Injectable({
  providedIn: 'root'
})
export class CreditDetailService extends ApiGeneral {

  URL: string = environment.creditDetail.get.url;

  constructor(http: HttpClient) {
    super(http);
  }

  protected needJwt(): boolean {
    return environment.creditDetail.get.needJwt;
  }

  getDetail(id: string): Observable<CreditDetailResponse> {
    console.log("CreditDetail::get::" + id);
    let idPath = this.URL;
    idPath = idPath.replace(/{id}/g, id);
    return super.get(idPath);
  }

}
