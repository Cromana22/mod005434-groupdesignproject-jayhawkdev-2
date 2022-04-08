import './PlacedPo.css';
import NavBar from './NavBar';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';
import { useParams } from 'react-router';
import PlacedPoProductRow from './PlacedPoProductRow';
import { Link } from 'react-router-dom';

function authPo(poNumber) {
    window.location.href = phpUrl+"/authorisePo.php?poNumber="+poNumber;
}

function rejectPo(poNumber) {
    window.location.href = phpUrl+"/rejectPo.php?poNumber="+poNumber;
}

function cancelPo(poNumber) {
    window.location.href = phpUrl+"/cancelPo.php?poNumber="+poNumber;
}

function queryPo(poNumber) {
    let query = window.prompt("Please enter your query:");
    window.location.href = phpUrl+"/queryPo.php?poNumber="+poNumber+"&notes="+query;
}

function deletePo(poNumber) {
    if (window.confirm("Are you sure you want to delete this purchase order? This is irreversible.") == true) { 
        window.location.href = phpUrl+"/deletePo.php?poNumber="+poNumber;
    }
}

const PlacedPo = (props) => {
    const { basketCount, loggedin, accessLevel, staffIdButton } = props;
    if (loggedin !== 'Y') { window.location.replace(webUrl)};

    let {id} = useParams();
    let { response }  = useFetch(phpUrl+'/getPurchaseOrderDetail.php?poNumber='+id);

    let poNumber = "";
    let poStatus = "";
    let staffId = "";
    let staffName = "";
    let raisedDate = "";
    let authManagerName = "";
    let authManagerDate = "";
    let authFinanceName = "";
    let authFinanceDate = "";
    let subTotal = "";
    let vatTotal = "";
    let grandTotal = "";
    let notes = "";
    let supplierName = "";
    let supplierAddress1 = "";
    let supplierAddress2 = "";
    let supplierTown = "";
    let supplierCountry = "";
    let supplierPostcode = "";
    let supplierTelephone = "";
    let supplierEmail = "";
    let productLineRows = [];

    if (response !== null) {
        const supplier = response['supplier'];
        const productLines = response['productLines'];

        poNumber = supplier[0].poNumber;
        poStatus = supplier[0].status;
        staffId = supplier[0].staffId;
        staffName = supplier[0].staffName;
        raisedDate = supplier[0].raisedDate;
        authManagerName = supplier[0].authorisedByName;
        authManagerDate = supplier[0].authorisedDate;
        authFinanceName = supplier[0].financeAuthorisedName;
        authFinanceDate = supplier[0].financeDate;
        subTotal = supplier[0].subTotal;
        vatTotal = supplier[0].vatTotal;
        grandTotal = supplier[0].grandTotal;
        notes = supplier[0].notes;
        supplierName = supplier[0].supplierName;
        supplierAddress1 = supplier[0].address1;
        supplierAddress2 = supplier[0].address2;
        supplierTown = supplier[0].town;
        supplierCountry = supplier[0].country;
        supplierPostcode = supplier[0].postcode;
        supplierTelephone = supplier[0].telephone;
        supplierEmail = supplier[0].email;

        let rowCount = 1;
        productLines.forEach(productLine => {
            productLineRows.push(
                <PlacedPoProductRow key={rowCount} product={productLine} finalAuthDate={authFinanceDate} />
            );
            rowCount++;
        });


    }

    return (
        <div className='page'>
            <NavBar title='Purchase Order Detail' basketCount={basketCount} accessLevel={accessLevel} />
            <div className='tables table-responsive'>
                <div id="mainrow">
                    <div className="container-left">
                        <table className='po-table'>
                            <thead>
                                <tr className='po-table-tr'>
                                    <th id='ponumber-th'>Po Number:</th>
                                    <th id='ponumber-th-1'>{poNumber}</th>
                                </tr>
                            </thead>
                        </table>

                        <table className='postatus'>
                            <thead>
                                <tr>
                                    <th id='postatus-th'>Status:</th>
                                    <th id='postatus-th'>{poStatus}</th>
                                </tr>
                            </thead>
                        </table>

                        <br></br>

                        <div className='container-1'>
                            <table className='staff-table'>
                                <thead>
                                    <tr className='staff-tr'>
                                        <th>Staff ID</th>
                                        <th >Staff Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='staff-rows'>
                                        <td>{staffId}</td>
                                        <td>{staffName}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className='raised-table'>
                                <thead>
                                    <tr className='raised-col-tr'>
                                        <th>Raised Date</th>
                                        <th>Authorised By</th>
                                        <th>Authorised Date</th>
                                        <th>Finance Authorised</th>
                                        <th>Finance Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='raised-row-tr'>
                                        <td>{raisedDate}</td>
                                        <td>{authManagerName}</td>
                                        <td>{authManagerDate}</td>
                                        <td>{authFinanceName}</td>
                                        <td>{authFinanceDate}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <br></br>

                        <div className='container-div'>
                            <table className='product-table'>
                                <thead>
                                    <tr className='product-col'>
                                        <th>Product Name</th>
                                        <th>Order Qty</th>
                                        <th>Unit Price</th>
                                        <th>VAT Rate</th>
                                        <th>Line Total</th>
                                        <th>Line Total VAT</th>
                                        <th>Expected Delivery Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productLineRows}
                                </tbody>
                            </table>

                            <br></br>
                            
                            <table className='subtotal-table'>
                                <thead>
                                    <tr className='subtotal-tr'>
                                        <th id='subtotal-th'>Sub-Total</th>
                                        <th id='subtotal-th-1'>£{subTotal}</th>
                                    </tr>
                                </thead>
                            </table>

                            <br></br>

                            <table className='vat-table'>
                                <thead>
                                    <tr className='vat-tr'>
                                        <th id='vat-th'>VAT Total</th>
                                        <th id='vat-th-1'>£{vatTotal}</th>
                                    </tr>
                                </thead>
                            </table>

                            <table className='grandtotal-table'>
                                <thead>
                                    <tr className='grandtotal-tr'>
                                        <th id='grandtotal-th'>Grand Total</th>
                                        <th id='grandtotal-th-1'>£{grandTotal}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                    <div className='container-right'>
                        <table className='supplier-table'>
                            <thead>
                                <tr className='supplier-col'>
                                    <th>Supplier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='supplier-rows'>
                                    <td>
                                        {supplierName} ({supplierCountry})<br />
                                        {supplierAddress1}<br />
                                        {supplierAddress2}<br />
                                        {supplierTown}, {supplierPostcode} <br /><br />
                                        Telephone: {supplierTelephone}<br />
                                        Email: {supplierEmail}<br />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <table className='notes-table'>
                            <thead>
                                <tr className='notes-col'>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='notes-rows'>
                                    <td>{notes}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>    
                </div>
            </div>

            <div className='buttons'>
                {
                    accessLevel !== "Sales" &&
                    <button id='authorise-btn' onClick={() => authPo(poNumber)}>Authorise</button>
                }
                {
                    accessLevel !== "Sales" &&
                    <button id='reject-btn' onClick={() => rejectPo(poNumber)}>Reject</button>
                }
                {
                    <button id='query-btn' onClick={() => queryPo(poNumber)}>Query</button>
                }
            </div>
            <div className='more-buttons'>
                {
                    (accessLevel == "Manager" || accessLevel == "Finance") &&
                    <button id='delete-btn' onClick={() => deletePo(poNumber)}>Delete</button>
                }
                
                {
                    staffIdButton == staffId &&
                    <button id='withdraw-btn' onClick={() => cancelPo(poNumber)}>Withdraw PO</button>
                }
                <Link to="/purchaseorders" ><button id='back-btn'>Back</button></Link>
            </div>
            
        </div>
        
    );
}

export default PlacedPo;
