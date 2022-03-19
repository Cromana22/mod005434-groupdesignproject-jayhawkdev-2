<?php
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

$productCode = $_GET['productCode'];
$qty = $_GET['qty'];
$removeValue1 = '"'.$productCode.'":'.$qty.','; //this catches item in the first or main of list
$removeValue2 = ',"'.$productCode.'":'.$qty; //this catches item at the end of list
$removeValue3 = '"'.$productCode.'":'.$qty; //this catches item when only one in the list   

$basket = $_COOKIE['basket'];

$newBasket = str_replace($removeValue1, "", $basket);
$newBasket = str_replace($removeValue2, "", $newBasket);
$newBasket = str_replace($removeValue3, "", $newBasket);
echo $basket."<br>";
echo $removeValue1."<br>";
echo $removeValue2."<br>";
echo $removeValue3."<br>";
echo $newBasket."<br>";

setcookie("basket", $newBasket);

echo "<script>location.replace('$webUrl/basket')</script>";
?>