import { Component, Input, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{

  @Input('label') label: string | null = "Cargando...";
  display: boolean = false;

  constructor(private sharedDataService: SharedDataService){}

  ngOnInit(): void {
    this.sharedDataService.currentStatus.subscribe(e => this.display = e);
  }

}
