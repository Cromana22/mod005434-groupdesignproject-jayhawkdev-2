<?php
require 'databaseTemplate.php';

$sql="SELECT * FROM `Staff`";
$result = $pdo->prepare($sql);
$result -> execute();

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    echo $row['staffId'].", ".$row['title'].", ".$row['firstName'].", ".$row['surname'].", ".$row['email'].", ".$row['jobTitle'].", ".$row['password'].", ".$row['shopId'].", ".$row['deptId'].", ".$row['accessLevel']
}
?>