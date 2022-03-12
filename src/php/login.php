<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

#region - set form variable values
if (isset($_POST['staffId'])) { $staffId = $_POST['staffId']; } else { $staffId = ""; }
if (isset($_POST['remember'])) { $rememberState = "checked"; } else { $rememberState = ""; }
if (isset($_POST['password'])) { $passwrd = $_POST['password']; } else { $passwrd = ""; }
#endregion

if (isset($_POST['submit'])) {
    #region - check login details are valid
    $loginCheck = $pdo->prepare("SELECT 'password' FROM Staff WHERE staffId LIKE :staffId");
    $loginCheck->bindParam(':staffId', $staffId, PDO::PARAM_STR);
    $loginCheck->execute();

    //check if any matching rows returned
    $row = $loginCheck->fetch();
    $test = false;
    if ($row['password'] == $passwrd) { $test = true; };
    #endregion  

    #region - If login found
    if ($test == true)
    {
        //get the details
        $loginDetails = $pdo->prepare("SELECT Staff.shopId AS shopId, 
        Staff.deptId AS deptId, 
        Staff.accessLevel AS accessLevel, 
        Staff.homepage AS homepage,
        GROUP_CONCAT(StaffProductType.productType SEPARATOR ', ') AS productTypes
        FROM Staff
        LEFT JOIN StaffProductType ON Staff.staffId = StaffProductType.staffId
        WHERE Staff.staffId LIKE :staffId
        GROUP BY Staff.staffId");
        $loginDetails->bindParam(':staffId', $staffId, PDO::PARAM_INT);
        $loginDetails->execute();

        while($row = $loginDetails->fetch())
        {
            $shopId = $row['shopId'];
            $deptId = $row['deptId'];
            $accessLevel = $row['accessLevel'];
            $productTypes = $row['productTypes'];
            $homepage = $row['homepage'];
        }
        
        //set cookies if selected
        if (isset($_POST['remember'])) {
            setcookie("remember", "Y", time()+3600);
        }

        setcookie("loggedin", "Y");
        setcookie("staffId", $staffId);
        setcookie("homepage", $homepage);
        setcookie("accessLevel", $accessLevel);
        setcookie("shopId", $shopId);
        setcookie("deptId", $deptId);
        setcookie("productTypes", $productTypes);
        
        //direct to homepage
        echo "<script>location.replace('$webUrl/$homepage')</script>";
    }
    
    else
    {
        echo "<script>alert('Account not found. Please try again.'); 
        location.replace('$webUrl');
        </script>";
    }
    #endregion
}
?>

