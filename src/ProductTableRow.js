import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './ProductTableRow.css';

function ProductTableRow(props) {
    const { details, rowCount} = props;
    
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
        
        let activePo = "Hide";
        if (details.activePo == 1) { activePo = "Po"; order="Hide"};

        return (
            <tr id={rowCount} className='products-tr'>
                <td>{details.image}</td>
                <td>{details.name}</td>
                <td>{details.available}</td>
                <td>{details.reorderLevel}</td>
                <td>
                    <FontAwesomeIcon className={status} icon={faCircle} />
                    &nbsp;&nbsp;&nbsp;
                    <mark className={activePo}>PO</mark>
                </td>
                <td>
                    <form id={rowCount} className={order} method='POST' action=''>
                        <input className='products-inp' type="number" min='0' max={maxOrder} name='qtyToOrder' />
                        &nbsp;<button>Order</button>
                    </form>
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