import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import phpUrl from './php/phpUrls';
import useFetch from './php/useFetch';

function removeProduct(product, qtyToOrder) {
  window.location.href = phpUrl+"/removeFromBasket.php?productCode="+product+"&qty="+qtyToOrder;
}

function BasketTableRow(props) {
  const { rowCount, product, qtyToOrder } = props;
  let image = "";
  let productName = "";
  let qtyAvailable = 0;
  let maxOrder = 0;
  let supplierOptions = [];

  let { response } = useFetch(phpUrl+'/getBasketItem.php?productCode='+product);
  if (response !== null) {
    image = response[0].image;
    productName = response[0].productName;
    qtyAvailable = response[0].qtyAvailable;
    maxOrder = response[0].maxQuantity-qtyAvailable;

    let supplierCount = 0;
      response.forEach(supplier => {
        supplierOptions.push(
          <option key={supplierCount} value={supplier.supplierId} >{supplier.supplierName+" - £"+supplier.cost+" each, "+supplier.delivery+" days"}</option>
        )
        supplierCount++;
      });

    return (
      <tr id={rowCount} className='Basket-tr'>
        <td>{image}</td>
        <td>{productName}</td>
        <td>{qtyAvailable}</td>
          <td>
            <input type="number" min='0' max={maxOrder} id={rowCount+"qtyToOrder"} name="qtyToOrder" defaultValue={qtyToOrder}/>
          </td>
          <td>
            <select id={rowCount+"supplier"} name='supplier' >
              <option value="">--Supplier--</option>
              {supplierOptions}
            </select>
          </td>
        <td>
          <button onClick={() => removeProduct(product, qtyToOrder)}>
            <FontAwesomeIcon id={"delete"+rowCount} icon={faTrashCan}  />
          </button>
        </td>
      </tr>
    );
  }
  
  else { return null }
  
}

export default BasketTableRow;
