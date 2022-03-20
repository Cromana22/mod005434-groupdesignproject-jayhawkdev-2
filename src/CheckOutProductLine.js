import phpUrl from './php/phpUrls';
import useFetch from './php/useFetch';

function CheckOutProductLine(props) {
  const { rowCount, product, qtyToOrder, supplierId } = props;
  let image = "";
  let productName = "";
  let unitCost = 0;
  let deliveryTime = 0;

  let { response } = useFetch(phpUrl+'/getCheckOutItem.php?productCode='+product+'&supplierId='+supplierId);
  if (response !== null) {
    image = response[0].image;
    productName = response[0].productName;
    unitCost = response[0].cost;
    deliveryTime = response[0].deliveryTime;

    return (
      <tr id={rowCount} className='Basket-tr'>
        <td>
            {image}
        </td>
        <td>
          <input className="Hide" type="text" id={rowCount+"productCode"} name={rowCount+"productCode"} defaultValue={product} />
          {productName}
        </td>
        <td>
            <input type="number" id={rowCount+"qtyToOrder"} name={rowCount+"qtyToOrder"} defaultValue={qtyToOrder} readOnly/>
        </td>
        <td>
            £{unitCost}
        </td>   
        <td>
            £{unitCost*qtyToOrder}
        </td>
        <td>
            {deliveryTime} Business Days
        </td>
      </tr>
    );
  }
  
  else { return null }
  
}

export default CheckOutProductLine;
