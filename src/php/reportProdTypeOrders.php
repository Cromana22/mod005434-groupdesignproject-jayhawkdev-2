<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

$sql="SELECT d.typeName AS 'pieSection',
COUNT(c.poNumber) AS 'count',
CASE
    WHEN d.typeName = 'Gadgets' THEN '#1b1464'
    WHEN d.typeName = 'Toys' THEN '#4c43a8'
    ELSE 'Dark Blue'
END AS 'colour'
FROM Product AS a
LEFT JOIN SupplierProduct AS b ON a.productCode = b.productCode
LEFT JOIN PurchaseOrderItem AS c ON b.supplierProductId = c.supplierProductId
LEFT JOIN ProductType AS d ON a.productType = d.productType
GROUP BY pieSection";
$result = $pdo->prepare($sql);
$result -> execute();

$phpArray = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>