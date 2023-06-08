import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportItemResponse } from 'src/app/interfaces/SupportServiceResponse';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-application-step5',
  templateUrl: './application-step5.component.html',
  styleUrls: [
    './application-step5.component.css',
    '../application-main/application-main.component.css', 
    './../../../../app.component.css', 
    '../../../simulator/components/simulator-form/toogle_button.scss'
  ]
})
export class ApplicationStep5Component implements OnInit {

  @Output() applicationStep5ToMain = new EventEmitter<{data: any}>;
  @Output() backToMain = new EventEmitter<{}>;

  form: FormGroup;
  isValidate:boolean = false;
  isSubmited: boolean = false;
  referenceTypeItems: SupportItemResponse[] | undefined = [];
  relationshipTypeItems: SupportItemResponse[] | undefined = [];
  @Input('user') user: any = {};
  @Input('isNew') isNew: boolean | null | undefined = true;
  @Input('indexUser') indexUser: number | null | undefined = 1;

  radio:string = '';
  radio2:string = '';

  constructor(
    private formBuilder: FormBuilder, private sharedDataService: SharedDataService
  ) {
    this.form = this.formBuilder.group({
      personalRefer: ['', Validators.required],
      personal_ref_full_name: ['', Validators.required],
      personal_ref_country: ['', Validators.required],
      personal_ref_phone: ['', Validators.required],
      personal_relationship: [''],
      personalRefer2: ['', Validators.required],
      family_ref_full_name: ['', Validators.required],
      family_ref_country: ['', Validators.required],
      family_ref_phone: ['', Validators.required],
      family_relationship: [''],
    });
  }

  ngOnInit(): void {
    this.sharedDataService.currentReferenceTypeMessage.subscribe(e => this.referenceTypeItems = e);
    this.sharedDataService.currentRelationnshipTypeMessage.subscribe(e => this.relationshipTypeItems = e);
    this.setDataForm();
  }

  setDataForm() {
    this.form.controls['personalRefer'].setValue(this.getUserProperty("personalRefer"));
    this.form.controls['personal_ref_full_name'].setValue(this.getUserProperty("personal_ref_full_name"));
    this.form.controls['personal_ref_country'].setValue(this.getUserProperty("personal_ref_country"));
    this.form.controls['personal_ref_phone'].setValue(this.getUserProperty("personal_ref_phone"));
    this.form.controls['personal_relationship'].setValue(this.getUserProperty("personal_relationship"));
    this.form.controls['personalRefer2'].setValue(this.getUserProperty("personalRefer2"));
    this.form.controls['family_ref_full_name'].setValue(this.getUserProperty("family_ref_full_name"));
    this.form.controls['family_ref_country'].setValue(this.getUserProperty("family_ref_country"));
    this.form.controls['family_ref_phone'].setValue(this.getUserProperty("family_ref_phone"));
    this.form.controls['family_relationship'].setValue(this.getUserProperty("family_relationship"));
  }

  getUserProperty(value: string): string {
    if (!this.isNew) {
      try {
        return this.user.references[value];
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
    this.applicationStep5ToMain.emit({data:this.form.value});
  }

}
