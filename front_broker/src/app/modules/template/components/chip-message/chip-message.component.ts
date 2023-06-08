import { Component } from '@angular/core';
import { ChipMessage } from 'src/app/interfaces/ChipMessage';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-chip-message',
  templateUrl: './chip-message.component.html',
  styleUrls: ['./chip-message.component.css']
})
export class ChipMessageComponent {

  data: ChipMessage = {
    display: false, 
    title:"",
    message: "",
    type: ""
  };

  constructor(private sharedDataService: SharedDataService){}

  ngOnInit(): void {
    this.sharedDataService.currentChipMessage.subscribe(e => this.data = e);
  }

  close(){
    this.data.display = false;
  }

}
