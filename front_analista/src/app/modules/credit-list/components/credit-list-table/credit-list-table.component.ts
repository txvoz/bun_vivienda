import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CreditListItem } from 'src/app/interfaces/CreditListResponse';
import { CreditListPagesItem } from 'src/app/interfaces/CreditListResponse';
import { DetailCancelRequestService } from 'src/app/services/detail-cancel-request.service';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-credit-list-table',
  templateUrl: './credit-list-table.component.html',
  styleUrls: [
    './credit-list-table.component.css',
    './../../../../app.component.css',
  ],
})
export class CreditListTableComponent implements OnInit {
  @Input('datasource') datasource: CreditListPagesItem | null | undefined =
    null;
  @Output() setPagToMain = new EventEmitter<{ data: any }>();

  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  private closeBtn: HTMLElement | null;

  selectedRequestId: any;

  constructor(
    private router: Router,
    private cancelRequestService: DetailCancelRequestService,
    private sharedDataService: SharedDataService
  ) {
    this.closeBtn = document.getElementById('closeBtn');
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', this.closeModal);
    }
  }

  ngOnInit(): void {}

  setPag(i: number) {
    if (i !== this.datasource?.numberPage) {
      this.setPagToMain.emit({ data: i });
    }
  }

  detail(entity: CreditListItem) {
    //this.router.navigateByUrl('/credit/detail/'+entity.id_request); /* Descomentar al terminar, aqui debe validar el token para redirigirse segun el rol de analista */
    this.router.navigateByUrl('/credit/detail-analyst/' + entity.id_request);
  }

  openModal(id_request: any) {
    this.selectedRequestId = id_request;
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.style.display = 'block';
    }
  }

  cancelRequest(id: any) {
    let data;
  
    this.datasource?.content?.forEach((element) => {
      if (element.id_request == id) {
        data = {
          status: 'ANULADO',
          user: element.first_name + '.' + element.last_name,
        };
      }
    });
  
    this.cancelRequestService.detailCancelRequest(id, data).subscribe(
      (val) => {
        const modalElement = document.getElementById('myModal');
        if (modalElement) {
          modalElement.style.display = 'none';
        }
      },
      (err) => this.errorTwo()
    );
  }
  

  closeModal(): void {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.style.display = 'none';
    }
  }

  errorTwo() {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('request');
    this.sharedDataService.addChipMessage({
      display: true,
      title: 'Error en la solicitud ',
      message: 'Contáctate con nosotros para ayudarte.',
      type: 'error',
      icon: 'not-send-email',
    });
  }

  /* Filtro para ordenar descendente - ascendente  */
  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  /* Filtro para ordenar descendente - ascendente  */
  sortData(column: keyof CreditListItem) {
    this.sortColumn = column;

    this.datasource?.content?.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA === undefined || valueB === undefined) {
        return 0;
      }

      if (this.sortDirection === 'asc') {
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
      } else {
        if (valueA > valueB) return -1;
        if (valueA < valueB) return 1;
      }
      return 0;
    });
  }
}
