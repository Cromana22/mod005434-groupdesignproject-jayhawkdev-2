const PlacedPoProductRow = (props) => {
    const {product, finalAuthDate} = props;

    function addDays(date, days) {
        if (date !== null) {
            var dateParts = date.split("/");
            var result = new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
            result.setDate(result.getDate() + days);
            result = result.toLocaleDateString();
            return result;
        }
        else {
            return null
        }
    }

    let productName = product.productName;
    let orderQty = product.orderQty;
    let unitCost = product.unitCost;
    let vat = product.vat;
    let itemTotal = product.itemTotal;
    let itemVatTotal = product.itemVatTotal;
    let deliveryTime = addDays(finalAuthDate, product.deliveryTime);

    return (
        <tr className='product-rows'>
            <td>{productName}</td>
            <td>{orderQty}</td>
            <td>£{unitCost}</td>
            <td>{vat}%</td>
            <td>£{itemTotal}</td>
            <td>£{itemVatTotal}</td>
            <td>{deliveryTime}</td>
        </tr>
    );
}

export default PlacedPoProductRow;
