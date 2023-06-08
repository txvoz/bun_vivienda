import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupportItemResponse } from 'src/app/interfaces/SupportServiceResponse';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-application-step2',
  templateUrl: './application-step2.component.html',
  styleUrls: [
    './application-step2.component.css',
    '../application-main/application-main.component.css',
    './../../../../app.component.css',
    '../../../simulator/components/simulator-form/toogle_button.scss'
  ]
})
export class ApplicationStep2Component implements OnInit {

  form: FormGroup;
  isValidate: boolean = false;
  isSubmited: boolean = false;
  @Input('user') user: any = {};
  @Input('isNew') isNew: boolean | null | undefined = true;
  @Input('indexUser') indexUser: number | null | undefined = 1;
  @Output() applicationStep2ToMain = new EventEmitter<{ data: any }>;
  @Output() backToMain = new EventEmitter<{}>;
  public gendersItems: SupportItemResponse[] | undefined = [];
  public countriesItems: SupportItemResponse[] | undefined = [];
  public citiesItems: SupportItemResponse[] | undefined = [];
  public documentTypesItems: SupportItemResponse[] | undefined = [];
  public numberDependentsItems: SupportItemResponse[] | undefined = [];
  public civilStatusItems: SupportItemResponse[] | undefined = [];
  public timeResidenceAbroadItems: SupportItemResponse[] | undefined = [];
  public levelStudiesItems: SupportItemResponse[] | undefined = [];
  public residenceTypeItems: SupportItemResponse[] | undefined = [];

  tarjets = [
    {
      value: '1',
      label: 'Deudor solidario',
      className: 'icon-personal'
    },
    {
      value: '2',
      label: 'Codeudor',
      className: 'icon-personal-add'
    }
  ];

  constructor(private formBuilder: FormBuilder, private router: Router, private sharedDataService: SharedDataService) {
    this.form = this.formBuilder.group({
      customer_type: [this.getUserProperty('customer_type')],
      first_name: [this.getUserProperty('first_name'), Validators.required],
      second_name: [this.getUserProperty('second_name'), Validators.required],
      first_lastname: [this.getUserProperty('first_lastname'), Validators.required],
      second_lastname: [this.getUserProperty('second_lastname'), Validators.required],
      gender: [this.getUserProperty('gender'), Validators.required],
      type_identification: [this.getUserProperty('type_identification'), Validators.required],
      num_identification: [this.getUserProperty('num_identification'), Validators.required],
      expedition_date: [this.getUserProperty('expedition_date'), Validators.required],
      nationality_type: [this.getUserProperty('nationality_type'), Validators.required],
      origin_country: [this.getUserProperty('origin_country'), Validators.required],
      location_born: [this.getUserProperty('location_born'), Validators.required],
      born_date: [this.getUserProperty('born_date'), Validators.required],
      home_country: [this.getUserProperty('home_country'), Validators.required],
      home_department: [this.getUserProperty('home_department'), Validators.required],
      home_city: [this.getUserProperty('home_city'), Validators.required],
      time_abroad: [this.getUserProperty('time_abroad'), Validators.required],
      adress_home: [this.getUserProperty('adress_home'), Validators.required],
      zip: [this.getUserProperty('zip'), Validators.required],
      studies_level: [this.getUserProperty('studies_level'), Validators.required],
      ocupation: [this.getUserProperty('ocupation'), Validators.required],
      civil_status: [this.getUserProperty('civil_status'), Validators.required],
      dependents: [this.getUserProperty('dependents'), Validators.required],
      home_type: [this.getUserProperty('home_type'), Validators.required],
      cellphone: [this.getUserProperty('cellphone'), Validators.required],
      email: [this.getUserProperty('email'), Validators.required],
      zip_city: [this.getUserProperty('zip_city'), Validators.required],
      address_zip: [this.getUserProperty('address_zip'), Validators.required],
      colombian_phone: [this.getUserProperty('colombian_phone'), Validators.required],
      other_phone: [this.getUserProperty('other_phone'), Validators.required]
    });

  }

  setDataForm() {
    this.form.controls['customer_type'].setValue(this.getUserProperty("customer_type"));
    this.form.controls['first_name'].setValue(this.getUserProperty("first_name"));
    this.form.controls['second_name'].setValue(this.getUserProperty("second_name"));
    this.form.controls['first_lastname'].setValue(this.getUserProperty("first_lastname"));
    this.form.controls['second_lastname'].setValue(this.getUserProperty("second_lastname"));
    this.form.controls['gender'].setValue(this.getUserProperty("gender"));
    this.form.controls['type_identification'].setValue(this.getUserProperty("type_identification"));
    this.form.controls['num_identification'].setValue(this.getUserProperty("num_identification"));
    this.form.controls['expedition_date'].setValue(this.getUserProperty("expedition_date"));
    this.form.controls['nationality_type'].setValue(this.getUserProperty("nationality_type"));
    this.form.controls['origin_country'].setValue(this.getUserProperty("origin_country"));
    this.form.controls['location_born'].setValue(this.getUserProperty("location_born"));
    this.form.controls['born_date'].setValue(this.getUserProperty("born_date"));
    this.form.controls['home_country'].setValue(this.getUserProperty("home_country"));
    this.form.controls['home_department'].setValue(this.getUserProperty("home_department"));
    this.form.controls['home_city'].setValue(this.getUserProperty("home_city"));
    this.form.controls['time_abroad'].setValue(this.getUserProperty("time_abroad"));
    this.form.controls['adress_home'].setValue(this.getUserProperty("adress_home"));
    this.form.controls['zip'].setValue(this.getUserProperty("zip"));
    this.form.controls['studies_level'].setValue(this.getUserProperty("studies_level"));
    this.form.controls['ocupation'].setValue(this.getUserProperty("ocupation"));
    this.form.controls['customer_type'].setValue(this.getUserProperty("customer_type"));
    this.form.controls['civil_status'].setValue(this.getUserProperty("civil_status"));
    this.form.controls['dependents'].setValue(this.getUserProperty("dependents"));
    this.form.controls['home_type'].setValue(this.getUserProperty("home_type"));
    this.form.controls['cellphone'].setValue(this.getUserProperty("cellphone"));
    this.form.controls['email'].setValue(this.getUserProperty("email"));
    this.form.controls['zip_city'].setValue(this.getUserProperty("zip_city"));
    this.form.controls['address_zip'].setValue(this.getUserProperty("address_zip"));
    this.form.controls['colombian_phone'].setValue(this.getUserProperty("colombian_phone"));
    this.form.controls['other_phone'].setValue(this.getUserProperty("other_phone"));
    this.form.controls['customer_type'].setValue(this.getUserProperty("customer_type"));
  }

  getUserProperty(value: string): string {
    if (!this.isNew) {
      try {
        return this.user.applicantDetails[value];
      } catch (e) {
        return "";
      }
    }
    return "";
  }

  ngOnInit(): void {
    this.sharedDataService.currentCountriesMessage.subscribe(e => this.countriesItems = e);
    this.sharedDataService.currentCitiesMessage.subscribe(e => this.citiesItems = e);
    this.sharedDataService.currentGendersMessage.subscribe(e => this.gendersItems = e);
    this.sharedDataService.currentDocumentTypesMessage.subscribe(e => this.documentTypesItems = e);
    this.sharedDataService.currentNumberDependentsMessage.subscribe(e => this.numberDependentsItems = e);
    this.sharedDataService.currentCivilStatusMessage.subscribe(e => this.civilStatusItems = e);
    this.sharedDataService.currentTimeResidenceAbroadMessage.subscribe(e => this.timeResidenceAbroadItems = e);
    this.sharedDataService.currentLevelStudiesMessage.subscribe(e => this.levelStudiesItems = e);
    this.sharedDataService.currentResidenceTypeMessage.subscribe(e => this.residenceTypeItems = e);
    console.log("load item");
    console.log("receiveUser", this.user);
    this.setDataForm();
  }

  submit() {
    this.isSubmited = true;

    if (this.form.invalid) {
      return;
    }

    this.sendToParent();
  }

  back() {
    this.backToMain.emit();
  }

  sendToParent() {
    this.applicationStep2ToMain.emit({ data: this.form.value });
  }



}
