<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
require 'database.php';

$sql="SELECT
Product.image AS image,
Product.`name` AS `name`,
Product.productCode AS productCode,
ShopProduct.quantity AS available,
ShopProduct.reorderLevel AS reorderLevel,
ShopProduct.maxQuantity AS maxQuantity,
IF (productsActivePurchaseOrders.poStatus IS NOT NULL, 1, 0) AS activePo
FROM Product
LEFT JOIN ShopProduct ON ShopProduct.ProductCode = Product.productCode
LEFT JOIN productsActivePurchaseOrders ON productsActivePurchaseOrders.productCode = Product.productCode
ORDER BY Product.productCode ASC";

$result = $pdo->prepare($sql);
$result -> execute();

$phpArray = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>