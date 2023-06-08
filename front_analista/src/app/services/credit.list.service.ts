import { Injectable } from '@angular/core';
import { ApiGeneral } from './api.utils';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { CreditItemResponse, CreditListItem, CreditListResponse } from '../interfaces/CreditListResponse';

@Injectable({
  providedIn: 'root'
})
export class CreditListService extends ApiGeneral {

  private static SIZE: number = 25;

  protected override needJwt(): boolean {
    return true;
  }

  constructor(http: HttpClient) {
    super(http);
  }

  buildUrl(page: number, filters: any): string {
    if (filters === null) {
      let allPath = environment.creditList.resource.list.path;
      allPath = allPath.replace(/{page}/g, page + "");
      allPath = allPath.replace(/{size}/g, CreditListService.SIZE + "");
      return environment.creditList.basePath + allPath;
    }

    if (filters.doc_number !== "") {
      let dniPath = environment.creditList.resource.filterByDNI.path;
      dniPath = dniPath.replace(/{dni}/g, filters.doc_number);
      dniPath = dniPath.replace(/{page}/g, page + "");
      dniPath = dniPath.replace(/{size}/g, CreditListService.SIZE + "");
      return environment.creditList.basePath + dniPath;
    }

    if (filters.from_date !== "" && filters.to_date !== "") {
      let datesPath = environment.creditList.resource.filterByDate.path;
      datesPath = datesPath.replace(/{from}/g, filters.from_date);
      datesPath = datesPath.replace(/{to}/g, filters.to_date);
      datesPath = datesPath.replace(/{page}/g, page + "");
      datesPath = datesPath.replace(/{size}/g, CreditListService.SIZE + "");
      return environment.creditList.basePath + datesPath;
    }

    if (filters.request_status !== "") {
      let statusPath = environment.creditList.resource.filterByStatus.path;
      statusPath = statusPath.replace(/{status}/g, filters.request_status);
      statusPath = statusPath.replace(/{page}/g, page + "");
      statusPath = statusPath.replace(/{size}/g, CreditListService.SIZE + "");
      return environment.creditList.basePath + statusPath;
    }

    if (filters.request_number !== "") {
      let idPath = environment.creditList.resource.filterById.path;
      idPath = idPath.replace(/{id}/g, filters.request_number);
      return environment.creditList.basePath + idPath;
    }

    return "";
  }

  getAll(page: number = 0, filters: any = null): Observable<CreditListResponse> {
    if (filters!==null && filters.request_number !== "") {
      return this.getItem(page, filters).pipe(
        map(r => {
          let items:CreditListItem[] = [];
          items.push(r.response===undefined?{}:r.response);
          return {
            contextTransaction: r.contextTransaction,
            response: {
              content: items
            }
          };
        })
      );
    }

    return this.getItems(page, filters);
  }

  getItems(page: number = 0, filters: any = null): Observable<CreditListResponse> {
    return super.get(this.buildUrl(page, filters));
  }

  getItem(page: number = 0, filters: any = null): Observable<CreditItemResponse> {
    return super.get(this.buildUrl(page, filters));
  }

}
