<?php
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

#region - expire all cookies
setcookie("remember", "", time()-1);
setcookie("loggedin", "", time()-1);
setcookie("staffId", "", time()-1);
setcookie("homepage", "", time()-1);
setcookie("accessLevel", "", time()-1);
setcookie("shopId", "", time()-1);
setcookie("deptId", "", time()-1);
setcookie("productTypes", "", time()-1);
#endregion

//redirect to login page
echo "<script>location.replace('$webUrl');</script>";
?>

