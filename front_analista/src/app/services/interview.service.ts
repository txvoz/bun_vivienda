import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiGeneral } from './api.utils';
import { CreditDetailResponse } from '../interfaces/CreditDetailResponse';
import { InterviewResponse } from '../interfaces/InterviewResponse';
import { InterviewRequest } from '../interfaces/InterviewRequest';

@Injectable({
  providedIn: 'root'
})
export class InterviewService extends ApiGeneral {

  URL: string = environment.interview.send.url

  constructor(http: HttpClient) {
    super(http);
  }

  protected needJwt(): boolean {
    return environment.interview.send.needJwt;
  }

  send(id: string, request: InterviewRequest): Observable<InterviewResponse> {
    console.log("Interview::send::" + id, request);
    let idPath = this.URL;
    idPath = idPath.replace(/{id}/g, id);
    return super.post(idPath,request);
  }

}
