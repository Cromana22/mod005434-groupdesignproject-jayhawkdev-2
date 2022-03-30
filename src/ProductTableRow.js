import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './ProductTableRow.css';
import phpUrl from './php/phpUrls';

function ProductTableRow(props) {
    const { details, rowCount, accessLevel, productTypes } = props;

    if (details !== null) { 

        let status = "CircleGreen";
        let order = "Hide";
        if (details.available <= details.reorderLevel) {
            status = "CircleRed"; 
            order="";
        }
        else if (details.available > details.reorderLevel && details.available < details.reorderLevel*1.1) {
            status = "CircleOrange";
            order="";
        }

        let maxOrder = details.maxQuantity-details.available;
        
        let activePo = "poCount Hide";
        if (details.activePo == 1) { activePo = "poCount"; };

        return (
            <tr id={rowCount} className='products-tr'>
                <td>{details.image}</td>
                <td>{details.name}</td>
                <td>{details.available}</td>
                <td>{details.reorderLevel}</td>
                <td className='po-circle'>
                        <FontAwesomeIcon className={status} icon={faCircle} />
                        <span className={activePo}>PO</span>
                </td>
                <td className='order-form'>
                    {
                        accessLevel !== "Finance" &&
                        productTypes.includes(details.productType) &&
                        details.available < details.reorderLevel*1.1 &&
                        details.activePo !== 1 &&

                        <form id={rowCount} method="POST" action={phpUrl+"/addBasket.php"} >
                            <input className='Hide' type="text" id={rowCount+"prodToOrder"} name="productCode" value={details.productCode} readOnly/>
                            <input className='products-inp' type="number" min='1' max={maxOrder} id={rowCount+"qtyToOrder"} name="qtyToOrder"/>
                            &nbsp;<button className='order-form-btn' type="submit">Order</button>
                        </form>
                    }
                </td>
            </tr>
        );
    }
    else {
        return (
            <tr id={rowCount} className='products-tr'>
                <td>No Data</td>    
            </tr>
        )
    }
}

export default ProductTableRow;