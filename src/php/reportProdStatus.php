<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

$sql="SELECT count(quantity) as 'count',
    CASE
        WHEN quantity < reorderLevel THEN 'Red'
        WHEN quantity = reorderLevel THEN 'Orange'
        ELSE 'Green'
    END AS 'pieSection',
    CASE
        WHEN quantity < reorderLevel THEN 'Red'
        WHEN quantity = reorderLevel THEN 'Orange'
        ELSE 'Green'
    END AS 'colour'
    FROM ShopProduct
    GROUP BY pieSection";

$result = $pdo->prepare($sql);
$result -> execute();

$phpArray = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>