<?php
http_response_code(201);

header('Content-Type: application/json; charset=utf-8');

$jData = file_get_contents("php://input");
file_put_contents('../../logs.txt', date('d-m-y h:i:s') . "::findCommerce:: " . $jData . "\n", FILE_APPEND);

?>
{
	"getDataResp": {
		"contextResponse": {
			"idTx": "95317928-259f-43ca-a0d4-f1f8c9f9214f",
			"codStateTx": "PS",
			"dateTx": "2022-06-15T09:52:05.269947"
		},
		"getDataResult": {
			"detailEcommerceDataList": {
				"detailEcommerceData": [{
					"code": "ECOMSV",
					"description": "ECOMMERCE FINANCIAL SERVICES",
					"lookupKey": "CONFIRMATION_NUMBER, QR_CODE"
				}]
			}
		}
	}
}