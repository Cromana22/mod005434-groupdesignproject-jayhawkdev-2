<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

$sql="SELECT 
    CONCAT(a.firstName, '\n', a.surname) AS 'xaxis',
    COUNT(b.dateRaised) AS 'yaxis'
    FROM Staff AS a
    LEFT JOIN PurchaseOrder AS b ON a.staffId = b.staffId
    GROUP BY CONCAT(a.firstName, '\n', a.surname)
    HAVING COUNT(b.dateRaised) > 0";
$result = $pdo->prepare($sql);
$result -> execute();

$phpArray = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>