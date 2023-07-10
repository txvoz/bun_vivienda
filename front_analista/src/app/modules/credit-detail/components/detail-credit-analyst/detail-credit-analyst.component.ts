import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, concatMap, of, switchMap } from 'rxjs';
import {
  CreditDetailResponse,
  Participant,
} from 'src/app/interfaces/CreditDetailResponse';
import { AmountApprovedService } from 'src/app/services/amount-approved.service';
import { ByStatesAnalystService } from 'src/app/services/by-states-analyst.service';
import { CreditDetailService } from 'src/app/services/credit.detail.service';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { StatusAnalystService } from 'src/app/services/status-analyst.service';

@Component({
  selector: 'app-detail-credit-analyst',
  templateUrl: './detail-credit-analyst.component.html',
  styleUrls: [
    './detail-credit-analyst.component.css',
    './../../../../app.component.css',
    '../../../simulator/components/simulator-form/toogle_button.scss',
    '../../../application/components/application-main/application-main.component.css',
  ],
})
export class DetailCreditAnalystComponent implements OnInit {
  form: FormGroup;
  isSubmited: boolean = false;
  id: string = '';
  datasource: CreditDetailResponse | null = null;
  pivote: Participant | null | undefined = null;
  index: number = -1;

  showAmountApproved: boolean = false;
  showSelect: boolean = false;

  selectOptions: string[] = [];
  selectedOptions: string[] = [];
  optionsOpen = false;

  isSelectionEmpty: boolean = true;
  isAmountApprovedEmpty: boolean = true;

  private closeBtn: HTMLElement | null;

  idRequest: string = '';
  customButtonName: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sharedDataService: SharedDataService,
    private creditDetailService: CreditDetailService,
    private statusAnalystService: StatusAnalystService,
    private byStatesAnalystService: ByStatesAnalystService,
    private amountApprovedService: AmountApprovedService
  ) {
    this.form = this.formBuilder.group({
      amountApproved: new FormControl(''),
      selectOp: ['', Validators.required],
    });

    this.closeBtn = document.getElementById('closeBtn');
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', this.closeModal);
    }
  }

  ngOnInit(): void {
    var that: any = this;
    this.sharedDataService.changeStatus(true);
    window.setTimeout(function () {
      that.sharedDataService.changeStatus(true);
      that.id = that.route.snapshot.params['id'];
      that.id = that.id == null ? '' : that.id;
      that.loadData();
    }, 1000);
  }

  loadData() {
    this.creditDetailService.getDetail(this.id).subscribe((data) => {
      console.log('Detail', data);
      this.datasource = data;
      this.index = 0;
      this.pivote = this.datasource?.response?.participants
        ? this.datasource?.response?.participants[this.index]
        : null;
      console.log(this.pivote);
      this.sharedDataService.changeStatus(false);
    });
  }

  getAvatar(user: any): string {
    return (user?.names?.charAt(0) + user?.lastNames?.charAt(0)).toUpperCase();
  }

  setPivote(i: number) {
    this.index = i;
    this.pivote = this.datasource?.response?.participants
      ? this.datasource?.response?.participants[this.index]
      : null;
  }

  /* Logica para los botones de estado */
  approved() {
    this.customButtonName = 'Aprobado';
    this.showAmountApproved = !this.showAmountApproved;
  }

  approvedException() {
    this.customButtonName = 'Aprobado con excepcion';
    this.showAmountApproved = !this.showAmountApproved;
    this.showSelect = !this.showSelect;

    this.statusAnalystService.getApprovedException().subscribe((data) => {
      if (data.domain && data.domain.valuesDomain) {
        this.selectOptions =
          data.domain.valuesDomain?.map((value: any) => value.name) ?? [];
        this.isSelectionEmpty = this.selectedOptions.length === 0;
      }
    });
  }

  rejected() {
    this.customButtonName = 'Rechazado';
    this.showSelect = !this.showSelect;

    this.statusAnalystService.getStatusRefused().subscribe((data) => {
      if (data.domain && data.domain.valuesDomain) {
        this.selectOptions =
          data.domain.valuesDomain?.map((value: any) => value.name) ?? [];
        this.isSelectionEmpty = this.selectedOptions.length === 0;
      }
    });
  }

  returned() {
    this.customButtonName = 'Devuelto';
    this.showSelect = !this.showSelect;

    this.statusAnalystService.getStatusReturned().subscribe((data) => {
      if (data.domain && data.domain.valuesDomain) {
        this.selectOptions =
          data.domain.valuesDomain?.map((value: any) => value.name) ?? [];
        this.isSelectionEmpty = this.selectedOptions.length === 0;
      }
    });
  }

  submit() {
    const amountApprovedValue = this.form.get('amountApproved')?.value;
  
    if (
      this.customButtonName === 'Aprobado' ||
      this.customButtonName === 'Aprobado con excepción'
    ) {
      if (!amountApprovedValue) {
        return;
      }
  
      this.amountApprovedService.amountApproved(this.id, amountApprovedValue).subscribe(
        () => {
          this.submitByStates().subscribe(
            () => {
              this.handleSuccess();
            },
            (err) => {
              this.handleError();
            }
          );
        },
        (err) => {
          this.handleError();
        }
      );
    } else {
      this.submitByStates().subscribe(
        () => {
          this.handleSuccess();
        },
        (err) => {
          this.handleError();
        }
      );
    }
  }
  
  submitByStates() {
    let formattedNames = '';
    if (this.pivote) {
      const names = this.pivote.names?.split(' ')[0]?.toLowerCase() || '';
      const lastNames =
        this.pivote.lastNames?.split(' ')[0]?.toLowerCase() || '';
  
      formattedNames = `${names}.${lastNames}`;
    }
  
    this.sharedDataService.changeStatus(true);
  
    return this.byStatesAnalystService
      .byStates(this.id, this.customButtonName, formattedNames)
      .pipe(
        catchError((error) => {
          this.sharedDataService.changeStatus(false);
          this.errorTwo();
          return of(null);
        })
      );
  }
  
  handleSuccess() {
    setTimeout(() => {
      this.sharedDataService.changeStatus(false);
      const modalElement = document.getElementById('myModal');
      if (modalElement) {
        modalElement.style.display = 'block';
      }
    }, 2000);
  }
  
  handleError() {
    this.sharedDataService.changeStatus(false);
    this.errorTwo();
  }
  

  /* Logica del select */
  toggleOptions(): void {
    this.optionsOpen = !this.optionsOpen;
  }

  toggleOption(option: string): void {
    const index = this.selectedOptions.indexOf(option);
    if (index !== -1) {
      this.selectedOptions.splice(index, 1);
    } else {
      this.selectedOptions.push(option);
    }
    this.isSelectionEmpty = this.selectedOptions.length === 0;
  }

  deselectOption(option: string): void {
    const index = this.selectedOptions.indexOf(option);
    if (index !== -1) {
      this.selectedOptions.splice(index, 1);
    }
    this.isSelectionEmpty = this.selectedOptions.length === 0;
  }

  /* Validacion para que habilite el boton con el monto aprobado */
  onAmountApprovedChange() {
    const amountApprovedControl = this.form.get('amountApproved');
    if (amountApprovedControl?.value) {
      const amountApproved = amountApprovedControl.value.trim();
      this.isAmountApprovedEmpty = amountApproved.length === 0;
    } else {
      this.isAmountApprovedEmpty = true;
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.style.display = 'none';

      const amountApprovedControl = this.form.get('amountApproved');
      if (amountApprovedControl) {
        amountApprovedControl.setValue('');
        this.isAmountApprovedEmpty = true;
      }
      this.selectedOptions = [];
      this.isSelectionEmpty = true;
    }
  }

  errorTwo() {
    this.sharedDataService.addChipMessage({
      display: true,
      title: 'Error en la solicitud ',
      message: 'Contáctate con nosotros para ayudarte.',
      type: 'error',
      icon: 'not-send-email',
    });
  }
}
