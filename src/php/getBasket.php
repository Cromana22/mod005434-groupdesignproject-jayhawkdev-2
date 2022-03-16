<?php
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_COOKIE['basket'])) { $basket = $_COOKIE['basket']; } else { $basket = []; };

echo $basket;
?>