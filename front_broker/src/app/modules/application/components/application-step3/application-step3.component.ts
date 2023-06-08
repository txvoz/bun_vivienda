import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupportItemResponse } from 'src/app/interfaces/SupportServiceResponse';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-application-step3',
  templateUrl: './application-step3.component.html',
  styleUrls: [
    './application-step3.component.css',
    '../application-main/application-main.component.css', 
    './../../../../app.component.css', 
    '../../../simulator/components/simulator-form/toogle_button.scss'
  ]
})
export class ApplicationStep3Component implements OnInit {

  @Output() applicationStep3ToMain = new EventEmitter<{data: any}>;
  @Output() backToMain = new EventEmitter<{}>;

  form: FormGroup;
  isValidate:boolean = false;
  isSubmited: boolean = false;
  ocupationsItems: SupportItemResponse[] | undefined = [];
  contractTypeItems: SupportItemResponse[] | undefined = [];
  antiquityItems: SupportItemResponse[] | undefined = [];
  countriesItems: SupportItemResponse[] | undefined = [];
  citiesItems: SupportItemResponse[] | undefined = [];
  operationTypeItems: SupportItemResponse[] | undefined = [];
  @Input('user') user: any = {};
  @Input('isNew') isNew: boolean | null | undefined = true;
  @Input('indexUser') indexUser: number | null | undefined = 1;


  constructor(private formBuilder: FormBuilder, private router: Router, private sharedDataService: SharedDataService) {
    this.form = this.formBuilder.group({
      ocupation: ['', Validators.required],
      enterprice_name: ['', Validators.required],
      enterprice_address: ['', Validators.required],
      enterprice_activity: ['', Validators.required],
      enterprice_phone: ['', Validators.required],
      enterprice_position: ['', Validators.required],
      contract_type: ['', Validators.required],
      work_time: ['', Validators.required],
      time_at_enterprice: ['', Validators.required],
      prp: ['', Validators.required],
      vhc: ['', Validators.required],
      tme: ['', Validators.required],
      bank_name: ['', Validators.required],
      account_number: ['', Validators.required],
      type_money: ['', Validators.required],
      operation_country: ['', Validators.required],
      operation_city: ['', Validators.required],
      opi: ['', Validators.required],
      operation_type: ['', Validators.required],
      other_type: ['', Validators.required],
      product_identity: ['', Validators.required],
      ttype_product: ['', Validators.required],
      average_amount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
     this.sharedDataService.currentOcupationsMessage.subscribe(e => this.ocupationsItems = e);
     this.sharedDataService.currentContractTypeMessage.subscribe(e => this.contractTypeItems = e);
     this.sharedDataService.currentAntiquityMessage.subscribe(e => this.antiquityItems = e);
     this.sharedDataService.currentCountriesMessage.subscribe(e => this.countriesItems = e);
     this.sharedDataService.currentCitiesMessage.subscribe(e => this.citiesItems = e);
     this.sharedDataService.currentOperationTypeMessage.subscribe(e => this.operationTypeItems = e);
     this.setDataForm();
  }

  setDataForm() {
    this.form.controls['ocupation'].setValue(this.getUserProperty("ocupation"));
    this.form.controls['enterprice_name'].setValue(this.getUserProperty("enterprice_name"));
    this.form.controls['enterprice_address'].setValue(this.getUserProperty("enterprice_address"));
    this.form.controls['enterprice_activity'].setValue(this.getUserProperty("enterprice_activity"));
    this.form.controls['enterprice_phone'].setValue(this.getUserProperty("enterprice_phone"));
    this.form.controls['enterprice_position'].setValue(this.getUserProperty("enterprice_position"));
    this.form.controls['contract_type'].setValue(this.getUserProperty("contract_type"));
    this.form.controls['work_time'].setValue(this.getUserProperty("work_time"));
    this.form.controls['time_at_enterprice'].setValue(this.getUserProperty("time_at_enterprice"));
    this.form.controls['prp'].setValue(this.getUserProperty("prp"));
    this.form.controls['vhc'].setValue(this.getUserProperty("vhc"));
    this.form.controls['tme'].setValue(this.getUserProperty("tme"));
    this.form.controls['bank_name'].setValue(this.getUserProperty("bank_name"));
    this.form.controls['account_number'].setValue(this.getUserProperty("account_number"));
    this.form.controls['type_money'].setValue(this.getUserProperty("type_money"));
    this.form.controls['operation_country'].setValue(this.getUserProperty("operation_country"));
    this.form.controls['operation_city'].setValue(this.getUserProperty("operation_city"));
    this.form.controls['opi'].setValue(this.getUserProperty("opi"));
    this.form.controls['operation_type'].setValue(this.getUserProperty("operation_type"));
    this.form.controls['other_type'].setValue(this.getUserProperty("other_type"));
    this.form.controls['product_identity'].setValue(this.getUserProperty("product_identity"));
    this.form.controls['ttype_product'].setValue(this.getUserProperty("ttype_product"));
    this.form.controls['average_amount'].setValue(this.getUserProperty("average_amount"));
  }

  getUserProperty(value: string): string {
    if (!this.isNew) {
      try {
        return this.user.economicInformation[value];
      } catch (e) {
        return "";
      }
    }
    return "";
  }

  submit() {
    this.isSubmited = true;
    
    if (this.form.invalid) {
      return;
    }

    this.sendToParent();
  }

  back(){
    this.backToMain.emit();
  }

  sendToParent() {
    this.applicationStep3ToMain.emit({data:this.form.value});
  }

}
