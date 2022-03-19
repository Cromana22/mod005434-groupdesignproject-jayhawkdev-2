<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_POST['submit'])) { unset($_POST['submit']); }; //remove the submit variable from processing

if (count($_POST)%3 == 0) {   //check have valid data to do this loop

    $basket = array();
    $products = count($_POST)/3;

    for ($i = 1; $i<=$products; $i++) {   //this gets the POST variables into a usable array
        $product = array($_POST[$i."productCode"], $_POST[$i."qtyToOrder"], $_POST[$i."supplier"]);
        array_push($basket, $product);
    }

    $checkout = array();
    foreach ($basket as $product) {
        $getProduct = $pdo->prepare("SELECT Product.productCode AS productCode,
            Product.`image` AS `image`,
            Product.`name` AS productName,
            basketSupplierList.supplierID AS supplierId,
            basketSupplierList.cost AS cost,
            basketSupplierList.deliveryTime AS delivery,
            basketSupplierList.`supplier` AS supplierName
            FROM `Product`
            RIGHT JOIN basketSupplierList ON basketSupplierList.productCode = Product.productCode
            WHERE Product.productCode = :productCode AND basketSupplierList.supplierID = :supplierId" );
        $getProduct->bindParam(':productCode', $product[0], PDO::PARAM_STR);
        $getProduct->bindParam(':supplierId', $product[2], PDO::PARAM_STR);
        $getProduct->execute();

        while($row = $getProduct->fetch(PDO::FETCH_ASSOC)) {
            $finalRow = $row;
            $finalRow['qtyToOrder'] = $product[1];
            array_push($checkout, $finalRow);
        }
    }

    $jCheckout = json_encode($checkout);
    setcookie('checkout', $jCheckout);
    echo "<script>location.replace('$webUrl/checkout')</script>";
}

else {
    echo "<script>location.replace('$webUrl/basket')</script>";
}



?>

