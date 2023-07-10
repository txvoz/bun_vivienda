import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateModule } from '../template/template.module';
import { CreditDetailMainComponent } from './components/credit-detail-main/credit-detail-main.component';
import { DetailCreditAnalystComponent } from './components/detail-credit-analyst/detail-credit-analyst.component';
import { DirectiveModule } from 'src/app/shared/directives/directive.module';



@NgModule({
  declarations: [
    CreditDetailMainComponent,
    DetailCreditAnalystComponent,
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    TemplateModule, DirectiveModule
  ]
})
export class CreditDetailModule { }
