import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupportItemResponse } from 'src/app/interfaces/SupportServiceResponse';
import { IDeactivateComponent } from 'src/app/modules/abstract/IDeactivateComponent';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-simulator-form',
  templateUrl: './simulator-form.component.html',
  styleUrls: [
    './simulator-form.component.css',
    './toogle_button.scss' ,
    './../../../../app.component.css']
})
export class SimulatorFormComponent implements OnInit, IDeactivateComponent {

  form: FormGroup;
  credit_amount:string = '0';
  quota_value:string = '0';
  isValidate:boolean = false;
  isSubmited: boolean = false;
  public yearsItems: SupportItemResponse[] | undefined = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private sharedDataService: SharedDataService) {
    this.form = this.formBuilder.group({
      isUpdated: [''],
      modality: ['', Validators.required],
      value_total: ['', Validators.required],
      percent_value: ['', Validators.required],
      count_years: ['', Validators.required],
      tasa_ea: ['', Validators.required]
    });
  }

  allowRedirect: boolean = false;

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler($event:any) {
    console.log("Cargo el window:beforeunload-beforeUnloadHandler");
    $event.returnValue = this.allowRedirect;
    return this.allowRedirect;
  }

  canDeactivate(): boolean {
    return this.allowRedirect;
  }

  ngOnInit(): void {
    this.sharedDataService.currentYearsMessage.subscribe(e => this.yearsItems = e);
  }

  items = [
    {
      value: '1',
      label: 'Crédito hipotecario',
      className: 'icon-credit'
    },
    {
      value: '2',
      label: 'Leasing habitacional',
      className: 'icon-leasing'
    }
  ];

  submit() {
    this.isSubmited = true;
    
    if (this.form.invalid) {
      return;
    }

    let valor_inmueble = parseInt(this.form.controls['value_total'].value);
    let porcentaje_financiacion = parseFloat(this.form.controls['percent_value'].value);
    let monto_credito = valor_inmueble * (porcentaje_financiacion/100);
    let plazo = parseInt(this.form.controls['count_years'].value);
    let plazo_meses = plazo * 12;
    let tasa_efectivo_anual = parseInt(this.form.controls['tasa_ea'].value) / 100;
    let tasa_nominal_anual = (Math.pow(1+tasa_efectivo_anual, 1/12)-1)*12;
    let tasa_mes_vencido = tasa_nominal_anual / 12;
    let valor_cuota  =(monto_credito/  ((1 - Math.pow((1+tasa_mes_vencido), -plazo_meses) ) / tasa_mes_vencido)  )+1;
    this.credit_amount = Math.round(monto_credito)+"";
    this.quota_value = valor_cuota.toFixed(0)+"";

    this.isValidate = true;
  }

  next(){
    localStorage.setItem("simulatorData", JSON.stringify(this.form.value))
    this.router.navigateByUrl('/credit-application'); 
  }
}
