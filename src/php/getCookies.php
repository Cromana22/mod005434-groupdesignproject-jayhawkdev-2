<?php
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_COOKIE['remember'])) { $remember = $_COOKIE['remember']; } else { $remember = ""; };
if (isset($_COOKIE['loggedin'])) { $loggedin = $_COOKIE['loggedin']; } else { $loggedin = ""; };
if (isset($_COOKIE['staffId'])) { $staffId = $_COOKIE['staffId']; } else { $staffId = ""; };
if (isset($_COOKIE['homepage'])) { $homepage = $_COOKIE['homepage']; } else { $homepage = ""; };
if (isset($_COOKIE['accessLevel'])) { $accessLevel = $_COOKIE['accessLevel']; } else { $accessLevel = ""; };
if (isset($_COOKIE['shopId'])) { $shopId = $_COOKIE['shopId']; } else { $shopId = ""; };
if (isset($_COOKIE['deptId'])) { $deptId = $_COOKIE['deptId']; } else { $deptId = ""; };
if (isset($_COOKIE['productTypes'])) { $productTypes = $_COOKIE['productTypes']; } else { $productTypes = ""; };

$phpArray = ["remember" => $remember, 
    "loggedin" => $loggedin, 
    "staffId" => $staffId,
    "homepage" => $homepage,
    "accessLevel" => $accessLevel,
    "shopId" => $shopId,
    "deptId" => $deptId,
    "productTypes" => $productTypes];

echo json_encode($phpArray);
?>