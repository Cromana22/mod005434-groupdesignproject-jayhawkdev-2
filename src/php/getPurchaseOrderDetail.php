<?php
require 'database.php';
require 'webUrls.php';

header("Access-Control-Allow-Origin: $webUrl");
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['poNumber'])) { $poNumber = $_GET['poNumber']; } else { $poNumber = ""; };

$getProductOrderDetails = $pdo->prepare("SELECT 
    PurchaseOrder.poNumber as 'poNumber',
    PurchaseOrder.`status` as 'status' ,
    PurchaseOrder.staffId as 'staffId' ,
    CONCAT(Staff.title, ' ', Staff.firstName, ' ', Staff.surname) as 'staffName',
    DATE_FORMAT(PurchaseOrder.dateRaised, '%d/%m/%Y') as 'raisedDate',
    CONCAT(Staff2.title, ' ', Staff2.firstName, ' ', Staff2.surname) as 'authorisedByName',
    DATE_FORMAT(PurchaseOrder.authManagerDate, '%d/%m/%Y') as 'authorisedDate',
    CONCAT(Staff3.title, ' ', Staff3.firstName, ' ', Staff3.surname) as 'financeAuthorisedName',
    DATE_FORMAT(PurchaseOrder.authFinanceDate, '%d/%m/%Y')  as 'financeDate',
    PurchaseOrder.notes as 'notes',
    PurchaseOrderItem.supplierProductId as 'supplierItemId',
    Supplier.name as 'supplierName',
    Supplier.address1 as 'address1', 
    Supplier.address2 as 'address2', 
    Supplier.town as 'town',
    Supplier.county as 'county',
    Supplier.country as 'country', 
    Supplier.postcode as 'postcode',
    Supplier.telephone as 'telephone',
    Supplier.email as 'email',
    PurchaseOrder.orderTotal as 'subTotal',
    PurchaseOrder.vatTotal as 'vatTotal',
    SUM(PurchaseOrder.orderTotal + PurchaseOrder.vatTotal) as 'grandTotal'
    FROM PurchaseOrder
    LEFT JOIN Staff on PurchaseOrder.staffId = Staff.staffId
    LEFT JOIN Staff AS Staff2 on PurchaseOrder.authManagerId = Staff2.staffId
    LEFT JOIN Staff AS Staff3 on PurchaseOrder.authFinanceId = Staff3.staffId
    LEFT JOIN PurchaseOrderItem on PurchaseOrder.poNumber = PurchaseOrderItem.poNumber
    LEFT JOIN SupplierProduct on PurchaseOrderItem.supplierProductId = SupplierProduct.supplierProductId
    LEFT JOIN Supplier on SupplierProduct.supplierId = Supplier.supplierId
    WHERE PurchaseOrder.poNumber = :poNumber" );
$getProductOrderDetails->bindParam(':poNumber', $poNumber, PDO::PARAM_STR);
$getProductOrderDetails->execute();

while($row = $getProductOrderDetails->fetch(PDO::FETCH_ASSOC)) {
    $poDetails[] = $row;
}

$getProductLineDetails = $pdo->prepare("SELECT
    Product.`name` AS productName,
    PurchaseOrderItem.orderQty AS orderQty,
    PurchaseOrderItem.unitCost AS unitCost,
    PurchaseOrderItem.vat AS vat,
    PurchaseOrderItem.itemTotal AS itemTotal,
    PurchaseOrderItem.itemVatTotal AS itemVatTotal,
    SupplierProduct.deliveryTime AS deliveryTime
    FROM PurchaseOrderItem
    LEFT JOIN SupplierProduct ON PurchaseOrderItem.supplierProductId = SupplierProduct.supplierProductId
    LEFT JOIN Product on Product.productCode = SupplierProduct.productCode
    WHERE PurchaseOrderItem.poNumber = :poNumber" );
$getProductLineDetails->bindParam(':poNumber', $poNumber, PDO::PARAM_STR);
$getProductLineDetails->execute();

while($row = $getProductLineDetails->fetch(PDO::FETCH_ASSOC)) {
    $poLines[]=$row;
}

$phpArray = array();
$phpArray['supplier'] = $poDetails;
$phpArray['productLines'] = $poLines;

echo json_encode($phpArray);
?>