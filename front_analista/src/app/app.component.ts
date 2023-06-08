import { Component, OnInit } from '@angular/core';
import { SupportService } from './services/support.service';
import { SharedDataService } from './services/shared.data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'BancoUnion - Vivienda';
  

  constructor(private sharedDataService: SharedDataService) {}
  
  ngOnInit(): void {
    this.sharedDataService.ngOnInit();
  }
  
}
