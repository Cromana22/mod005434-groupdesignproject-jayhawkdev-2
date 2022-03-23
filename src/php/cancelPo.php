<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['poNumber'])) { $poNumber = $_GET['poNumber']; } else { $poNumber = "?"; };

$cancelPo = $pdo->prepare("UPDATE PurchaseOrder 
    SET `status` = 'Cancelled'
    WHERE PurchaseOrder.poNumber = :poNumber"
);
$cancelPo->bindParam(':poNumber', $poNumber, PDO::PARAM_STR);
$cancelPo->execute();

echo "<script>location.replace('$webUrl/purchaseorders/$poNumber')</script>";

?>

