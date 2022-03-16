<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_POST['productCode'])) { $productCode = $_POST['productCode']; } else { $productCode = "error"; };
if (isset($_POST['qtyToOrder'])) { $qtyToOrder = intval($_POST['qtyToOrder']); } else { $qtyToOrder = 0; };
if (isset($_COOKIE['basket'])){ $basket = $_COOKIE['basket']; } else { $basket = ""; };

$newBasket = json_decode($basket, true);

if ($newBasket !== null && array_key_exists($productCode, $newBasket) == true) {
    $newBasket[$productCode] = $newBasket[$productCode]+$qtyToOrder;
}

else {
    $newBasket[$productCode] = $qtyToOrder;
}

$basket = json_encode($newBasket);

setcookie('basket', $basket);

echo "<script>location.replace('$webUrl/products')</script>";
?>

