import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationMainComponent } from './components/application-main/application-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateModule } from '../template/template.module';
import { ApplicationStep1Component } from './components/application-step1/application-step1.component';
import { ApplicationStep2Component } from './components/application-step2/application-step2.component';
import { ApplicationStep3Component } from './components/application-step3/application-step3.component';
import { ApplicationStep4Component } from './components/application-step4/application-step4.component';
import { ApplicationStep5Component } from './components/application-step5/application-step5.component';
import { ApplicationStep6Component } from './components/application-step6/application-step6.component';



@NgModule({
  declarations: [
    ApplicationMainComponent,
    ApplicationStep1Component,
    ApplicationStep2Component,
    ApplicationStep3Component,
    ApplicationStep4Component,
    ApplicationStep5Component,
    ApplicationStep6Component
  ],
  exports: [
    ApplicationMainComponent,
    ApplicationStep1Component,
    ApplicationStep2Component,
    ApplicationStep3Component,
    ApplicationStep4Component,
    ApplicationStep5Component,
    ApplicationStep6Component
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    TemplateModule
  ]
})
export class CreditApplicationModule { }
