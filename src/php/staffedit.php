<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_POST['staffId'])) { $staffId = $_POST['staffId']; } else { $staffId = "?"; };
if (isset($_POST['title'])) { $title = $_POST['title']; } else { $title = ""; };
if (isset($_POST['firstName'])) { $firstName = $_POST['firstName']; } else { $firstName = ""; };
if (isset($_POST['surname'])) { $surname = $_POST['surname']; } else { $surname = ""; };
if (isset($_POST['jobTitle'])) { $jobTitle = $_POST['jobTitle']; } else { $jobTitle = ""; };
if (isset($_POST['shopName'])) { $shopName = "PG4U"; } else { $shopName = ""; };
if (isset($_POST['deptName'])) { $deptName = "GT"; } else { $deptName = ""; };
if (isset($_POST['accessLevel'])) { $accessLevel = $_POST['accessLevel']; } else { $accessLevel = ""; };
if ($accessLevel == "Sales" || $accessLevel == "Senior Sales") { $homepage = "products"; } else { $homepage = "purchaseorders"; };

$update1 = $pdo->prepare("UPDATE `Staff` SET 
    `title` = :title, `firstName` = :firstName, `surname` = :surname, `jobTitle` = :jobTitle, 
    `shopId` = :shopName, `deptId` = :deptName, `accessLevel` = :accessLevel, `homepage` = :homepage
    WHERE `staffId` = :staffId");
$update1->bindParam(':title', $title, PDO::PARAM_STR);
$update1->bindParam(':firstName', $firstName, PDO::PARAM_STR);
$update1->bindParam(':surname', $surname, PDO::PARAM_STR);
$update1->bindParam(':jobTitle', $jobTitle, PDO::PARAM_STR);
$update1->bindParam(':shopName', $shopName, PDO::PARAM_STR);
$update1->bindParam(':deptName', $deptName, PDO::PARAM_STR);
$update1->bindParam(':accessLevel', $accessLevel, PDO::PARAM_STR);
$update1->bindParam(':homepage', $homepage, PDO::PARAM_STR);
$update1->bindParam(':staffId', $staffId, PDO::PARAM_STR);
$update1->execute();

$deleteProdTypes = $pdo->prepare("DELETE FROM StaffProductType WHERE staffId = :staffId");
$deleteProdTypes->bindParam(':staffId', $staffId, PDO::PARAM_STR);
$deleteProdTypes->execute();

if (isset($_POST['productTypes'])) { 
    $productTypes = $_POST['productTypes'];
    foreach ($productTypes as $productType) {
        $insert = $pdo->prepare("INSERT INTO `StaffProductType` (`staffId`, `productType`) VALUES (:staffId, :productType)");
        $insert->bindParam(':staffId', $staffId, PDO::PARAM_STR);
        $insert->bindParam(':productType', $productType, PDO::PARAM_STR);
        $insert->execute();
    }
};

echo "<script>alert('Staff Saved'); location.replace('$webUrl/staff')</script>";
?>

