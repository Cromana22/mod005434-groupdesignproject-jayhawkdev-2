<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');


if(!isset($_GET['staffId'])) { $staffId = "?"; } else { $staffId = $_GET['staffId'];}

$delete = $pdo->prepare("DELETE FROM Staff WHERE staffId = :staffId");
$delete->bindParam(':staffId', $staffId, PDO::PARAM_STR);
$delete->execute();

echo "<script>alert('Staff Member Deleted'); location.replace('$webUrl/staff')</script>";
?>

