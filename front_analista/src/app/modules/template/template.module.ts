import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ChipMessageComponent } from './components/chip-message/chip-message.component';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AlertComponent,
    FooterComponent,
    LoaderComponent,
    ChipMessageComponent,
    AlertMessageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    NavbarComponent, 
    AlertComponent,
    FooterComponent,
    LoaderComponent,
    LoaderComponent,
    ChipMessageComponent, 
    AlertMessageComponent
  ]
})
export class TemplateModule { }
