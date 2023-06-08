<?php
http_response_code(201);

header('Content-Type: application/json; charset=utf-8');

$jData = file_get_contents("php://input");
file_put_contents('../../logs.txt', date('d-m-y h:i:s') . "::executePayment:: " . $jData . "\n", FILE_APPEND);

?>
{
    "paymentResp": {
        "contextResponse": {
            "idTx": "2633e558-2af1-440d-8f83-3859cd6493aa",
            "codStateTx": "PS",
            "dateTx": "2022-06-21T12:06:41.909141"
        },
        "getEcommercePaymentResult": {
            "ecommercePaymentVoucher": [{
                    "ecomerceCode": "ECOMSV",
                    "ecomerceDesc": "ECOMMERCE FINANCIAL SERVICES",
                    "confirmationNumber": "999-999-999",
                    "paymentId": "NXlWncyS9TYZrLpIQrGG8n8IWE23re6wqjn",
                    "orderCreatedDate": "2022-06-21T17:06:11.486Z",
                    "orderExpiryDate": "2022-06-24T17:06:11.486Z",
                    "orderType": "CAPTURE",
                    "orderStatus": "Open",
                    "orderLockId": "tra1.training.V1U5ODUyMzjI.Xd2NOUVJraDBJbmRvM1hwVE9EbTg1NmxQY0d6Y05vQ2VPWT0",
                    "ecommerceAmount": "0.00",
                    "paymentAmount": "0.00",
                    "paymentTax": "0.00",
                    "paymentAmountAfterTax": "0.00",
                    "paymentType": "Cash",
                    "exchangeRate": "0.0003179",
                    "paymentCountryCode": "CO",
                    "paymentCurrencyCode": "COP",
                    "mtcn": "9999999999",
                    "newMtcn": "2217289999999999",
                    "filingDate": "06-21",
                    "filingTime": "0106P EDT",
                    "receiptMessage": "www.amazon.com\/Training-PayCode",
                    "customer": {
                        "id": "5678765789879",
                        "codTypeIdentification": "B",
                        "valFirstName": "Amazon",
                        "valLastName": "Training Customer",
                        "valFullName": "Amazon Training Customer",
                        "customerType": "BUYER",
                        "valNameType": "D",
                        "valAddress": "Rodrigo de 1567 Chaisi road",
                        "valCity": "Krung Thep",
                        "valState": "Santiago",
                        "postalCode": "760035",
                        "valCountry": "CO",
                        "phoneCountryCode": "57",
                        "valPhone": "3045266319",
                        "dateOfBirth": "19860626",
                        "occupation": "Employee",
                        "valBirthPlace": "CO"
                    },
                    "codCnb": "CNB001",
                    "valNameCnb": "EFECTY",
                    "valIp": "1.1.1.1",
                    "idServicePoint": "010080",
                    "valNameServicePoint": "BOGOTA",
                    "idDevice": "1",
                    "cashier": "DCORTES",
                    "payCity": "11001",
                    "controlNumber": "7201532212645",
                    "valFooter": "EN LA PAGINA ... 018000111999.",
                    "valTransactionType": "Pago en WU - Pago",
                    "valDateApplied": "2022-06-21T12:06:41.909141",
                    "valFooterWU": "www.amazon.com\/Training-PayCode"
                }
            ]
        }
    }
}
