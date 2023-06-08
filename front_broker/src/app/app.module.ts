import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaFormsModule, RecaptchaSettings } from 'ng-recaptcha';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TemplateModule } from './modules/template/template.module';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { LoginModule } from './modules/login/login.module';
import { SimulatorModule } from './modules/simulator/simulator.module';
import { CreditApplicationModule } from './modules/application/credit-application.module';
import { SharedDataService } from './services/shared.data.service';
import { ValidatorModule } from './modules/validator/validator.module';
import { AccessService } from './services/access.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule, 
    FormsModule, 
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    RecaptchaModule,
    RecaptchaFormsModule,
    TemplateModule, 
    LoginModule, 
    ValidatorModule,
    SimulatorModule, 
    CreditApplicationModule
  ],
  providers: [
    AuthService, AccessService, AlertService, SharedDataService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
