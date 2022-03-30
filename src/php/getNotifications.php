<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_COOKIE['accessLevel'])) { $accessLevel = $_COOKIE['accessLevel']; } 
else { $accessLevel = ""; };

if ($accessLevel == "Senior Sales") { $poStatus = "Raised"; } 
elseif ($accessLevel == "Finance") { $poStatus = "Checked"; }
else { $poStatus = "error"; }

$sql = $pdo->prepare("SELECT COUNT(*) AS `notificationCount` from PurchaseOrder WHERE `status` = :poStatus");
$sql->bindParam(':poStatus', $poStatus, PDO::PARAM_STR);
$sql -> execute();

$phpArray = array();
while($row = $sql->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>