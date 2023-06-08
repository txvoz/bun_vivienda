import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credit-list-filters',
  templateUrl: './credit-list-filters.component.html',
  styleUrls: ['./credit-list-filters.component.css',
    './../../../../app.component.css',
    '../../../simulator/components/simulator-form/toogle_button.scss']
})
export class CreditListFiltersComponent implements OnInit {

  @Output() setFiltersToMain = new EventEmitter<{ data: any }>;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
    this.form = this.formBuilder.group({
      request_number: [''],
      from_date: [''],
      to_date: [''],
      request_status: [''],
      doc_number: [''],
    });
  }

  inputChange(item: string = '') {
    if (item == "request_number") {
      this.form.get("from_date")?.setValue("");
      this.form.get("to_date")?.setValue("");
      this.form.get("request_status")?.setValue("");
      this.form.get("doc_number")?.setValue("");
      return;
    }

    if (item == "from_date" || item == "to_date") {
      this.form.get("request_number")?.setValue("");
      this.form.get("request_status")?.setValue("");
      this.form.get("doc_number")?.setValue("");
    }

    if (item == "request_status") {
      this.form.get("from_date")?.setValue("");
      this.form.get("to_date")?.setValue("");
      this.form.get("request_number")?.setValue("");
      this.form.get("doc_number")?.setValue("");
      return;
    }

    if (item == "doc_number") {
      this.form.get("from_date")?.setValue("");
      this.form.get("to_date")?.setValue("");
      this.form.get("request_number")?.setValue("");
      this.form.get("request_status")?.setValue("");
      return;
    }

  }

  clear() {
    this.form.get("doc_number")?.setValue("");
    this.form.get("from_date")?.setValue("");
    this.form.get("to_date")?.setValue("");
    this.form.get("request_number")?.setValue("");
    this.form.get("request_status")?.setValue("");
    this.setFiltersToMain.emit({ data: null });
  }

  ngOnInit(): void {

  }

  isValidFilters() {
    if (this.form.controls["request_number"].value !== ""
      && this.form.controls["request_number"].value !== null
    ) {
      return true;
    }

    if (this.form.controls["from_date"].value !== "" && this.form.controls["from_date"].value !== null
      && this.form.controls["to_date"].value !== "" && this.form.controls["to_date"].value !== null) {
      return true;
    }

    if (this.form.controls["request_status"].value !== ""
      && this.form.controls["request_status"].value !== null
    ) {
      return true;
    }

    if (this.form.controls["doc_number"].value !== ""
      && this.form.controls["doc_number"].value !== null
    ) {
      return true;
    }

    return false;
  }

  submit() {
    if (!this.isValidFilters()) {
      return;
    }

    this.setFiltersToMain.emit({ data: this.form.value });
  }

}
