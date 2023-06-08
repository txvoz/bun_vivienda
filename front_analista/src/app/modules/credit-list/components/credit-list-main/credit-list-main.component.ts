import { Component, OnInit } from '@angular/core';
import { CreditListItem, CreditListPagesItem, CreditListResponse } from 'src/app/interfaces/CreditListResponse';
import { CreditListService } from 'src/app/services/credit.list.service';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-credit-list-main',
  templateUrl: './credit-list-main.component.html',
  styleUrls: ['./credit-list-main.component.css']
})
export class CreditListMainComponent implements OnInit {

  datasource: CreditListPagesItem;
  filters:any = null;

  constructor(
    private sharedDataService: SharedDataService,
    private creditListService: CreditListService) {
    this.datasource = {
      numberPage: 0,
      totalElements: 0,
      totalPages: 0,
      content: []
    };
  }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(page:number=0, filters:any = null) {
    this.sharedDataService.changeStatus(true);
    this.creditListService.getAll(page, filters).subscribe(data => {
      console.log("All credits", data);
      this.datasource = data.response === undefined ? {
        numberPage: 0,
        totalElements: 0,
        totalPages: 0,
        content: [], 
        pages:[]
      } : data.response;
      this.datasource.pages = Array(data?.response?.totalPages);
      this.sharedDataService.changeStatus(false);
    });
  }

  setPagToMain(event: any) {
    this.loadList(event.data, this.filters);
  }

  setFiltersToMain(event: any) {
    this.filters = event.data;
    this.loadList(0, this.filters);
  }

}
