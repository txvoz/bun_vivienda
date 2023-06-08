import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthResponse } from 'src/app/interfaces/AuthResponse';
import { CreditRequestItem } from 'src/app/interfaces/CreditRequestResponse';
import { CreditApplicationService } from 'src/app/services/credit-application.service';
import { CreditRequestService } from 'src/app/services/credit.request.service';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-application-main',
  templateUrl: './application-main.component.html',
  styleUrls: ['./application-main.component.css', './../../../../app.component.css', '../../../simulator/components/simulator-form/toogle_button.scss']
})
export class ApplicationMainComponent implements OnInit {

  isNew = true;
  indexCurrentUser = -1;
  currentUser: any = {};
  activeStep: number = 1;
  id: string = "";

  users: CreditRequestItem[] = [];

  items: any[] = [];

  steps: any[] = [
    {
      step: 1,
      label: 'Información del inmueble',
      status: ''
    },
    {
      step: 2,
      label: 'Datos del solicitante',
      status: ''
    },
    {
      step: 3,
      label: 'Información económica',
      status: ''
    },
    {
      step: 4,
      label: 'Activos y pasivos',
      status: ''
    },
    {
      step: 5,
      label: 'Referencias',
      status: ''
    },
    {
      step: 6,
      label: 'Documentos',
      status: ''
    }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService,
    private creditApplicationService: CreditApplicationService,
    private creditRequestService: CreditRequestService
  ) { }

  ngOnInit(): void {
    this.validateSteps();
    var that: any = this;
    this.sharedDataService.changeStatus(true);
    window.setTimeout(function () {
      that.sharedDataService.changeStatus(true);
      that.id = that.route.snapshot.params['id'];
      that.id = that.id == null ? "" : that.id;
      that.loadData();
    }, 1000);
  }

  loadData() {
    console.log(this.id);
    this.creditRequestService.getRequest(this.id).subscribe(data => {
      console.log("Detail Request", data);
      this.indexCurrentUser = 0;
      this.users = data.response ? data.response : [];

      this.route.queryParams
        .subscribe(params => {
          if (params['option'] === "edit") {
            this.editUser(this.indexCurrentUser);
          }
        }
        );

      this.sharedDataService.changeStatus(false);
    });
  }

  validateSteps(): void {
    if (this.isNew) {
      this.items = this.steps;
    } else {
      this.items = [];
      this.steps.forEach(element => {
        if (element.step !== 1) {
          this.items.push(element);
        }
      });
    }
    this.change(this.activeStep);
  }

  change(i: number) {
    this.activeStep = i;
    this.items.forEach(element => {
      element.status = '';
    });

    this.items.forEach((element, index) => {
      if (element.step < i) {
        element.status = 'confirmed';
      }
      if (element.step == i) {
        element.status = 'active';
      }
    });
  }

  backToMain(event: any) {
    this.change(this.activeStep - 1);
  }

  applicationStep1ToMain(event: any) {
    this.currentUser.propertyInformation = event.data;
    this.change(this.activeStep + 1);
  }

  applicationStep2ToMain(event: any) {
    this.currentUser.applicantDetails = event.data;
    this.change(this.activeStep + 1);
  }

  applicationStep3ToMain(event: any) {
    this.currentUser.economicInformation = event.data;
    this.change(this.activeStep + 1);
  }

  applicationStep4ToMain(event: any) {
    this.currentUser.activeOrPassive = event.data;
    this.change(this.activeStep + 1);
  }

  applicationStep5ToMain(event: any) {
    this.currentUser.references = event.data;
    this.change(this.activeStep + 1);
  }

  applicationStep6ToMain(event: any) {
    this.currentUser.documents = event.data;
    //this.change(this.activeStep+1);
    if (this.isNew) {
      console.log("Save new user ", this.users.length);
      this.users.push(this.currentUser);
    } else {
      console.log("Save prev user ", this.indexCurrentUser);
      this.users[this.indexCurrentUser] = this.currentUser;
      this.isNew = true;
    }

    console.log("**** USERS ****");
    console.log(JSON.stringify(this.users));

    this.sharedDataService.changeStatus(true);
    var that = this;

    if (parseInt(event.data.other_customer) === 2) {
      let strSimulator = localStorage.getItem('simulatorData');
      if (strSimulator !== null) {
        //this.users[0].simulator = JSON.parse(strSimulator);
      }
      this.creditApplicationService.create(this.buildRequest())
        .subscribe((response: AuthResponse) => {
          this.sharedDataService.changeStatus(false);

          this.sharedDataService.addAlertMessage({
            display: true,
            code: response.response,
            type: 'credit-application'
          });

          this.currentUser = new Object;

          window.setTimeout(function () {
            that.router.navigateByUrl('/simulator');
          }, 1500);

        }, (error: Error) => {
          this.sharedDataService.changeStatus(false);
          this.sharedDataService.addAlertMessage({
            display: true,
            type: 'error'
          });
        });

    } else {
      window.setTimeout(function () {
        that.currentUser = new Object;
        that.isNew = true;
        that.indexCurrentUser = that.users.length;
        that.activeStep = 2;
        that.validateSteps();
        that.sharedDataService.changeStatus(false);
      }, 1500);
    }

  }

  buildRequest(): void {
    var principalUser = this.users[0];
    var debts:any[] = [];
    for (var i = 1; this.users.length; i++) {
      debts.push(this.users[i]);
    }
    var request: any = {
      "propertyInformation": principalUser.propertyInformation,
      "applicantDetails": principalUser.applicantDetails,
      "economicInformation": principalUser.economicInformation,
      "activeOrPassive": principalUser.activeOrPassive,
      "references": principalUser.references,
      "documents": principalUser.documents,
      "debtors": debts
    };

    return request;
  }

  getAvatar(user: any): string {
    return (user?.applicantDetails?.first_name?.charAt(0) + user?.applicantDetails?.first_lastname?.charAt(0)).toUpperCase();
  }

  deleteUser(i: any): void {
    console.log("Usuario a eliminar " + i);
    if (i > 0) {
      if (confirm("Desea eliminar el registro?")) {
        let newUsers: any[] = [];
        newUsers.push(this.users[0]);
        for (var j = 1; j < this.users.length; j++) {
          if (j !== i) {
            newUsers.push(this.users[j]);
          }
        }
        this.users = newUsers;
      }
    } else {
      alert("El participante principal no se puede eliminar");
    }
  }

  editUser(i: any): void {
    this.currentUser = this.users[i];
    this.indexCurrentUser = i;
    this.isNew = false;
    console.log("Editando usuario " + i);
    console.log("Usuario ", this.currentUser);
    this.change(-1);
    var that = this;
    window.setTimeout(function () {
      that.change(2);
    }, 500);
  }

  strCurrentUser(): string {
    var strUser = JSON.stringify(this.currentUser);
    console.log("strUser", strUser);
    return strUser;
  }

}
