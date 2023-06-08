import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaFormsModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { TemplateModule } from '../template/template.module';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  exports: [
    LoginFormComponent
  ],
  imports: [
    CommonModule, FormsModule, RecaptchaModule, TemplateModule
  ]
})
export class LoginModule { }
