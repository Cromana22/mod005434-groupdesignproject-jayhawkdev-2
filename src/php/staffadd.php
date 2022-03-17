<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_POST['staffId'])) { $staffId = $_POST['staffId']; } else { $staffId = "deleteme"; };
if (isset($_POST['title'])) { $title = $_POST['title']; } else { $title = "deleteme"; };
if (isset($_POST['firstName'])) { $firstName = $_POST['firstName']; } else { $firstName = "deleteme"; };
if (isset($_POST['surname'])) { $surname = $_POST['surname']; } else { $surname = "deleteme"; };
if (isset($_POST['email'])) { $email = $_POST['email']; } else { $email = "deleteme"; };
if (isset($_POST['jobTitle'])) { $jobTitle = $_POST['jobTitle']; } else { $jobTitle = "deleteme"; };
if (isset($_POST['shopName'])) { $shopName = $_POST['shopName']; } else { $shopName = "null"; };
if (isset($_POST['deptName'])) { $deptName = $_POST['deptName']; } else { $deptName = "null"; };
if (isset($_POST['accessLevel'])) { $accessLevel = $_POST['accessLevel']; } else { $accessLevel = "deleteme"; };
if (isset($_POST['password'])) { $password = $_POST['password']; } else { $password = "deleteme"; };
if ($accessLevel == "Sales" || $accessLevel == "Senior Sales") { $homepage = "products"; } else { $homepage = "purchaseorders"; };

$insert1 = $pdo->prepare("INSERT INTO `Staff` (`staffId`, `title`, `firstName`, `surname`, `email`, `jobTitle`, `password`, `shopId`, `deptId`, `accessLevel`, `homepage`)
VALUES (:staffId, :title, :firstName, :surname, :email, :jobTitle, :passwrd, :shopId, :deptId, :accessLevel, :homepage)");
$insert1->bindParam(':staffId', $staffId, PDO::PARAM_STR);
$insert1->bindParam(':title', $title, PDO::PARAM_STR);
$insert1->bindParam(':firstName', $firstName, PDO::PARAM_STR);
$insert1->bindParam(':surname', $surname, PDO::PARAM_STR);
$insert1->bindParam(':email', $email, PDO::PARAM_STR);
$insert1->bindParam(':jobTitle', $jobTitle, PDO::PARAM_STR);
$insert1->bindParam(':passwrd', $password, PDO::PARAM_STR);
$insert1->bindParam(':shopId', $shopId, PDO::PARAM_STR);
$insert1->bindParam(':deptId', $deptId, PDO::PARAM_STR);
$insert1->bindParam(':accessLevel', $accessLevel, PDO::PARAM_STR);
$insert1->bindParam(':homepage', $homepage, PDO::PARAM_STR);
$insert1->execute();

if (isset($_POST['productTypes'])) { 
    $productTypes = $_POST['productTypes'];

    //foreach ($productTypes as $productType) {
        $productTypes = substr($productTypes, 0, 1);
        $insert2 = $pdo->prepare("INSERT INTO `StaffProductType` (`staffId`, `productType`) VALUES (:staffId, :productType)");
        $insert2->bindParam(':staffId', $staffId, PDO::PARAM_STR);
        $insert2->bindParam(':productType', $productTypes, PDO::PARAM_STR);
        $insert2->execute();
    //}
};


echo "<script>alert('Staff Successfully Created'); location.replace('$webUrl/staff')</script>";
?>

