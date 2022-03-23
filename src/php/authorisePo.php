<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['poNumber'])) { $poNumber = $_GET['poNumber']; } else { $poNumber = "?"; };
if (isset($_COOKIE['staffId'])) { $staffId = $_COOKIE['staffId']; } else { $staffId = "?"; };
if (isset($_COOKIE['accessLevel'])) { $accessLevel = $_COOKIE['accessLevel']; } else { $accessLevel = "?"; };

if ($accessLevel == "Senior Sales" || $accessLevel == "Manager") {
    $authPo = $pdo->prepare("UPDATE PurchaseOrder 
        SET authManagerId = :staffId
        WHERE PurchaseOrder.poNumber = :poNumber"
    );
    $authPo->bindParam(':poNumber', $poNumber, PDO::PARAM_STR);
    $authPo->bindParam(':staffId', $staffId, PDO::PARAM_STR);
    $authPo->execute();
}

if ($accessLevel == "Finance") {
    $authPo = $pdo->prepare("UPDATE PurchaseOrder 
        SET authFinanceId = :staffId
        WHERE PurchaseOrder.poNumber = :poNumber"
    );
    $authPo->bindParam(':poNumber', $poNumber, PDO::PARAM_STR);
    $authPo->bindParam(':staffId', $staffId, PDO::PARAM_STR);
    $authPo->execute();
}

echo "<script>location.replace('$webUrl/purchaseorders/$poNumber')</script>";

?>

