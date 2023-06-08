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


if (str_contains($jData, "yes") === true) {
    http_response_code(200);
    ?>
    {
    "contextTransaction": {
    "idTx": "857858c1-55ca-4a4a-a532-342b89639a69",
    "dateTx": "2023-03-23T22:25:44.044",
    "success": true
    },
    "response": "A1B2C3D4sx"
    }
    <?php
} else {
    http_response_code(400);
    ?>
    {
    "contextTransaction": {
    "idTx": "651b448c-b697-46e0-8ae2-c9c6ade1533f",
    "dateTx": "2023-03-23T22:27:21.021",
    "success": false
    },
    "response": "Error al registrar."
    }
    <?php
}
?>