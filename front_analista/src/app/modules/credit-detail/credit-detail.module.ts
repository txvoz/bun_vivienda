import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateModule } from '../template/template.module';
import { CreditDetailMainComponent } from './components/credit-detail-main/credit-detail-main.component';



@NgModule({
  declarations: [
    CreditDetailMainComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    TemplateModule
  ]
})
export class CreditDetailModule { }
