import { Link } from "react-router-dom";

function PurchaseOrdersTableRow(props) {
    const { details, rowCount } = props;

    if (details !== null) {
        const link = "/purchaseorders/"+details.ponumber;

        return (
            <tr id={rowCount} className='Po-tr'>
                <td><Link to={link}>{details.ponumber}</Link></td>
                <td>{details.raisedby}</td>
                <td>{details.raiseddate}</td>
                <td>{details.supplier}</td>
                <td>£{details.total}</td>
                <td>{details.status}</td>
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

export default PurchaseOrdersTableRow;