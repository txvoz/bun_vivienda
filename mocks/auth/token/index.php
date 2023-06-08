<?php
header('Content-Type: application/json; charset=utf-8');

$jData = file_get_contents("php://input");
file_put_contents('../../logs.txt', date('d-m-y h:i:s') . "::authGetToken:: " . $jData . "\n", FILE_APPEND);

$object = json_decode($jData);
?>
{
    "access_token": "eyJraWQiOiJkZWZhdWx0LWdyYXZpdGVlLUFNLWtleSIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIzYTNjOWE3YS05NzQzLTQ0YjgtYmM5YS03YTk3NDNhNGI4MWIiLCJhdWQiOiJhNjkwYmM2My02NzA0LTQxNWItOTBiYy02MzY3MDQwMTViZDAiLCJkb21haW4iOiJnaXJvc3lmaW5hbnphcyIsInNjb3BlIjoiUEdJX1NBRiBQR05fU0FGIEZJQVRfU0NPUEUgRUdJX1NBRiBFR05fU0FGIFNBRiIsImlzcyI6Imh0dHA6XC9cLzE3Mi4xNi4xNi41NTo4MDkyXC9naXJvc3lmaW5hbnphc1wvb2lkYyIsImV4cCI6MTY2NDgzMzk4MiwiaWF0IjoxNjY0ODAxNTgyLCJqdGkiOiJzclZ4dkhUMlB5VWtQcmlYLWVIWV83bHVZNFA0TUNJTnNfRnZlSnFUU0dNIn0.vC-mRDAxFoJl_yK0q0kEXBQqK6ayfvMP35O_jju1dG0",
    "token_type": "bearer",
    "expires_in": 7199,
    "scope": "FIAT_SCOPE"
}