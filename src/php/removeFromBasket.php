<?php
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

$productCode = $_GET['productCode'];
$qty = $_GET['qty'];
$removeValue = '"'.$productCode.'":'.$qty;

$basket = $_COOKIE['basket'];

$newBasket = str_replace($removeValue, "", $basket);
$newBasket = str_replace("{,", "{", $newBasket);
$newBasket = str_replace(",}", "}", $newBasket);
$newBasket = str_replace(",,", ",", $newBasket);

setcookie("basket", $newBasket);

echo "<script>location.replace('$webUrl/basket')</script>";
?>