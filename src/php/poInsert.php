<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_POST['staffId'])) { $staffId = $_POST['staffId']; } else { $staffId = "error"; };

$insert = $pdo->prepare("INSERT INTO PurchaseOrder (staffId) VALUES (:staffId)");
$insert->bindParam(':staffId', $staffId, PDO::PARAM_STR);
$insert->execute();

echo "<script>location.replace('$webUrl/purchaseorders')</script>";
?>

