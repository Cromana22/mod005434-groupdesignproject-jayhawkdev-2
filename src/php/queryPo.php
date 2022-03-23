<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['poNumber'])) { $poNumber = $_GET['poNumber']; } else { $poNumber = "?"; };
if (isset($_GET['notes'])) { $notes = $_GET['notes']; } else { $notes = ""; };

$getPoNotes = $pdo->prepare("SELECT `notes` FROM PurchaseOrder 
    WHERE PurchaseOrder.poNumber = :poNumber"
);
$getPoNotes->bindParam(':poNumber', $poNumber, PDO::PARAM_STR);
$getPoNotes->execute();
while($row = $getPoNotes->fetch()) { $origNotes = $row['notes']; };
$finalNotes = $origNotes."\n".$notes;

$queryPo = $pdo->prepare("UPDATE PurchaseOrder 
    SET `status` = 'Queried', `notes` = :notes
    WHERE PurchaseOrder.poNumber = :poNumber"
);
$queryPo->bindParam(':poNumber', $poNumber , PDO::PARAM_STR);
$queryPo->bindParam(':notes', $finalNotes, PDO::PARAM_STR);
$queryPo->execute();

echo "<script>location.replace('$webUrl/purchaseorders/$poNumber')</script>";

?>

