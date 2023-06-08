import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CreditListItem } from 'src/app/interfaces/CreditListResponse';
import { CreditListPagesItem } from 'src/app/interfaces/CreditListResponse';

@Component({
  selector: 'app-credit-list-table',
  templateUrl: './credit-list-table.component.html',
  styleUrls: ['./credit-list-table.component.css','./../../../../app.component.css', ]
})
export class CreditListTableComponent implements OnInit{

  @Input('datasource') datasource: CreditListPagesItem | null | undefined = null;
  @Output() setPagToMain = new EventEmitter<{data: any}>;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  setPag(i:number) {
    if(i !== this.datasource?.numberPage) {
      this.setPagToMain.emit({data:i});
    }
  }

  detail(entity:CreditListItem) {
    this.router.navigateByUrl('/credit/detail/'+entity.id_request);
  }

}
