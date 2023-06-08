import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessService } from 'src/app/services/access.service';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-validator-access',
  templateUrl: './validator-access.component.html',
  styleUrls: ['./validator-access.component.css']
})
export class ValidatorAccessComponent implements OnInit {
  
  authToken:string = "";

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private sharedDataService: SharedDataService,
    private accessService: AccessService

  ) {
    this.authToken = this.route.snapshot.params['token'];
  }

  ngOnInit(): void {
    this.sharedDataService.changeStatus(true);
    this.accessService.validate(this.authToken).subscribe(response => {
      this.router.navigateByUrl('/simulator'); 
      this.sharedDataService.changeStatus(false);
    }, err => {
      localStorage.clear();
      this.router.navigateByUrl('/login'); 
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
