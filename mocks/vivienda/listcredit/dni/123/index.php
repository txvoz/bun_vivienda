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
    "idTx": "c3c92ce4-5d99-4577-bdd4-87a2fb721ad8",
    "dateTx": "2023-05-27T23:42:35.035",
    "success": true
    },
    "response": {
    "content": [
    <?php

    for ($var = 0; $var <2; $var++) {
        ?>
        {
        "id_request": <?php echo mt_rand(0, 100) ?>,
        "identification":123,
        "first_name": "Mario<?php echo mt_rand(0, 100) ?>",
        "last_name": "Baracus<?php echo mt_rand(0, 100) ?>",
        "middle_name": "Alberto<?php echo mt_rand(0, 100) ?>",
        "middle_last_name": "Obama<?php echo mt_rand(0, 100) ?>",
        "datecreated": "2023-05-09T22:24:51.000+0000",
        "credit_value": "<?php echo mt_rand(0, 100) ?>000000",
        "amount_approved": "<?php echo mt_rand(0, 100) ?>000000",
        "amount_credit_study": "<?php echo mt_rand(0, 100) ?>000000",
        "status": "CRATE"
        }
        <?php
        if ($var + 1 != 2) {
            echo ',';
        }
    }

    ?>

    ]
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