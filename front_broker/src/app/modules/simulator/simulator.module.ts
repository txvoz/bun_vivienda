import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemplateModule } from '../template/template.module';
import { SimulatorFormComponent } from './components/simulator-form/simulator-form.component';


@NgModule({
  declarations: [
    SimulatorFormComponent
  ],
  exports: [
    SimulatorFormComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    TemplateModule
  ]
})
export class SimulatorModule { }
