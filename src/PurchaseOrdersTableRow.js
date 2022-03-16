function PurchaseOrdersTableRow(props) {
    const { details, rowCount } = props;

    if (details !== null) {
        return (
            <tr id={rowCount} className='Po-tr'>
                <td>{details.ponumber}</td>
                <td>{details.raisedby}</td>
                <td>{details.raiseddate}</td>
                <td>{details.supplier}</td>
                <td>{details.total}</td>
                <td>{details.status}</td>
            </tr>
        );
    }
    else {
        return (null)
    }
}

export default PurchaseOrdersTableRow;