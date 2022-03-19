import './CheckOutComponent.css';
import Nerf from './nerf.jpg';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const CheckOutComponent = (props) => {
    const { supplierOrderLines, poRequest, requestTotal } = props;

    console.log(supplierOrderLines);

    return (
        <div className="component table-responsive">
            <div>
                <div className='supplier-txt'>
                    <h3 id='supplier-h3'>Supplier</h3>
                    <div className='checkout-div'>
                        <h3 id='temp-po-txt'>Purchase Request: {poRequest} of {requestTotal}</h3>
                        <h3 id='total-h3'>Total:</h3>
                    </div>
                </div>
                
                <br></br>

                <div id='notes-txt'> 
                    <h6>Notes:</h6> 
                    <br></br>
                    <textarea rows="5" cols="100"></textarea>
                </div>

                <table className='checkout-table'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product name</th>
                            <th>Quantity To Order</th>
                            <th>Unit Cost (Inc. VAT)</th>
                            <th>Line Total</th>
                            <th>Delivery Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id='1'>
                            <td><img src={Nerf} /></td>
                            <td>Nerf N-Strike</td>
                            <td>100</td>
                            <td>£126.84</td>
                            <td>£12684.00</td>
                            <td>7 Buisness days</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckOutComponent;