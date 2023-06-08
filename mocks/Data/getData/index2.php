<?php
http_response_code(201);

header('Content-Type: application/json; charset=utf-8');

$jData = file_get_contents("php://input");
file_put_contents('../../logs.txt', date('d-m-y h:i:s') . "::findReasons:: " . $jData . "\n", FILE_APPEND);

?>
{
    "getDataResp": {
        "contextResponse": {
            "idTx": "1ae84017-5307-4629-bacd-d9087f057601",
            "codStateTx": "PS",
            "dateTx": "2022-06-15T15:48:34.761218"
        },
        "getDataResult": {
            "detailEcommerceDataList": {
                "detailEcommerceData": [{
                        "code": "P0001",
                        "description": "La identificaci\\u00F3n no coincide con el nombre del pedido."
                    }, {
                        "code": "P0002",
                        "description": "El cliente ha cambiado de opini\\u00F3n."
                    }, {
                        "code": "P0003",
                        "description": "El cliente no tiene fondos suficientes."
                    }, {
                        "code": "P0004",
                        "description": "El cliente no puede presentar una identificaci\\u00F3n."
                    }, {
                        "code": "P0005",
                        "description": "El agente no acepta tarjetas de d\\u00E9bito."
                    }, {
                        "code": "R0001",
                        "description": "La identificaci\\u00F3n no coincide con el nombre del pedido."
                    }, {
                        "code": "R0002",
                        "description": "La sucursal del agente no tiene fondos suficientes."
                    }, {
                        "code": "R0003",
                        "description": "El cliente no puede presentar una identificaci\\u00F3n."
                    }
                ]
            }
        }
    }
}