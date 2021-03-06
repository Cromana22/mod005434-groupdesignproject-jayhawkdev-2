import phpUrl from './php/phpUrls';
import useFetch from './php/useFetch';
import './CheckOutProductLine.css';

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
    unitCost = Number(response[0].cost);
    deliveryTime = response[0].deliveryTime;

    return (
      <tr id={rowCount} className='Basket-tr'>
        <td id='image'>
          <img src={require("./images/"+image)} alt={image}></img>
        </td>
        <td>
          <input className="Hide" type="text" id={supplierId+"productCode"+rowCount} name={supplierId+"productCode"+rowCount} defaultValue={product} />
          {productName}
        </td>
        <td>
            <input type="number" id={supplierId+"qtyToOrder"+rowCount} name={supplierId+"qtyToOrder"+rowCount} defaultValue={qtyToOrder} readOnly/>
        </td>
        <td>
            £{unitCost.toFixed(2)}
        </td>   
        <td>
            £{(unitCost*qtyToOrder).toFixed(2)}
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
