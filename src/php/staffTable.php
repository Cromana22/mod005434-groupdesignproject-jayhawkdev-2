<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
require 'database.php';

$sql="SELECT * FROM `Staff`";
$result = $pdo->prepare($sql);
$result -> execute();

$phpArray = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>