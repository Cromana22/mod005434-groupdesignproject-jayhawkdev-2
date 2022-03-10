import './CheckOutComponent.css';
import Nerf from './nerf.jpg';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const CheckOutComponent = () => {
    return (
        <div className="component">
            <box>
                
                <row className='supplier-txt'>
                
                <h3 id='supplier-h3'>Supplier</h3>
                <div className='checkout-div'>
                <h3 id='temp-po-txt'>Temp PO Number: 1</h3>
                <h3 id='total-h3'>Total:</h3>
                </div>
                </row>
                
                <br></br>
                <row id='notes-txt'> 
                    <h6>Notes:</h6> 
                    <br></br>
                    <textarea rows="5" cols="100"></textarea>
                </row>

                <table className='checkout-table'>
                    <tr>
                        <th>Image</th>
                        <th>Product name</th>
                        <th>Quantity To Order</th>
                        <th>Unit Cost (Inc. VAT)</th>
                        <th>Delivery Time</th>
                    </tr>

                    <tr id='1'>
                        <td><img src={Nerf} /></td>
                        <td>Nerf N-Strike</td>
                        <td>100</td>
                        <td>£126.84</td>
                        <td>7 Buisness days</td>
                    </tr>

                    <tr id='2'>
                        <td><img src={Nerf} /></td>
                        <td>LEGO Classic Bricks</td>
                        <td>124</td>
                        <td>£56.48</td>
                        <td>7 Buisness days</td>
                    </tr>

                    <tr id='3'>
                        <td><img src={Nerf} /></td>
                        <td>Polaroid Play 3D Pen</td>
                        <td>90</td>
                        <td>£6.94</td>
                        <td>7 Buisness days</td>
                    </tr>
                </table>
            </box>
        </div>
    );
}

export default CheckOutComponent;