import CheckOutProductLine from './CheckOutProductLine';

const CheckOutComponent = (props) => {
    const { supplierOrderLines, poRequest, requestTotal } = props;

    let orderTotal = 0;
    supplierOrderLines.forEach(product => {
        orderTotal = Number(orderTotal + (product.cost*product.qtyToOrder));
    });

    let productRows = [];
    let i = 1;
    supplierOrderLines.forEach(product => {
        productRows.push(
            <CheckOutProductLine key={i} product={product.productCode} qtyToOrder={product.qtyToOrder} supplierId={supplierOrderLines[0].supplierId} rowCount={i} />
        );
        i++;
    });

    return (
        <div className="component table-responsive">
            <div>
                <div className='supplier-txt'>
                    <div className='supplier-div1'>
                    <h3 id='supplier-h3'>Order From: </h3><br />
                    </div>
                    <input className="Hide" type="text" id={"supplierId"+poRequest} name={"supplierId"+poRequest} defaultValue={supplierOrderLines[0].supplierId} /> 
                    <div className='supplier-div2'>
                    <p>{supplierOrderLines[0].supplierName}</p>
                    </div>
                    <div className='checkout-div'>
                        <div className='temp-div1'>
                        <h3 id='temp-po-txt'>Purchase Request: </h3>
                        </div>
                        <div className='temp-div2'>
                        <p> {poRequest} of {requestTotal}</p>
                        </div>
                        <div className='total-div1'>
                        <h3 id='total-h3'>Total: </h3>
                        </div>
                        <div className='total-div2'>
                        <p>£{orderTotal.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                
                <br></br>

                <div className='notes-text' id={"notes-txt"+poRequest}> 
                    <h6>Notes:</h6> 
                    <br></br>
                    <textarea className='notess' id={"notes"+poRequest} name={"notes"+poRequest} rows="5" cols="100"></textarea>
                </div>

                <table className='checkout-table'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Quantity To Order</th>
                            <th>Unit Cost (Inc. VAT)</th>
                            <th>Line Total</th>
                            <th>Delivery Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productRows}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckOutComponent;