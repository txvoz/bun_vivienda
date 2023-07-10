import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CreditDetailResponse,
  Participant,
} from 'src/app/interfaces/CreditDetailResponse';
import { InterviewRequest } from 'src/app/interfaces/InterviewRequest';
import { CreditDetailService } from 'src/app/services/credit.detail.service';
import { InterviewService } from 'src/app/services/interview.service';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-credit-detail-main',
  templateUrl: './credit-detail-main.component.html',
  styleUrls: [
    './credit-detail-main.component.css',
    './../../../../app.component.css',
    '../../../simulator/components/simulator-form/toogle_button.scss',
    '../../../application/components/application-main/application-main.component.css',
    '../detail-credit-analyst/detail-credit-analyst.component.css'
  ],
})
export class CreditDetailMainComponent implements OnInit {
  form: FormGroup;
  isSubmited: boolean = false;
  id: string = '';
  datasource: CreditDetailResponse | null = null;
  pivote: Participant | null | undefined = null;
  index: number = -1;

  selectOptions: string[] = [];
  selectedOptions: string[] = [];
  optionsOpen = false;

  private closeBtn: HTMLElement | null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sharedDataService: SharedDataService,
    private creditDetailService: CreditDetailService,
    private interviewService: InterviewService,
    private signatureService: SignatureService
  ) {
    this.form = this.formBuilder.group({
      result_interview: ['', Validators.required],
      declare_income: ['', Validators.required],
      origin_assets: ['', Validators.required],
      automatic_debit: ['', Validators.required],
      account_number: ['', Validators.required],
      payment_method: ['', Validators.required],
      other: ['', Validators.required],
      amountStudy: ['', Validators.required],
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
    console.log(this.id);
    this.creditDetailService.getDetail(this.id).subscribe((data) => {
      console.log('Detail', data);
      this.datasource = data;
      this.index = 0;
      this.pivote = this.datasource?.response?.participants
        ? this.datasource?.response?.participants[this.index]
        : null;
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

  documentValidation() {}

  report() {}

  withdrawn() {}

  submit() {
    this.isSubmited = true;

    if (this.form.invalid) {
      return;
    }

    this.sharedDataService.changeStatus(true);
    this.interviewService
      .send(this.id, this.getInterviewRequest())
      .subscribe((data) => {
        this.sharedDataService.changeStatus(false);
        setTimeout(() => {
          const modalElement = document.getElementById('myModal');
          if (modalElement) {
            modalElement.style.display = 'block';
          }
        }, 0);
      });
  }

  getInterviewRequest(): InterviewRequest {
    return {
      account_number: this.form.value.account_number,
      automatic_debit: this.form.value.automatic_debit,
      interview: this.form.value.result_interview,
      origin_assets_funds: this.form.value.origin_assets,
      other_payment: this.form.value.other,
      payment_method: this.form.value.payment_method,
      statement_income: this.form.value.declare_income,
    };
  }

  sendSignature() {
    this.sharedDataService.changeStatus(true);
    this.signatureService.send(this.id).subscribe((data) => {
      this.sharedDataService.addChipMessage({
        display: true,
        title: '¡Envio de firma!',
        message: 'Se envio el correo para la firma digital.',
        type: 'info',
        icon: 'send-email',
      });

      this.router.navigateByUrl('/credit/list');
      this.sharedDataService.changeStatus(false);
    });
  }

  editRequest(edit: boolean = false) {
    this.router.navigateByUrl(
      '/credit/request/' + this.id + (edit ? '?option=edit' : '')
    );
  }

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
  }

  deselectOption(option: string): void {
    const index = this.selectedOptions.indexOf(option);
    if (index !== -1) {
      this.selectedOptions.splice(index, 1);
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.style.display = 'none';
    }
  }
}
