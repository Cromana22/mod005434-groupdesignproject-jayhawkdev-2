import './PurchaseOrders.css';
import NavBar from './NavBar';

const PurchaseOrders = (props) => {
  const { basketCount } = props;

  return (
    <div className="Purchase Orders">
      <NavBar title='Purchase Orders' basketCount={basketCount} />
      <div className="Orderstable">
        <table id='Orders-table'>
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
            <tr id='1' className='Orders-tr'>
              <td>#QB123456</td>
              <td>Hussnain Zafar</td>
              <td>20/01/2022  10:38AM</td>
              <td>Bitmore Inc.</td>
              <td>£526.40</td>
              <td>Authorised</td>
            </tr>

            <tr id='2' className='Orders-tr'>
              <td>#AC789006</td>
              <td>Hussnain Zafar</td>
              <td>25/01/2022  10:38AM</td>
              <td>Bitmore Inc.</td>
              <td>£126.84</td>
              <td>Unauthorised</td>
            </tr>

            <tr id='3' className='Orders-tr'>
              <td>#TY122156</td>
              <td>Hussnain Zafar</td>
              <td>20/01/2022  10:38AM</td>
              <td>Bitmore Inc.</td>
              <td>£56.48</td>
              <td>Authorised</td>
            </tr>

            <tr id='4' className='Orders-tr'>
              <td>#TY122156</td>
              <td>Hussnain Zafar</td>
              <td>20/01/2022  10:38AM</td>
              <td>Bitmore Inc.</td>
              <td>£6.94</td>
              <td>Unauthorised</td>
            </tr>

            <tr id='5' className='Orders-tr'>
              <td>#TY122156</td>
              <td>Hussnain Zafar</td>
              <td>20/01/2022  10:38AM</td>
              <td>Bitmore Inc.</td>
              <td>£52.99</td>
              <td>Authorised</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchaseOrders;