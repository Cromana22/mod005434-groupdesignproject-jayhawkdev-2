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

    try {
        $staffId = $_COOKIE['staffId'];
        foreach ($purchaseOrders as $po) {
            //create the purchase order
            $createPO = $pdo->prepare("INSERT INTO PurchaseOrder (`staffId`, `notes`)
            VALUES (:staffId, :notes)");
            $createPO->bindParam(':staffId', $staffId, PDO::PARAM_STR);
            $createPO->bindParam(':notes', $po['notes'], PDO::PARAM_STR);
            $createPO->execute();

            //get the po number from the purchase order just created
            $poNumber = "";
            $getPoNumber = $pdo->prepare("SELECT poNumber FROM PurchaseOrder WHERE `staffId` = :staffId AND `notes` = :notes ORDER BY poNumber DESC LIMIT 1");
            $getPoNumber->bindParam(':staffId', $staffId, PDO::PARAM_STR);
            $getPoNumber->bindParam(':notes', $po['notes'], PDO::PARAM_STR);
            $getPoNumber->execute();
            while($row = $getPoNumber->fetch(PDO::FETCH_ASSOC)) { $poNumber = implode($row); };

            //add product lines for each purchase order
            foreach ($po['productLines'] as $productLine) {
            
                //get the supplier product id
                $getSupplierProdId = $pdo->prepare("SELECT supplierProductId FROM SupplierProduct WHERE supplierID = :supplierId AND productCode = :productCode");
                $getSupplierProdId->bindParam(':supplierId', $po['supplierId'], PDO::PARAM_STR);
                $getSupplierProdId->bindParam(':productCode', $productLine['productCode'], PDO::PARAM_STR);
                $getSupplierProdId->execute();
                while($row = $getSupplierProdId->fetch(PDO::FETCH_ASSOC)) { $supplierProdId = implode($row); };

                print_r($productLine['qtyToOrder']);

                //insert product lines
                $createPOLine = $pdo->prepare("INSERT INTO PurchaseOrderItem (`poNumber`, `supplierProductId`, `orderQty`)
                VALUES (:poNumber, :supplierProdId, :orderQty);");
                $createPOLine->bindParam(':poNumber', $poNumber, PDO::PARAM_STR);
                $createPOLine->bindParam(':supplierProdId', $supplierProdId, PDO::PARAM_STR);
                $createPOLine->bindParam(':orderQty', $productLine['qtyToOrder'], PDO::PARAM_STR);
                $createPOLine->execute();
            }
        }
    }
    
    catch (Exception $e) {
        echo "<script>alert('There was an error submitting your purchase order(s). Please try again.'); 
        alert('$e'); 
        location.replace('$webUrl/checkout')</script>";
    }
    
    setcookie("basket", "", time()-1);
    echo "<script>alert('Your purchase order(s) has been submitted.'); location.replace('$webUrl/purchaseorders')</script>";
}

else { echo "<script>location.replace('$webUrl/checkout')</script>"; }

?>

