import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/interfaces/AuthResponse';
import { AuthService } from 'src/app/services/auth.service';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css', './../../../../app.component.css']
})
export class LoginFormComponent {

  token: string | undefined;
  yemail: string = "";
  captchaResolved: boolean = false;

  constructor(
    private router: Router, 
    private sharedDataService: SharedDataService, 
    private authService: AuthService

  ) {
    this.token = undefined;
    this.yemail = "";
  }

  checkCaptcha(captchaResponse: string) {
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
  }

  public onSubmit(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    var that = this;
    this.sharedDataService.changeStatus(true);

    this.authService.login(that?.yemail)
    .subscribe((response: AuthResponse)=>{
      this.sharedDataService.changeStatus(false);
      this.sharedDataService.addChipMessage({
        display:true, 
        title:'¡Hemos enviado el acceso a tu correo!', 
        message:'Te enviamos un link para que puedas ingresar.', 
        type:'info',
        icon:'send-email'
      });
      form.reset();
    }, (error: Error) => {
      this.sharedDataService.changeStatus(false);
      this.sharedDataService.addChipMessage({
        display:true, 
        title:'Tu correo no está autorizado', 
        message:'Contáctate con nosotros para ayudarte.', 
        type:'error', 
        icon:'not-send-email'
      });
    });

   
  }

}
