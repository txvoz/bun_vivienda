<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


sleep(1);

$jData = file_get_contents("php://input");
file_put_contents('../../vivienda_logs.txt', date('d-m-y h:i:s') . "::creditlist:: " . $jData . "\n", FILE_APPEND);

$object = json_decode($jData);

//if (str_contains($jData, "bancounion.com") === true) {
if (true === true) {
    http_response_code(200);
    ?>
{
    "contextTransaction": {
        "idTx": "128b00af-3392-4744-b385-b2c98dc0db1c",
        "dateTx": "2023-05-27T23:00:23.023",
        "success": true
    },
    "response": {
        "id_request": 321,
        "identification": 1108546698,
        "first_name": "Mario",
        "last_name": "Baracus",
        "middle_name": "Alberto",
        "middle_last_name": "Obama",
        "datecreated": "2023-05-08T22:45:00.000+0000",
        "credit_value": "150",
        "amount_approved": null,
        "amount_credit_study": null,
        "status": "Rechazado"
    }
}
    <?php
} else {
    http_response_code(401);
    ?>
    {
    "contextTransaction": {
    "idTx": "58860c7f-2ca9-4d09-bebf-ba813725304d",
    "dateTx": "2023-03-23T22:15:07.007",
    "success": false
    },
    "response": "Unauthorized broker"
    }
    <?php
}
?>