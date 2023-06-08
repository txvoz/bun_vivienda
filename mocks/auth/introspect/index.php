<?php
header('Content-Type: application/json; charset=utf-8');

$jData = file_get_contents("php://input");
file_put_contents('../../logs.txt', date('d-m-y h:i:s') . "::authIntrospect:: " . $jData . "\n", FILE_APPEND);

$object = json_decode($jData);

if($object->token!=="12345") {
    http_response_code(200);
?>
{
    "active": "true"
}
<?php
} else {
    http_response_code(200);
?>
{
    "active": "true"
}
<?php
}


//eyJraWQiOiJkZWZhdWx0LWdyYXZpdGVlLUFNLWtleSIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIzYTNjOWE3YS05NzQzLTQ0YjgtYmM5YS03YTk3NDNhNGI4MWIiLCJhdWQiOiJhNjkwYmM2My02NzA0LTQxNWItOTBiYy02MzY3MDQwMTViZDAiLCJkb21haW4iOiJnaXJvc3lmaW5hbnphcyIsInNjb3BlIjoiUEdJX1NBRiBQR05fU0FGIEVHSV9TQUYgRUdOX1NBRiBTQUYiLCJpc3MiOiJodHRwOlwvXC8xNzIuMTYuMTYuNTU6ODA5MlwvZ2lyb3N5ZmluYW56YXNcL29pZGMiLCJleHAiOjE2NjI4NzU3OTMsImlhdCI6MTY2Mjg0MzM5MywianRpIjoiWmpmOXhfTW9wX1g5LS1QQkxENmtqZmZBVmpBUWlWa2FpSUQ5VFVYdDF2OCJ9.ZCoXufdS4iN9uoiaD4O02I62pHHL69vv9tsipIN9bsw
?>