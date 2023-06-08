import { Component } from '@angular/core';
import { AlertMessage } from 'src/app/interfaces/AlertMessage';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css','./../../../../app.component.css']
})
export class AlertMessageComponent {

  data: AlertMessage = {
    display: false, 
    type:''
  };

  constructor(private sharedDataService: SharedDataService){}

  ngOnInit(): void {
    this.sharedDataService.currentAlertMessage.subscribe(e => this.data = e);
  }

  close(){
    this.data.display = false;
  }


}
