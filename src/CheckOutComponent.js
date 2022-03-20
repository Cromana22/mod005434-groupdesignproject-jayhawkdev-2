import './CheckOutComponent.css';
import Nerf from './nerf.jpg';
import CheckOutProductLine from './CheckOutProductLine';

const CheckOutComponent = (props) => {
    const { supplierOrderLines, poRequest, requestTotal } = props;

    let orderTotal = 0;
    supplierOrderLines.forEach(product => {
        orderTotal = orderTotal + (product.cost*product.qtyToOrder);
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
                    <h3 id='supplier-h3'>Order From: </h3><br />
                    <input className="Hide" type="text" id={poRequest+"supplierId"} name={poRequest+"supplierId"} defaultValue={supplierOrderLines[0].supplierId} />
                    <p>{supplierOrderLines[0].supplierName}</p>

                    <div className='checkout-div'>
                        <h3 id='temp-po-txt'>Purchase Request: </h3>
                        <p> {poRequest} of {requestTotal}</p>
                        <h3 id='total-h3'>Total: </h3>
                        <p>£{orderTotal}</p>
                    </div>
                </div>
                
                <br></br>

                <div id={"notes-txt"+poRequest}> 
                    <h6>Notes:</h6> 
                    <br></br>
                    <textarea id={"notes"+poRequest} name={"notes"+poRequest} rows="5" cols="100"></textarea>
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