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
    "response": {
        "statementIncome": "otro",
        "originAssetsFunds": "por ahi",
        "accountNumber": 123456,
        "paymentMethod": "efectivio",
        "otherPayment": "ni idea",
        "interviewResult": "lo entreviste",
        "automaticDebit": "SI",
        "id": 81
    }
}