<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
http_response_code(200);
header('Content-Type: application/json; charset=utf-8');
?>
[{
	"id": "1",
	"title": "title",
	"date": "01/01/2000",
	"comments": "comments",
	"image": "image"
},{
	"id": "2",
	"title": "title2",
	"date": "01/01/2000",
	"comments": "comments2",
	"image": "image2"
}]