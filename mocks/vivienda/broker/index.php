<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


sleep(4);

$jData = file_get_contents("php://input");
file_put_contents('../../vivienda_logs.txt', date('d-m-y h:i:s') . "::broker:: " . $jData . "\n", FILE_APPEND);

$object = json_decode($jData);

if (str_contains($jData, "bancounion.com") === true) {
    http_response_code(200);
    ?>
    {
    "contextTransaction": {
    "idTx": "3f8246ee-4f95-4be1-82b6-f29245cdbd72",
    "dateTx": "2023-03-23T22:05:15.015",
    "success": true
    },
    "response": "Mail sent to broker"
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