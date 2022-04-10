<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

$sql="SELECT (@cnt := @cnt + 1) AS `index`,
    a.`name` AS 'pieSection',
    COUNT(c.poNumber) AS 'count',
    CASE
        WHEN (@cnt) < 10 THEN CONCAT('#', (@cnt),(@cnt), 'AA66')
        WHEN (@cnt) = 10 THEN '#AAAA66'
        WHEN (@cnt) = 11 THEN '#BBAA66'
        WHEN (@cnt) = 12 THEN '#CCAA66'
        ELSE 'Dark Blue'
    END AS 'colour'
    FROM Product AS a
    CROSS JOIN (SELECT @cnt := 0) AS dummy
    LEFT JOIN SupplierProduct AS b ON a.productCode = b.productCode
    LEFT JOIN PurchaseOrderItem AS c ON b.supplierProductId = c.supplierProductId
    GROUP BY pieSection
    HAVING count > 0
    ORDER BY `index`";
$result = $pdo->prepare($sql);
$result -> execute();

$phpArray = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>