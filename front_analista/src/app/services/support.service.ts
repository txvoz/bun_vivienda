import { Injectable } from '@angular/core';
import { ApiGeneral } from './api.utils';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SupportServiceResponse } from '../interfaces/SupportServiceResponse';

@Injectable({
  providedIn: 'root'
})
export class SupportService extends ApiGeneral {

  URL:string = environment.supportService.url;

  constructor(http: HttpClient) {
    super(http);
  }

  protected override needJwt(): boolean {
    return  environment.supportService.needJwt;
  }

  getSupportInfo(typeDomain: string):Observable<SupportServiceResponse> { 
    return super.get(this.URL+typeDomain);
  }

  getYears():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.years.path);
  }

  getPropertyTypes():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.propertyType.path);
  }

  getCountries():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.countries.path);
  }

  getCities():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.cities.path);
  }

  getGenders():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.genders.path);
  }

  getDocumentTypes():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.documentType.path);
  }

  getNumberDependents():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.numberDependents.path);
  }
  
  getCivilStatus():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.civilStatus.path);
  }

  getTimeResidenceAbroad():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.timeResidenceAbroad.path);
  }

  getLevelStudies():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.levelStudies.path);
  }

  getResidenceType():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.residenceType.path);
  }

  getOcupations():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.ocupations.path);
  }

  getContractType():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.contractType.path);
  }

  getAntiquity():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.antiquity.path);
  }

  getOperationType():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.operationType.path);
  }

  getReferenceType():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.referenceType.path);
  }

  getReraltionshipType():Observable<SupportServiceResponse> { 
    return this.getSupportInfo(environment.supportService.resources.relationshipType.path);
  }

}
