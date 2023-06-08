import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthResponse } from 'src/app/interfaces/AuthResponse';
import { CreditApplicationService } from 'src/app/services/credit-application.service';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-application-step6',
  templateUrl: './application-step6.component.html',
  styleUrls: [
    './application-step6.component.css',
    '../application-main/application-main.component.css',
    './../../../../app.component.css',
    '../../../simulator/components/simulator-form/toogle_button.scss'
  ]
})
export class ApplicationStep6Component {

  form: FormGroup;
  isValidate: boolean = false;
  isSubmited: boolean = false;
  @Output() applicationStep6ToMain = new EventEmitter<{ data: any }>;
  @Output() backToMain = new EventEmitter<{}>;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      other_customer: ['', Validators.required],
    });
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
    this.applicationStep6ToMain.emit({ data: this.form.value });
  }

}
