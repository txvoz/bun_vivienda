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
        "idTx": "ca918c71-82dc-4575-9a20-f98f9f48caa6",
        "dateTx": "2023-06-07T22:16:39.039",
        "success": true
    },
    "response": {
        "analystName": "Juan Pablo Martinez",
        "idRequest": 361,
        "createAt": "2023-05-09",
        "status": "Creado",
        "brokerName": "Marlon Stiven Benavides Zamorano",
        "brokerDni": "1107589963",
        "participants": [
            {
                "idCustomer": 241,
                "names": "Mario Alberto",
                "lastNames": "Baracus Obama",
                "type": "Princial",
                "documentType": "Cedula de ciudadania",
                "dni": 1312313123,
                "email": "correo@hotmail.com",
                "number": "123123"
            },
            {
                "idCustomer": 242,
                "names": "Juan Alberto",
                "lastNames": "Rodriguez Obama",
                "type": "Deudor",
                "documentType": "Pasaporte",
                "dni": 113123132,
                "email": "xxx@gmail.com",
                "number": "546567"
            },
            {
                "idCustomer": 500,
                "names": "William Alfredo",
                "lastNames": "Quinayas",
                "type": "Deudor",
                "documentType": "Cedula de extranjeria",
                "dni": 3242424,
                "email": "adasd@gmail.com",
                "number": "567567576"
            }
        ]
    }
}