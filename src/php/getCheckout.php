<?php
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_COOKIE['checkout'])) { $checkout = $_COOKIE['checkout']; } else { $checkout = []; };

echo $checkout;
?>