import './PlacedPo.css';
import NavBar from './NavBar';

const PlacedPo = () => {
    return (
        <div className='page'>
            <NavBar title='Purchase Orders' />
            <div className='tables'>

                <table>
                    <tr>
                        <th>Po Number</th>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th>Status: </th>
                    </tr>
                </table>

                <button>Cancel</button>

                <table>
                    <tr>
                        <th>Staff ID </th>
                        <th>Staff Name </th>
                    </tr>
                    <tr>
                        <td> Php I need you :D </td>
                        <td> Php I need you :D </td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th>Raised Date </th>
                        <th>Authorised By </th>
                        <th>Authorised Date </th>
                        <th>Finance Authorised </th>
                        <th>Finance Date </th>
                    </tr>
                    <tr>
                        <td> Php I need you :D </td>
                        <td> Php I need you :D </td>
                        <td> Php I need you :D </td>
                        <td> Php I need you :D </td>
                        <td> Php I need you :D </td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th>Product Name </th>
                        <th>Order Qty </th>
                        <th>Price pet Unit </th>
                        <th>VAT Rate </th>
                        <th>Line TOT </th>
                        <th>Line VAT </th>
                        <th>Expected Delivery Date </th>
                    </tr>
                    <tr>
                        <td> Hussnain </td>
                        <td> please  </td>
                        <td> style us </td>
                        <td> we want to </td>
                        <td> loook  </td>
                        <td> gooooood </td>
                        <td> Php I need you :D </td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th>Supplier</th>
                    </tr>
                    <tr>
                        <td>Supplie us please</td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th>Sub Total</th>
                        <th>Php</th>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th>VAT Total</th>
                        <th>Php</th>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th>Grand Total</th>
                        <th>Php</th>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th>Notes</th>
                    </tr>
                    <tr>
                        <td>Php</td>
                    </tr>
                </table>

                <button>Authorise</button>

                <button>Reject</button>

                <button>Query</button>

            </div>
        </div>
    );
}

export default PlacedPo;
