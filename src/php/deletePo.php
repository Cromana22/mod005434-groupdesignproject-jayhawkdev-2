<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['poNumber'])) { $poNumber = $_GET['poNumber']; } else { $poNumber = "?"; };

$rejectPo = $pdo->prepare("DELETE FROM PurchaseOrder 
    WHERE PurchaseOrder.poNumber = :poNumber"
);
$rejectPo->bindParam(':poNumber', $poNumber, PDO::PARAM_STR);
$rejectPo->execute();

echo "<script>location.replace('$webUrl/purchaseorders')</script>";

?>

