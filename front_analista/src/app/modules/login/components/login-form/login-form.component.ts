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
  iuser: string = "";
  ipassword: string = "";
  captchaResolved: boolean = false;

  constructor(
    private router: Router, 
    private sharedDataService: SharedDataService, 
    private authService: AuthService

  ) {
    this.token = undefined;
    this.iuser = "";
    this.ipassword = "";
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

    this.authService.login(that?.iuser)
    .subscribe((response: AuthResponse)=>{
      this.sharedDataService.changeStatus(false);
      this.sharedDataService.addChipMessage({
        display:true, 
        title:'¡Tu acceso es correcto!', 
        message:'Bienvenido.', 
        type:'info',
        icon:'send-email'
      });

      console.log("Access::validate::" + response?.response);
      localStorage.setItem("authToken", response?.response? response.response: "");
      this.router.navigateByUrl('/credit/list'); 
      this.sharedDataService.changeStatus(false);
    }, (error: Error) => {
      this.sharedDataService.changeStatus(false);
      this.sharedDataService.addChipMessage({
        display:true, 
        title:'Credenciales invalidas!', 
        message:'Contáctate con nosotros para ayudarte.', 
        type:'error', 
        icon:'not-send-email'
      });
    });

   
  }

}
