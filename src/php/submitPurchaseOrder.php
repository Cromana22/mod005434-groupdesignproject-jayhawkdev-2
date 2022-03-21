<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_POST['submit'])) { unset($_POST['submit']); }; //remove the submit variable from processing

$keys = array_keys($_POST); //this counts how many suppliers there are
$countSupplier = 0; 
foreach ($keys as $key) {
    if (strpos($key, "supplierId") !== false) { $countSupplier++; };
};

if ($countSupplier > 0) { //if there is at least 1 supplier then...

    $purchaseOrders = [];  //this creates array of purchase orders to be created

    for ($i = $countSupplier; $i > 0; $i--) { //work through for each supplier being used
        $countProductLines = 0; //this counts how many products there are for this supplier
        $seachString = $_POST["supplierId".$i]."productCode";
        foreach ($keys as $key) {
            if (strpos($key, $seachString) !== false) { $countProductLines++; };
        };

        $supplier = []; //create a supplier record
        $supplier["supplierId"] = $_POST["supplierId".$i]; //add supplier id
        $supplier["notes"] = $_POST["notes".$i]; //add notes
        $supplier["productLines"] = []; //create product lines record

        for ($j = $countProductLines; $j > 0; $j--) { //create product records, add them to productLines
            $product = [];
            $product["productCode"] = $_POST[$supplier["supplierId"]."productCode".$j];
            $product["qtyToOrder"] = $_POST[$supplier["supplierId"]."qtyToOrder".$j];
            array_push($supplier["productLines"], $product);
        };

        array_unshift($purchaseOrders, $supplier); //add supplier record to purchase orders to be created
    };

    print_r(json_encode($purchaseOrders));

    //echo "<script>alert("Your purchase order(s) has been submitted."); location.replace('$webUrl/purchaseorders')</script>";
}

else { echo "<script>location.replace('$webUrl/checkout')</script>"; }




/*  $checkout = array();
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
}*/



?>

