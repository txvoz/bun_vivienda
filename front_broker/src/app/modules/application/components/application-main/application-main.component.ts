import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/interfaces/AuthResponse';
import { CreditApplicationService } from 'src/app/services/credit-application.service';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-application-main',
  templateUrl: './application-main.component.html',
  styleUrls: ['./application-main.component.css', './../../../../app.component.css', '../../../simulator/components/simulator-form/toogle_button.scss']
})
export class ApplicationMainComponent implements OnInit {

  isNew = true;
  indexCurrentUser = 0;
  currentUser: any = {};
  activeStep: number = 1;

  users: any[] = [];

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

  provUsers: any[] = [{
		"propertyInformation": {
			"type_credit": 1,
			"type_purchase": "1",
			"type_use": "1",
			"comercial_value": 1500000,
			"city_of": 1,
			"address": "Calle 55 norte # 22 - 80",
			"date": "2023-05-17",
			"has_mortgage": true
		},
		"applicantDetails": {
			"customer_type": "",
			"first_name": "Gustavo",
			"second_name": "Adolfo",
			"first_lastname": "Rodriguez",
			"second_lastname": "Quinayas",
			"gender": 1,
			"type_identification": 1,
			"num_identification": 1061738533,
			"expedition_date": "2023-05-17",
			"nationality_type": "1",
			"origin_country": 1,
			"location_born": "asdad",
			"born_date": "2023-05-17",
			"home_country": 1,
			"home_department": "Cauca",
			"home_city": 1,
			"time_abroad": 1,
			"adress_home": "Variante Norte Llanos de calibio C/B1",
			"zip": "00000",
			"studies_level": 1,
			"ocupation": "asd",
			"civil_status": 1,
			"dependents": 1,
			"home_type": 1,
			"cellphone": 1000000,
			"email": "gustavo.rodriguez@bancounion.com",
			"zip_city": 1,
			"address_zip": "Variante Norte Llanos de calibio C/B1",
			"colombian_phone": "3116469802",
			"other_phone": "3116469802"
		},
		"economicInformation": {
			"ocupation": 1,
			"enterprice_name": "SERATIC",
			"enterprice_address": "Variante Norte Llanos de calibio C/B1",
			"enterprice_activity": "SERATIC",
			"enterprice_phone": "3116469802",
			"enterprice_position": "sdfsdf",
			"contract_type": 1,
			"work_time": "sdfsdf",
			"time_at_enterprice": 1,
			"prp": "1",
			"vhc": "1",
			"tme": "1",
			"bank_name": "sdf",
			"account_number": "sdfsdf",
			"type_money": "sdfsdf",
			"operation_country": 1,
			"operation_city": 1,
			"opi": "1",
			"operation_type": 1,
			"other_type": "rwerwer",
			"product_identity": "34345",
			"ttype_product": "sdfsdf",
			"average_amount": 15000000
		},
		"activeOrPassive": {
			"have_loans": "2",
			"have_tc": "2",
			"have_debt": "2",
			"have_vehicle": "2",
			"have_property": "2",
			"loans": [],
			"tcs": [],
			"debts": [],
			"vehicles": [],
			"properties": [],
			"total_actives": 1500000,
			"actives_currency_value": "COP",
			"total_passives": 1500000,
			"passives_currency_value": "USD"
		},
		"references": {
			"personalRefer": "Test1",
			"personal_ref_full_name": "Gustavo Rodriguez",
			"personal_ref_country": "Colombia",
			"personal_ref_phone": "3116469802",
			"personal_relationship": "",
			"personalRefer2": "Test1",
			"family_ref_full_name": "Gustavo Rodriguez",
			"family_ref_country": "Colombia",
			"family_ref_phone": "3116469802",
			"family_relationship": ""
		},
		"documents": {
			"other_customer": "1"
		}
	},
	{
		"propertyInformation": {
			"type_credit": 1,
			"type_purchase": "1",
			"type_use": "1",
			"comercial_value": 1500000,
			"city_of": 1,
			"address": "Calle 55 norte # 22 - 80",
			"date": "2023-05-17",
			"has_mortgage": true
		},
		"applicantDetails": {
			"customer_type": "1",
			"first_name": "Gabriela",
			"second_name": "-",
			"first_lastname": "Rodriguez",
			"second_lastname": "Mambuscay",
			"gender": 2,
			"type_identification": 1,
			"num_identification": 1061111,
			"expedition_date": "2023-05-17",
			"nationality_type": "1",
			"origin_country": 1,
			"location_born": "asdad",
			"born_date": "2018-12-29",
			"home_country": 1,
			"home_department": "Cauca",
			"home_city": 1,
			"time_abroad": 1,
			"adress_home": "Variante Norte Llanos de calibio C/B1",
			"zip": "00000",
			"studies_level": 1,
			"ocupation": "asd",
			"civil_status": 1,
			"dependents": 1,
			"home_type": 1,
			"cellphone": 1000000,
			"email": "gustavo.rodriguez@bancounion.com",
			"zip_city": 1,
			"address_zip": "Variante Norte Llanos de calibio C/B1",
			"colombian_phone": "3116469802",
			"other_phone": "3116469802"
		},
		"economicInformation": {
			"ocupation": 1,
			"enterprice_name": "SERATIC",
			"enterprice_address": "Variante Norte Llanos de calibio C/B1",
			"enterprice_activity": "SERATIC",
			"enterprice_phone": "3116469802",
			"enterprice_position": "sdfsdf",
			"contract_type": 1,
			"work_time": "sdfsdf",
			"time_at_enterprice": 1,
			"prp": "1",
			"vhc": "1",
			"tme": "1",
			"bank_name": "sdf",
			"account_number": "sdfsdf",
			"type_money": "sdfsdf",
			"operation_country": 1,
			"operation_city": 1,
			"opi": "1",
			"operation_type": 1,
			"other_type": "rwerwer",
			"product_identity": "34345",
			"ttype_product": "sdfsdf",
			"average_amount": 15000000
		},
		"activeOrPassive": {
			"have_loans": "2",
			"have_tc": "2",
			"have_debt": "2",
			"have_vehicle": "2",
			"have_property": "2",
			"loans": [],
			"tcs": [],
			"debts": [],
			"vehicles": [],
			"properties": [],
			"total_actives": 1500000,
			"actives_currency_value": "COP",
			"total_passives": 1500000,
			"passives_currency_value": "USD"
		},
		"references": {
			"personalRefer": "Test1",
			"personal_ref_full_name": "Gustavo Rodriguez",
			"personal_ref_country": "Colombia",
			"personal_ref_phone": "3116469802",
			"personal_relationship": "",
			"personalRefer2": "Test1",
			"family_ref_full_name": "Gustavo Rodriguez",
			"family_ref_country": "Colombia",
			"family_ref_phone": "3116469802",
			"family_relationship": ""
		},
		"documents": {
			"other_customer": "1"
		}
	},
	{
		"propertyInformation": {
			"type_credit": 1,
			"type_purchase": "1",
			"type_use": "1",
			"comercial_value": 1500000,
			"city_of": 1,
			"address": "Calle 55 norte # 22 - 80",
			"date": "2023-05-17",
			"has_mortgage": true
		},
		"applicantDetails": {
			"customer_type": "2",
			"first_name": "William",
			"second_name": "Alfredo",
			"first_lastname": "Rodriguez",
			"second_lastname": "Quinayas",
			"gender": 1,
			"type_identification": 1,
			"num_identification": 1061111,
			"expedition_date": "2023-05-17",
			"nationality_type": "1",
			"origin_country": 1,
			"location_born": "asdad",
			"born_date": "2018-12-29",
			"home_country": 1,
			"home_department": "Cauca",
			"home_city": 1,
			"time_abroad": 1,
			"adress_home": "Variante Norte Llanos de calibio C/B1",
			"zip": "00000",
			"studies_level": 1,
			"ocupation": "asd",
			"civil_status": 1,
			"dependents": 1,
			"home_type": 1,
			"cellphone": 1000000,
			"email": "gustavo.rodriguez@bancounion.com",
			"zip_city": 1,
			"address_zip": "Variante Norte Llanos de calibio C/B1",
			"colombian_phone": "3116469802",
			"other_phone": "3116469802"
		},
		"economicInformation": {
			"ocupation": 1,
			"enterprice_name": "SERATIC",
			"enterprice_address": "Variante Norte Llanos de calibio C/B1",
			"enterprice_activity": "SERATIC",
			"enterprice_phone": "3116469802",
			"enterprice_position": "sdfsdf",
			"contract_type": 1,
			"work_time": "sdfsdf",
			"time_at_enterprice": 1,
			"prp": "1",
			"vhc": "1",
			"tme": "1",
			"bank_name": "sdf",
			"account_number": "sdfsdf",
			"type_money": "sdfsdf",
			"operation_country": 1,
			"operation_city": 1,
			"opi": "1",
			"operation_type": 1,
			"other_type": "rwerwer",
			"product_identity": "34345",
			"ttype_product": "sdfsdf",
			"average_amount": 15000000
		},
		"activeOrPassive": {
			"have_loans": "1",
			"have_tc": "2",
			"have_debt": "2",
			"have_vehicle": "2",
			"have_property": "2",
			"loans": [{
				"loans_entity": "ttt",
				"loans_value": 1000,
				"currency_value": "COP"
			}, {
				"loans_entity": "aaaa",
				"loans_value": 2000,
				"currency_value": "USD"
			}],
			"tcs": [],
			"debts": [],
			"vehicles": [],
			"properties": [],
			"total_actives": 1500000,
			"actives_currency_value": "COP",
			"total_passives": 1500000,
			"passives_currency_value": "USD"
		},
		"references": {
			"personalRefer": "Test2",
			"personal_ref_full_name": "Gustavo Rodriguez",
			"personal_ref_country": "Colombia",
			"personal_ref_phone": "3116469802",
			"personal_relationship": "",
			"personalRefer2": "Test1",
			"family_ref_full_name": "Gustavo Rodriguez",
			"family_ref_country": "Colombia",
			"family_ref_phone": "3116469802",
			"family_relationship": ""
		},
		"documents": {
			"other_customer": "1"
		}
	},
	{
		"propertyInformation": {
			"type_credit": 1,
			"type_purchase": "1",
			"type_use": "1",
			"comercial_value": 1500000,
			"city_of": 1,
			"address": "Calle 55 norte # 22 - 80",
			"date": "2023-05-17",
			"has_mortgage": true
		},
		"applicantDetails": {
			"customer_type": "2",
			"first_name": "Fulvia",
			"second_name": "Albany",
			"first_lastname": "Quinayas",
			"second_lastname": "Hoyos",
			"gender": 1,
			"type_identification": 1,
			"num_identification": 1061111,
			"expedition_date": "2023-05-17",
			"nationality_type": "1",
			"origin_country": 1,
			"location_born": "asdad",
			"born_date": "2018-12-29",
			"home_country": 1,
			"home_department": "Cauca",
			"home_city": 1,
			"time_abroad": 1,
			"adress_home": "Variante Norte Llanos de calibio C/B1",
			"zip": "00000",
			"studies_level": 1,
			"ocupation": "asd",
			"civil_status": 1,
			"dependents": 1,
			"home_type": 1,
			"cellphone": 1000000,
			"email": "gustavo.rodriguez@bancounion.com",
			"zip_city": 1,
			"address_zip": "Variante Norte Llanos de calibio C/B1",
			"colombian_phone": "3116469802",
			"other_phone": "3116469802"
		},
		"economicInformation": {
			"ocupation": 1,
			"enterprice_name": "SERATIC",
			"enterprice_address": "Variante Norte Llanos de calibio C/B1",
			"enterprice_activity": "SERATIC",
			"enterprice_phone": "3116469802",
			"enterprice_position": "sdfsdf",
			"contract_type": 1,
			"work_time": "sdfsdf",
			"time_at_enterprice": 1,
			"prp": "1",
			"vhc": "1",
			"tme": "1",
			"bank_name": "sdf",
			"account_number": "sdfsdf",
			"type_money": "sdfsdf",
			"operation_country": 1,
			"operation_city": 1,
			"opi": "1",
			"operation_type": 1,
			"other_type": "rwerwer",
			"product_identity": "34345",
			"ttype_product": "sdfsdf",
			"average_amount": 15000000
		},
		"activeOrPassive": {
			"have_loans": "1",
			"have_tc": "1",
			"have_debt": "1",
			"have_vehicle": "1",
			"have_property": "1",
			"loans": [{
				"loans_entity": "ttt",
				"loans_value": 1000,
				"currency_value": "COP"
			}, {
				"loans_entity": "aaaa",
				"loans_value": 2000,
				"currency_value": "USD"
			}],
			"tcs": [{
				"tc_entity": "qqqq",
				"tc_value": 9000,
				"currency_value": "USD"
			}],
			"debts": [{
				"debt_entity": "tttt",
				"debt_value": 60000,
				"currency_value": "EUR"
			}],
			"vehicles": [{
				"brand_and_model": "qwe",
				"plate": "Fio-63",
				"comercial_value": 30000,
				"currency_value": "EUR",
				"service_type": "1",
				"has_debt": "1",
				"favor_of": "banco"
			}, {
				"brand_and_model": "zooo",
				"plate": "Fio-63",
				"comercial_value": 5000,
				"currency_value": "USD",
				"service_type": "2",
				"has_debt": "1",
				"favor_of": "ioiiuo"
			}],
			"properties": [{
				"type_property": "sdfsf",
				"city_property": "sfdssf",
				"address_property": "sfsf",
				"comercial_value": "sfdsfd",
				"currency_value": "USD",
				"has_mortgage": "1",
				"favor_to": "sfdsfsf"
			}],
			"total_actives": 1500000,
			"actives_currency_value": "USD",
			"total_passives": 1500000,
			"passives_currency_value": "COP"
		},
		"references": {
			"personalRefer": "Test2",
			"personal_ref_full_name": "Gustavo Rodriguez",
			"personal_ref_country": "Colombia",
			"personal_ref_phone": "3116469802",
			"personal_relationship": "",
			"personalRefer2": "Test1",
			"family_ref_full_name": "Gustavo Rodriguez",
			"family_ref_country": "Colombia",
			"family_ref_phone": "3116469802",
			"family_relationship": ""
		},
		"documents": {
			"other_customer": "1"
		}
	}
];

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
    private creditApplicationService: CreditApplicationService
  ) {}

  ngOnInit(): void {
    this.validateSteps();
    this.users = this.provUsers;
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
    if(this.isNew) {
      console.log("Save new user ", this.users.length);
      this.users.push(this.currentUser);
    } else {
      console.log("Save prev user ", this.indexCurrentUser);
      this.users[this.indexCurrentUser] = this.currentUser;
      this.isNew=true;
    }
    
    console.log("**** USERS ****");
    console.log(JSON.stringify(this.users));

    this.sharedDataService.changeStatus(true);
    var that = this;

    if (parseInt(event.data.other_customer) === 2) {
      let strSimulator = localStorage.getItem('simulatorData');
      if(strSimulator !== null){
        this.users[0].simulator = JSON.parse(strSimulator);
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

  buildRequest():void {
    var principalUser = this.users[0];
    var debts = [];
    for(var i = 1; this.users.length; i++){
      debts.push(this.users[i]);
    }
    var request:any = {
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
