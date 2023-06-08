import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupportItemResponse } from 'src/app/interfaces/SupportServiceResponse';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-application-step1',
  templateUrl: './application-step1.component.html',
  styleUrls: [
    './application-step1.component.css', 
    '../application-main/application-main.component.css', 
    './../../../../app.component.css', 
    '../../../simulator/components/simulator-form/toogle_button.scss'
  ]
})
export class ApplicationStep1Component implements OnInit{

  form: FormGroup;
  isValidate:boolean = false;
  isSubmited: boolean = false;
  @Output() applicationStep1ToMain = new EventEmitter<{data: any}>;
  public propertyTypeItems: SupportItemResponse[] | undefined = [];
  public citiesItems: SupportItemResponse[] | undefined = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private sharedDataService: SharedDataService) {
    this.form = this.formBuilder.group({
      type_credit: ['', Validators.required],
      type_purchase: ['', Validators.required],
      type_use: ['', Validators.required],
      comercial_value: ['', Validators.required],
      city_of: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
      has_mortgage: [''],
    });
  }

  ngOnInit(): void {
    this.sharedDataService.currentPropertyTypeMessage.subscribe(e => this.propertyTypeItems = e);
    this.sharedDataService.currentCitiesMessage.subscribe(e => this.citiesItems = e);
  }


  submit() {
    this.isSubmited = true;
    
    if (this.form.invalid) {
      return;
    }

    this.sendToParent();
  }

  back(){
    this.router.navigateByUrl('/simulator');  
  }

  sendToParent() {
    this.applicationStep1ToMain.emit({data:this.form.value});
  }

}
