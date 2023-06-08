import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AlertMessage } from '../interfaces/AlertMessage';
import { ChipMessage } from '../interfaces/ChipMessage';
import { SupportService } from './support.service';
import { SupportItemResponse } from '../interfaces/SupportServiceResponse';
import { CURRENCIES, Currency } from '../interfaces/Currency';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService implements OnInit {

  public years: SupportItemResponse[] | undefined = [];
  public propertyType: SupportItemResponse[] | undefined = [];
  public countries: SupportItemResponse[] | undefined = [];
  public cities: SupportItemResponse[] | undefined = [];
  public genders: SupportItemResponse[] | undefined = [];
  public documentTypes: SupportItemResponse[] | undefined = [];
  public numberDependents: SupportItemResponse[] | undefined = [];
  public civilStatus: SupportItemResponse[] | undefined = [];
  public timeResidenceAbroad: SupportItemResponse[] | undefined = [];
  public levelStudies: SupportItemResponse[] | undefined = [];
  public residenceType: SupportItemResponse[] | undefined = [];
  public ocupations: SupportItemResponse[] | undefined = [];
  public contractType: SupportItemResponse[] | undefined = [];
  public antiquity: SupportItemResponse[] | undefined = [];
  public operationType: SupportItemResponse[] | undefined = [];
  public referenceType: SupportItemResponse[] | undefined = [];
  public relationshipType: SupportItemResponse[] | undefined = [];

  constructor(private supportService: SupportService) {}

  ngOnInit(): void {

    this.supportService.getYears().subscribe(data => {
      this.years = data.domain?.valuesDomain;
      this.yearsMessageSource.next(this.years);
      console.log("Years: ", this.years);
    });

    this.supportService.getPropertyTypes().subscribe(data => {
      this.propertyType = data.domain?.valuesDomain;
      this.propertyTypeMessageSource.next(this.propertyType);
      console.log("Property Types: ", this.propertyType);
    });

    this.supportService.getCountries().subscribe(data => {
      this.countries = data.domain?.valuesDomain;
      this.countriesMessageSource.next(this.countries);
      console.log("Countries: ", this.countries);
    });

    this.supportService.getCities().subscribe(data => {
      this.cities = data.domain?.valuesDomain;
      this.citiesMessageSource.next(this.cities);
      console.log("Cities: ", this.cities);
    });

    this.supportService.getGenders().subscribe(data => {
      this.genders = data.domain?.valuesDomain;
      this.gendersMessageSource.next(this.genders);
      console.log("Genders: ", this.cities);
    });

    this.supportService.getDocumentTypes().subscribe(data => {
      this.documentTypes = data.domain?.valuesDomain;
      this.documentTypesMessageSource.next(this.documentTypes);
      console.log("Document Types: ", this.cities);
    });

    this.supportService.getNumberDependents().subscribe(data => {
      this.numberDependents = data.domain?.valuesDomain;
      this.numberDependentsMessageSource.next(this.numberDependents);
      console.log("Number Dependents: ", this.numberDependents);
    });

    this.supportService.getCivilStatus().subscribe(data => {
      this.civilStatus = data.domain?.valuesDomain;
      this.civilStatusMessageSource.next(this.civilStatus);
      console.log("Civil Status: ", this.civilStatus);
    });

    this.supportService.getTimeResidenceAbroad().subscribe(data => {
      this.timeResidenceAbroad = data.domain?.valuesDomain;
      this.timeResidenceAbroadMessageSource.next(this.timeResidenceAbroad);
      console.log("Time Residence Abroad: ", this.timeResidenceAbroad);
    });

    this.supportService.getLevelStudies().subscribe(data => {
      this.levelStudies = data.domain?.valuesDomain;
      this.levelStudiesMessageSource.next(this.levelStudies);
      console.log("Level Studies: ", this.levelStudies);
    });

    this.supportService.getResidenceType().subscribe(data => {
      this.residenceType = data.domain?.valuesDomain;
      this.residenceTypeMessageSource.next(this.residenceType);
      console.log("Residence Type: ", this.residenceType);
    });

    this.supportService.getOcupations().subscribe(data => {
      this.ocupations = data.domain?.valuesDomain;
      this.ocupationsMessageSource.next(this.ocupations);
      console.log("Ocupations: ", this.ocupations);
    });

    this.supportService.getContractType().subscribe(data => {
      this.contractType = data.domain?.valuesDomain;
      this.contractTypeMessageSource.next(this.contractType);
      console.log("Contract Type: ", this.contractType);
    });

    this.supportService.getAntiquity().subscribe(data => {
      this.antiquity = data.domain?.valuesDomain;
      this.antiquityMessageSource.next(this.antiquity);
      console.log("Antiquity: ", this.antiquity);
    });

    this.supportService.getOperationType().subscribe(data => {
      this.operationType = data.domain?.valuesDomain;
      this.operationTypeMessageSource.next(this.operationType);
      console.log("Operation Type: ", this.operationType);
    });

    this.supportService.getReferenceType().subscribe(data => {
      this.referenceType = data.domain?.valuesDomain;
      this.referenceTypeMessageSource.next(this.referenceType);
      console.log("Reference Type: ", this.referenceType);
    });
    
    this.supportService.getReraltionshipType().subscribe(data => {
      this.relationshipType = data.domain?.valuesDomain;
      this.relationshipTypeMessageSource.next(this.relationshipType);
      console.log("Relationship Type: ", this.relationshipType);
    });
    
  }

  //Years Message **********************************************************
  public subjectYearsMessage = new Subject<SupportItemResponse[] | undefined>();
  private yearsMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.years);
  currentYearsMessage = this.yearsMessageSource.asObservable();

  //PropertyType Message **********************************************************
  public subjectPropertyTypeMessage = new Subject<SupportItemResponse[] | undefined>();
  private propertyTypeMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.propertyType);
  currentPropertyTypeMessage = this.propertyTypeMessageSource.asObservable();

  //Countries Message **********************************************************
  public subjectCountriesMessage = new Subject<SupportItemResponse[] | undefined>();
  private countriesMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.countries);
  currentCountriesMessage = this.countriesMessageSource.asObservable();

  //Cities Message **********************************************************
  public subjectCitiesMessage = new Subject<SupportItemResponse[] | undefined>();
  private citiesMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.cities);
  currentCitiesMessage = this.citiesMessageSource.asObservable();

  //Genders Message **********************************************************
  public subjectGendersMessage = new Subject<SupportItemResponse[] | undefined>();
  private gendersMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.genders);
  currentGendersMessage = this.gendersMessageSource.asObservable();

  //Document Type Message **********************************************************
  public subjectDocumentTypesMessage = new Subject<SupportItemResponse[] | undefined>();
  private documentTypesMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.documentTypes);
  currentDocumentTypesMessage = this.documentTypesMessageSource.asObservable();

  //Number Dependents Message **********************************************************
  public subjectNumberDependentsMessage = new Subject<SupportItemResponse[] | undefined>();
  private numberDependentsMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.numberDependents);
  currentNumberDependentsMessage = this.numberDependentsMessageSource.asObservable();

  //Civil Status Message **********************************************************
  public subjectCivilStatusMessage = new Subject<SupportItemResponse[] | undefined>();
  private civilStatusMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.civilStatus);
  currentCivilStatusMessage = this.civilStatusMessageSource.asObservable();

  //Civil Status Message **********************************************************
  public subjectTimeResidenceAbroadMessage = new Subject<SupportItemResponse[] | undefined>();
  private timeResidenceAbroadMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.timeResidenceAbroad);
  currentTimeResidenceAbroadMessage = this.timeResidenceAbroadMessageSource.asObservable();

  //Level Studies Message **********************************************************
  public subjectLevelStudiesMessage = new Subject<SupportItemResponse[] | undefined>();
  private levelStudiesMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.levelStudies);
  currentLevelStudiesMessage = this.levelStudiesMessageSource.asObservable();

  //Residence Type Message **********************************************************
  public subjectResidenceTypeMessage = new Subject<SupportItemResponse[] | undefined>();
  private residenceTypeMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.residenceType);
  currentResidenceTypeMessage = this.residenceTypeMessageSource.asObservable();

  //Ocupations Message **********************************************************
  public subjectOcupationsMessage = new Subject<SupportItemResponse[] | undefined>();
  private ocupationsMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.ocupations);
  currentOcupationsMessage = this.ocupationsMessageSource.asObservable();

   //Contract Type Message **********************************************************
   public subjectContractTypeMessage = new Subject<SupportItemResponse[] | undefined>();
   private contractTypeMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.contractType);
   currentContractTypeMessage = this.contractTypeMessageSource.asObservable();

   //Antiquity Type Message **********************************************************
   public subjectAntiquityMessage = new Subject<SupportItemResponse[] | undefined>();
   private antiquityMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.antiquity);
   currentAntiquityMessage = this.antiquityMessageSource.asObservable();

   //Operation Type Message **********************************************************
   public subjectOperationTypeMessage = new Subject<SupportItemResponse[] | undefined>();
   private operationTypeMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.operationType);
   currentOperationTypeMessage = this.operationTypeMessageSource.asObservable();

   //Reference Type Message **********************************************************
   public subjectReferenceTypeMessage = new Subject<SupportItemResponse[] | undefined>();
   private referenceTypeMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.referenceType);
   currentReferenceTypeMessage = this.referenceTypeMessageSource.asObservable();

   //Relationship Type Message **********************************************************
   public subjectRelationshipTypeMessage = new Subject<SupportItemResponse[] | undefined>();
   private relationshipTypeMessageSource = new BehaviorSubject<SupportItemResponse[] | undefined>(this.relationshipType);
   currentRelationnshipTypeMessage = this.relationshipTypeMessageSource.asObservable();

 
  //Share status of the loaders *******************************************
  public loaderStatus: boolean = false;
  public subject = new Subject<boolean>();
  private statusSource = new BehaviorSubject<boolean>(this.loaderStatus);
  currentStatus = this.statusSource.asObservable();
  changeStatus(status: boolean) {
    this.statusSource.next(status);
  }

  //Chip Message **********************************************************
  public chipMessage: ChipMessage = {
    display: false, 
    title:"",
    message: "",
    type: ""
  };
  public subjectChipMessage = new Subject<ChipMessage>();
  private chipMessageSource = new BehaviorSubject<ChipMessage>(this.chipMessage);
  currentChipMessage = this.chipMessageSource.asObservable();
  addChipMessage(chipMessage: ChipMessage) {
    this.chipMessageSource.next(chipMessage);
  }

  //Alert Message **********************************************************
  public alertMessage: AlertMessage = {
    display: false,
    type: ""
  };
  public subjectAlertMessage = new Subject<AlertMessage>();
  private alertMessageSource = new BehaviorSubject<AlertMessage>(this.alertMessage);
  currentAlertMessage = this.alertMessageSource.asObservable();
  addAlertMessage(alertMessage: AlertMessage) {
    this.alertMessageSource.next(alertMessage);
  }

  //Current user **********************************************************
  public currentApplication: any = {};
  public subjectApplication = new Subject<any>();
  private applicationSource = new BehaviorSubject<any>(this.currentApplication);
  applicationMessage = this.applicationSource.asObservable();
  addApplication(application: any) {
    this.applicationSource.next(application);
  }

}
