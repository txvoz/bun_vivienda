import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorAccessComponent } from './components/validator-access/validator-access.component';



@NgModule({
  declarations: [
    ValidatorAccessComponent
  ],
  exports: [
    ValidatorAccessComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ValidatorModule { }
