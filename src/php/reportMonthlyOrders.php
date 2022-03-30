<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

$sql="SELECT a.supplierId AS 'Supplier Id',
    a.`name` AS 'line',
    DATE_FORMAT(d.dateRaised, '%Y-%m-%d') AS 'xaxis',
    sum(d.orderTotal + d.vatTotal) AS 'yaxis'
    FROM Supplier AS a
    LEFT JOIN SupplierProduct AS b ON a.supplierId = b.supplierId
    LEFT JOIN PurchaseOrderItem AS c ON b.supplierProductId = c.supplierProductId
    LEFT JOIN PurchaseOrder AS d ON c.poNumber = d.poNumber
    WHERE dateRaised >= date_add(curdate(), interval -30 day)
    GROUP BY a.supplierId, xaxis
    ORDER BY xaxis";
$result = $pdo->prepare($sql);
$result -> execute();

$phpArray = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>