import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditListMainComponent } from './components/credit-list-main/credit-list-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateModule } from '../template/template.module';
import { CreditListFiltersComponent } from './components/credit-list-filters/credit-list-filters.component';
import { CreditListTableComponent } from './components/credit-list-table/credit-list-table.component';



@NgModule({
  declarations: [
    CreditListMainComponent,
    CreditListFiltersComponent,
    CreditListTableComponent
  ],
  exports: [
    CreditListMainComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    TemplateModule
  ]
})
export class CreditListModule { }
