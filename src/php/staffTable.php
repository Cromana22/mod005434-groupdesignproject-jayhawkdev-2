<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

$sql="SELECT 
Staff.staffId AS staffId,
Staff.title AS title,
Staff.firstName AS firstName,
Staff.surname AS surname,
Staff.jobTitle AS jobTitle,
Shop.shopName AS shopName,
Department.deptName AS deptName, 
GROUP_CONCAT(ProductType.typeName SEPARATOR ', ') AS productTypes, 
Staff.accessLevel AS accessLevel
FROM `Staff`
LEFT JOIN `Shop` ON Staff.ShopId = Shop.shopId
LEFT JOIN `Department` ON Staff.deptId = Department.deptId
LEFT JOIN `StaffProductType` ON Staff.staffId = StaffProductType.staffId
LEFT JOIN `ProductType` ON StaffProductType.productType = ProductType.productType
GROUP BY Staff.staffId
ORDER BY Staff.staffId ASC";

$result = $pdo->prepare($sql);
$result -> execute();

$phpArray = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $phpArray[]=$row;
}

echo json_encode($phpArray);
?>