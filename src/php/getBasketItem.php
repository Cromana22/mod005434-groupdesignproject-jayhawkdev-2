<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['productCode'])) { $productCode = $_GET['productCode']; } else { $productCode = "?"; };

$getProduct = $pdo->prepare("SELECT Product.`image` AS `image`,
    Product.`name` AS productName,
    ShopProduct.quantity AS qtyAvailable,
    ShopProduct.maxQuantity AS maxQuantity,
    basketSupplierList.supplierID AS supplierId,
    basketSupplierList.cost AS cost,
    basketSupplierList.deliveryTime AS delivery,
    basketSupplierList.minOrder AS minOrder,
    basketSupplierList.`supplier` AS supplierName
    FROM `Product`
    LEFT JOIN `ShopProduct` ON ShopProduct.productCode = Product.productCode
    RIGHT JOIN basketSupplierList ON basketSupplierList.productCode = Product.productCode
    WHERE Product.productCode = :productCode"
);
$getProduct->bindParam(':productCode', $productCode, PDO::PARAM_STR);
$getProduct->execute();

$phpArray = array();

while($row = $getProduct->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>

