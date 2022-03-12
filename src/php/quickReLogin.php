<?php
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['remember']) && $_GET['remember'] == "Y") { $remember = "Y"; } else { $remember = ""; }

//set cookies
setcookie("remember", $remember, time()+3600*24);
setcookie("loggedin", "Y", time()+600);

if (isset($_COOKIE['homepage'])) { $homepage = $_COOKIE['homepage']; } else { $homepage = ""; };

//direct to homepage
echo "<script>location.replace('$webUrl/$homepage')</script>";
?>

