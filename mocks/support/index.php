<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
http_response_code(200);
header('Content-Type: application/json; charset=utf-8');
?>
{
    "contextResponse": {
        "idTx": "20ee4ff3-4daf-4b96-ab24-0dbc9fee9fbf",
        "dateTx": "2023-04-20T08:56:16.016",
        "codStateTx": "PS"
    },
    "domain": {
        "idDomain": 1,
        "key": "Test",
        "valuesDomain": [
            {
                "idValueDomain": 1,
                "code": "Test1",
                "name": "Test1",
                "description": "Test1"
            },
            {
                "idValueDomain": 2,
                "code": "Test2",
                "name": "Test2",
                "description": "Test2"
            }
        ]
    }
}