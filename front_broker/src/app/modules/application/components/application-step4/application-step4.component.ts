import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CURRENCIES, Currency } from 'src/app/interfaces/Currency';
import { SelectBoxUtil } from 'src/app/utils/select-box-util';

@Component({
  selector: 'app-application-step4',
  templateUrl: './application-step4.component.html',
  styleUrls: [
    './application-step4.component.css',
    './select-image.css',
    '../application-main/application-main.component.css',
    './../../../../app.component.css',
    '../../../simulator/components/simulator-form/toogle_button.scss'
  ]
})
export class ApplicationStep4Component implements OnInit {

  @Output() applicationStep4ToMain = new EventEmitter<{ data: any }>;
  @Output() backToMain = new EventEmitter<{}>;
  form: FormGroup;
  isSubmited: boolean = false;
  currencies: Currency[] = CURRENCIES;
  properties: number[] = [];
  @Input('user') user: any = {};
  @Input('isNew') isNew: boolean | null | undefined = true;
  @Input('indexUser') indexUser: number | null | undefined = 1;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      have_loans: ['', Validators.required],
      have_tc: ['', Validators.required],
      have_debt: ['', Validators.required],
      have_vehicle: ['', Validators.required],
      have_property: ['', Validators.required],
      loans: this.formBuilder.array([]),
      tcs: this.formBuilder.array([]),
      debts: this.formBuilder.array([]),
      vehicles: this.formBuilder.array([]),
      properties: this.formBuilder.array([]),
      total_actives: ['', Validators.required],
      actives_currency_value: ['', Validators.required],
      total_passives: ['', Validators.required],
      passives_currency_value: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    let that = this;
    this.setDataForm();
    window.setTimeout(function () {
      that.loadSelectorCurrency();
    }, 1000);
  }

  setDataForm() {
    this.form.controls['have_loans'].setValue(this.getUserProperty("have_loans"));
    this.form.controls['have_tc'].setValue(this.getUserProperty("have_tc"));
    this.form.controls['have_debt'].setValue(this.getUserProperty("have_debt"));
    this.form.controls['have_vehicle'].setValue(this.getUserProperty("have_vehicle"));
    this.form.controls['have_property'].setValue(this.getUserProperty("have_property"));
    this.form.controls['total_actives'].setValue(this.getUserProperty("total_actives"));
    this.form.controls['actives_currency_value'].setValue(this.getUserProperty("actives_currency_value"));
    this.form.controls['total_passives'].setValue(this.getUserProperty("total_passives"));
    this.form.controls['passives_currency_value'].setValue(this.getUserProperty("passives_currency_value"));


    window.setTimeout(function () {
      document.getElementById('actives_currency_value_select')?.click();
      document.getElementById('actives_currency_value_select')?.click();
      document.getElementById('passives_currency_value_select')?.click();
      document.getElementById('passives_currency_value_select')?.click();
    }, 2000);

    if(!this.isNew) {
      if (this.user.activeOrPassive["loans"].length > 0) {
        for (var i = 0; i < this.user.activeOrPassive["loans"].length; i++) {
          this.addFrmLoans(this.user.activeOrPassive["loans"][i]);
          let target = "loans" + i + "_" + this.user.activeOrPassive["loans"][i]["currency_value"];
          window.setTimeout(function () {
            document.getElementById(target)?.click();
            document.getElementById(target)?.click();
          }, 2000);
        }
      }
  
      if (this.user.activeOrPassive["tcs"].length > 0) {
        for (var i = 0; i < this.user.activeOrPassive["tcs"].length; i++) {
          this.addFrmTcs(this.user.activeOrPassive["tcs"][i]);
          let target = "tcs" + i + "_" + this.user.activeOrPassive["tcs"][i]["currency_value"];
          window.setTimeout(function () {
            document.getElementById(target)?.click();
            document.getElementById(target)?.click();
          }, 2000);
        }
      }
  
      if (this.user.activeOrPassive["debts"].length > 0) {
        for (var i = 0; i < this.user.activeOrPassive["debts"].length; i++) {
          this.addFrmDebts(this.user.activeOrPassive["debts"][i]);
          let target = "debts" + i + "_" + this.user.activeOrPassive["debts"][i]["currency_value"];
          window.setTimeout(function () {
            document.getElementById(target)?.click();
            document.getElementById(target)?.click();
          }, 2000);
        }
      }
  
      if (this.user.activeOrPassive["vehicles"].length > 0) {
        for (var i = 0; i < this.user.activeOrPassive["vehicles"].length; i++) {
          this.addFrmVehicles(this.user.activeOrPassive["vehicles"][i]);
          let target = "vehicles" + i + "_" + this.user.activeOrPassive["vehicles"][i]["currency_value"];
          window.setTimeout(function () {
            document.getElementById(target)?.click();
            document.getElementById(target)?.click();
          }, 2000);
        }
      }
  
      if (this.user.activeOrPassive["properties"].length > 0) {
        for (var i = 0; i < this.user.activeOrPassive["properties"].length; i++) {
          this.addFrmProperties(this.user.activeOrPassive["properties"][i]);
          let target = "properties" + i + "_" + this.user.activeOrPassive["properties"][i]["currency_value"];
          window.setTimeout(function () {
            document.getElementById(target)?.click();
            document.getElementById(target)?.click();
          }, 2000);
        }
      }
    }
  }

  getUserProperty(value: string): string {
    if (!this.isNew) {
      try {
        return this.user.activeOrPassive[value];
      } catch (e) {
        return "";
      }
    }
    return "";
  }

  /* Loans */
  get frmLoans(): FormArray {
    return this.form.get("loans") as FormArray
  }

  newFrmLoans(data: any = {}): FormGroup {
    return this.formBuilder.group({
      loans_entity: [data["loans_entity"], Validators.required],
      loans_value: [data["loans_value"], Validators.required],
      currency_value: [data["currency_value"], Validators.required],
    })
  }

  addFrmLoans(data: any = {}) {
    this.frmLoans.push(this.newFrmLoans(data));
  }

  public addLoan() {
    this.addFrmLoans();
    let that = this;
    window.setTimeout(function () {
      that.loadSelectorCurrency();
    }, 500);
  }

  public removeLoans() {
    for (var i = 0; i < this.frmLoans.length; i++) {
      this.frmLoans.removeAt(i);
    }
  }

  /* tcs */
  get frmTcs(): FormArray {
    return this.form.get("tcs") as FormArray
  }

  newFrmTcs(data: any = {}): FormGroup {
    return this.formBuilder.group({
      tc_entity: [data['tc_entity'], Validators.required],
      tc_value: [data['tc_value'], Validators.required],
      currency_value: [data['currency_value'], Validators.required],
    })
  }

  addFrmTcs(data: any = {}) {
    this.frmTcs.push(this.newFrmTcs(data));
  }

  public addTc() {
    this.addFrmTcs();
    let that = this;
    window.setTimeout(function () {
      that.loadSelectorCurrency();
    }, 500);
  }

  public removeTc() {
    for (var i = 0; i < this.frmTcs.length; i++) {
      this.frmTcs.removeAt(i);
    }
  }

  /* debt */
  get frmDebts(): FormArray {
    return this.form.get("debts") as FormArray
  }

  newFrmDebts(data: any = {}): FormGroup {
    return this.formBuilder.group({
      debt_entity: [data['debt_entity'], Validators.required],
      debt_value: [data['debt_value'], Validators.required],
      currency_value: [data['currency_value'], Validators.required],
    })
  }

  addFrmDebts(data: any = {}) {
    this.frmDebts.push(this.newFrmDebts(data));
  }

  public addDebts() {
    this.addFrmDebts();
    let that = this;
    window.setTimeout(function () {
      that.loadSelectorCurrency();
    }, 500);
  }

  public removeDebts() {
    for (var i = 0; i < this.frmDebts.length; i++) {
      this.frmDebts.removeAt(i);
    }
  }


  /* vehicle */
  get frmVehicles(): FormArray {
    return this.form.get("vehicles") as FormArray
  }

  newFrmVehicles(data: any = {}): FormGroup {
    return this.formBuilder.group({
      brand_and_model: [data['brand_and_model'], Validators.required],
      plate: [data['plate'], Validators.required],
      comercial_value: [data['comercial_value'], Validators.required],
      currency_value: [data['currency_value'], Validators.required],
      service_type: [data['service_type'], Validators.required],
      has_debt: [data['has_debt'], Validators.required],
      favor_of: [data['favor_of'], Validators.required],
    })
  }

  addFrmVehicles(data: any = {}) {
    this.frmVehicles.push(this.newFrmVehicles(data));
  }

  public addVehicle() {
    this.addFrmVehicles();
    let that = this;
    window.setTimeout(function () {
      that.loadSelectorCurrency();
    }, 500);
  }

  public removeVehicles() {
    for (var i = 0; i < this.frmVehicles.length; i++) {
      this.frmVehicles.removeAt(i);
    }
  }

  //***** */

  get frmProperties(): FormArray {
    return this.form.get("properties") as FormArray
  }

  newFrmProperties(data: any = {}): FormGroup {
    return this.formBuilder.group({
      type_property: [data['type_property'], Validators.required],
      city_property: [data['city_property'], Validators.required],
      address_property: [data['address_property'], Validators.required],
      comercial_value: [data['comercial_value'], Validators.required],
      currency_value: [data['currency_value'], Validators.required],
      has_mortgage: [data['has_mortgage'], Validators.required],
      favor_to: [data['favor_to'], Validators.required],
    })
  }

  addFrmProperties(data: any = {}) {
    this.frmProperties.push(this.newFrmProperties(data));
  }

  public addProperty() {
    this.addFrmProperties();
    let that = this;
    window.setTimeout(function () {
      that.loadSelectorCurrency();
    }, 500);
  }

  public removeProperties() {
    for (var i = 0; i < this.frmProperties.length; i++) {
      this.frmProperties.removeAt(i);
    }
  }

  /*** */
  submit() {
    console.log("data step 4", this.form);

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
    this.applicationStep4ToMain.emit({ data: this.form.value });
  }


  public validate(formGroup: any, value: string): any {
    return formGroup.controls[value];
  }

  public selected(formGroup: any, value: string, tarjet: string = "") {
    if (tarjet === "") {
      tarjet = "currency_value";
    }
    console.log("FormGroup", formGroup);
    formGroup.controls[tarjet].setValue(value);
  }

  loadSelectorCurrency(): void {
    SelectBoxUtil.refreshCreate();
  }

}


//https://www.tektutorialshub.com/angular/angular-formarray-example-in-reactive-forms/ 