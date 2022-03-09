import './PlacedPo.css';
import NavBar from './NavBar';

const PlacedPo = () => {
    return (
        <div className='page'>
            <NavBar title='Purchase Orders' />
            <div className='tables'>
            <button id='cancel-btn'>Cancel</button>
            
                <table className='po-table'>
                    <tr className='po-table-tr'>
                        <th id='ponumber-th'>Po Number:</th>
                        <th id='ponumber-th-1'> #123456789</th>
                    </tr>
                </table>

                <table className='postatus'>
                    <tr>
                        <th id='postatus-th'>Status: </th>
                        <th id='postatus-th'>Pending</th>
                    </tr>
                </table>
                <br></br>

                <table className='staff-table'>
                    <tr className='staff-tr'>
                        <th>Staff ID </th>
                        <th>Staff Name </th>
                    </tr>
                    <tr className='staff-rows'>
                        <td> Php I need you :D </td>
                        <td> Php I need you :D </td>
                    </tr>
                </table>

                <table className='raised-table'>
                    <tr className='raised-col-tr'>
                        <th>Raised Date </th>
                        <th>Authorised By </th>
                        <th>Authorised Date </th>
                        <th>Finance Authorised </th>
                        <th>Finance Date </th>
                    </tr>
                    <tr className='raised-row-tr'>
                        <td> Php I need you :D </td>
                        <td> Php I need you :D </td>
                        <td> Php I need you :D </td>
                        <td> Php I need you :D </td>
                        <td> Php I need you :D </td>
                    </tr>
                </table>
                <br></br>
                <div className='container-div'>
                <table className='product-table'>
                    <tr className='product-col'>
                        <th>Product Name </th>
                        <th>Order Qty </th>
                        <th>Price pet Unit </th>
                        <th>VAT Rate </th>
                        <th>Line TOT </th>
                        <th>Line VAT </th>
                        <th>Expected Delivery Date </th>
                    </tr>
                    <tr className='product-rows'>
                        <td> Hussnain </td>
                        <td> please  </td>
                        <td> style us </td>
                        <td> we want to </td>
                        <td> loook  </td>
                        <td> gooooood </td>
                        <td> Php I need you :D </td>
                    </tr>

                    <tr className='product-rows'>
                        <td> Hussnain </td>
                        <td> please  </td>
                        <td> style us </td>
                        <td> we want to </td>
                        <td> loook  </td>
                        <td> gooooood </td>
                        <td> Php I need you :D </td>
                    </tr>

                    <tr className='product-rows'>
                        <td> Hussnain </td>
                        <td> please  </td>
                        <td> style us </td>
                        <td> we want to </td>
                        <td> loook  </td>
                        <td> gooooood </td>
                        <td> Php I need you :D </td>
                    </tr>

                    <tr className='product-rows'>
                        <td> Hussnain </td>
                        <td> please  </td>
                        <td> style us </td>
                        <td> we want to </td>
                        <td> loook  </td>
                        <td> gooooood </td>
                        <td> Php I need you :D </td>
                    </tr>

                    <tr className='product-rows'>
                        <td> Hussnain </td>
                        <td> please  </td>
                        <td> style us </td>
                        <td> we want to </td>
                        <td> loook  </td>
                        <td> gooooood </td>
                        <td> Php I need you :D </td>
                    </tr>

                </table>
                
                
                
                
                <br></br>
                
                <table className='subtotal-table'>
                    <tr className='subtotal-tr'>
                        <th id='subtotal-th'>Sub Total</th>
                        <th id='subtotal-th-1'>Php</th>
                    </tr>
                </table>
                <br></br>
                <table className='vat-table'>
                    <tr className='vat-tr'>
                        <th id='vat-th'>VAT Total</th>
                        <th id='vat-th-1'>Php</th>
                    </tr>
                </table>

                <table className='vat-table'>
                    <tr className='vat-tr'>
                        <th id='vat-th'>Grand Total</th>
                        <th id='vat-th-1'>Php</th>
                    </tr>
                </table>

                <table className='subtotal-table'>
                    <tr className='subtotal-tr'>
                        <th id='vat-th'>Notes</th>
                    </tr>
                    <tr className='subtotal-tr'>
                        <td id='vat-th-1'>Php</td>
                    </tr>
                </table>
                </div>


                <table className='supplier-table'>
                    <tr className='supplier-col'>
                        <th>Supplier</th>
                    </tr>
                    <tr className='supplier-rows'>
                        <td>Supplie us please</td>
                    </tr>
                </table>
                       
                
                

            </div>
            <button>Authorise</button>

                <button>Reject</button>

                <button>Query</button>
        </div>
        
    );
}

export default PlacedPo;
