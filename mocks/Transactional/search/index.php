<?php
http_response_code(200);

header('Content-Type: application/json; charset=utf-8');

$jData = file_get_contents("php://input");
file_put_contents('../../logs.txt', date('d-m-y h:i:s') . "::findPayment:: " . $jData . "\n", FILE_APPEND);

?>
{
    "searchResp": {
        "contextResponse": {
            "idTx": "d15804c9-3697-1202-6962-2762515aac27",
            "codStateTx": "PS",
            "dateTx": "2022-08-05T09:51:55.998872"
        },
        "correlId": "414d5120455342514d20202020202020fcf1ea6271960d20",
        "getEcommercePaymentInfoResult": {
            "ecommercePaymentInfoList": [
                {
                    "ecomerceCode": "ECOMSV",
                    "ecomerceDesc": "ECOMMERCE FINANCIAL SERVICES",
                    "paymentId": "NXlWncyS9TYZrLpIQrGG8n8IWE23re6wqjn",
                    "confirmationNumber": "999-999-999",
                    "orderCreatedDate": "2022-08-05T14:51:09.709Z",
                    "orderExpiryDate": "2022-08-08T14:51:09.709Z",
                    "orderType": "CAPTURE",
                    "orderStatus": "Open",
                    "orderLockId": "tra1.training.V1U5ODUyMzjI.Xd2NOUVJraDBJbmRvM1hwVE9EbTg1NmxQY0d6Y05vQ2VPWT0",
                    "ecommerceAmount": "0.00",
                    "paymentType": "Cash",
                    "exchangeRate": "0.0003179",
                    "paymentAmount": "0.00",
                    "paymentTax": "0.00",
                    "paymentAmountAfterTax": "0.00",
                    "paymentCountryCode": "CO",
                    "paymentCurrencyCode": "COP",
                    "retryCount": "0",
                    "action": "HOLD",
                    "mtcn": "9999999999",
                    "newMtcn": "2221789999999999",
                    "customer": {
                        "valNameType": "D",
                        "id": "5678765789879",
                        "codTypeIdentification": "B",
                        "valFirstName": "Amazon",
                        "valLastName": "Training Customer",
                        "valFullName": "Amazon Training Customer",
                        "customerType": "BUYER",
                        "valAddress": "Rodrigo de 1567",
                        "valCity": "Krung Thep",
                        "valState": "Santiago",
                        "postalCode": "760035",
                        "valCountry": "CO",
                        "phoneCountryCode": "57",
                        "valPhone": "3045266319",
                        "dateOfBirth": "19860626",
                        "occupation": "Employee",
                        "valBirthPlace": "CO"
                    }
                }
            ]
        }
    }
}