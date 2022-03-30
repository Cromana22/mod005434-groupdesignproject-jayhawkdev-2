<?php
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_COOKIE['basket'])) { $basket = $_COOKIE['basket']; } else { $basket = []; };
if (isset($_COOKIE['loggedin'])) { $loggedin = $_COOKIE['loggedin']; } else { $loggedin = 'N'; };
if (isset($_COOKIE['accessLevel'])) { $accessLevel = $_COOKIE['accessLevel']; } else { $accessLevel = ''; };
if (isset($_COOKIE['productTypes'])) { $productTypes = $_COOKIE['productTypes']; } else { $productTypes = []; };
if (isset($_COOKIE['staffId'])) { $staffId = $_COOKIE['staffId']; } else { $staffId = []; };

$phpArray = ["basket" => $basket, 
    "loggedin" => $loggedin, 
    "accessLevel" => $accessLevel,
    "staffId" => $staffId,
    "productTypes" => $productTypes];

echo json_encode($phpArray);
?>