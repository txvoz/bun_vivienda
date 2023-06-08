<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

sleep(4);

$jData = file_get_contents("php://input");
file_put_contents('../../vivienda_logs.txt', date('d-m-y h:i:s') . "::create_application:: " . $jData . "\n", FILE_APPEND);

$object = json_decode($jData);

?>
{
	"contextTransaction": {
		"idTx": "ab6c0582-0b8b-45e3-91f8-f8c2e6f59064",
		"dateTx": "2023-06-08T01:15:06.006",
		"success": true
	},
	"response": [{
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
	]
}