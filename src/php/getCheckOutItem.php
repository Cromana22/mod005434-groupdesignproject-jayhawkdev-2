<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['productCode'])) { $productCode = $_GET['productCode']; } else { $productCode = "?"; };
if (isset($_GET['supplierId'])) { $supplierId = $_GET['supplierId']; } else { $supplierId = "?"; };

$getProduct = $pdo->prepare("SELECT Product.`image` AS `image`,
    Product.`name` AS productName,
    basketSupplierList.supplierID AS supplierId,
    basketSupplierList.cost AS cost,
    basketSupplierList.deliveryTime AS deliveryTime,
    basketSupplierList.`supplier` AS supplierName
    FROM `Product`
    RIGHT JOIN basketSupplierList ON basketSupplierList.productCode = Product.productCode
    WHERE Product.productCode = :productCode AND basketSupplierList.supplierID = :supplierId"
);
$getProduct->bindParam(':productCode', $productCode, PDO::PARAM_STR);
$getProduct->bindParam(':supplierId', $supplierId, PDO::PARAM_STR);
$getProduct->execute();

$phpArray = array();

while($row = $getProduct->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>

