import './PurchaseOrders.css';
import NavBar from './NavBar';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';
import PurchaseOrdersTableRow from './PurchaseOrdersTableRow';

const PurchaseOrders = (props) => {
  const { basketCount } = props;

  let rows = [];
  let rowCount = 1;
  let { response } = useFetch(phpUrl + '/poTable.php');

  if (response !== null) {
    response.forEach(PurchaseOrder => {
      rows.push(
        <PurchaseOrdersTableRow key={rowCount} details={PurchaseOrder} rowCount={rowCount} />
      );
      rowCount++;
    });
  };

  return (
    <div className="purchase-orders">
      <NavBar title='Purchase Orders' basketCount={basketCount} />
      <div className="Orderstable table-responsive">
        <table id='Orders-table' className='table'>
          <thead>
            <tr className='Orders-tr'>
              <th>PO Number</th>
              <th>Raised By</th>
              <th>Raised Date</th>
              <th>Supplier</th>
              <th>Total Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchaseOrders;