<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
require 'database.php';

$sql="SELECT 
PurchaseOrder.poNumber AS ponumber,
PurchaseOrder.staffId AS raisedby,
DATE_FORMAT(PurchaseOrder.dateRaised, '%d-%m-%Y %k:%i') AS raiseddate,
Supplier.`name` AS supplier,
SUM(PurchaseOrderItem.itemTotal + PurchaseOrderItem.itemVatTotal) AS total,
PurchaseOrder.`status` AS `status`
FROM PurchaseOrder
LEFT JOIN PurchaseOrderItem ON PurchaseOrder.poNumber = PurchaseOrderItem.poNumber
LEFT JOIN SupplierProduct ON PurchaseOrderItem.supplierProductId = SupplierProduct.supplierProductId
LEFT JOIN Supplier ON SupplierProduct.supplierId = Supplier.supplierId
GROUP BY PurchaseOrder.poNumber
ORDER BY PurchaseOrder.dateRaised DESC";

$result = $pdo->prepare($sql);
$result -> execute();

$phpArray = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>